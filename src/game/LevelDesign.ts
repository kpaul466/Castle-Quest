import * as THREE from 'three';
import { createWallTexture, createRoofTexture } from './CastleAssets';

export interface CollisionBox {
  min: THREE.Vector3;
  max: THREE.Vector3;
  name: string;
}

export interface SpawnPoint {
  id: string;
  type: 'GARGOYLE' | 'SHADOW_HOUND' | 'STONE_GOLEM';
  position: THREE.Vector3;
  patrolWaypoints?: THREE.Vector3[];
}

export interface TrapSpawnPoint {
  id: string;
  type: 'PENDULUM' | 'PRESSURE_PLATE';
  position: THREE.Vector3;
}

export interface PotionSpawn {
  id: string;
  position: THREE.Vector3;
  taken: boolean;
}

// Global collision list
export const levelCollisionBoxes: CollisionBox[] = [];

// Dynamic Level Spawns
export const enemySpawns: SpawnPoint[] = [
  // Roof Gargoyles
  {
    id: 'gargoyle_1',
    type: 'GARGOYLE',
    position: new THREE.Vector3(-18, 12.5, -18), // On the library tiled roof top
  },
  {
    id: 'gargoyle_2',
    type: 'GARGOYLE',
    position: new THREE.Vector3(18, 12.5, -18), // On the forge tiled roof top
  },
  // Dungeon Shadow Hounds
  {
    id: 'hound_1',
    type: 'SHADOW_HOUND',
    position: new THREE.Vector3(-24, 0, -10),
    patrolWaypoints: [
      new THREE.Vector3(-24, 0, -10),
      new THREE.Vector3(-24, 0, -25),
      new THREE.Vector3(-14, 0, -25),
      new THREE.Vector3(-14, 0, -10),
    ]
  },
  // Library Shadow Hound
  {
    id: 'hound_2',
    type: 'SHADOW_HOUND',
    position: new THREE.Vector3(-20, 0, 15),
    patrolWaypoints: [
      new THREE.Vector3(-20, 0, 15),
      new THREE.Vector3(-12, 0, 15),
      new THREE.Vector3(-12, 0, 25),
      new THREE.Vector3(-20, 0, 25),
    ]
  },
  // Throne Room Stone Golem Boss
  {
    id: 'golem_boss',
    type: 'STONE_GOLEM',
    position: new THREE.Vector3(0, 0, -25), // Guarding the throne and high tower base
  }
];

export const trapSpawns: TrapSpawnPoint[] = [
  // Pendulums in narrow corridors leading to the Throne Room
  {
    id: 'pendulum_1',
    type: 'PENDULUM',
    position: new THREE.Vector3(-8, 5, -15),
  },
  {
    id: 'pendulum_2',
    type: 'PENDULUM',
    position: new THREE.Vector3(8, 5, -15),
  },
  // Pressure plates in the battlements and Dungeon entrance
  {
    id: 'plate_corridor',
    type: 'PRESSURE_PLATE',
    position: new THREE.Vector3(-15, 0, -5), // Dungeon corridor entry
  },
  {
    id: 'plate_roof_secret',
    type: 'PRESSURE_PLATE',
    position: new THREE.Vector3(10, 0, 20), // Near the forge
  }
];

export const potionSpawns: PotionSpawn[] = [
  { id: 'pot_dungeon', position: new THREE.Vector3(-28, 0.5, -28), taken: false },
  { id: 'pot_library', position: new THREE.Vector3(-28, 0.5, 28), taken: false },
  { id: 'pot_forge', position: new THREE.Vector3(28, 0.5, 22), taken: false },
  { id: 'pot_tower_middle', position: new THREE.Vector3(26, 12.5, -26), taken: false },
];

