import React, { useState, useEffect } from 'react';
import { 
  X, 
  Settings, 
  Key, 
  RotateCcw, 
  Database, 
  Trash2, 
  Clock, 
  ShieldAlert, 
  ChevronRight, 
  Save, 
  FileText 
} from 'lucide-react';
import * as GameStorage from '../game/GameStorage';

interface SettingsMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onKeyBindingsChange: (keys: GameStorage.KeyBindings) => void;
  renderDistance: number; // 20, 35, 50, 999
  onRenderDistanceChange: (dist: number) => void;
}

export default function SettingsMenu({ 
  isOpen, 
  onClose, 
  onKeyBindingsChange, 
  renderDistance, 
  onRenderDistanceChange 
}: SettingsMenuProps) {
  const [bindings, setBindings] = useState<GameStorage.KeyBindings>(GameStorage.getSavedKeyBindings());
  const [activeBindingField, setActiveBindingField] = useState<keyof GameStorage.KeyBindings | null>(null);
  const [history, setHistory] = useState<GameStorage.GameRunRecord[]>([]);
  const [highScore, setHighScore] = useState<number>(0);
  const [cookiesInfo, setCookiesInfo] = useState<string>('');
  const [sessionInfo, setSessionInfo] = useState<number>(0);

  // Load persistent stats
  useEffect(() => {
    if (isOpen) {
      setHighScore(GameStorage.getSavedHighScore());
      GameStorage.getRunHistory().then(records => {
        setHistory(records);
      });
      
      // Update session info: how many times settings has been opened in current session
      const count = parseInt(GameStorage.getSessionFlag('settings_opens') || '0', 10) + 1;
      GameStorage.setSessionFlag('settings_opens', count.toString());
      setSessionInfo(count);

      // Cookies metadata
      const lastPlay = GameStorage.getCookie('highest_slain_beasts') || '0';
      setCookiesInfo(lastPlay);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  // Handle key capture for rebinding
  const handleRebindClick = (field: keyof GameStorage.KeyBindings) => {
    setActiveBindingField(field);
  };

  const handleKeyDownCapture = (e: React.KeyboardEvent) => {
    if (!activeBindingField) return;
    e.preventDefault();
    e.stopPropagation();

    const pressedKey = e.key === ' ' ? 'Space' : e.key;
    const keyToSave = pressedKey === 'Space' ? ' ' : pressedKey.toLowerCase();

    const newBindings = {
      ...bindings,
      [activeBindingField]: keyToSave,
    };

    setBindings(newBindings);
    GameStorage.saveKeyBindings(newBindings);
    onKeyBindingsChange(newBindings);
    setActiveBindingField(null);
  };

  const handleResetDefaults = () => {
    const defaults: GameStorage.KeyBindings = {
      forward: 'w',
      backward: 's',
      left: 'a',
      right: 'd',
      jump: ' ',
      attack: 'f',
      heal: 'h',
    };
    setBindings(defaults);
    GameStorage.saveKeyBindings(defaults);
    onKeyBindingsChange(defaults);
    setActiveBindingField(null);
  };

  const handleClearRecords = async () => {
    if (confirm('Are you sure you want to wipe player run history logs from IndexedDB?')) {
      await GameStorage.clearRunHistory();
      setHistory([]);
    }
  };

  const formatSecs = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}m ${s}s`;
  };

  return (
    <div 
      id="settings_modal"
      className="absolute inset-0 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 z-50 animate-fade-in"
      onKeyDown={handleKeyDownCapture}
      tabIndex={0}
    >
      <div className="max-w-3xl w-full bg-slate-900 border border-slate-800/80 p-6 rounded-2xl shadow-2xl flex flex-col max-h-[90%] text-slate-100 overflow-hidden">
        
        {/* HEADER */}
        <header className="flex items-center justify-between pb-4 border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-2">
            <Settings className="w-5 h-5 text-pink-500 animate-spin-slow" />
            <h2 className="text-xl font-bold tracking-tight">Citadel Game Settings</h2>
          </div>
          <button 
            id="btn_close_settings"
            onClick={onClose}
            className="p-1 rounded bg-slate-800 hover:bg-slate-700 transition cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </header>

        {/* CONTAINER SCROLL */}
        <div className="flex-1 overflow-y-auto space-y-6 mt-4 pr-1">
          
          {/* KEYBINDINGS PANEL */}
          <section className="bg-slate-950/50 p-4 rounded-xl border border-slate-800/60">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xs font-bold tracking-widest text-slate-400 uppercase flex items-center gap-1.5 font-mono">
                <Key className="w-3.5 h-3.5 text-indigo-400" /> Key Bindings Configuration
              </h3>
              <button 
                id="btn_reset_keys"
                onClick={handleResetDefaults}
                className="text-[11px] font-bold text-indigo-400 flex items-center gap-1 hover:text-indigo-300 transition"
              >
                <RotateCcw className="w-3 h-3" /> Reset Defaults
              </button>
            </div>
            
            {activeBindingField && (
              <div className="mb-3 p-2 text-center text-xs bg-indigo-950/40 border border-indigo-700/50 text-indigo-300 rounded font-mono animate-pulse">
                Press any key to bind to <span className="font-bold uppercase text-white">{activeBindingField}</span>...
              </div>
            )}

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {(Object.keys(bindings) as Array<keyof GameStorage.KeyBindings>).map((field) => {
                const isSelected = activeBindingField === field;
                const keyVal = bindings[field];
                const displayKey = keyVal === ' ' ? 'Spacebar' : keyVal.toUpperCase();

                return (
                  <div 
                    key={field} 
                    className="flex items-center justify-between p-2 bg-slate-900 border border-slate-800 rounded-lg text-xs"
                  >
                    <span className="text-slate-400 capitalize font-medium">{field}</span>
                    <button
                      id={`btn_rebind_${field}`}
                      onClick={() => handleRebindClick(field)}
                      className={`px-2 py-1 rounded font-mono text-[11px] font-bold min-w-[70px] uppercase transition ${
                        isSelected 
                          ? 'bg-rose-500 text-white ring-2 ring-rose-300' 
                          : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700'
                      }`}
                    >
                      {displayKey || 'None'}
                    </button>
                  </div>
                );
              })}
            </div>
          </section>

          {/* RESOURCE CULLING SETTINGS */}
          <section className="bg-slate-950/50 p-4 rounded-xl border border-slate-800/60">
            <h3 className="text-xs font-bold tracking-widest text-slate-400 uppercase flex items-center gap-1.5 font-mono mb-2">
              <ShieldAlert className="w-3.5 h-3.5 text-emerald-400" /> Resource Optimizer (Performance)
            </h3>
            <p className="text-[11px] text-slate-400 leading-relaxed mb-3">
              Adjust render bounds dynamically. Hides/Culls distant static geometry and AI elements to minimize draw calls and maximize local framerates.
            </p>
            
            <div className="flex flex-wrap gap-2">
              {[
                { label: 'Close Check (20m culling)', value: 20 },
                { label: 'Optimized (35m culling)', value: 35 },
                { label: 'Far View (50m culling)', value: 50 },
                { label: 'Infinite (No culling)', value: 999 }
              ].map((opt) => (
                <button
                  key={opt.value}
                  id={`btn_render_dist_${opt.value}`}
                  onClick={() => onRenderDistanceChange(opt.value)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold font-mono transition cursor-pointer ${
                    renderDistance === opt.value
                      ? 'bg-emerald-600 border border-emerald-500 text-white'
                      : 'bg-slate-900 border border-slate-800/80 text-slate-400 hover:bg-slate-800'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </section>

          {/* MULTI_STORAGE METADATA OVERVIEW */}
          <section className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="bg-slate-900/60 p-3.5 rounded-xl border border-slate-800/50 text-xs">
              <span className="text-slate-500 font-mono text-[9px] block uppercase tracking-wider mb-1">LOCAL STORAGE INDEX</span>
              <div className="text-slate-300 font-bold">High Score: <span className="text-pink-400">{highScore} Slain</span></div>
              <p className="text-[10px] text-slate-500 mt-1">Saves key configurations & peak campaign records securely.</p>
            </div>
            <div className="bg-slate-900/60 p-3.5 rounded-xl border border-slate-800/50 text-xs">
              <span className="text-slate-500 font-mono text-[9px] block uppercase tracking-wider mb-1">SESSION STORAGE</span>
              <div className="text-slate-300 font-bold">Opened Menu: <span className="text-indigo-400">{sessionInfo} times</span></div>
              <p className="text-[10px] text-slate-500 mt-1">Tracks contextual session progress flags and active level cache.</p>
            </div>
            <div className="bg-slate-900/60 p-3.5 rounded-xl border border-slate-800/50 text-xs">
              <span className="text-slate-500 font-mono text-[9px] block uppercase tracking-wider mb-1">COMPLIANCED WEB COOKIES</span>
              <div className="text-slate-300 font-bold">Cookie Record: <span className="text-emerald-400">{cookiesInfo || '0'} Hounds</span></div>
              <p className="text-[10px] text-slate-500 mt-1">Persists system configurations across domain changes.</p>
            </div>
          </section>

          {/* INDEXED DB HISTORY MODULE */}
          <section className="bg-slate-950/50 p-4 rounded-xl border border-slate-800/60">
            <div className="flex items-center justify-between mb-3.5">
              <h3 className="text-xs font-bold tracking-widest text-slate-400 uppercase flex items-center gap-1.5 font-mono">
                <Database className="w-3.5 h-3.5 text-teal-400" /> Historic Run Logs (IndexedDB)
              </h3>
              {history.length > 0 && (
                <button 
                  id="btn_clear_history"
                  onClick={handleClearRecords}
                  className="text-[10px] text-red-400 hover:text-red-300 font-bold flex items-center gap-1 transition"
                >
                  <Trash2 className="w-3 h-3" /> Clear History
                </button>
              )}
            </div>

            {history.length === 0 ? (
              <div className="text-center py-6 border border-dashed border-slate-800 rounded-lg text-slate-500 text-xs">
                No game summaries stored yet. Reach victory or fall inside the citadel to populate log records in IndexedDB!
              </div>
            ) : (
              <div className="max-h-48 overflow-y-auto border border-slate-800 rounded-lg">
                <table className="w-full text-left font-mono text-[11px] text-slate-300 border-collapse">
                  <thead className="bg-slate-900 text-slate-400 border-b border-slate-800 sticky top-0">
                    <tr>
                      <th className="p-2.5 font-bold">DATE</th>
                      <th className="p-2.5 font-bold">OUTCOME</th>
                      <th className="p-2.5 font-bold">SLAIN</th>
                      <th className="p-2.5 font-bold">DURATION</th>
                    </tr>
                  </thead>
                  <tbody>
                    {history.map((run, idx) => (
                      <tr key={idx} className="border-b border-slate-800/50 hover:bg-slate-800/35">
                        <td className="p-2.5 text-[10px] whitespace-nowrap">
                          {new Date(run.timestamp).toLocaleString(undefined, {
                            month: 'short',
                            day: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit',
                          })}
                        </td>
                        <td className="p-2.5">
                          <span className={`px-1.5 py-0.5 rounded font-bold text-[9px] ${
                            run.outcome === 'VICTORY' 
                              ? 'bg-emerald-950 text-emerald-400 ring-1 ring-emerald-800' 
                              : 'bg-red-950 text-red-400 ring-1 ring-red-800'
                          }`}>
                            {run.outcome}
                          </span>
                        </td>
                        <td className="p-2.5 text-center">{run.enemiesDefeated}</td>
                        <td className="p-2.5">{formatSecs(run.durationSeconds)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </section>

        </div>

        {/* FOOTER ACTION */}
        <footer className="pt-4 border-t border-slate-800 flex justify-end shrink-0 gap-2">
          <button
            id="btn_settings_ok"
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-pink-600 hover:bg-pink-500 active:scale-95 transition text-white font-bold text-xs cursor-pointer shadow-lg tracking-wide flex items-center gap-1.5"
          >
            <Save className="w-3.5 h-3.5" /> Save and Close
          </button>
        </footer>

      </div>
    </div>
  );
}
