import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Shield, Sparkles, Swords, Volume2, VolumeX, Eye, ArrowLeft, RefreshCw, Trophy, Settings, ZoomIn, ZoomOut, Compass, MapPin } from 'lucide-react';
import { GameState, HeroStats, EnemyState, TrapState } from '../types';
import { buildCompleteCastle, enemySpawns, trapSpawns, potionSpawns, CollisionBox, PotionSpawn } from '../game/LevelDesign';
import { buildKnight, buildPrincess, buildGargoyle, buildShadowHound, buildGolem, buildPendulum, buildPressurePlate, buildWallTrapShooter, buildArrowProjectile, createGrassTexture } from '../game/CastleAssets';
import { soundFX } from '../game/SoundFX';
import * as GameStorage from '../game/GameStorage';
import SettingsMenu from './SettingsMenu';

export default function GameCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Game states in React for Overlay UI
  const [gameState, setGameState] = useState<GameState>('START');
  const [stats, setStats] = useState<HeroStats>({
    health: 100,
    maxHealth: 100,
    potions: 0,
    enemiesDefeated: 0,
    activeWeapon: 'Steel Sword'
  });
  const [questLog, setQuestLog] = useState({
    houndCount: 0,
    houndTotal: 2,
    golemDefeated: false,
    princessReached: false,
  });
  
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [activeCameraMode, setActiveCameraMode] = useState<'FOLLOW' | 'FREE'>('FOLLOW');
  const [logMessages, setLogMessages] = useState<string[]>(['Welcome to Castle Knight! Use WASD to move, Space to Jump.']);

  // Custom persistent states
  const [keyBindings, setKeyBindings] = useState<GameStorage.KeyBindings>(GameStorage.getSavedKeyBindings());
  const [renderDistance, setRenderDistance] = useState<number>(35);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [minimapZoom, setMinimapZoom] = useState<number>(1.8);
  const [minimapMode, setMinimapMode] = useState<'CIRCLE' | 'SQUARE'>('CIRCLE');

  // Synchronizers to prevent loop closures from being stale
  const keyBindingsRef = useRef(keyBindings);
  const renderDistanceRef = useRef(renderDistance);
  const statsRef = useRef(stats);
  const isPausedRef = useRef(false);
  const startTimeRef = useRef<number>(Date.now());
  const frameCount = useRef(0);
  const culledMeshesRef = useRef<THREE.Object3D[]>([]);
  const minimapCanvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    keyBindingsRef.current = keyBindings;
  }, [keyBindings]);

  useEffect(() => {
    renderDistanceRef.current = renderDistance;
  }, [renderDistance]);

  useEffect(() => {
    statsRef.current = stats;
  }, [stats]);

  // Refs for animation loop & three.js objects
  const requestRef = useRef<number | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  
  // Character/Entity meshes in loop
  const heroGroupRef = useRef<THREE.Group | null>(null);
  const princessGroupRef = useRef<THREE.Group | null>(null);
  
  const enemiesRef = useRef<{ id: string; mesh: THREE.Group; state: EnemyState }[]>([]);
  const trapsRef = useRef<{ id: string; mesh: THREE.Group; state: TrapState }[]>([]);
  const activeArrowsRef = useRef<{ mesh: THREE.Group; velocity: THREE.Vector3; damage: number }[]>([]);
  const potionsRef = useRef<{ id: string; mesh: THREE.Group; spawn: PotionSpawn }[]>([]);
  const fountainParticlesRef = useRef<THREE.Points | null>(null);
  
  // Movement variables
  const keysPressed = useRef<{ [key: string]: boolean }>({});
  const heroVelocity = useRef<THREE.Vector3>(new THREE.Vector3(0, 0, 0));
  const heroIsJumping = useRef(false);
  const heroIsAttacking = useRef(false);
  const heroAttackTimer = useRef(0);
  const itemPickupCooldown = useRef(0);
  const damageFlashTimer = useRef(0);
  const invincibilityFrame = useRef(0);
  
  // Mouse/Camera drag vectors for orbital look
  const mouseCoords = useRef({ x: 0, y: 0 });
  const isMouseDown = useRef(false);
  const cameraAngleYaw = useRef(0);
  const cameraElevation = useRef(6);

  // Mobile Joy Coordinates
  const [joystickActive, setJoystickActive] = useState(false);
  const joystickCenter = useRef({ x: 0, y: 0 });
  const joystickOffset = useRef({ x: 0, y: 0 });
  const joystickDir = useRef({ x: 0, y: 0 }); // Normalized -1 to 1

  // Push messages to HUD log
  const pushLog = (msg: string) => {
    setLogMessages(prev => [msg, ...prev.slice(0, 6)]);
  };

  useEffect(() => {
    if (gameState !== 'PLAYING') return;

    // --- 1. SETUP THREE.JS CONTEXT ---
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.background = new THREE.Color(0x0f172a); // Slate-900 midnight skyline
    scene.fog = new THREE.FogExp2(0x0f172a, 0.015);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(containerRef.current?.clientWidth || 800, containerRef.current?.clientHeight || 600);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    if (containerRef.current) {
      containerRef.current.innerHTML = '';
      containerRef.current.appendChild(renderer.domElement);
    }
    rendererRef.current = renderer;

    // Camera
    const camera = new THREE.PerspectiveCamera(
      60,
      (containerRef.current?.clientWidth || 800) / (containerRef.current?.clientHeight || 600),
      0.1,
      1000
    );
    cameraRef.current = camera;

    // --- 2. DYNAMIC LIGHTING ENGINE ---
    // Beautiful sky sunlight
    const sunLight = new THREE.DirectionalLight(0xfef08a, 1.2); // Warm Sunlight
    sunLight.position.set(30, 45, 10);
    sunLight.castShadow = true;
    sunLight.shadow.mapSize.width = 1024;
    sunLight.shadow.mapSize.height = 1024;
    sunLight.shadow.camera.near = 0.5;
    sunLight.shadow.camera.far = 120;
    
    // Orthographic shadow camera bounds matching castle layout
    const d = 50;
    sunLight.shadow.camera.left = -d;
    sunLight.shadow.camera.right = d;
    sunLight.shadow.camera.top = d;
    sunLight.shadow.camera.bottom = -d;
    scene.add(sunLight);

    // Royal Ambient Midnight Hue
    const ambientLight = new THREE.AmbientLight(0x1e1b4b, 0.6); // Deep indigo ambient
    scene.add(ambientLight);

    // Cozy Torchlights in the Citadel
    function addCitadelTorch(x: number, y: number, z: number, color: number) {
      const torch = new THREE.PointLight(color, 3, 14, 1.5);
      torch.position.set(x, y, z);
      torch.castShadow = true;
      scene.add(torch);

      // Visual glow sphere for light source
      const particle = new THREE.Mesh(
        new THREE.SphereGeometry(0.18, 8, 8),
        new THREE.MeshBasicMaterial({ color, toneMapped: false })
      );
      particle.position.set(x, y, z);
      scene.add(particle);

      // Support bracket
      const bracket = new THREE.Mesh(
        new THREE.BoxGeometry(0.1, 0.4, 0.3),
        new THREE.MeshStandardMaterial({ color: 0x1e2937 })
      );
      bracket.position.set(x, y, z - 0.2);
      scene.add(bracket);
    }

    // Green eerie dungeon torch
    addCitadelTorch(-24, 4, -30, 0x10b981);
    // Royal gold Throne room torches
    addCitadelTorch(-13, 5, -34, 0xfacc15);
    addCitadelTorch(13, 5, -34, 0xfacc15);
    // Library magical cobalt torches
    addCitadelTorch(-34, 5, 26, 0x3b82f6);
    addCitadelTorch(-16, 5, 34, 0x3b82f6);

    // --- 3. DYNAMIC GROUND CHECKERBOARD ---
    const grassTex = createGrassTexture();
    const grassGeo = new THREE.PlaneGeometry(105, 105, 1, 1);
    const grassMat = new THREE.MeshStandardMaterial({ map: grassTex, roughness: 1.0 });
    const grassFloor = new THREE.Mesh(grassGeo, grassMat);
    grassFloor.rotation.x = -Math.PI / 2;
    grassFloor.receiveShadow = true;
    scene.add(grassFloor);

    // --- 4. ENVIRONMENT LEVEL COMPILER ---
    const collisions = buildCompleteCastle(scene);

    // Compile static level meshes for distance culling optimization
    const staticMeshesList: THREE.Object3D[] = [];
    scene.children.forEach(child => {
      if (
        child !== grassFloor &&
        !(child instanceof THREE.DirectionalLight) &&
        !(child instanceof THREE.AmbientLight) &&
        !(child instanceof THREE.PointLight)
      ) {
        staticMeshesList.push(child);
      }
    });
    culledMeshesRef.current = staticMeshesList;

    // --- 5. INITIALIZE CHARACTER AVATARS ---
    const hero = buildKnight();
    hero.position.set(0, 0, 32); // spawn in courtyard
    scene.add(hero);
    heroGroupRef.current = hero;

    const princess = buildPrincess();
    princess.position.set(25, 32.2, -25); // summit high tower
    scene.add(princess);
    princessGroupRef.current = princess;

    // --- 6. SPAWN ENEMIES & AI BEASTS ---
    enemiesRef.current = [];
    enemySpawns.forEach(spawn => {
      let group: THREE.Group;
      if (spawn.type === 'GARGOYLE') group = buildGargoyle();
      else if (spawn.type === 'SHADOW_HOUND') group = buildShadowHound();
      else group = buildGolem();

      group.position.copy(spawn.position);
      scene.add(group);

      enemiesRef.current.push({
        id: spawn.id,
        mesh: group,
        state: {
          id: spawn.id,
          type: spawn.type,
          position: spawn.position.clone(),
          initialPosition: spawn.position.clone(),
          health: spawn.type === 'STONE_GOLEM' ? 180 : 30,
          maxHealth: spawn.type === 'STONE_GOLEM' ? 180 : 30,
          isDead: false,
          isAggro: false,
          speed: spawn.type === 'GARGOYLE' ? 3.5 : spawn.type === 'SHADOW_HOUND' ? 4.2 : 2.0,
          patrolWaypoints: spawn.patrolWaypoints,
          currentWaypointIndex: 0,
          size: spawn.type === 'STONE_GOLEM' ? 2.5 : 1.2,
          heading: 0
        }
      });
    });

    // --- 7. SPAWN TRAP STRUCTURES ---
    trapsRef.current = [];
    activeArrowsRef.current = [];
    
    // Pendulum Hallway Traps
    trapSpawns.filter(st => st.type === 'PENDULUM').forEach(spawn => {
      const pen = buildPendulum();
      pen.position.copy(spawn.position);
      scene.add(pen);

      trapsRef.current.push({
        id: spawn.id,
        mesh: pen,
        state: {
          id: spawn.id,
          type: 'PENDULUM',
          position: spawn.position.clone(),
          swingAngle: 0,
          swingSpeed: 2.2 + Math.random() * 0.5,
          isMoving: true
        }
      });
    });

    // Floor Pressure Plates & wall shooter meshes
    trapSpawns.filter(st => st.type === 'PRESSURE_PLATE').forEach(spawn => {
      const plate = buildPressurePlate();
      plate.position.copy(spawn.position);
      scene.add(plate);

      // Create a shooter nozzle box nearby (shooting arrows at X crossing)
      const shooter = buildWallTrapShooter();
      const shooterZ = spawn.position.z;
      // Shoot from the side wall
      shooter.position.set(-37.8, 1.2, shooterZ);
      shooter.rotation.y = Math.PI / 2; // facing right towards positive X
      scene.add(shooter);

      trapsRef.current.push({
        id: spawn.id,
        mesh: plate,
        state: {
          id: spawn.id,
          type: 'PRESSURE_PLATE',
          position: spawn.position.clone(),
          isTriggered: false,
          pressureDepressed: false
        }
      });
    });

    // --- 8. SPAWN POTION CHEST COLLECTIBLES ---
    potionsRef.current = [];
    potionSpawns.forEach(p => {
      const pGroup = new THREE.Group();
      
      const bottleGeo = new THREE.CylinderGeometry(0.12, 0.22, 0.5, 8);
      const glassMat = new THREE.MeshPhysicalMaterial({ color: 0xef4444, roughness: 0.1, transmission: 0.8 });
      const bottle = new THREE.Mesh(bottleGeo, glassMat);
      pGroup.add(bottle);

      const potionCapMat = new THREE.MeshStandardMaterial({ color: 0x78350f, roughness: 0.9 });
      const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 0.1, 8), potionCapMat);
      cap.position.y = 0.28;
      pGroup.add(cap);

      pGroup.position.copy(p.position);
      scene.add(pGroup);

      potionsRef.current.push({
        id: p.id,
        mesh: pGroup,
        spawn: p
      });
    });

    // --- 9. SPARKLING FOUNTAIN WATER DUSTS ---
    const fCount = 120;
    const fGeo = new THREE.BufferGeometry();
    const fPos = new Float32Array(fCount * 3);
    const fVels: THREE.Vector3[] = [];
    
    for (let i = 0; i < fCount; i++) {
      // Circle emission around fountain core
      const angle = Math.random() * Math.PI * 2;
      const radius = Math.random() * 2.2;
      fPos[i * 3] = radius * Math.cos(angle);
      fPos[i * 3 + 1] = 1.0 + Math.random() * 3.5;
      fPos[i * 3 + 2] = 8 + radius * Math.sin(angle);
      fVels.push(new THREE.Vector3((Math.random() - 0.5) * 1.5, 3 + Math.random() * 4, (Math.random() - 0.5) * 1.5));
    }
    
    fGeo.setAttribute('position', new THREE.BufferAttribute(fPos, 3));
    const fMat = new THREE.PointsMaterial({ color: 0x60a5fa, size: 0.25, transparent: true, opacity: 0.8 });
    const fountainParticles = new THREE.Points(fGeo, fMat);
    scene.add(fountainParticles);
    fountainParticlesRef.current = fountainParticles;

    // Keep handle of variables inside loops
    const clock = new THREE.Clock();

    // Key board event listeners
    const handleKeyDown = (e: KeyboardEvent) => {
      const origKey = e.key.toLowerCase();
      keysPressed.current[origKey] = true;
      if (origKey === ' ') {
        keysPressed.current[' '] = true;
      }

      // Read current values of settings
      const binds = keyBindingsRef.current;
      const jumpKey = (binds.jump || ' ').toLowerCase();
      const attackKey = (binds.attack || 'f').toLowerCase();
      const healKey = (binds.heal || 'h').toLowerCase();

      // Jump trigger
      const isJumpPressed = (e.key === ' ' && jumpKey === ' ') || (origKey === jumpKey);
      if (isJumpPressed && !heroIsJumping.current) {
        heroIsJumping.current = true;
        heroVelocity.current.y = 11; // Upward impulse
        soundFX.playJump();
      }

      // Attack trigger
      if (origKey === attackKey && !heroIsAttacking.current) {
        triggerHeroAttack();
      }

      // Heal trigger
      if (origKey === healKey) {
        handleUsePotion();
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      const origKey = e.key.toLowerCase();
      keysPressed.current[origKey] = false;
      if (e.key === ' ') {
        keysPressed.current[' '] = false;
        keysPressed.current['spacebar'] = false;
        keysPressed.current['space'] = false;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    // Mouse camera orbits drag listeners
    const handleMouseDown = (e: MouseEvent) => {
      isMouseDown.current = true;
      mouseCoords.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isMouseDown.current) return;
      const deltaX = e.clientX - mouseCoords.current.x;
      const deltaY = e.clientY - mouseCoords.current.y;
      
      cameraAngleYaw.current -= deltaX * 0.007;
      cameraElevation.current = Math.max(2, Math.min(18, cameraElevation.current + deltaY * 0.1));
      
      mouseCoords.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseUp = () => { isMouseDown.current = false; };

    renderer.domElement.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    // --- 10. PRIMARY TICK RENDERING LOOP ---
    const tick = () => {
      // Pause check - skip physics updates while settings option dialog is shown
      if (isPausedRef.current) {
        requestRef.current = requestAnimationFrame(tick);
        return;
      }

      const delta = Math.min(0.05, clock.getDelta()); // Prevent extreme spikes
      const time = clock.getElapsedTime();

      // Progressive level geometry and AI culling (every 12 frames)
      if (frameCount.current % 12 === 0 && hero) {
        const playerPos = hero.position;
        const cullDist = renderDistanceRef.current;

        // Dynamic culling for static masonry structures
        culledMeshesRef.current.forEach(mesh => {
          if (cullDist >= 999) {
            mesh.visible = true;
          } else {
            const dist = mesh.position.distanceTo(playerPos);
            mesh.visible = dist < cullDist;
          }
        });

        // Dynamic culling for far AI beasts
        enemiesRef.current.forEach(e => {
          if (e.state.isDead) return;
          if (cullDist >= 999) {
            e.mesh.visible = true;
          } else {
            const dist = e.mesh.position.distanceTo(playerPos);
            e.mesh.visible = dist < cullDist;
          }
        });
      }
      frameCount.current++;

      // Check for zero stats or win criteria
      let curStats = { ...stats };
      
      // Update custom animations timers
      if (heroIsAttacking.current) {
        heroAttackTimer.current -= delta;
        if (heroAttackTimer.current <= 0) {
          heroIsAttacking.current = false;
        }
      }

      if (invincibilityFrame.current > 0) invincibilityFrame.current -= delta;
      if (itemPickupCooldown.current > 0) itemPickupCooldown.current -= delta;
      if (damageFlashTimer.current > 0) damageFlashTimer.current -= delta;

      // --- HERO PHYSICS AND COLLISION SYSTEM ---
      if (hero) {
        // Apply Gravity
        heroVelocity.current.y -= 26 * delta; // standard terminal gravity downward acceleration
        
        // Zero movement directions by default
        let moveX = 0;
        let moveZ = 0;

        const binds = keyBindingsRef.current;
        const fKey = (binds.forward || 'w').toLowerCase();
        const bKey = (binds.backward || 's').toLowerCase();
        const lKey = (binds.left || 'a').toLowerCase();
        const rKey = (binds.right || 'd').toLowerCase();

        // Key configurations (with default arrow keys as friendly fallbacks)
        if (keysPressed.current[fKey] || keysPressed.current['arrowup']) {
          moveX += Math.sin(hero.rotation.y);
          moveZ += Math.cos(hero.rotation.y);
        }
        if (keysPressed.current[bKey] || keysPressed.current['arrowdown']) {
          moveX -= Math.sin(hero.rotation.y);
          moveZ -= Math.cos(hero.rotation.y);
        }
        if (keysPressed.current[lKey] || keysPressed.current['arrowleft']) {
          // Rotate knight left
          hero.rotation.y += 3.2 * delta;
        }
        if (keysPressed.current[rKey] || keysPressed.current['arrowright']) {
          // Rotate knight right
          hero.rotation.y -= 3.2 * delta;
        }

        // Joystick triggers (override keyboard forward/turn velocities)
        if (joystickActive) {
          // turn character towards travel stick layout direction smoothly
          const angle = Math.atan2(joystickDir.current.x, joystickDir.current.y);
          const currentYaw = cameraAngleYaw.current; // sync joystick direction to look perspective
          
          hero.rotation.y = currentYaw + angle;
          
          // constant joystick movement speed
          const stickMag = Math.sqrt(joystickDir.current.x**2 + joystickDir.current.y**2);
          moveX = Math.sin(hero.rotation.y) * stickMag;
          moveZ = Math.cos(hero.rotation.y) * stickMag;
        }

        // Apply velocities on floor axes
        const speedMultiplier = 11;
        const testX = hero.position.x + moveX * speedMultiplier * delta;
        const testZ = hero.position.z + moveZ * speedMultiplier * delta;
        const testY = hero.position.y + heroVelocity.current.y * delta;

        // Perform AABB Collision checks for terrain/walls
        let blockX = false;
        let blockZ = false;
        let nextY = testY;
        let onGround = false;

        const pRadius = 0.8; // Player bounding shield radius

        collisions.forEach((box: CollisionBox) => {
          // Check collision boundary on next X projection
          if (
            testX + pRadius > box.min.x && testX - pRadius < box.max.x &&
            hero.position.y + 0.1 < box.max.y && hero.position.y + 1.8 > box.min.y &&
            hero.position.z + pRadius > box.min.z && hero.position.z - pRadius < box.max.z
          ) {
            blockX = true;
          }

          // Next Z projection
          if (
            hero.position.x + pRadius > box.min.x && hero.position.x - pRadius < box.max.x &&
            hero.position.y + 0.1 < box.max.y && hero.position.y + 1.8 > box.min.y &&
            testZ + pRadius > box.min.z && testZ - pRadius < box.max.z
          ) {
            blockZ = true;
          }

          // Next Y gravity projection
          if (
            hero.position.x + pRadius > box.min.x && hero.position.x - pRadius < box.max.x &&
            testY < box.max.y && hero.position.y + 1.8 > box.min.y &&
            hero.position.z + pRadius > box.min.z && hero.position.z - pRadius < box.max.z
          ) {
            // Landing on top of blocks/stairs!
            if (heroVelocity.current.y <= 0) {
              nextY = Math.max(nextY, box.max.y);
              onGround = true;
            } else {
              // Hit ceiling
              heroVelocity.current.y = 0;
            }
          }
        });

        // Boundary fence bounds inside 80x80 castle arena
        let newX = blockX ? hero.position.x : testX;
        let newZ = blockZ ? hero.position.z : testZ;
        
        newX = Math.max(-39, Math.min(39, newX));
        newZ = Math.max(-39, Math.min(39, newZ));

        if (nextY <= 0) {
          nextY = 0;
          onGround = true;
        }

        if (onGround) {
          heroIsJumping.current = false;
          heroVelocity.current.y = 0;
        }

        // Apply updated coordinates to render mesh
        hero.position.set(newX, nextY, newZ);

        // Legs/Arms running swing animation
        const isMoving = Math.abs(moveX) > 0.01 || Math.abs(moveZ) > 0.01;
        
        const leftLeg = hero.getObjectByName('LeftLeg') as THREE.Mesh;
        const rightLeg = hero.getObjectByName('RightLeg') as THREE.Mesh;
        const leftArmGroup = hero.getObjectByName('LeftArmGroup') as THREE.Group;
        const rightArmGroup = hero.getObjectByName('RightArmGroup') as THREE.Group;

        if (isMoving && !heroIsJumping.current) {
          const runTimeMultiplier = 15;
          const leftSway = Math.sin(time * runTimeMultiplier) * 0.45;
          const rightSway = -Math.sin(time * runTimeMultiplier) * 0.45;

          if (leftLeg) leftLeg.rotation.x = leftSway;
          if (rightLeg) rightLeg.rotation.x = rightSway;
          if (leftArmGroup) leftArmGroup.rotation.x = rightSway * 0.5;
          if (rightArmGroup && !heroIsAttacking.current) rightArmGroup.rotation.x = leftSway * 0.5;
        } else {
          // Reset idle limbs
          if (leftLeg) leftLeg.rotation.x = 0;
          if (rightLeg) rightLeg.rotation.x = 0;
          if (leftArmGroup) leftArmGroup.rotation.x = 0;
          if (rightArmGroup && !heroIsAttacking.current) rightArmGroup.rotation.set(0, 0, 0);
          
          // Subtle breathing animation to visual delight
          if (leftArmGroup) leftArmGroup.rotation.z = Math.sin(time * 3) * 0.05;
        }

        // Slash arm animation override
        if (heroIsAttacking.current && rightArmGroup) {
          // Swing sword arm in high speed arc
          const progress = (0.28 - heroAttackTimer.current) / 0.28;
          rightArmGroup.rotation.x = -Math.PI / 3 + progress * Math.PI * 1.2;
          rightArmGroup.rotation.y = -Math.sin(progress * Math.PI) * 0.5;
        }

        // invincibility flashing visual effect
        if (invincibilityFrame.current > 0) {
          hero.visible = Math.floor(time * 15) % 2 === 0;
        } else {
          hero.visible = true;
        }

        // --- CAMERA THIRD PERSON SYSTEM ---
        if (camera && activeCameraMode === 'FOLLOW') {
          // Calculate camera look spot behind the hero using orbital directions
          const lagFactor = 0.15; // Smooth camera track lerp
          const angle = hero.rotation.y + cameraAngleYaw.current + Math.PI;
          const targetCamX = hero.position.x + Math.sin(angle) * 7.5;
          const targetCamZ = hero.position.z + Math.cos(angle) * 7.5;
          const targetCamY = hero.position.y + cameraElevation.current;

          camera.position.x += (targetCamX - camera.position.x) * lagFactor;
          camera.position.y += (targetCamY - camera.position.y) * lagFactor;
          camera.position.z += (targetCamZ - camera.position.z) * lagFactor;

          const lookAtPt = hero.position.clone().add(new THREE.Vector3(0, 1.4, 0));
          camera.lookAt(lookAtPt);
        }
      }

      // --- POTION COLLECTION TRIGGERS ---
      potionsRef.current.forEach(p => {
        if (p.spawn.taken) return;
        
        // Spin potion
        p.mesh.rotation.y += 1.8 * delta;
        p.mesh.position.y = p.spawn.position.y + Math.sin(time * 4) * 0.1;

        if (hero) {
          const dist = hero.position.distanceTo(p.mesh.position);
          if (dist < 1.4 && itemPickupCooldown.current <= 0) {
            p.spawn.taken = true;
            p.mesh.visible = false;
            itemPickupCooldown.current = 0.3;
            soundFX.playDefeatEnemy(); // positive ding
            
            setStats(prev => {
              const updated = { ...prev, potions: prev.potions + 1 };
              pushLog(`Found magical health potion! Trapped in masonry details (+1 Potion).`);
              return updated;
            });
          }
        }
      });

      // --- ACTIVE ENEMY CHASE AI COMPILATION ---
      enemiesRef.current.forEach(enemy => {
        if (enemy.state.isDead) return;

        let state = enemy.state;
        const mesh = enemy.mesh;

        // Custom model sub-mesh animations
        if (state.type === 'GARGOYLE') {
          // Flapping wings
          const wingL = mesh.getObjectByName('WingL');
          const wingR = mesh.getObjectByName('WingR');
          if (wingL) wingL.rotation.y = Math.sin(time * 14) * 0.5;
          if (wingR) wingR.rotation.y = -Math.sin(time * 14) * 0.5;
        } else if (state.type === 'SHADOW_HOUND') {
          // Move feet in running wheel spin
          const fl = mesh.getObjectByName('FLLeg');
          const fr = mesh.getObjectByName('FRLeg');
          const bl = mesh.getObjectByName('BLLeg');
          const br = mesh.getObjectByName('BRLeg');
          const runningSway = Math.sin(time * 18);
          if (fl) fl.rotation.x = runningSway * 0.6;
          if (fr) fr.rotation.x = -runningSway * 0.6;
          if (bl) bl.rotation.x = -runningSway * 0.6;
          if (br) br.rotation.x = runningSway * 0.6;
        }

        if (hero) {
          const distToHero = mesh.position.distanceTo(hero.position);
          const aggroThreshold = state.type === 'STONE_GOLEM' ? 18 : 12;

          // Aggro check
          if (distToHero < aggroThreshold && !state.isDead) {
            state.isAggro = true;
          }

          if (state.isAggro) {
            // Path directly to knight
            const dir = new THREE.Vector3().subVectors(hero.position, mesh.position);
            
            // Adjust vertical height mapping for Gargoyles swooping down
            if (state.type === 'GARGOYLE') {
              // Hover above, swoop down on approach
              dir.y = (hero.position.y + 0.5) - mesh.position.y;
            } else {
              dir.y = 0; // lock to current level
            }

            dir.normalize();
            mesh.position.addScaledVector(dir, state.speed * delta);
            
            // Turn toward Hero
            const targetAngle = Math.atan2(dir.x, dir.z);
            mesh.rotation.y = targetAngle;

            // Attack hero if matching bounding box triggers
            const hitZone = state.type === 'STONE_GOLEM' ? 2.5 : 1.4;
            if (distToHero < hitZone && invincibilityFrame.current <= 0) {
              const dmg = state.type === 'STONE_GOLEM' ? 35 : state.type === 'GARGOYLE' ? 15 : 10;
              invincibilityFrame.current = 1.0; // i-frame duration
              damageFlashTimer.current = 0.25;
              soundFX.playHurt();
              
              setStats(prev => {
                const nextHp = Math.max(0, prev.health - dmg);
                if (nextHp === 0) {
                  triggerGameOver();
                } else {
                  pushLog(`Ouch! Stricken by ${state.type === 'STONE_GOLEM' ? 'Giant Golem Club' : state.type} (-${dmg} HP)`);
                }
                return { ...prev, health: nextHp };
              });
            }
          } else {
            // Normal patrol spline path following
            if (state.patrolWaypoints && state.currentWaypointIndex !== undefined) {
              const waypoint = state.patrolWaypoints[state.currentWaypointIndex];
              const distToWaypoint = mesh.position.distanceTo(waypoint);
              
              if (distToWaypoint < 0.6) {
                // Next waypoint
                state.currentWaypointIndex = (state.currentWaypointIndex + 1) % state.patrolWaypoints.length;
              } else {
                const dir = new THREE.Vector3().subVectors(waypoint, mesh.position);
                dir.y = 0;
                dir.normalize();
                mesh.position.addScaledVector(dir, (state.speed * 0.55) * delta);
                mesh.rotation.y = Math.atan2(dir.x, dir.z);
              }
            }
          }

          // Check if Hero slashes this enemy in range
          if (heroIsAttacking.current && distToHero < (state.type === 'STONE_GOLEM' ? 3.0 : 2.2) && !state.isDead) {
            // Apply damage
            state.health -= 25; // Sword basic power
            // Knockback vector
            const kb = new THREE.Vector3().subVectors(mesh.position, hero.position).normalize();
            mesh.position.addScaledVector(kb, 0.8);
            
            pushLog(`Hit ${state.type}! HP: ${state.health}/${state.maxHealth}`);
            
            if (state.health <= 0) {
              state.isDead = true;
              mesh.visible = false; // Hide from view
              soundFX.playDefeatEnemy();
              
              setStats(prev => ({ ...prev, enemiesDefeated: prev.enemiesDefeated + 1 }));
              
              // Quest checklist updates
              setQuestLog(q => {
                const isGolem = state.type === 'STONE_GOLEM';
                const count = state.type === 'SHADOW_HOUND' ? q.houndCount + 1 : q.houndCount;
                if (isGolem) pushLog('The massive Golem crumbles into cobbles! The Summit High Tower is now safe!');
                else pushLog(`Defeated dangerous ${state.type}!`);
                return {
                  ...q,
                  houndCount: count,
                  golemDefeated: q.golemDefeated || isGolem
                };
              });
            }
            // interrupt attack frame to prevent hitting same target multiple times inside single slice
            heroIsAttacking.current = false;
          }
        }
      });

      // --- TRAP SWING AND SHOOTER SYSTEMS ---
      trapsRef.current.forEach(trap => {
        const state = trap.state;
        const mesh = trap.mesh;

        if (state.type === 'PENDULUM' && state.swingSpeed && state.swingAngle !== undefined) {
          // Increment swing timeline
          state.swingAngle += state.swingSpeed * delta;
          const swingPart = mesh.getObjectByName('SwingPart');
          if (swingPart) {
            // Swing blade sinusoidally
            swingPart.rotation.z = Math.sin(state.swingAngle) * 0.9;
          }

          // Collision checking for the swinging sickle tip
          if (hero) {
            const worldBladePos = new THREE.Vector3();
            // Estimate blade local tip offset coords
            const tipOffset = new THREE.Vector3(0, -4.5, 0).applyAxisAngle(new THREE.Vector3(0, 0, 1), Math.sin(state.swingAngle) * 0.9);
            worldBladePos.copy(mesh.position).add(tipOffset);

            const bladeDist = hero.position.distanceTo(worldBladePos);
            if (bladeDist < 1.6 && invincibilityFrame.current <= 0) {
              invincibilityFrame.current = 1.0;
              soundFX.playHurt();
              setStats(prev => {
                const updated = Math.max(0, prev.health - 25);
                if (updated === 0) triggerGameOver();
                else pushLog('Slashed by Guillotine Pendulum! Time your run carefully (-25 HP)');
                return { ...prev, health: updated };
              });
            }
          }
        }

        if (state.type === 'PRESSURE_PLATE') {
          if (hero) {
            const plateDist = hero.position.clone().setY(0).distanceTo(mesh.position.clone().setY(0));
            const childCenterPlate = mesh.getObjectByName('CenterPlate');

            if (plateDist < 1.0) {
              // Steppes on!
              if (childCenterPlate && !state.pressureDepressed) {
                childCenterPlate.position.y = -0.01; // depress
                state.pressureDepressed = true;
                soundFX.playTrapTrigger();

                // SPAWN SWIFT ARROW FROM WALL EXTRUSION NOZZLE!
                shootArrowFromWall(mesh.position.z);
                pushLog('Stepped on a Pressure Gate! Arrow fired from dark battlements!');
              }
            } else {
              // Rise back when departing
              if (childCenterPlate && state.pressureDepressed) {
                childCenterPlate.position.y = 0.02;
                state.pressureDepressed = false;
              }
            }
          }
        }
      });

      // --- FLYING ARROW UPDATE & COLLISION MATRIX ---
      for (let i = activeArrowsRef.current.length - 1; i >= 0; i--) {
        const arrow = activeArrowsRef.current[i];
        arrow.mesh.position.addScaledVector(arrow.velocity, delta);

        // check wall/out of bound boundaries to clean arrow from scene
        if (arrow.mesh.position.x > 38 || arrow.mesh.position.x < -38) {
          scene.remove(arrow.mesh);
          activeArrowsRef.current.splice(i, 1);
          continue;
        }

        // Hero collision
        if (hero) {
          const arrowDist = arrow.mesh.position.distanceTo(hero.position.clone().add(new THREE.Vector3(0, 0.8, 0)));
          if (arrowDist < 1.2) {
            scene.remove(arrow.mesh);
            activeArrowsRef.current.splice(i, 1);

            if (invincibilityFrame.current <= 0) {
              invincibilityFrame.current = 0.8;
              soundFX.playHurt();
              setStats(prev => {
                const updated = Math.max(0, prev.health - arrow.damage);
                if (updated === 0) triggerGameOver();
                else pushLog(`Pierced by wall arrow trap! Dodge or jump (-${arrow.damage} HP)`);
                return { ...prev, health: updated };
              });
            }
          }
        }
      }

      // --- WATER FOUNTAIN PARTICLE GENERATOR ANIMATION ---
      if (fountainParticlesRef.current) {
        const geo = fountainParticlesRef.current.geometry;
        const positions = geo.attributes.position.array as Float32Array;

        for (let i = 0; i < fCount; i++) {
          // Increase velocity downward for gravity
          fVels[i].y -= 9.8 * delta;
          
          positions[i * 3] += fVels[i].x * delta;
          positions[i * 3 + 1] += fVels[i].y * delta;
          positions[i * 3 + 2] += fVels[i].z * delta;

          // Reset when splashing fountain pool floor
          if (positions[i * 3 + 1] < 0.6) {
            const angle = Math.random() * Math.PI * 2;
            const radius = Math.random() * 2.2;
            positions[i * 3] = radius * Math.cos(angle);
            positions[i * 3 + 1] = 0.8;
            positions[i * 3 + 2] = 8 + radius * Math.sin(angle);
            fVels[i].set((Math.random() - 0.5) * 1.5, 4 + Math.random() * 4, (Math.random() - 0.5) * 1.5);
          }
        }
        geo.attributes.position.needsUpdate = true;
      }

      // --- SUMMIT PRINCESS REACH WIN TRIGGER ---
      if (hero && princessGroupRef.current) {
        const victoryDist = hero.position.distanceTo(princessGroupRef.current.position);
        if (victoryDist < 1.6) {
          triggerVictory();
        }
      }

      // Waving Princess group movement
      if (princessGroupRef.current) {
        const rightArm = princessGroupRef.current.getObjectByName('RightArmGroup');
        if (rightArm) {
          rightArm.rotation.z = Math.sin(time * 6) * 0.4;
        }
        princessGroupRef.current.rotation.y = time * 0.2;
      }

      // Render the scene frame
      renderer.render(scene, camera);

      // Render the custom 2D HUD minimap
      drawMinimap();

      requestRef.current = requestAnimationFrame(tick);
    };

    // Helper functions inside local Three.js scope
    const drawMinimap = () => {
      const canvas = minimapCanvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const w = canvas.width;
      const h = canvas.height;
      const cx = w / 2;
      const cy = h / 2;

      // Dark solid background
      ctx.fillStyle = '#0f172a';
      ctx.fillRect(0, 0, w, h);

      // Radial gridlines
      ctx.strokeStyle = 'rgba(100, 116, 139, 0.15)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      for (let i = 10; i < w; i += 15) {
        ctx.moveTo(i, 0);
        ctx.lineTo(i, h);
        ctx.moveTo(0, i);
        ctx.lineTo(w, i);
      }
      ctx.stroke();

      const scale = (w / 80) * (minimapZoom || 1.8);

      if (!hero) return;
      const hPos = hero.position;

      // Coordinate mapping from 3D to 2D
      const get2DCoords = (wx: number, wz: number) => {
        const rx = wx - hPos.x;
        const rz = wz - hPos.z;
        return {
          x: cx + rx * scale,
          y: cy + rz * scale,
        };
      };

      // 1. Draw level boundary ring
      ctx.strokeStyle = 'rgba(236, 72, 153, 0.35)'; // castle rose perimeter
      ctx.lineWidth = 1.5;
      const tl = get2DCoords(-40, -40);
      const br = get2DCoords(40, 40);
      ctx.strokeRect(tl.x, tl.y, br.x - tl.x, br.y - tl.y);

      // Central water fountain
      ctx.strokeStyle = '#38bdf8';
      ctx.lineWidth = 1;
      const fPt = get2DCoords(0, 8);
      ctx.beginPath();
      ctx.arc(fPt.x, fPt.y, 4 * scale, 0, Math.PI * 2);
      ctx.stroke();

      // Corridors & static towers
      ctx.strokeStyle = 'rgba(148, 163, 184, 0.2)';
      ctx.lineWidth = 2;
      // library partition wall
      const libY = get2DCoords(-15, 18);
      const libY2 = get2DCoords(-15, 40);
      ctx.beginPath();
      ctx.moveTo(libY.x, libY.y);
      ctx.lineTo(libY2.x, libY2.y);
      ctx.stroke();

      // dungeon partition wall
      const dgY = get2DCoords(-15, -18);
      const dgY2 = get2DCoords(-15, -40);
      ctx.beginPath();
      ctx.moveTo(dgY.x, dgY.y);
      ctx.lineTo(dgY2.x, dgY2.y);
      ctx.stroke();

      // 2. Draw potions
      potionsRef.current.forEach(pot => {
        if (pot.spawn.taken) return;
        const pt = get2DCoords(pot.spawn.position.x, pot.spawn.position.z);
        ctx.fillStyle = '#60a5fa'; // Blue potion flask
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, 3.5, 0, Math.PI * 2);
        ctx.fill();
        // ring
        ctx.strokeStyle = 'rgba(96, 165, 250, 0.4)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, 5 + Math.sin(Date.now() / 150) * 2, 0, Math.PI * 2);
        ctx.stroke();
      });

      // 3. Draw active traps
      trapsRef.current.forEach(t => {
        const pt = get2DCoords(t.state.position.x, t.state.position.z);
        ctx.fillStyle = '#f97316'; // Orange hazards
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, 3, 0, Math.PI * 2);
        ctx.fill();
      });

      // 4. Draw enemies
      enemiesRef.current.forEach(e => {
        if (e.state.isDead) return;
        const pt = get2DCoords(e.mesh.position.x, e.mesh.position.z);
        ctx.fillStyle = e.state.type === 'STONE_GOLEM' ? '#c084fc' : '#ef4444'; // Purple golem, red hounds/gargoyles
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, e.state.type === 'STONE_GOLEM' ? 5.5 : 4, 0, Math.PI * 2);
        ctx.fill();
        
        if (e.state.isAggro) {
          ctx.strokeStyle = '#f43f5e';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.arc(pt.x, pt.y, e.state.type === 'STONE_GOLEM' ? 8 : 6, 0, Math.PI * 2);
          ctx.stroke();
        }
      });

      // 5. Draw Princess Goal
      if (princessGroupRef.current) {
        const pt = get2DCoords(princessGroupRef.current.position.x, princessGroupRef.current.position.z);
        ctx.fillStyle = '#ec4899'; // Rosa
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, 5, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#ffffff';
        ctx.font = '7px sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('♥', pt.x, pt.y);
      }

      // 6. Draw Player (Focal green arrow)
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(-hero.rotation.y + Math.PI);

      ctx.fillStyle = '#10b981'; // emerald knight cursor
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.moveTo(0, -6.5);
      ctx.lineTo(-4.5, 4.5);
      ctx.lineTo(0, 2);
      ctx.lineTo(4.5, 4.5);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      ctx.restore();
    };

    function triggerHeroAttack() {
      if (heroIsAttacking.current) return;
      heroIsAttacking.current = true;
      heroAttackTimer.current = 0.28; // swing duration
      soundFX.playSlash();
    }

    function shootArrowFromWall(zCoordinate: number) {
      if (!sceneRef.current) return;
      
      const arrowMesh = buildArrowProjectile();
      // Start slightly inside left wall shooter nozzle
      arrowMesh.position.set(-37, 1.2, zCoordinate);
      // Face towards positive X directional axis
      arrowMesh.rotation.y = Math.PI / 2;
      sceneRef.current.add(arrowMesh);

      activeArrowsRef.current.push({
        mesh: arrowMesh,
        velocity: new THREE.Vector3(26, 0, 0), // rapid flying arrow velocity vector
        damage: 20
      });
    }

    function triggerGameOver() {
      cancelAnimationFrame(requestRef.current!);
      soundFX.playGameOver();

      const sessionDuration = Math.round((Date.now() - startTimeRef.current) / 1000);
      GameStorage.saveRunHistory({
        timestamp: new Date().toISOString(),
        outcome: 'GAMEOVER',
        enemiesDefeated: statsRef.current.enemiesDefeated,
        potionsRemaining: statsRef.current.potions,
        durationSeconds: sessionDuration
      });
      GameStorage.saveHighScore(statsRef.current.enemiesDefeated);

      setGameState('GAMEOVER');
    }

    function triggerVictory() {
      cancelAnimationFrame(requestRef.current!);
      soundFX.playVictory();

      const sessionDuration = Math.round((Date.now() - startTimeRef.current) / 1000);
      GameStorage.saveRunHistory({
        timestamp: new Date().toISOString(),
        outcome: 'VICTORY',
        enemiesDefeated: statsRef.current.enemiesDefeated + 1, // golem slain count added as triumph
        potionsRemaining: statsRef.current.potions,
        durationSeconds: sessionDuration
      });
      GameStorage.saveHighScore(statsRef.current.enemiesDefeated + 1);

      setGameState('VICTORY');
    }

    // Begin Animation ticks
    requestRef.current = requestAnimationFrame(tick);

    // Responsive Canvas Resize observer
    const handleResize = () => {
      if (!containerRef.current || !rendererRef.current || !cameraRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;
      cameraRef.current.aspect = w / h;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(w, h);
    };
    
    const resizeObserver = new ResizeObserver(handleResize);
    if (containerRef.current) resizeObserver.observe(containerRef.current);

    // Cleanup resources strictly
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      
      renderer.domElement.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      
      resizeObserver.disconnect();
    };
  }, [gameState, activeCameraMode]);

  // Mobile Joy Stick callbacks
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    e.preventDefault();
    const touch = e.touches[0];
    joystickCenter.current = { x: touch.clientX, y: touch.clientY };
    setJoystickActive(true);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!joystickActive) return;
    const touch = e.touches[0];
    const dx = touch.clientX - joystickCenter.current.x;
    const dy = touch.clientY - joystickCenter.current.y;
    
    // Cap radius drag offset at 44px
    const radiusCap = 44;
    const distance = Math.sqrt(dx * dx + dy * dy);
    
    if (distance === 0) {
      joystickOffset.current = { x: 0, y: 0 };
      joystickDir.current = { x: 0, y: 0 };
    } else {
      const scale = Math.min(radiusCap, distance) / distance;
      const limitedX = dx * scale;
      const limitedY = dy * scale;
      
      joystickOffset.current = { x: limitedX, y: limitedY };
      // Normalizing components
      joystickDir.current = { x: limitedX / radiusCap, y: limitedY / radiusCap };
    }
  };

  const handleTouchEnd = () => {
    setJoystickActive(false);
    joystickOffset.current = { x: 0, y: 0 };
    joystickDir.current = { x: 0, y: 0 };
  };

  // Keyboard action simulation on clicks for mobile HUD overlays
  const triggerMobileAttack = () => {
    if (heroIsAttacking.current) return;
    heroIsAttacking.current = true;
    heroAttackTimer.current = 0.28;
    soundFX.playSlash();
  };

  const triggerMobileJump = () => {
    if (heroIsJumping.current) return;
    heroIsJumping.current = true;
    heroVelocity.current.y = 11;
    soundFX.playJump();
  };

  const handleUsePotion = () => {
    if (stats.potions <= 0) {
      pushLog('No potion flasks left! Search the castle libraries and dungeons!');
      return;
    }
    if (stats.health >= stats.maxHealth) {
      pushLog('Health is already fully topped up!');
      return;
    }
    soundFX.playDefeatEnemy(); // healing shimmer
    setStats(prev => ({
      ...prev,
      potions: prev.potions - 1,
      health: Math.min(prev.maxHealth, prev.health + 40)
    }));
    pushLog('Drank magical potion! Gulp... (+40 Health restored)');
  };

  const handleToggleSound = () => {
    const nextVal = soundFX.toggleSound();
    setSoundEnabled(nextVal);
  };

  const resetGameSession = () => {
    // Reset collections and states
    setStats({
      health: 100,
      maxHealth: 100,
      potions: 0,
      enemiesDefeated: 0,
      activeWeapon: 'Steel Sword'
    });
    setQuestLog({
      houndCount: 0,
      houndTotal: 2,
      golemDefeated: false,
      princessReached: false
    });
    setLogMessages(['Ready your sword, Knight! Storm the fort and ascend the tower.']);
    
    // Clear dead state pointers
    enemySpawns.forEach(s => { s.position.copy(s.position) });
    potionSpawns.forEach(p => { p.taken = false; });
    
    setGameState('PLAYING');
  };

  return (
    <div className="absolute inset-0 flex flex-col font-sans select-none bg-slate-950 overflow-hidden text-slate-100">
      
      {/* 2. GAME PLAYING HEADER / MINI STATS BAR */}
      <header id="game_header" className="h-14 bg-slate-900 border-b border-slate-800 flex items-center justify-between px-6 z-10 shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded bg-pink-600 flex items-center justify-center font-bold text-white shadow-lg">👑</div>
          <div>
            <h1 className="text-sm font-semibold tracking-wide uppercase text-slate-200">Castle Knight 3D</h1>
            <p className="text-[10px] text-slate-400 font-mono">Location: Citadel Fort Basin</p>
          </div>
        </div>

        <div className="flex items-center gap-6">
          {/* Settings modal trigger */}
          <button 
            id="btn_settings_open"
            onClick={() => {
              isPausedRef.current = true;
              setIsSettingsOpen(true);
            }} 
            className="p-2 rounded bg-slate-850 hover:bg-slate-700/80 hover:text-white transition cursor-pointer flex items-center gap-1.5 border border-slate-700/40 text-slate-300"
            title="Configure Key Bindings & Optimizer"
          >
            <Settings className="w-4 h-4 text-pink-500 animate-spin-slow" />
            <span className="hidden sm:inline text-xs font-semibold">Settings</span>
          </button>

          {/* Sound toggle button */}
          <button 
            id="btn_sound"
            onClick={handleToggleSound} 
            className="p-2 rounded bg-slate-800 hover:bg-slate-700 transition cursor-pointer"
            title="Toggle Retro Synthesized SFX"
          >
            {soundEnabled ? <Volume2 className="w-4 h-4 text-emerald-400" /> : <VolumeX className="w-4 h-4 text-slate-400" />}
          </button>

          {/* Camera View Mode */}
          <button
            id="btn_camera"
            onClick={() => setActiveCameraMode(prev => prev === 'FOLLOW' ? 'FREE' : 'FOLLOW')}
            className={`p-2 rounded flex items-center gap-1.5 text-xs font-semibold cursor-pointer transition ${
              activeCameraMode === 'FOLLOW' ? 'bg-blue-600/30 text-blue-400 border border-blue-500/40' : 'bg-slate-800 text-slate-300'
            }`}
          >
            <Eye className="w-4 h-4" />
            <span className="hidden sm:inline">Camera: {activeCameraMode}</span>
          </button>
        </div>
      </header>

      {/* 3. CORE ADVENTURE PLATFORM WRAPPER */}
      <div className="flex-1 relative flex overflow-hidden">
        
        {/* VIEWPORT PANEL */}
        <div className="flex-1 h-full relative" style={{ touchAction: 'none' }}>
          
          {/* WebGL Canvas Node */}
          <div id="three_canvas_container" ref={containerRef} className="w-full h-full block bg-slate-950" />

          {/* PLAYING SCREEN HEADS-UP HUD (Heads-up layout overlays over viewport) */}
          {gameState === 'PLAYING' && (
            <>
              {/* Bottom Side Info Feed - Retro Logs */}
              <div id="retro_combat_log" className="absolute left-6 top-6 bg-slate-900/85 backdrop-blur-md padding border border-slate-800/80 p-3.5 rounded-lg max-w-sm pointer-events-none hidden md:block">
                <span className="text-[11px] font-mono text-emerald-400 block mb-1">🏰 Citadel Scout Reports:</span>
                <div className="space-y-1 font-mono text-[11px] text-slate-300">
                  {logMessages.map((msg, i) => (
                    <div key={i} className={`truncate ${i === 0 ? 'text-white font-medium' : 'text-slate-400'}`}>
                      {msg}
                    </div>
                  ))}
                </div>
              </div>

              {/* STATS AND QUEST FLOATING BOX */}
              <div id="knight_hud_panel" className="absolute right-6 top-6 bg-slate-900/85 backdrop-blur-md p-4 rounded-xl border border-slate-800 shadow-2xl w-72 pointer-events-auto">
                {/* Hero Health Bar */}
                <div className="mb-4">
                  <div className="flex justify-between text-xs font-semibold mb-1">
                    <span className="text-red-400 flex items-center gap-1">🛡️ Knight Health</span>
                    <span className="font-mono text-red-300">{stats.health} / {stats.maxHealth} HP</span>
                  </div>
                  <div className="w-full h-3.5 rounded-full bg-slate-800 p-0.5 overflow-hidden">
                    <div 
                      className="h-full rounded-full bg-red-600 transition-all duration-150 relative overflow-hidden"
                      style={{ width: `${stats.health}%` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-rose-600 animate-pulse" />
                    </div>
                  </div>
                </div>

                {/* Potions stock & Usage */}
                <div className="mb-4 flex items-center justify-between border-b border-b-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-sm">🧪 Potions:</span>
                    <span className="bg-red-950 text-red-400 px-2.5 py-0.5 rounded font-bold text-xs ring-1 ring-red-800/60 font-mono">
                      {stats.potions}
                    </span>
                  </div>
                  <button
                    id="btn_potion_use"
                    onClick={handleUsePotion}
                    disabled={stats.potions <= 0}
                    className={`px-3 py-1.5 rounded text-xs font-semibold select-none flex items-center gap-1 shadow-lg cursor-pointer ${
                      stats.potions > 0 
                        ? 'bg-rose-600 hover:bg-rose-500 text-white animate-bounce' 
                        : 'bg-slate-800 text-slate-500 cursor-not-allowed'
                    }`}
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    Heal (Key H)
                  </button>
                </div>

                {/* Quests objectives checklist */}
                <div>
                  <h3 className="text-xs font-semibold text-slate-400 tracking-wider mb-2.5">ACTIVE QUEST OBJECTIVES</h3>
                  <div className="space-y-2 text-xs font-semibold font-mono">
                    <div className="flex items-center gap-2">
                      <span className={questLog.houndCount >= questLog.houndTotal ? 'text-emerald-400' : 'text-slate-400'}>
                        {questLog.houndCount >= questLog.houndTotal ? '✓' : '○'}
                      </span>
                      <span className={questLog.houndCount >= questLog.houndTotal ? 'line-through text-slate-500' : 'text-slate-300'}>
                        Dungeon Shadow Hounds: ({questLog.houndCount}/{questLog.houndTotal})
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={questLog.golemDefeated ? 'text-emerald-400' : 'text-slate-400'}>
                        {questLog.golemDefeated ? '✓' : '○'}
                      </span>
                      <span className={questLog.golemDefeated ? 'line-through text-slate-500' : 'text-slate-300'}>
                        Defeat the Throne Golem Boss
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-pink-400">♥</span>
                      <span className="text-pink-300 animate-pulse font-sans">
                        Ascend Spire & Rescue Princess!
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* INTERACTIVE MINIMAP SYSTEM PANEL */}
              <div id="minimap_hud_wrapper" className="absolute right-6 top-[282px] bg-slate-900/85 backdrop-blur-md p-3.5 rounded-xl border border-slate-800 shadow-2xl w-72 pointer-events-auto flex flex-col items-center gap-2.5">
                
                {/* Visual Header with shape switcher & zoom controls */}
                <div className="w-full flex items-center justify-between text-xs font-mono text-slate-400 select-none">
                  <span className="flex items-center gap-1 font-bold text-slate-300">
                    <Compass className="w-3.5 h-3.5 text-pink-500 animate-pulse" />
                    Citadel Minimap
                  </span>
                  
                  <div className="flex items-center gap-1.5">
                    <button 
                      id="btn_minimap_zoom_out"
                      onClick={() => setMinimapZoom(prev => Math.max(0.8, prev - 0.2))}
                      className="p-1 rounded bg-slate-850 border border-slate-700/30 text-slate-300 hover:bg-slate-705 hover:text-white transition cursor-pointer"
                      title="Zoom Out"
                    >
                      <ZoomIn className="w-3 h-3 rotate-180" />
                    </button>
                    <button 
                      id="btn_minimap_zoom_in"
                      onClick={() => setMinimapZoom(prev => Math.min(3.0, prev + 0.2))}
                      className="p-1 rounded bg-slate-850 border border-slate-700/30 text-slate-300 hover:bg-slate-705 hover:text-white transition cursor-pointer"
                      title="Zoom In"
                    >
                      <ZoomIn className="w-3 h-3" />
                    </button>
                    <button 
                      id="btn_minimap_format"
                      onClick={() => setMinimapMode(prev => prev === 'CIRCLE' ? 'SQUARE' : 'CIRCLE')}
                      className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-slate-850 hover:bg-slate-700 hover:text-white select-none capitalize transition cursor-pointer"
                      title="Toggle Shape"
                    >
                      {minimapMode.toLowerCase()}
                    </button>
                  </div>
                </div>

                {/* Main canvas viewport */}
                <div className={`overflow-hidden border border-slate-750 shadow-inner relative bg-slate-950 transition-all duration-300 ${
                  minimapMode === 'CIRCLE' ? 'rounded-full' : 'rounded-lg'
                }`} style={{ width: '130px', height: '130px' }}>
                  <canvas 
                    ref={minimapCanvasRef} 
                    width={130} 
                    height={130} 
                    className="w-full h-full block" 
                  />
                  <div className="absolute top-1 left-2 pointer-events-none font-mono text-[8px] text-slate-400 font-bold tracking-wide">
                    {Math.round(minimapZoom * 100)}%
                  </div>
                </div>

                {/* Map Legend */}
                <div className="w-full flex items-center justify-between text-[9px] font-semibold text-slate-400 tracking-wider">
                  <span className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" /> You
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 inline-block" /> Beast
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 inline-block" /> Potions
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-pink-500 inline-block animate-pulse" /> Goal
                  </span>
                </div>
              </div>

              {/* FLOATING ACTION KEYS GUIDE */}
              <div id="desktop_controls_guide" className="absolute left-6 bottom-6 bg-slate-900/80 p-3 rounded-lg border border-slate-800 font-mono text-[10px] leading-relaxed text-slate-400 max-w-xs pointer-events-none hidden sm:block">
                <span className="text-slate-300 font-bold block mb-1">🎮 CONTROL SCHEMES:</span>
                • <strong className="text-white">W / S</strong>: Move Forward / Backward<br />
                • <strong className="text-white">A / D</strong>: Rotate Knight left/right<br />
                • <strong className="text-white">Spacebar</strong>: Jump Platforms<br />
                • <strong className="text-white">F Key / Click</strong>: Sword Slicing Slash<br />
                • <strong className="text-white">Mouse Drag</strong>: Adjust Camera Angle Yaw
              </div>

              {/* VIRTUAL MOBILE CONTROLLER OVERLAYS (Shown on touch displays) */}
              <div className="absolute inset-0 pointer-events-none flex flex-col justify-end p-6 select-none">
                <div className="flex items-center justify-between pointer-events-auto">
                  
                  {/* JOYSTICK CONTROLLER BOX (Bottom Left) */}
                  <div 
                    id="mobile_joystick_region"
                    onMouseDown={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      joystickCenter.current = { x: rect.left + 64, y: rect.top + 64 };
                      setJoystickActive(true);
                    }}
                    onMouseMove={(e) => {
                      if (!joystickActive) return;
                      const dx = e.clientX - joystickCenter.current.x;
                      const dy = e.clientY - joystickCenter.current.y;
                      const limit = 44;
                      const dist = Math.sqrt(dx*dx + dy*dy);
                      if (dist === 0) {
                        joystickOffset.current = { x: 0, y: 0 };
                        joystickDir.current = { x: 0, y: 0 };
                      } else {
                        const sc = Math.min(limit, dist) / dist;
                        joystickOffset.current = { x: dx * sc, y: dy * sc };
                        joystickDir.current = { x: (dx * sc) / limit, y: (dy * sc) / limit };
                      }
                    }}
                    onMouseUp={() => {
                      setJoystickActive(false);
                      joystickOffset.current = { x: 0, y: 0 };
                      joystickDir.current = { x: 0, y: 0 };
                    }}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                    className="w-32 h-32 rounded-full bg-slate-900/60 border border-slate-700 backdrop-blur-md relative flex items-center justify-center cursor-pointer shadow-inner active:border-emerald-600/70"
                  >
                    <div 
                      className="absolute w-12 h-12 rounded-full bg-emerald-500/80 shadow-lg border border-emerald-400 pointer-events-none"
                      style={{
                        transform: `translate(${joystickOffset.current.x}px, ${joystickOffset.current.y}px)`,
                        transition: joystickActive ? 'none' : 'transform 100s ease-out'
                      }}
                    />
                    <span className="text-[8px] font-bold text-slate-500 absolute bottom-2 select-none pointer-events-none">DRAG JOYSTICK</span>
                  </div>

                  {/* MOBILE ACTION BUTTONS BOX (Bottom Right) */}
                  <div className="flex gap-4 items-end">
                    {/* Jump/Dodge block trigger */}
                    <button
                      id="btn_mobile_jump"
                      onTouchStart={(e) => { e.preventDefault(); triggerMobileJump(); }}
                      onClick={triggerMobileJump}
                      className="w-16 h-16 rounded-full bg-slate-900/80 border border-slate-700 text-slate-300 font-bold flex items-center justify-center select-none shadow-lg active:scale-90 active:bg-slate-800 transition cursor-pointer"
                    >
                      JUMP
                    </button>
                    {/* Primary Slash attack buttons */}
                    <button
                      id="btn_mobile_attack"
                      onTouchStart={(e) => { e.preventDefault(); triggerMobileAttack(); }}
                      onClick={triggerMobileAttack}
                      className="w-20 h-20 rounded-full bg-red-600 border border-red-500 text-white font-bold flex flex-col items-center justify-center select-none shadow-lg active:scale-95 active:bg-red-500 transition cursor-pointer"
                    >
                      <Swords className="w-5 h-5 mb-0.5" />
                      <span>SLASH</span>
                    </button>
                  </div>

                </div>
              </div>
            </>
          )}

          {/* GAME START SCREEN OVERLAY */}
          {gameState === 'START' && (
            <div id="game_start_lobby" className="absolute inset-0 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-6 z-20">
              <div className="max-w-lg w-full bg-slate-900 border border-slate-800/80 p-8 rounded-2xl shadow-2xl relative text-center">
                <div className="w-20 h-20 bg-pink-600 rounded-full flex items-center justify-center text-3xl shadow-lg mx-auto mb-6">🏰</div>
                <h2 className="text-3xl font-extrabold text-slate-100 tracking-tight mb-2">Castle Knight 3D</h2>
                <p className="text-indigo-400 text-sm font-semibold tracking-wider font-mono mb-4 uppercase">Fantasy Action-Adventure Template</p>
                
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  Experience a high-performance, responsive 3D medieval fortress template built entirely with procedurally optimized 3D geometry. Traverse the battlements, unlock secret potion flasks, avoid guillotine traps, and face the towering Stone Golem to rescue Princess Rosalind!
                </p>

                <div className="bg-slate-950 border border-slate-800 p-4 rounded-lg text-left mb-6 font-mono text-xs leading-relaxed space-y-1 text-slate-300">
                  <span className="font-sans text-slate-400 font-bold block mb-1">🎮 GAME MECHANICS:</span>
                  • <span className="text-emerald-400">Knight Status:</span> Start with 100 HP. Refill health with Potions.
                  <br />
                  • <span className="text-red-400">Citadel Hazards:</span> Swing pendulums & wall pressures subtract HP.
                  <br />
                  • <span className="text-yellow-400">Summit Climax:</span> Solve stairs and scale High Tower to win!
                </div>

                <button
                  id="btn_start_adventure"
                  onClick={() => setGameState('PLAYING')}
                  className="w-full py-4 rounded-xl bg-pink-600 hover:bg-pink-500 active:scale-98 transition text-white font-extrabold text mb-3 cursor-pointer shadow-lg tracking-wider"
                >
                  START ADVENTURE
                </button>
              </div>
            </div>
          )}

          {/* GAME OVER SCREEN OVERLAY */}
          {gameState === 'GAMEOVER' && (
            <div id="game_over_lobby" className="absolute inset-0 bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-6 z-20">
              <div className="max-w-md w-full bg-slate-900 border border-slate-800 p-8 rounded-2xl shadow-2xl text-center">
                <div className="w-16 h-16 bg-red-950/60 rounded-full flex items-center justify-center text-3xl mx-auto mb-4 border border-red-500/30">💀</div>
                <h2 className="text-3xl font-extrabold text-red-500 tracking-tight mb-2">YOU HAVE FALLEN</h2>
                <p className="text-slate-400 text-sm mb-6">The dangers of the fort overcame your defenses. Dust yourself off, unsheathe your sword, and try once more!</p>

                <div className="grid grid-cols-2 gap-3 mb-6 font-mono text-xs text-slate-300 bg-slate-950 p-4 border border-slate-800 rounded-lg">
                  <div>Defeated Beasts:</div>
                  <div className="text-red-400 font-bold">{stats.enemiesDefeated}</div>
                  <div>Potions Found:</div>
                  <div className="text-indigo-400 font-bold">{stats.potions}</div>
                </div>

                <button
                  id="btn_retry_adventure"
                  onClick={resetGameSession}
                  className="w-full py-3.5 rounded-xl bg-red-600 hover:bg-red-500 active:scale-98 transition text-white font-bold tracking-wider cursor-pointer shadow-lg flex items-center justify-center gap-2"
                >
                  <RefreshCw className="w-4 h-4" />
                  TRY AGAIN
                </button>
              </div>
            </div>
          )}

          {/* VICTORY GAME SCREEN OVERLAY */}
          {gameState === 'VICTORY' && (
            <div id="victory_lobby" className="absolute inset-0 bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-6 z-20">
              <div className="max-w-md w-full bg-slate-900 border border-slate-800 p-8 rounded-2xl shadow-2xl text-center">
                <div className="w-16 h-16 bg-purple-950/60 rounded-full flex items-center justify-center text-3xl mx-auto mb-4 border border-purple-500/30">👑</div>
                <h2 className="text-3xl font-extrabold text-teal-400 tracking-tight mb-1">FORTRESS RESCUED!</h2>
                <p className="text-slate-200 text-xs font-semibold tracking-wider font-mono mb-6 uppercase">True Champion of the Realm</p>
                
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  You ascended the spiral climbs, bypassed the traps, and reunited with the Princess at the summit. The whole kingdom chants your name!
                </p>

                <div className="grid grid-cols-2 gap-3 mb-6 font-mono text-xs text-slate-300 bg-slate-950 p-4 border border-slate-800 rounded-lg">
                  <div>Beasts Slain:</div>
                  <div className="text-indigo-400 font-bold">{stats.enemiesDefeated}</div>
                  <div>Climb Heights:</div>
                  <span className="text-pink-400 font-bold">Summit (32m)</span>
                </div>

                <div className="space-y-2">
                  <button
                    id="btn_victory_reset"
                    onClick={resetGameSession}
                    className="w-full py-3.5 rounded-xl bg-pink-600 hover:bg-pink-500 active:scale-98 transition text-white font-bold tracking-wider cursor-pointer shadow-lg flex items-center justify-center gap-2"
                  >
                    <Trophy className="w-4 h-4" />
                    PLAY AGAIN
                  </button>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>

      {/* CITADEL SETTINGS MODAL */}
      <SettingsMenu
        isOpen={isSettingsOpen}
        onClose={() => {
          isPausedRef.current = false;
          setIsSettingsOpen(false);
        }}
        onKeyBindingsChange={(newBinds) => {
          setKeyBindings(newBinds);
        }}
        renderDistance={renderDistance}
        onRenderDistanceChange={(dist) => {
          setRenderDistance(dist);
        }}
      />
    </div>
  );
}