export function buildCompleteCastle(scene: THREE.Scene): CollisionBox[] {
  const collisions: CollisionBox[] = [];

  // Materials
  const stoneTex = createWallTexture();
  const roofTex = createRoofTexture();
  
  const stoneMat = new THREE.MeshStandardMaterial({
    map: stoneTex,
    roughness: 0.9,
    bumpScale: 0.1,
  });
  
  const roofMat = new THREE.MeshStandardMaterial({
    map: roofTex,
    roughness: 0.8,
  });

  const pathMat = new THREE.MeshStandardMaterial({
    color: 0x4b5563, // Gravel pathways
    roughness: 1.0,
  });

  const soilMat = new THREE.MeshStandardMaterial({
    color: 0x451a03, // Muddy soil
    roughness: 1.0,
  });

  const ironBarMat = new THREE.MeshStandardMaterial({
    color: 0x1f2937,
    metalness: 0.8,
    roughness: 0.4
  });

  const goldMat = new THREE.MeshStandardMaterial({
    color: 0xeab308,
    metalness: 0.8,
    roughness: 0.2
  });

  const woodMat = new THREE.MeshStandardMaterial({
    color: 0x78350f,
    roughness: 0.9
  });

  // Helper function to add static objects and generate collision box
  function createStaticBlock(
    name: string,
    w: number,
    h: number,
    d: number,
    x: number,
    y: number,
    z: number,
    material: THREE.Material,
    castShadow = true,
    receiveShadow = true
  ) {
    const geo = new THREE.BoxGeometry(w, h, d);
    const mesh = new THREE.Mesh(geo, material);
    mesh.position.set(x, y, z);
    mesh.castShadow = castShadow;
    mesh.receiveShadow = receiveShadow;
    scene.add(mesh);

    // Collision Box calculation
    const halfW = w / 2;
    const halfH = h / 2;
    const halfD = d / 2;
    
    collisions.push({
      min: new THREE.Vector3(x - halfW, y - halfH, z - halfD),
      max: new THREE.Vector3(x + halfW, y + halfH, z + halfD),
      name,
    });
  }

  // 1. BOUNDARY STONE CASTLE WALLS (Giant enclosing walls)
  // Back Wall
  createStaticBlock('Wall_Back', 80, 10, 4, 0, 5, -40, stoneMat);
  // Front Wall (with Castle Archway Entrance)
  createStaticBlock('Wall_Front_Left', 30, 10, 4, -25, 5, 40, stoneMat);
  createStaticBlock('Wall_Front_Right', 30, 10, 4, 25, 5, 40, stoneMat);
  createStaticBlock('Wall_Front_Arch_Top', 20, 4, 4, 0, 10, 40, stoneMat); // Top doorway beam

  // Left & Right Walls
  createStaticBlock('Wall_Left', 4, 10, 84, -40, 5, 0, stoneMat);
  createStaticBlock('Wall_Right', 4, 10, 84, 40, 5, 0, stoneMat);

  // 2. CORNER WATCHTOWERS (4 grand defensive towers)
  function createCastleTower(x: number, z: number) {
    const towerGeo = new THREE.CylinderGeometry(4.5, 4.5, 16, 12);
    const tower = new THREE.Mesh(towerGeo, stoneMat);
    tower.position.set(x, 8, z);
    tower.castShadow = true;
    tower.receiveShadow = true;
    scene.add(tower);

    // Tower Battlement top walkway rim
    const topGeo = new THREE.CylinderGeometry(5.2, 5.2, 2, 12);
    const top = new THREE.Mesh(topGeo, stoneMat);
    top.position.set(x, 17, z);
    scene.add(top);

    // Tower Cone Roof
    const coneGeo = new THREE.ConeGeometry(5.4, 5, 12);
    const cone = new THREE.Mesh(coneGeo, roofMat);
    cone.position.set(x, 20.5, z);
    cone.castShadow = true;
    scene.add(cone);

    // Collisions
    collisions.push({
      min: new THREE.Vector3(x - 5, 0, z - 5),
      max: new THREE.Vector3(x + 5, 18, z + 5),
      name: 'Tower_Solid',
    });
  }

  createCastleTower(-38, -38);
  createCastleTower(38, -38);
  createCastleTower(-38, 38);
  createCastleTower(38, 38);

  // 3. INNER ROOMS - PARTITIONS & FURNISHINGS

  // A. THE DUNGEON (Lower dark Left-Back corner)
  // Partition stone arch walls
  createStaticBlock('Dungeon_Wall_Z', 2, 8, 18, -15, 4, -28, stoneMat);
  createStaticBlock('Dungeon_Wall_X', 22, 8, 2, -25, 4, -18, stoneMat);
  
  // Jail Cells (Metal Bars)
  for (let z = -28; z >= -38; z -= 3) {
    const barGeo = new THREE.CylinderGeometry(0.06, 0.06, 6, 6);
    const bar = new THREE.Mesh(barGeo, ironBarMat);
    bar.position.set(-15, 3, z);
    scene.add(bar);
  }
  collisions.push({
    min: new THREE.Vector3(-15.2, 0, -38),
    max: new THREE.Vector3(-14.8, 6, -24),
    name: 'Jail_Bars',
  });

  // Dungeon Torture Bed (skeletal prop location)
  createStaticBlock('Dungeon_Table', 2.2, 0.8, 4, -28, 0.4, -26, woodMat);

  // Spooky Dungeon Skeleton representation on the floor
  const ribBox = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.1, 0.3), new THREE.MeshStandardMaterial({ color: 0xe5e7eb }));
  ribBox.position.set(-28, 0.85, -26);
  scene.add(ribBox);
  
  const skull = new THREE.Mesh(new THREE.SphereGeometry(0.12, 8, 8), new THREE.MeshStandardMaterial({ color: 0xe5e7eb }));
  skull.position.set(-28, 1.0, -26.3);
  scene.add(skull);


  // B. GRAND LIBRARY (Left-Front corner)
  // Partition wall
  createStaticBlock('Library_Partition_X', 22, 8, 2, -25, 4, 18, stoneMat);
  createStaticBlock('Library_Partition_Z', 2, 8, 18, -15, 4, 28, stoneMat);

  // Wooden Bookshelves
  function createBookshelf(x: number, z: number, rotationY = 0) {
    const bookshelf = new THREE.Group();
    bookshelf.position.set(x, 3.5, z);
    bookshelf.rotation.y = rotationY;

    // Outer wood casing
    const frame = new THREE.Mesh(new THREE.BoxGeometry(4, 7, 1.2), woodMat);
    frame.castShadow = true;
    bookshelf.add(frame);

    // Colorful shelves of books (clumped boxes)
    for (let shelfY = -2.5; shelfY <= 2.5; shelfY += 1.6) {
      for (let bookX = -1.6; bookX <= 1.6; bookX += 0.4) {
        if (Math.random() > 0.15) {
          const colors = [0xd97706, 0xdc2626, 0x2563eb, 0x059669, 0xd97706, 0x4f46e5];
          const bookColor = colors[Math.floor(Math.random() * colors.length)];
          const bookMat = new THREE.MeshStandardMaterial({ color: bookColor, roughness: 0.7 });
          const book = new THREE.Mesh(new THREE.BoxGeometry(0.12 + Math.random() * 0.08, 0.9 + Math.random() * 0.3, 0.8), bookMat);
          book.position.set(bookX, shelfY + 0.5, 0.1);
          bookshelf.add(book);
        }
      }
    }
    scene.add(bookshelf);

    collisions.push({
      min: new THREE.Vector3(x - 2.2, 0, z - 0.8),
      max: new THREE.Vector3(x + 2.2, 7, z + 0.8),
      name: 'Bookshelf_Solid',
    });
  }

  createBookshelf(-35, 22);
  createBookshelf(-35, 30);
  createBookshelf(-26, 35, Math.PI / 2);
  createBookshelf(-20, 35, Math.PI / 2);


  // C. THE BLACKSMITH FORGE (Right-Front corner)
  // Stone brick forge chimney furnace
  createStaticBlock('Forge_Chimney', 6, 12, 6, 30, 6, 30, stoneMat);
  
  // Flaming coal inside core
  const forgeCoalMat = new THREE.MeshStandardMaterial({
    color: 0xea580c,
    emissive: 0xff4500,
    roughness: 0.5
  });
  createStaticBlock('Forge_Fire_Glow', 4, 1.2, 3.2, 30, 0.8, 27.5, forgeCoalMat);

  // Black anvil
  const anvilGroup = new THREE.Group();
  anvilGroup.position.set(24, 0.8, 25);
  const anvilBase = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.6, 0.6, 8), stoneMat);
  anvilGroup.add(anvilBase);
  const anvilTop = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.3, 0.4), ironBarMat);
  anvilTop.position.y = 0.45;
  anvilGroup.add(anvilTop);
  scene.add(anvilGroup);

  collisions.push({
    min: new THREE.Vector3(23.4, 0, 24.4),
    max: new THREE.Vector3(24.6, 1.6, 25.6),
    name: 'Anvil_Solid'
  });


  // D. THE THRONE ROOM (Grand Center Back Castle Chamber)
  // Partition Royal Pillars leading back
  function createThronePillar(x: number, z: number) {
    const base = new THREE.Mesh(new THREE.BoxGeometry(1.8, 0.8, 1.8), stoneMat);
    base.position.set(x, 0.4, z);
    scene.add(base);

    const pillar = new THREE.Mesh(new THREE.CylinderGeometry(0.6, 0.6, 9.2, 8), stoneMat);
    pillar.position.set(x, 5, z);
    pillar.castShadow = true;
    scene.add(pillar);

    const cap = new THREE.Mesh(new THREE.BoxGeometry(1.8, 0.8, 1.8), stoneMat);
    cap.position.set(x, 9.6, z);
    scene.add(cap);

    collisions.push({
      min: new THREE.Vector3(x - 1.0, 0, z - 1.0),
      max: new THREE.Vector3(x + 1.0, 10, z + 1.0),
      name: 'Pillar_Solid',
    });
  }

  // Row of pillars flanking the royal velvet red run carpet
  createThronePillar(-7, -25);
  createThronePillar(7, -25);
  createThronePillar(-7, -15);
  createThronePillar(7, -15);

  // High Stone Walls surrounding the Throne Room area
  createStaticBlock('Throne_Left_Wall', 2, 10, 15, -15, 5, -31, stoneMat);
  createStaticBlock('Throne_Right_Wall', 2, 10, 15, 15, 5, -31, stoneMat);

  // Red velvet royal carpet (no collision)
  const carpetGeo = new THREE.BoxGeometry(12, 0.05, 18);
  const carpetMat = new THREE.MeshStandardMaterial({ color: 0x991b1b, roughness: 1.0 });
  const carpet = new THREE.Mesh(carpetGeo, carpetMat);
  carpet.position.set(0, 0.02, -26);
  carpet.receiveShadow = true;
  scene.add(carpet);

  // Golden Throne Chair
  const throneGroup = new THREE.Group();
  throneGroup.position.set(0, 0.1, -34);

  // base block
  const tBase = new THREE.Mesh(new THREE.BoxGeometry(3, 0.6, 2.5), stoneMat);
  tBase.castShadow = true;
  throneGroup.add(tBase);

  // Seat velvet cushion
  const tSeat = new THREE.Mesh(new THREE.BoxGeometry(1.8, 0.4, 1.6), carpetMat);
  tSeat.position.set(0, 0.5, 0.2);
  throneGroup.add(tSeat);

  // Golden high backrest
  const tBack = new THREE.Mesh(new THREE.BoxGeometry(1.8, 2.8, 0.3), goldMat);
  tBack.position.set(0, 1.8, -0.6);
  tBack.castShadow = true;
  throneGroup.add(tBack);

  // Throne armrests
  const armL = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.8, 1.4), goldMat);
  armL.position.set(-0.95, 0.7, 0.2);
  throneGroup.add(armL);

  const armR = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.8, 1.4), goldMat);
  armR.position.set(0.95, 0.7, 0.2);
  throneGroup.add(armR);

  scene.add(throneGroup);

  collisions.push({
    min: new THREE.Vector3(-1.8, 0, -36),
    max: new THREE.Vector3(1.8, 4, -31.5),
    name: 'Throne_Solid',
  });


  // E. COURTYARD GARDEN & HEDGE MAZE (Front-Mid Courtyard)
  // Center fountain
  const fountainBaseGeo = new THREE.CylinderGeometry(4, 4, 0.8, 8);
  const fBase = new THREE.Mesh(fountainBaseGeo, stoneMat);
  fBase.position.set(0, 0.4, 8);
  scene.add(fBase);

  const fMiddle = new THREE.Mesh(new THREE.CylinderGeometry(2, 2, 0.5, 8), stoneMat);
  fMiddle.position.set(0, 1.0, 8);
  scene.add(fMiddle);

  // blue standing water mesh
  const fWater = new THREE.Mesh(new THREE.CylinderGeometry(3.8, 3.8, 0.1, 8), new THREE.MeshStandardMaterial({
    color: 0x3b82f6,
    roughness: 0.1,
    opacity: 0.85,
    transparent: true,
  }));
  fWater.position.set(0, 0.7, 8);
  scene.add(fWater);

  collisions.push({
    min: new THREE.Vector3(-4.2, 0, 3.8),
    max: new THREE.Vector3(4.2, 1.5, 12.2),
    name: 'Fountain_Solid',
  });

  // Hedges
  const hedgeMat = new THREE.MeshStandardMaterial({
    color: 0x166534, // rich leaf green
    roughness: 1.0
  });

  function createHedge(w: number, d: number, x: number, z: number) {
    createStaticBlock('Hedge', w, 3.2, d, x, 1.6, z, hedgeMat);
  }

  // Maze layout flanking the walkways
  createHedge(16, 3, -15, 2);
  createHedge(16, 3, 15, 2);
  createHedge(3, 14, -22, 9);
  createHedge(3, 14, 22, 9);


  // F. HIGH TILED ROOFS (Walkable tiled surfaces over library and blacksmith keeps)
  // We place a flat walkable roof platform on top of the library and forge partitions
  // Library slab roof (at Y = 8 height)
  createStaticBlock('Library_Roof_Deck', 22, 1, 18, -25, 8.5, 28, stoneMat);
  // Red slanted aesthetic roof lines along boundaries
  const slantLGeo = new THREE.BoxGeometry(23, 1, 4);
  const slantL = new THREE.Mesh(slantLGeo, roofMat);
  slantL.position.set(-25, 11, 38);
  slantL.rotation.x = Math.PI / 6;
  scene.add(slantL);

  // Blacksmith slab roof deck (at Y = 8 height)
  createStaticBlock('Forge_Roof_Deck', 22, 1, 18, 25, 8.5, 28, stoneMat);
  const slantR = new THREE.Mesh(slantLGeo, roofMat);
  slantR.position.set(25, 11, 38);
  slantR.rotation.x = Math.PI / 6;
  scene.add(slantR);

  // G. HIGH TOWER (The Princess Tower - Right-Back corner)
  // Multiple stacked cylinders scaling upwards
  const b1 = new THREE.Mesh(new THREE.CylinderGeometry(8, 8, 12, 10), stoneMat);
  b1.position.set(25, 6, -25);
  scene.add(b1);
  collisions.push({
    min: new THREE.Vector3(16.5, 0, -33.5),
    max: new THREE.Vector3(33.5, 12, -16.5),
    name: 'Tower_Base_Solid',
  });

  const b2 = new THREE.Mesh(new THREE.CylinderGeometry(6.5, 6.5, 12, 10), stoneMat);
  b2.position.set(25, 18, -25);
  scene.add(b2);
  collisions.push({
    min: new THREE.Vector3(18.2, 12, -31.8),
    max: new THREE.Vector3(31.8, 24, -18.2),
    name: 'Tower_Mid_Solid',
  });

  const b3 = new THREE.Mesh(new THREE.CylinderGeometry(5, 5, 8, 10), stoneMat);
  b3.position.set(25, 28, -25);
  scene.add(b3);
  collisions.push({
    min: new THREE.Vector3(19.8, 24, -30.2),
    max: new THREE.Vector3(30.2, 32, -19.8),
    name: 'Tower_Top_Chamber_Solid',
  });

  // Top Spire/Dome Roof over Princess (held by pillars)
  const spireRoof = new THREE.Mesh(new THREE.ConeGeometry(5.8, 6, 12), roofMat);
  spireRoof.position.set(25, 36, -25);
  scene.add(spireRoof);

  // Slabs/steps for climbing the tower!
  // To allow climbing, we will generate structural stair blocks of size 3x0.6x3 winding around the High Tower base
  // This forms a gorgeous spiraling climb path that the knight can jump or step up.
  const stairMat = new THREE.MeshStandardMaterial({ color: 0x4b5563, roughness: 1.0 });
  const startAngle = 0;
  for (let i = 0; i < 22; i++) {
    const angle = startAngle + (i * Math.PI / 10);
    const radius = 9.2 - (i * 0.08); // wind slightly closer as it climbs
    const boxY = 0.5 + (i * 1.05); // spiral upwards increment
    const boxX = 25 + radius * Math.cos(angle);
    const boxZ = -25 + radius * Math.sin(angle);

    const stepMesh = new THREE.Mesh(new THREE.BoxGeometry(3, 0.5, 3), stairMat);
    stepMesh.position.set(boxX, boxY, boxZ);
    // Orient steps tangent to tower circle
    stepMesh.rotation.y = -angle;
    scene.add(stepMesh);

    collisions.push({
      min: new THREE.Vector3(boxX - 1.8, boxY - 0.3, boxZ - 1.8),
      max: new THREE.Vector3(boxX + 1.8, boxY + 0.3, boxZ + 1.8),
      name: `Tower_Stair_${i}`,
    });
  }

  // Final high viewing ledge where Princess wave stands (Y = 32)
  const ledgeRim = new THREE.Mesh(new THREE.CylinderGeometry(5.5, 5.5, 0.4, 10), stoneMat);
  ledgeRim.position.set(25, 32, -25);
  scene.add(ledgeRim);

  // Return generated static collision blocks so the core movement engine can intercept
  return collisions;
}
