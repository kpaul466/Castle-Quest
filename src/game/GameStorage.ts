// Custom high-performance, multi-layered frontend storage helper for Castle Knight 3D
// Integrates LocalStorage, SessionStorage, Cookies, and IndexedDB

export interface KeyBindings {
  forward: string;
  backward: string;
  left: string;
  right: string;
  jump: string;
  attack: string;
  heal: string;
}

export interface GameRunRecord {
  id?: number;
  timestamp: string;
  outcome: 'VICTORY' | 'GAMEOVER' | 'ACTIVE';
  enemiesDefeated: number;
  potionsRemaining: number;
  durationSeconds: number;
}

const DEFAULT_KEYS: KeyBindings = {
  forward: 'w',
  backward: 's',
  left: 'a',
  right: 'd',
  jump: ' ',
  attack: 'f',
  heal: 'h',
};

// --- COOKIE HELPER ---
export function setCookie(name: string, value: string, days = 7) {
  const d = new Date();
  d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = 'expires=' + d.toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)};${expires};path=/;SameSite=Strict`;
}

export function getCookie(name: string): string {
  const cname = name + '=';
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(cname) === 0) {
      return c.substring(cname.length, c.length);
    }
  }
  return '';
}

// --- INDEXED DB ENGINE ---
const DB_NAME = 'CastleKnight3D_Database';
const DB_VERSION = 1;
const STORE_NAME = 'run_history';

export function initIndexedDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onerror = () => {
      console.error('IndexedDB opening error');
      reject(request.error);
    };

    request.onsuccess = () => {
      resolve(request.result);
    };

    request.onupgradeneeded = (event) => {
      const db = request.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'id', autoIncrement: true });
      }
    };
  });
}

export function saveRunHistory(record: GameRunRecord): Promise<void> {
  return initIndexedDB()
    .then((db) => {
      return new Promise<void>((resolve, reject) => {
        const transaction = db.transaction([STORE_NAME], 'readwrite');
        const store = transaction.objectStore(transaction.objectStoreNames[0]);
        const request = store.add(record);

        request.onsuccess = () => resolve();
        request.onerror = () => reject(request.error);
      });
    })
    .catch((err) => {
      console.error('Failed to save log to IndexedDB:', err);
    });
}

export function getRunHistory(): Promise<GameRunRecord[]> {
  return initIndexedDB()
    .then((db) => {
      return new Promise<GameRunRecord[]>((resolve, reject) => {
        const transaction = db.transaction([STORE_NAME], 'readonly');
        const store = transaction.objectStore(STORE_NAME);
        const request = store.getAll();

        request.onsuccess = () => {
          // Sort descending by timestamp
          const records = request.result as GameRunRecord[];
          records.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
          resolve(records);
        };
        request.onerror = () => reject(request.error);
      });
    })
    .catch((err) => {
      console.error('Failed to fetch logs from IndexedDB:', err);
      return [];
    });
}

export function clearRunHistory(): Promise<void> {
  return initIndexedDB().then((db) => {
    return new Promise<void>((resolve, reject) => {
      const transaction = db.transaction([STORE_NAME], 'readwrite');
      const store = transaction.objectStore(STORE_NAME);
      const request = store.clear();

      request.onsuccess = () => resolve();
      request.onerror = () => reject(request.error);
    });
  });
}

// --- LOCAL STORAGE WRAPPER ---
export function getSavedKeyBindings(): KeyBindings {
  try {
    const raw = localStorage.getItem('castle_knight_keys');
    if (raw) {
      const parsed = JSON.parse(raw);
      // Ensure all keys are populated
      return { ...DEFAULT_KEYS, ...parsed };
    }
  } catch (e) {
    console.error('Error reading keybindings from LocalStorage', e);
  }
  return DEFAULT_KEYS;
}

export function saveKeyBindings(bindings: KeyBindings) {
  try {
    localStorage.setItem('castle_knight_keys', JSON.stringify(bindings));
  } catch (e) {
    console.error('Error saving keybindings to LocalStorage', e);
  }
}

export function getSavedHighScore(): number {
  try {
    const score = localStorage.getItem('castle_knight_highscore');
    return score ? parseInt(score, 10) : 0;
  } catch {
    return 0;
  }
}

export function saveHighScore(score: number) {
  try {
    const current = getSavedHighScore();
    if (score > current) {
      localStorage.setItem('castle_knight_highscore', score.toString());
      // Cookie also tracks high score for fun
      setCookie('highest_slain_beasts', score.toString(), 30);
    }
  } catch (e) {
    console.error('Error saving highscore', e);
  }
}

// --- SESSION STORAGE WRAPPER ---
export function setSessionFlag(key: string, value: string) {
  try {
    sessionStorage.setItem(`castle_session_${key}`, value);
  } catch (e) {
    console.error('Error writing to SessionStorage', e);
  }
}

export function getSessionFlag(key: string): string | null {
  try {
    return sessionStorage.getItem(`castle_session_${key}`);
  } catch {
    return null;
  }
}
