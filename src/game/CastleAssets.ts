import * as THREE from 'three';

// Procedural textures generator to make the game look astonishing
export function createWallTexture(): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 256;
  const ctx = canvas.getContext('2d');
  if (ctx) {
    // Base stone color
    ctx.fillStyle = '#6b7280';
    ctx.fillRect(0, 0, 256, 256);
    
    // Draw bricks
    ctx.strokeStyle = '#374151';
    ctx.lineWidth = 4;
    const rowHeight = 32;
    const colWidth = 64;
    
    for (let y = 0; y < 256; y += rowHeight) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(256, y);
      ctx.stroke();
      
      const offset = (y / rowHeight) % 2 === 0 ? 0 : colWidth / 2;
      for (let x = -offset; x < 256; x += colWidth) {
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x, y + rowHeight);
        ctx.stroke();
      }
    }
    
    // Add noise and depth
    for (let i = 0; i < 2000; i++) {
      const rx = Math.random() * 256;
      const ry = Math.random() * 256;
      const rw = Math.random() * 4 + 1;
      const rh = Math.random() * 4 + 1;
      ctx.fillStyle = Math.random() > 0.5 ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.1)';
      ctx.fillRect(rx, ry, rw, rh);
    }
  }
  
  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  return texture;
}

export function createRoofTexture(): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 128;
  canvas.height = 128;
  const ctx = canvas.getContext('2d');
  if (ctx) {
    // Medieval Roof clay tile red
    ctx.fillStyle = '#991b1b';
    ctx.fillRect(0, 0, 128, 128);
    
    ctx.strokeStyle = '#7f1d1d';
    ctx.lineWidth = 3;
    const tileW = 16;
    const tileH = 32;
    
    for (let y = 0; y < 128; y += tileH) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(128, y);
      ctx.stroke();
      
      const offset = (y / tileH) % 2 === 0 ? 0 : tileW / 2;
      for (let x = -offset; x < 128 + tileW; x += tileW) {
        // Draw scallop curve
        ctx.beginPath();
        ctx.arc(x + tileW / 2, y, tileW / 2, 0, Math.PI, false);
        ctx.stroke();
      }
    }
  }
  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  return texture;
}

export function createGrassTexture(): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 256;
  const ctx = canvas.getContext('2d');
  if (ctx) {
    // Rich medieval lawn color
    ctx.fillStyle = '#15803d';
    ctx.fillRect(0, 0, 256, 256);
    
    // Mossy patches
    for (let i = 0; i < 30; i++) {
      const rx = Math.random() * 256;
      const ry = Math.random() * 256;
      const r = Math.random() * 30 + 10;
      const grad = ctx.createRadialGradient(rx, ry, 0, rx, ry, r);
      grad.addColorStop(0, '#166534');
      grad.addColorStop(1, 'transparent');
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(rx, ry, r, 0, Math.PI * 2);
      ctx.fill();
    }
    
    // Grass strands
    ctx.strokeStyle = '#22c55e';
    ctx.lineWidth = 2;
    for (let i = 0; i < 600; i++) {
      const gx = Math.random() * 256;
      const gy = Math.random() * 256;
      const len = Math.random() * 6 + 2;
      const angle = (Math.random() - 0.5) * 0.4;
      ctx.beginPath();
      ctx.moveTo(gx, gy);
      ctx.lineTo(gx + len * Math.sin(angle), gy - len * Math.cos(angle));
      ctx.stroke();
    }
  }
  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  return texture;
}

// Low-poly detailed character constructors
export function buildKnight(): THREE.Group {
  const knight = new THREE.Group();
  knight.name = 'Knight';

  // High quality materials
  const armorMat = new THREE.MeshStandardMaterial({
    color: 0x9ca3af,
    metalness: 0.85,
    roughness: 0.25,
  });
  const clothMat = new THREE.MeshStandardMaterial({
    color: 0x1d4ed8, // Royal Blue back/crest
    roughness: 0.7,
  });
  const skinMat = new THREE.MeshStandardMaterial({
    color: 0xfbcfe8, // Peach skin
    roughness: 0.6,
  });
  const goldMat = new THREE.MeshStandardMaterial({
    color: 0xf59e0b,
    metalness: 0.9,
    roughness: 0.15,
  });
  const leatherMat = new THREE.MeshStandardMaterial({
    color: 0x451a03,
    roughness: 0.85,
  });

  // Torso / Curved Breastplate
  const torsoGroup = new THREE.Group();
  torsoGroup.position.y = 0.95;

  // Steel Breastplate (using Cylinder for realistic chest shape)
  const breastplate = new THREE.Mesh(
    new THREE.CylinderGeometry(0.42, 0.32, 0.85, 12),
    armorMat
  );
  breastplate.scale.set(1.1, 1, 0.8); // Flatten slightly on Z for torso look
  breastplate.castShadow = true;
  breastplate.receiveShadow = true;
  torsoGroup.add(breastplate);

  // Plaque emblem / dynamic Royal Crest on front
  const crestMark = new THREE.Mesh(
    new THREE.BoxGeometry(0.18, 0.45, 0.05),
    clothMat
  );
  crestMark.position.set(0, 0.05, 0.34);
  torsoGroup.add(crestMark);

  const crestGoldBorder = new THREE.Mesh(
    new THREE.BoxGeometry(0.04, 0.35, 0.06),
    goldMat
  );
  crestGoldBorder.position.set(0, 0.05, 0.35);
  torsoGroup.add(crestGoldBorder);

  // Armored collar neck rim
  const neckRing = new THREE.Mesh(
    new THREE.CylinderGeometry(0.24, 0.24, 0.12, 10),
    goldMat
  );
  neckRing.position.y = 0.46;
  torsoGroup.add(neckRing);

  knight.add(torsoGroup);

  // Articulated Left Leg (supports running animation)
  const leftLeg = new THREE.Group();
  leftLeg.position.set(-0.25, 0.25, 0);
  leftLeg.name = 'LeftLeg';

  // Left Thigh armor
  const leftThigh = new THREE.Mesh(
    new THREE.CylinderGeometry(0.14, 0.11, 0.35, 8),
    armorMat
  );
  leftThigh.position.y = -0.05;
  leftLeg.add(leftThigh);

  // Left Knee Guard sphere
  const leftKnee = new THREE.Mesh(
    new THREE.SphereGeometry(0.13, 8, 8),
    goldMat
  );
  leftKnee.position.y = -0.23;
  leftLeg.add(leftKnee);

  // Left Shin Calf plate
  const leftCalf = new THREE.Mesh(
    new THREE.CylinderGeometry(0.11, 0.08, 0.22, 8),
    armorMat
  );
  leftCalf.position.y = -0.34;
  leftLeg.add(leftCalf);

  // Left Armored boot (Sabaton foot)
  const leftFoot = new THREE.Mesh(
    new THREE.BoxGeometry(0.16, 0.1, 0.28),
    armorMat
  );
  leftFoot.position.set(0, -0.45, 0.06);
  leftLeg.add(leftFoot);

  // Add decorative gold trim on foot
  const leftToeCap = new THREE.Mesh(
    new THREE.ConeGeometry(0.08, 0.08, 4),
    goldMat
  );
  leftToeCap.position.set(0, -0.45, 0.2);
  leftToeCap.rotation.x = Math.PI / 2;
  leftLeg.add(leftToeCap);

  knight.add(leftLeg);

  // Articulated Right Leg
  const rightLeg = new THREE.Group();
  rightLeg.position.set(0.25, 0.25, 0);
  rightLeg.name = 'RightLeg';

  // Right Thigh armor
  const rightThigh = new THREE.Mesh(
    new THREE.CylinderGeometry(0.14, 0.11, 0.35, 8),
    armorMat
  );
  rightThigh.position.y = -0.05;
  rightLeg.add(rightThigh);

  // Right Knee Guard sphere
  const rightKnee = new THREE.Mesh(
    new THREE.SphereGeometry(0.13, 8, 8),
    goldMat
  );
  rightKnee.position.y = -0.23;
  rightLeg.add(rightKnee);

  // Right Shin Calf plate
  const rightCalf = new THREE.Mesh(
    new THREE.CylinderGeometry(0.11, 0.08, 0.22, 8),
    armorMat
  );
  rightCalf.position.y = -0.34;
  rightLeg.add(rightCalf);

  // Right Armored boot
  const rightFoot = new THREE.Mesh(
    new THREE.BoxGeometry(0.16, 0.1, 0.28),
    armorMat
  );
  rightFoot.position.set(0, -0.45, 0.06);
  rightLeg.add(rightFoot);

  const rightToeCap = new THREE.Mesh(
    new THREE.ConeGeometry(0.08, 0.08, 4),
    goldMat
  );
  rightToeCap.position.set(0, -0.45, 0.2);
  rightToeCap.rotation.x = Math.PI / 2;
  rightLeg.add(rightToeCap);

  knight.add(rightLeg);

  // Belt / Cuirass hip girdle
  const beltMat = new THREE.MeshStandardMaterial({ color: 0x3f2305, roughness: 0.9 });
  const belt = new THREE.Mesh(
    new THREE.CylinderGeometry(0.38, 0.38, 0.14, 10),
    beltMat
  );
  belt.position.y = 0.58;
  knight.add(belt);

  // Curved Buckle (Gold Ornate)
  const buckle = new THREE.Mesh(
    new THREE.TorusGeometry(0.1, 0.03, 8, 12),
    goldMat
  );
  buckle.position.set(0, 0.58, 0.36);
  knight.add(buckle);

  // Head and Rounded Armet Helmet Group
  const headGroup = new THREE.Group();
  headGroup.name = 'HeadGroup';
  headGroup.position.set(0, 1.6, 0);

  // Inner face (represented by dark visor backing)
  const faceBase = new THREE.Mesh(
    new THREE.SphereGeometry(0.24, 12, 12),
    skinMat
  );
  headGroup.add(faceBase);

  // Full Steel Knight Dome Helmet (Armet helm)
  const helmDome = new THREE.Mesh(
    new THREE.SphereGeometry(0.28, 16, 16),
    armorMat
  );
  helmDome.position.set(0, 0.06, 0);
  headGroup.add(helmDome);

  // Pointy Knight visor plate
  const visorMesh = new THREE.Mesh(
    new THREE.CylinderGeometry(0.29, 0.29, 0.18, 10, 1, false, 0, Math.PI),
    armorMat
  );
  visorMesh.position.set(0, 0.02, 0.05);
  visorMesh.rotation.y = -Math.PI / 2;
  headGroup.add(visorMesh);

  // Visor glowing eye slit (emissive cyan force)
  const glowingVisorMat = new THREE.MeshStandardMaterial({
    color: 0x60a5fa,
    emissive: 0x3b82f6,
    emissiveIntensity: 1.5,
  });
  const eyesSlit = new THREE.Mesh(
    new THREE.BoxGeometry(0.25, 0.04, 0.1),
    glowingVisorMat
  );
  eyesSlit.position.set(0, 0.06, 0.25);
  headGroup.add(eyesSlit);

  // Helmet gold crown crest ridge
  const helmSpine = new THREE.Mesh(
    new THREE.TorusGeometry(0.28, 0.03, 6, 16, Math.PI / 1.5),
    goldMat
  );
  helmSpine.position.set(0, 0.08, -0.02);
  helmSpine.rotation.z = Math.PI / 2;
  headGroup.add(helmSpine);

  // Dynamic sweeping feather Plume / Crest
  const plumeGroup = new THREE.Group();
  plumeGroup.position.set(0, 0.34, -0.12);
  
  // Create beautiful segmented curve plumes
  const plumeCount = 5;
  for (let i = 0; i < plumeCount; i++) {
    const scale = 1.0 - i * 0.15;
    const plumePart = new THREE.Mesh(
      new THREE.SphereGeometry(0.12 * scale, 8, 8),
      clothMat
    );
    plumePart.position.set(0, (i * 0.08), -i * 0.14);
    plumeGroup.add(plumePart);
  }
  headGroup.add(plumeGroup);

  knight.add(headGroup);

  // Articulated Left Arm (holds shield)
  const leftArmGroup = new THREE.Group();
  leftArmGroup.name = 'LeftArmGroup';
  leftArmGroup.position.set(-0.58, 1.25, 0);

  // Shoulder Ornate Pauldron sphere
  const leftPauldron = new THREE.Mesh(
    new THREE.SphereGeometry(0.18, 10, 10),
    goldMat
  );
  leftArmGroup.add(leftPauldron);

  // Arm cylinders
  const leftBicep = new THREE.Mesh(
    new THREE.CylinderGeometry(0.09, 0.08, 0.32, 8),
    armorMat
  );
  leftBicep.position.y = -0.16;
  leftArmGroup.add(leftBicep);

  const leftElbow = new THREE.Mesh(
    new THREE.SphereGeometry(0.095, 8, 8),
    armorMat
  );
  leftElbow.position.y = -0.32;
  leftArmGroup.add(leftElbow);

  const leftHand = new THREE.Mesh(
    new THREE.CylinderGeometry(0.08, 0.07, 0.22, 8),
    armorMat
  );
  leftHand.position.y = -0.42;
  leftArmGroup.add(leftHand);

  // Ornate Shield Group
  const shieldGroup = new THREE.Group();
  shieldGroup.position.set(-0.2, -0.35, 0.18);
  shieldGroup.rotation.y = Math.PI / 4;

  // Heater Shield base (curved shield shape)
  const shieldBase = new THREE.Mesh(
    new THREE.BoxGeometry(0.08, 0.8, 0.55),
    armorMat
  );
  shieldGroup.add(shieldBase);

  // Gold shield protective rim decoration
  const shieldRim = new THREE.Mesh(
    new THREE.BoxGeometry(0.1, 0.82, 0.59),
    goldMat
  );
  shieldRim.position.x = -0.01;
  shieldRim.scale.set(0.5, 1.01, 1.01);
  shieldGroup.add(shieldRim);

  // Royal Blue Shield Cross / Emblem
  const crossV = new THREE.Mesh(
    new THREE.BoxGeometry(0.12, 0.68, 0.04),
    clothMat
  );
  crossV.position.set(0.04, 0, 0);
  shieldGroup.add(crossV);

  const crossH = new THREE.Mesh(
    new THREE.BoxGeometry(0.12, 0.16, 0.44),
    clothMat
  );
  crossH.position.set(0.04, 0.08, 0);
  shieldGroup.add(crossH);

  leftArmGroup.add(shieldGroup);
  knight.add(leftArmGroup);

  // Articulated Right Arm (holds sword)
  const rightArmGroup = new THREE.Group();
  rightArmGroup.name = 'RightArmGroup';
  rightArmGroup.position.set(0.58, 1.25, 0);

  // Shoulder Pauldron
  const rightPauldron = new THREE.Mesh(
    new THREE.SphereGeometry(0.18, 10, 10),
    goldMat
  );
  rightArmGroup.add(rightPauldron);

  // Arm cylinders
  const rightBicep = new THREE.Mesh(
    new THREE.CylinderGeometry(0.09, 0.08, 0.32, 8),
    armorMat
  );
  rightBicep.position.y = -0.16;
  rightArmGroup.add(rightBicep);

  const rightElbow = new THREE.Mesh(
    new THREE.SphereGeometry(0.095, 8, 8),
    armorMat
  );
  rightElbow.position.y = -0.32;
  rightArmGroup.add(rightElbow);

  const rightHand = new THREE.Mesh(
    new THREE.CylinderGeometry(0.08, 0.07, 0.22, 8),
    armorMat
  );
  rightHand.position.y = -0.42;
  rightArmGroup.add(rightHand);

  // Legendary Sacred Knightly Sword
  const swordGroup = new THREE.Group();
  swordGroup.name = 'SwordGroup';
  swordGroup.position.set(0, -0.48, 0.1);
  swordGroup.rotation.x = -Math.PI / 2; // Pointing forward

  // Leather grip hilt
  const grip = new THREE.Mesh(
    new THREE.CylinderGeometry(0.038, 0.038, 0.24, 8),
    leatherMat
  );
  grip.position.y = -0.12;
  swordGroup.add(grip);

  // Ornate round gold pommel
  const pommel = new THREE.Mesh(
    new THREE.SphereGeometry(0.07, 8, 8),
    goldMat
  );
  pommel.position.y = -0.24;
  swordGroup.add(pommel);

  // Ornate Gold Crossguard with wing curls
  const guardGroup = new THREE.Group();
  guardGroup.position.y = 0;
  
  const mainGuardBar = new THREE.Mesh(
    new THREE.BoxGeometry(0.38, 0.05, 0.06),
    goldMat
  );
  guardGroup.add(mainGuardBar);

  const guardLugL = new THREE.Mesh(
    new THREE.SphereGeometry(0.05, 6, 6),
    goldMat
  );
  guardLugL.position.set(-0.19, 0.02, 0);
  guardGroup.add(guardLugL);

  const guardLugR = new THREE.Mesh(
    new THREE.SphereGeometry(0.05, 6, 6),
    goldMat
  );
  guardLugR.position.set(0.19, 0.02, 0);
  guardGroup.add(guardLugR);

  swordGroup.add(guardGroup);

  // Polished Steel Slanted Blade (Diamond shape cross section via scale)
  const blade = new THREE.Mesh(
    new THREE.BoxGeometry(0.09, 0.95, 0.03),
    armorMat
  );
  blade.position.y = 0.48;
  swordGroup.add(blade);

  // Engraved pulsing rune line in the middle of blade
  const runeLineMat = new THREE.MeshStandardMaterial({
    color: 0x93c5fd,
    emissive: 0x3b82f6,
    emissiveIntensity: 1.2,
  });
  const runeVane = new THREE.Mesh(
    new THREE.BoxGeometry(0.015, 0.7, 0.035),
    runeLineMat
  );
  runeVane.position.set(0, 0.45, 0.002);
  swordGroup.add(runeVane);

  // Pointy Blade tip
  const bladeTip = new THREE.Mesh(
    new THREE.ConeGeometry(0.05, 0.16, 4),
    armorMat
  );
  bladeTip.position.y = 1.03;
  bladeTip.rotation.y = Math.PI / 4;
  swordGroup.add(bladeTip);

  rightArmGroup.add(swordGroup);
  knight.add(rightArmGroup);

  return knight;
}

export function buildPrincess(): THREE.Group {
  const princess = new THREE.Group();
  princess.name = 'Princess';

  // Materials
  const dressMat = new THREE.MeshStandardMaterial({
    color: 0xec4899, // Rich bright hot pink
    roughness: 0.8,
  });
  const laceMat = new THREE.MeshStandardMaterial({
    color: 0xfdf2f8, // Soft pinkish white cotton
    roughness: 0.9,
  });
  const skinMat = new THREE.MeshStandardMaterial({
    color: 0xfbcfe8, // Soft peach skin
    roughness: 0.65,
  });
  const hairMat = new THREE.MeshStandardMaterial({
    color: 0xca8a04, // Golden blonde hair
    roughness: 0.75,
  });
  const crownMat = new THREE.MeshStandardMaterial({
    color: 0xfacc15, // Radiant crown gold
    metalness: 0.95,
    roughness: 0.1,
  });
  const gemMat = new THREE.MeshStandardMaterial({
    color: 0xef4444, // Rubies
    emissive: 0x991b1b,
    roughness: 0.2,
  });

  // Layered Pleated Princess Ballgown
  const dressGroup = new THREE.Group();
  dressGroup.position.y = 0.55;

  // Main dome flow
  const gownBase = new THREE.Mesh(
    new THREE.CylinderGeometry(0.18, 0.58, 1.1, 14),
    dressMat
  );
  gownBase.castShadow = true;
  gownBase.receiveShadow = true;
  dressGroup.add(gownBase);

  // Decorative detailed hem ruffle ring (pleats)
  const ruffleRingRadius = 0.56;
  for (let i = 0; i < 14; i++) {
    const angle = (i / 14) * Math.PI * 2;
    const ruffle = new THREE.Mesh(
      new THREE.CylinderGeometry(0.06, 0.06, 1.1, 6),
      laceMat
    );
    ruffle.position.set(ruffleRingRadius * Math.cos(angle), 0, ruffleRingRadius * Math.sin(angle));
    ruffle.rotation.y = angle;
    dressGroup.add(ruffle);
  }

  // Gown central ribbons / vertical lace panels
  const ribbonA = new THREE.Mesh(
    new THREE.BoxGeometry(0.12, 1.0, 0.05),
    laceMat
  );
  ribbonA.position.set(0, 0.05, 0.38);
  ribbonA.rotation.x = -Math.PI * 0.15; // Angled down gown shape
  dressGroup.add(ribbonA);

  princess.add(dressGroup);

  // Corset Torso
  const torso = new THREE.Group();
  torso.position.y = 1.15;

  const corset = new THREE.Mesh(
    new THREE.CylinderGeometry(0.18, 0.14, 0.35, 10),
    dressMat
  );
  corset.castShadow = true;
  torso.add(corset);

  const corsetChestLace = new THREE.Mesh(
    new THREE.BoxGeometry(0.08, 0.25, 0.15),
    laceMat
  );
  corsetChestLace.position.set(0, 0.05, 0.12);
  torso.add(corsetChestLace);

  princess.add(torso);

  // Head and Flowing Beautiful Hair Group
  const headGroup = new THREE.Group();
  headGroup.position.set(0, 1.48, 0);

  // Round face
  const face = new THREE.Mesh(
    new THREE.SphereGeometry(0.2, 12, 12),
    skinMat
  );
  headGroup.add(face);

  // Face elements: Cute blue eyes
  const eyeL = new THREE.Mesh(
    new THREE.SphereGeometry(0.02, 6, 6),
    new THREE.MeshBasicMaterial({ color: 0x1e3a8a })
  );
  eyeL.position.set(-0.06, 0.03, 0.16);
  headGroup.add(eyeL);

  const eyeR = new THREE.Mesh(
    new THREE.SphereGeometry(0.02, 6, 6),
    new THREE.MeshBasicMaterial({ color: 0x1e3a8a })
  );
  eyeR.position.set(0.06, 0.03, 0.16);
  headGroup.add(eyeR);

  // Volume Flowing Blonde Hair structure
  const hairGroup = new THREE.Group();

  // Back mane
  const hairBack = new THREE.Mesh(
    new THREE.SphereGeometry(0.22, 12, 12),
    hairMat
  );
  hairBack.position.set(0, 0.02, -0.06);
  hairBack.scale.set(1.05, 1.1, 1);
  hairGroup.add(hairBack);

  // Hanging Twin Ringlet Cascades (extremely stylish and voluminous)
  const ponytailL = new THREE.Group();
  ponytailL.position.set(-0.16, -0.05, -0.05);
  for (let i = 0; i < 5; i++) {
    const curl = new THREE.Mesh(
      new THREE.SphereGeometry(0.08 - i * 0.01, 8, 8),
      hairMat
    );
    curl.position.set(-0.02 * i, -i * 0.1, 0);
    ponytailL.add(curl);
  }
  hairGroup.add(ponytailL);

  const ponytailR = new THREE.Group();
  ponytailR.position.set(0.16, -0.05, -0.05);
  for (let i = 0; i < 5; i++) {
    const curl = new THREE.Mesh(
      new THREE.SphereGeometry(0.08 - i * 0.01, 8, 8),
      hairMat
    );
    curl.position.set(0.02 * i, -i * 0.1, 0);
    ponytailR.add(curl);
  }
  hairGroup.add(ponytailR);

  // Front cute fringe bangs
  const bangs = new THREE.Mesh(
    new THREE.BoxGeometry(0.24, 0.1, 0.15),
    hairMat
  );
  bangs.position.set(0, 0.15, 0.11);
  hairGroup.add(bangs);

  headGroup.add(hairGroup);

  // Detailed Royal Crown / Tiara
  const crown = new THREE.Group();
  crown.position.y = 0.22;

  // Base gold ring
  const crownRing = new THREE.Mesh(
    new THREE.CylinderGeometry(0.11, 0.11, 0.05, 10, 1, true),
    crownMat
  );
  crown.add(crownRing);

  // Ornate Spires with embedded Rubies
  const spireCount = 5;
  for (let i = 0; i < spireCount; i++) {
    const angle = (i / spireCount) * Math.PI * 2;
    const spireX = 0.1 * Math.cos(angle);
    const spireZ = 0.1 * Math.sin(angle);
    
    // Gold spike
    const spike = new THREE.Mesh(
      new THREE.ConeGeometry(0.022, 0.12, 4),
      crownMat
    );
    spike.position.set(spireX, 0.06, spireZ);
    crown.add(spike);

    // Gem on spike tip
    const jewel = new THREE.Mesh(
      new THREE.SphereGeometry(0.018, 5, 5),
      gemMat
    );
    jewel.position.set(spireX, 0.12, spireZ);
    crown.add(jewel);
  }
  headGroup.add(crown);

  princess.add(headGroup);

  // Articulated Puff-Sleeve Arms
  const leftArm = new THREE.Group();
  leftArm.position.set(-0.25, 1.15, 0);
  leftArm.rotation.z = Math.PI / 5;

  // Pink puff shoulder
  const leftPuff = new THREE.Mesh(
    new THREE.SphereGeometry(0.1, 8, 8),
    dressMat
  );
  leftArm.add(leftPuff);

  // Peach slender arm
  const leftForearm = new THREE.Mesh(
    new THREE.CylinderGeometry(0.04, 0.035, 0.35, 8),
    skinMat
  );
  leftForearm.position.y = -0.18;
  leftArm.add(leftForearm);
  princess.add(leftArm);

  const rightArmGroup = new THREE.Group();
  rightArmGroup.name = 'RightArmGroup';
  rightArmGroup.position.set(0.25, 1.15, 0);

  // Puff sleeve right
  const rightPuff = new THREE.Mesh(
    new THREE.SphereGeometry(0.1, 8, 8),
    dressMat
  );
  rightArmGroup.add(rightPuff);

  const rightForearmJoint = new THREE.Group();
  rightForearmJoint.position.y = 0;
  rightForearmJoint.rotation.z = -Math.PI / 3; // Friendly waving setup

  const rightForearm = new THREE.Mesh(
    new THREE.CylinderGeometry(0.04, 0.035, 0.35, 8),
    skinMat
  );
  rightForearm.position.y = -0.18;
  rightForearmJoint.add(rightForearm);

  // Waving hand palm
  const hand = new THREE.Mesh(
    new THREE.SphereGeometry(0.045, 6, 6),
    skinMat
  );
  hand.position.y = -0.36;
  rightForearmJoint.add(hand);

  rightArmGroup.add(rightForearmJoint);
  princess.add(rightArmGroup);

  return princess;
}

export function buildGargoyle(): THREE.Group {
  const gargoyle = new THREE.Group();
  gargoyle.name = 'Gargoyle';

  // High fidelity stone materials
  const stoneMat = new THREE.MeshStandardMaterial({
    color: 0x4b5563,
    roughness: 0.95,
    metalness: 0.1,
  });
  const darkStoneMat = new THREE.MeshStandardMaterial({
    color: 0x374151,
    roughness: 0.9,
  });
  const hornMat = new THREE.MeshStandardMaterial({
    color: 0x1f2937,
    roughness: 0.8,
  });
  const eyesMat = new THREE.MeshStandardMaterial({
    color: 0xef4444,
    emissive: 0xef4444,
    emissiveIntensity: 1.8,
    roughness: 0.5,
  });

  // Segmented Demonic Stone Torso / Ribcage
  const bodyGroup = new THREE.Group();
  bodyGroup.position.y = 0.55;

  // Muscular chest boulder
  const upperChest = new THREE.Mesh(
    new THREE.CylinderGeometry(0.38, 0.28, 0.45, 10),
    stoneMat
  );
  upperChest.scale.set(1.2, 1, 0.8);
  upperChest.castShadow = true;
  bodyGroup.add(upperChest);

  // Lower waist stone cylinder
  const stoneAbdomen = new THREE.Mesh(
    new THREE.CylinderGeometry(0.24, 0.26, 0.25, 8),
    darkStoneMat
  );
  stoneAbdomen.position.y = -0.3;
  bodyGroup.add(stoneAbdomen);

  // Gargoyle back hump
  const hump = new THREE.Mesh(
    new THREE.SphereGeometry(0.22, 8, 8),
    stoneMat
  );
  hump.position.set(0, 0.1, -0.16);
  bodyGroup.add(hump);

  gargoyle.add(bodyGroup);

  // Snout Head with reptilian details
  const headGroup = new THREE.Group();
  headGroup.position.set(0, 0.92, 0.12);

  const faceSkull = new THREE.Mesh(
    new THREE.SphereGeometry(0.18, 10, 10),
    stoneMat
  );
  headGroup.add(faceSkull);

  // Demonic Snout / Jaw jaws
  const muzzle = new THREE.Mesh(
    new THREE.BoxGeometry(0.16, 0.12, 0.2),
    stoneMat
  );
  muzzle.position.set(0, -0.05, 0.16);
  headGroup.add(muzzle);

  // Curved segmented horns (built organic using three cones nested)
  const leftHornGroup = new THREE.Group();
  leftHornGroup.position.set(-0.1, 0.12, 0);
  leftHornGroup.rotation.set(-Math.PI / 4, 0, -Math.PI / 6);
  const hornL1 = new THREE.Mesh(new THREE.ConeGeometry(0.05, 0.18, 5), hornMat);
  leftHornGroup.add(hornL1);
  const hornL2 = new THREE.Mesh(new THREE.ConeGeometry(0.03, 0.12, 5), hornMat);
  hornL2.position.set(0, 0.12, 0.03);
  hornL2.rotation.x = -Math.PI / 8;
  leftHornGroup.add(hornL2);
  headGroup.add(leftHornGroup);

  const rightHornGroup = new THREE.Group();
  rightHornGroup.position.set(0.1, 0.12, 0);
  rightHornGroup.rotation.set(-Math.PI / 4, 0, Math.PI / 6);
  const hornR1 = new THREE.Mesh(new THREE.ConeGeometry(0.05, 0.18, 5), hornMat);
  rightHornGroup.add(hornR1);
  const hornR2 = new THREE.Mesh(new THREE.ConeGeometry(0.03, 0.12, 5), hornMat);
  hornR2.position.set(0, 0.12, 0.03);
  hornR2.rotation.x = -Math.PI / 8;
  rightHornGroup.add(hornR2);
  headGroup.add(rightHornGroup);

  // Glowing sinister slitted red eyes
  const eyeL = new THREE.Mesh(
    new THREE.BoxGeometry(0.05, 0.03, 0.04),
    eyesMat
  );
  eyeL.position.set(-0.07, 0.04, 0.15);
  headGroup.add(eyeL);

  const eyeR = new THREE.Mesh(
    new THREE.BoxGeometry(0.05, 0.03, 0.04),
    eyesMat
  );
  eyeR.position.set(0.07, 0.04, 0.15);
  headGroup.add(eyeR);

  gargoyle.add(headGroup);

  // Left Bat Wing (Articulation is crucial)
  const wingLGroup = new THREE.Group();
  wingLGroup.name = 'WingL';
  wingLGroup.position.set(-0.35, 0.72, -0.2);

  // Bones structure (cylinders)
  const wingBoneL1 = new THREE.Mesh(
    new THREE.CylinderGeometry(0.04, 0.03, 0.45, 6),
    darkStoneMat
  );
  wingBoneL1.position.set(-0.2, 0.2, 0);
  wingBoneL1.rotation.z = Math.PI / 4;
  wingLGroup.add(wingBoneL1);

  const wingBoneL2 = new THREE.Mesh(
    new THREE.CylinderGeometry(0.03, 0.02, 0.55, 6),
    darkStoneMat
  );
  wingBoneL2.position.set(-0.5, 0.1, 0.1);
  wingBoneL2.rotation.z = -Math.PI / 3;
  wingLGroup.add(wingBoneL2);

  // Membrane flaps (tapered thin skin meshes)
  const membraneL = new THREE.Mesh(
    new THREE.BoxGeometry(0.65, 0.42, 0.02),
    stoneMat
  );
  membraneL.position.set(-0.35, 0, -0.02);
  membraneL.rotation.y = Math.PI / 8;
  wingLGroup.add(membraneL);

  gargoyle.add(wingLGroup);

  // Right Bat Wing
  const wingRGroup = new THREE.Group();
  wingRGroup.name = 'WingR';
  wingRGroup.position.set(0.35, 0.72, -0.2);

  // Bones structure
  const wingBoneR1 = new THREE.Mesh(
    new THREE.CylinderGeometry(0.04, 0.03, 0.45, 6),
    darkStoneMat
  );
  wingBoneR1.position.set(0.2, 0.2, 0);
  wingBoneR1.rotation.z = -Math.PI / 4;
  wingRGroup.add(wingBoneR1);

  const wingBoneR2 = new THREE.Mesh(
    new THREE.CylinderGeometry(0.03, 0.02, 0.55, 6),
    darkStoneMat
  );
  wingBoneR2.position.set(0.5, 0.1, 0.1);
  wingBoneR2.rotation.z = Math.PI / 3;
  wingRGroup.add(wingBoneR2);

  const membraneR = new THREE.Mesh(
    new THREE.BoxGeometry(0.65, 0.42, 0.02),
    stoneMat
  );
  membraneR.position.set(0.35, 0, -0.02);
  membraneR.rotation.y = -Math.PI / 8;
  wingRGroup.add(membraneR);

  gargoyle.add(wingRGroup);

  // Long Spiked Stone Tail
  const tailGroup = new THREE.Group();
  tailGroup.position.set(0, 0.32, -0.25);
  tailGroup.rotation.x = -Math.PI / 4;

  const tailLength = 6;
  for (let i = 0; i < tailLength; i++) {
    const rScale = 1.0 - i * 0.12;
    const tailCol = new THREE.Mesh(
      new THREE.CylinderGeometry(0.06 * rScale, 0.04 * rScale, 0.18, 6),
      darkStoneMat
    );
    tailCol.position.set(0, 0, -i * 0.15);
    tailCol.rotation.x = Math.sin(i * 0.5) * 0.2;
    tailGroup.add(tailCol);

    // Add tiny side spikes
    if (i % 2 === 0) {
      const tailSpikeL = new THREE.Mesh(new THREE.ConeGeometry(0.02, 0.05, 4), hornMat);
      tailSpikeL.position.set(-0.06, 0, -i * 0.15);
      tailSpikeL.rotation.z = -Math.PI / 2;
      tailGroup.add(tailSpikeL);

      const tailSpikeR = new THREE.Mesh(new THREE.ConeGeometry(0.02, 0.05, 4), hornMat);
      tailSpikeR.position.set(0.06, 0, -i * 0.15);
      tailSpikeR.rotation.z = Math.PI / 2;
      tailGroup.add(tailSpikeR);
    }
  }
  // Spade point tip
  const broadTip = new THREE.Mesh(
    new THREE.ConeGeometry(0.05, 0.12, 4),
    hornMat
  );
  broadTip.position.set(0, 0, -tailLength * 0.15 - 0.05);
  broadTip.rotation.x = -Math.PI / 2;
  tailGroup.add(broadTip);

  gargoyle.add(tailGroup);

  // Heavy Clawed Legs (Segments look organic!)
  const leftLeg = new THREE.Group();
  leftLeg.position.set(-0.24, 0.25, 0.05);

  const thighL = new THREE.Mesh(
    new THREE.CylinderGeometry(0.12, 0.09, 0.32, 8),
    stoneMat
  );
  leftLeg.add(thighL);

  const clawL = new THREE.Mesh(
    new THREE.BoxGeometry(0.14, 0.08, 0.22),
    darkStoneMat
  );
  clawL.position.set(0, -0.22, 0.05);
  leftLeg.add(clawL);

  // Claw talons (Cones)
  for (let t = 0; t < 3; t++) {
    const toe = new THREE.Mesh(new THREE.ConeGeometry(0.025, 0.06, 4), hornMat);
    toe.position.set(-0.04 + t * 0.04, -0.22, 0.16);
    toe.rotation.x = Math.PI / 2;
    leftLeg.add(toe);
  }
  gargoyle.add(leftLeg);

  const rightLeg = new THREE.Group();
  rightLeg.position.set(0.24, 0.25, 0.05);

  const thighR = new THREE.Mesh(
    new THREE.CylinderGeometry(0.12, 0.09, 0.32, 8),
    stoneMat
  );
  rightLeg.add(thighR);

  const clawR = new THREE.Mesh(
    new THREE.BoxGeometry(0.14, 0.08, 0.22),
    darkStoneMat
  );
  clawR.position.set(0, -0.22, 0.05);
  rightLeg.add(clawR);

  for (let t = 0; t < 3; t++) {
    const toe = new THREE.Mesh(new THREE.ConeGeometry(0.025, 0.06, 4), hornMat);
    toe.position.set(-0.04 + t * 0.04, -0.22, 0.16);
    toe.rotation.x = Math.PI / 2;
    rightLeg.add(toe);
  }
  gargoyle.add(rightLeg);

  return gargoyle;
}

export function buildShadowHound(): THREE.Group {
  const hound = new THREE.Group();
  hound.name = 'ShadowHound';

  // High fidelity materials for cosmic shadow beast
  const shadowEssenceMat = new THREE.MeshStandardMaterial({
    color: 0x3b0764, // Deep gothic shadow purple
    roughness: 0.5,
  });
  const chestPlateMat = new THREE.MeshStandardMaterial({
    color: 0x1e1b4b, // Deep indigo bone plates
    roughness: 0.7,
  });
  const spineSpikesMat = new THREE.MeshStandardMaterial({
    color: 0xd946ef, // Radiant magenta crystal
    emissive: 0xa21caf,
    emissiveIntensity: 1.2,
  });
  const eyesMat = new THREE.MeshStandardMaterial({
    color: 0xef4444,
    emissive: 0xef4444,
    emissiveIntensity: 2.0,
  });
  const fangMat = new THREE.MeshStandardMaterial({
    color: 0xf3f4f6, // white raw fang tooth
    roughness: 0.2,
  });

  // Canine Wolf shape Torso (heavy broad chest, sleek thin waist)
  const ribcage = new THREE.Mesh(
    new THREE.BoxGeometry(0.48, 0.48, 0.65),
    shadowEssenceMat
  );
  ribcage.position.set(0, 0.48, 0.1);
  ribcage.castShadow = true;
  hound.add(ribcage);

  // Exaggerated demonic muscle shoulders (Sphere)
  const deepShoulder = new THREE.Mesh(
    new THREE.SphereGeometry(0.24, 10, 10),
    chestPlateMat
  );
  deepShoulder.position.set(0, 0.56, 0.25);
  hound.add(deepShoulder);

  const waist = new THREE.Mesh(
    new THREE.CylinderGeometry(0.2, 0.14, 0.38, 8),
    shadowEssenceMat
  );
  waist.position.set(0, 0.42, -0.32);
  waist.rotation.x = Math.PI / 2;
  hound.add(waist);

  // Sharp crystal spines running down vertebrae
  for (let i = 0; i < 4; i++) {
    const spike = new THREE.Mesh(
      new THREE.ConeGeometry(0.045, 0.22, 4),
      spineSpikesMat
    );
    spike.position.set(0, 0.72 - i * 0.05, 0.28 - i * 0.2);
    spike.rotation.x = -Math.PI / 5;
    hound.add(spike);
  }

  // Slender lupine head group with snappable jaw
  const headGroup = new THREE.Group();
  headGroup.position.set(0, 0.65, 0.5);

  const skullGlobe = new THREE.Mesh(
    new THREE.SphereGeometry(0.18, 10, 10),
    shadowEssenceMat
  );
  headGroup.add(skullGlobe);

  // Long wolf snout muzzle
  const snout = new THREE.Mesh(
    new THREE.BoxGeometry(0.14, 0.12, 0.26),
    shadowEssenceMat
  );
  snout.position.set(0, -0.04, 0.2);
  headGroup.add(snout);

  // Sinister curved wolf ears
  const leftEar = new THREE.Mesh(new THREE.ConeGeometry(0.04, 0.18, 4), shadowEssenceMat);
  leftEar.position.set(-0.11, 0.16, -0.04);
  leftEar.rotation.set(0.1, 0, 0.35);
  headGroup.add(leftEar);

  const rightEar = new THREE.Mesh(new THREE.ConeGeometry(0.04, 0.18, 4), shadowEssenceMat);
  rightEar.position.set(0.11, 0.16, -0.04);
  rightEar.rotation.set(0.1, 0, -0.35);
  headGroup.add(rightEar);

  // Tiny menacing white teeth fangs in lower snout
  for (let f = 0; f < 2; f++) {
    const fang = new THREE.Mesh(new THREE.ConeGeometry(0.015, 0.05, 4), fangMat);
    fang.position.set(-0.04 + f * 0.08, -0.1, 0.26);
    fang.rotation.x = Math.PI;
    headGroup.add(fang);
  }

  // Beady slitted glowing eyes
  const eyeL = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.04, 0.04), eyesMat);
  eyeL.position.set(-0.08, 0.04, 0.14);
  headGroup.add(eyeL);

  const eyeR = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.04, 0.04), eyesMat);
  eyeR.position.set(0.08, 0.04, 0.14);
  headGroup.add(eyeR);

  hound.add(headGroup);

  // Animated Wolf Legs (distinct limb joint bends)
  const legGeo = new THREE.CylinderGeometry(0.08, 0.06, 0.35, 6);

  // Front Left
  const flLeg = new THREE.Group(); flLeg.name = 'FLLeg'; flLeg.position.set(-0.2, 0.18, 0.3);
  const flThigh = new THREE.Mesh(legGeo, shadowEssenceMat); flLeg.add(flThigh);
  const flPaw = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.06, 0.14), chestPlateMat); flPaw.position.set(0, -0.2, 0.04); flLeg.add(flPaw);
  hound.add(flLeg);

  // Front Right
  const frLeg = new THREE.Group(); frLeg.name = 'FRLeg'; frLeg.position.set(0.2, 0.18, 0.3);
  const frThigh = new THREE.Mesh(legGeo, shadowEssenceMat); frLeg.add(frThigh);
  const frPaw = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.06, 0.14), chestPlateMat); frPaw.position.set(0, -0.2, 0.04); frLeg.add(frPaw);
  hound.add(frLeg);

  // Back Left
  const blLeg = new THREE.Group(); blLeg.name = 'BLLeg'; blLeg.position.set(-0.2, 0.18, -0.32);
  const blThigh = new THREE.Mesh(legGeo, shadowEssenceMat); blLeg.add(blThigh);
  const blPaw = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.06, 0.14), chestPlateMat); blPaw.position.set(0, -0.2, 0.04); blLeg.add(blPaw);
  hound.add(blLeg);

  // Back Right
  const brLeg = new THREE.Group(); brLeg.name = 'BRLeg'; brLeg.position.set(0.2, 0.18, -0.32);
  const brThigh = new THREE.Mesh(legGeo, shadowEssenceMat); brLeg.add(brThigh);
  const brPaw = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.06, 0.14), chestPlateMat); brPaw.position.set(0, -0.2, 0.04); brLeg.add(brPaw);
  hound.add(brLeg);

  // Long Spiked Whip Tail
  const tailGroup = new THREE.Group();
  tailGroup.position.set(0, 0.52, -0.5);
  tailGroup.rotation.x = -Math.PI / 4;

  const tailSpine = new THREE.Mesh(
    new THREE.BoxGeometry(0.05, 0.05, 0.55),
    shadowEssenceMat
  );
  tailSpine.position.z = -0.25;
  tailGroup.add(tailSpine);

  // Glowing tail pommel spike tip
  const tailTip = new THREE.Mesh(
    new THREE.ConeGeometry(0.04, 0.14, 4),
    spineSpikesMat
  );
  tailTip.position.set(0, 0, -0.56);
  tailTip.rotation.x = -Math.PI / 2;
  tailGroup.add(tailTip);

  hound.add(tailGroup);

  return hound;
}

export function buildGolem(): THREE.Group {
  const golem = new THREE.Group();
  golem.name = 'StoneGolem';

  // High quality magma golem materials
  const stoneMat = new THREE.MeshStandardMaterial({
    color: 0x3f3f46, // Dark slate rock
    roughness: 1.0,
  });
  const coreMat = new THREE.MeshStandardMaterial({
    color: 0xf59e0b, // Radiant lava orange
    emissive: 0xd97706,
    emissiveIntensity: 2.5,
    roughness: 0.4,
  });
  const ancientRuneMat = new THREE.MeshStandardMaterial({
    color: 0xf97316,
    emissive: 0xe02424,
    emissiveIntensity: 1.8,
  });

  // Massive Fragmented Torso (Stacked lava-infused boulders)
  const chestGroup = new THREE.Group();
  chestGroup.position.y = 1.9;

  // Broad curved stone chest armor plates
  const blockChest = new THREE.Mesh(
    new THREE.CylinderGeometry(0.9, 0.65, 1.2, 10),
    stoneMat
  );
  blockChest.scale.set(1.1, 1, 0.84);
  chestGroup.add(blockChest);

  // Glowing core furnace slot
  const magmaOven = new THREE.Mesh(
    new THREE.BoxGeometry(0.68, 0.45, 0.15),
    coreMat
  );
  magmaOven.position.set(0, 0, 0.52);
  chestGroup.add(magmaOven);

  // Runes engraved lines running down golem side shoulders
  const runesL = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.8, 0.05), ancientRuneMat);
  runesL.position.set(-0.84, 0.1, 0.2);
  chestGroup.add(runesL);

  const runesR = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.8, 0.05), ancientRuneMat);
  runesR.position.set(0.84, 0.1, 0.2);
  chestGroup.add(runesR);

  golem.add(chestGroup);

  // Iron-like stone dome skull sitting low in shoulders
  const headGroup = new THREE.Group();
  headGroup.position.set(0, 2.55, 0.12);

  const stoneTop = new THREE.Mesh(
    new THREE.SphereGeometry(0.32, 10, 10),
    stoneMat
  );
  stoneTop.scale.set(1.1, 0.95, 1.0);
  headGroup.add(stoneTop);

  // Molten fiery single cyclops horizontal visor slit
  const visorSlit = new THREE.Mesh(
    new THREE.BoxGeometry(0.42, 0.06, 0.22),
    coreMat
  );
  visorSlit.position.set(0, 0.04, 0.21);
  headGroup.add(visorSlit);

  golem.add(headGroup);

  // Giant Boulder Shoulder joints (Pauldrons)
  const shoulderL = new THREE.Mesh(
    new THREE.SphereGeometry(0.42, 12, 12),
    stoneMat
  );
  shoulderL.position.set(-1.15, 2.15, 0);
  golem.add(shoulderL);

  const shoulderR = new THREE.Mesh(
    new THREE.SphereGeometry(0.42, 12, 12),
    stoneMat
  );
  shoulderR.position.set(1.15, 2.15, 0);
  golem.add(shoulderR);

  // Articulated left arm
  const lArmGroup = new THREE.Group();
  lArmGroup.name = 'LArmGroup';
  lArmGroup.position.set(-1.15, 2.15, 0);

  // upper segmented rock
  const rockUpperL = new THREE.Mesh(
    new THREE.CylinderGeometry(0.24, 0.2, 0.7, 8),
    stoneMat
  );
  rockUpperL.position.y = -0.35;
  lArmGroup.add(rockUpperL);

  // huge muscular forefist boulder
  const rockForearmL = new THREE.Mesh(
    new THREE.BoxGeometry(0.44, 0.8, 0.44),
    stoneMat
  );
  rockForearmL.position.set(0, -0.95, 0.1);
  lArmGroup.add(rockForearmL);

  // glowing orange finger joints
  const magmaFingersL = new THREE.Mesh(
    new THREE.BoxGeometry(0.35, 0.12, 0.35),
    coreMat
  );
  magmaFingersL.position.set(0, -1.36, 0.12);
  lArmGroup.add(magmaFingersL);

  golem.add(lArmGroup);

  // Articulated right arm (mace arm)
  const rArmGroup = new THREE.Group();
  rArmGroup.name = 'RArmGroup';
  rArmGroup.position.set(1.15, 2.15, 0);

  const rockUpperR = new THREE.Mesh(
    new THREE.CylinderGeometry(0.24, 0.2, 0.7, 8),
    stoneMat
  );
  rockUpperR.position.y = -0.35;
  rArmGroup.add(rockUpperR);

  const rockForearmR = new THREE.Mesh(
    new THREE.BoxGeometry(0.44, 0.8, 0.44),
    stoneMat
  );
  rockForearmR.position.set(0, -0.95, 0.1);
  rArmGroup.add(rockForearmR);

  // Colossal Runic Mace of Power
  const shaft = new THREE.Mesh(
    new THREE.CylinderGeometry(0.08, 0.08, 2.3, 8),
    new THREE.MeshStandardMaterial({ color: 0x27272a, roughness: 0.9 })
  );
  shaft.position.set(0, -1.2, 0.55);
  shaft.rotation.x = Math.PI / 4;
  rArmGroup.add(shaft);

  // Massive Spiked Obsidian Boulder Mace Top
  const maceHead = new THREE.Mesh(
    new THREE.SphereGeometry(0.55, 12, 12),
    stoneMat
  );
  maceHead.position.set(0, -1.9, 1.25);
  rArmGroup.add(maceHead);

  // Glowing molten core veins wrapped on mace
  const maceGlow = new THREE.Mesh(
    new THREE.CylinderGeometry(0.45, 0.45, 0.9, 8),
    coreMat
  );
  maceGlow.scale.set(1.1, 0.15, 1.1);
  maceGlow.position.set(0, -1.9, 1.25);
  rArmGroup.add(maceGlow);

  // Spikes on the mace
  for (let s = 0; s < 6; s++) {
    const angle = (s / 6) * Math.PI * 2;
    const spike = new THREE.Mesh(new THREE.ConeGeometry(0.12, 0.28, 4), stoneMat);
    spike.position.set(0.5 * Math.cos(angle), -1.9, 1.25 + 0.5 * Math.sin(angle));
    spike.rotation.set(Math.PI / 2, angle, 0);
    rArmGroup.add(spike);
  }

  golem.add(rArmGroup);

  // Colossal column stone legs with details
  const lLegJoint = new THREE.Mesh(
    new THREE.SphereGeometry(0.35, 10, 10),
    stoneMat
  );
  lLegJoint.position.set(-0.55, 1.15, 0);
  golem.add(lLegJoint);

  const leftLegComp = new THREE.Group();
  leftLegComp.name = 'LeftLeg';
  leftLegComp.position.set(-0.55, 0.55, 0);

  const legBlockL = new THREE.Mesh(
    new THREE.BoxGeometry(0.44, 1.0, 0.44),
    stoneMat
  );
  leftLegComp.add(legBlockL);

  // Huge rock toes on foot
  const baseFootL = new THREE.Mesh(
    new THREE.BoxGeometry(0.48, 0.16, 0.58),
    new THREE.MeshStandardMaterial({ color: 0x18181b, roughness: 1.0 })
  );
  baseFootL.position.set(0, -0.48, 0.08);
  leftLegComp.add(baseFootL);

  golem.add(leftLegComp);

  const rLegJoint = new THREE.Mesh(
    new THREE.SphereGeometry(0.35, 10, 10),
    stoneMat
  );
  rLegJoint.position.set(0.55, 1.15, 0);
  golem.add(rLegJoint);

  const rightLegComp = new THREE.Group();
  rightLegComp.name = 'RightLeg';
  rightLegComp.position.set(0.55, 0.55, 0);

  const legBlockR = new THREE.Mesh(
    new THREE.BoxGeometry(0.44, 1.0, 0.44),
    stoneMat
  );
  rightLegComp.add(legBlockR);

  // Huge rock toes on foot
  const baseFootR = new THREE.Mesh(
    new THREE.BoxGeometry(0.48, 0.16, 0.58),
    new THREE.MeshStandardMaterial({ color: 0x18181b, roughness: 1.0 })
  );
  baseFootR.position.set(0, -0.48, 0.08);
  rightLegComp.add(baseFootR);

  golem.add(rightLegComp);

  return golem;
}

// Trap mesh builders
export function buildPendulum(): THREE.Group {
  const trap = new THREE.Group();
  trap.name = 'Pendulum';

  const woodMat = new THREE.MeshStandardMaterial({ color: 0x451a03, roughness: 0.9 }); // Dark redwood
  const ironMat = new THREE.MeshStandardMaterial({ color: 0x374151, metalness: 0.8, roughness: 0.3 }); // Rusted raw iron
  const bladeMat = new THREE.MeshStandardMaterial({ color: 0x9ca3af, metalness: 0.95, roughness: 0.1 }); // Sharp polished steel

  // Roof brace pivot
  const anchor = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.15, 1.0, 8), ironMat);
  anchor.rotation.x = Math.PI / 2;
  trap.add(anchor);

  // Pendulum rod group that rotates
  const swingPart = new THREE.Group();
  swingPart.name = 'SwingPart';

  const rod = new THREE.Mesh(new THREE.BoxGeometry(0.08, 4.5, 0.08), woodMat);
  rod.position.y = -2.25;
  swingPart.add(rod);

  // Iron brace on rod
  const collar = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.6, 0.12), ironMat);
  collar.position.y = -4.1;
  swingPart.add(collar);

  // Crescent blade
  const crescentGeo = new THREE.CylinderGeometry(1.2, 1.2, 0.05, 16, 1, false, 0, Math.PI);
  const blade = new THREE.Mesh(crescentGeo, bladeMat);
  blade.position.y = -4.5;
  blade.rotation.x = Math.PI / 2;
  blade.rotation.z = Math.PI; // point crescent downwards
  swingPart.add(blade);

  trap.add(swingPart);
  return trap;
}

export function buildPressurePlate(): THREE.Group {
  const plateGroup = new THREE.Group();
  plateGroup.name = 'PressurePlateGroup';

  const baseStone = new THREE.MeshStandardMaterial({ color: 0x4b5563, roughness: 0.9 });
  const activationMat = new THREE.MeshStandardMaterial({ color: 0xef4444, roughness: 0.5 }); // Dark ruby center trigger
  
  // Stone outer collar
  const rim = new THREE.Mesh(new THREE.BoxGeometry(1.5, 0.05, 1.5), baseStone);
  rim.receiveShadow = true;
  plateGroup.add(rim);

  // Center plate (depresses slightly)
  const centerPlt = new THREE.Mesh(new THREE.BoxGeometry(1.0, 0.06, 1.0), activationMat);
  centerPlt.name = 'CenterPlate';
  centerPlt.position.y = 0.02;
  centerPlt.castShadow = true;
  plateGroup.add(centerPlt);

  return plateGroup;
}

export function buildWallTrapShooter(): THREE.Group {
  const shooter = new THREE.Group();
  const ironMat = new THREE.MeshStandardMaterial({ color: 0x1f2937, metalness: 0.8, roughness: 0.4 });
  const goldRing = new THREE.MeshStandardMaterial({ color: 0xd97706, metalness: 0.9, roughness: 0.2 });

  // Gargoyle-mouth shooter design
  const head = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.7, 0.7), ironMat);
  shooter.add(head);

  // Gold ornate rings around shooter orifice
  const ring = new THREE.Mesh(new THREE.TorusGeometry(0.18, 0.04, 8, 16), goldRing);
  ring.position.z = 0.36;
  shooter.add(ring);

  // Dark deep shooter barrel
  const barrel = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 0.4, 8), ironMat);
  barrel.position.z = 0.2;
  barrel.rotation.x = Math.PI / 2;
  shooter.add(barrel);

  return shooter;
}

export function buildArrowProjectile(): THREE.Group {
  const arrow = new THREE.Group();
  arrow.name = 'Arrow';

  const woodMat = new THREE.MeshStandardMaterial({ color: 0x78350f, roughness: 0.8 });
  const steelMat = new THREE.MeshStandardMaterial({ color: 0x9ca3af, metalness: 0.9, roughness: 0.1 });
  const fletcherMat = new THREE.MeshStandardMaterial({ color: 0xf3f4f6, roughness: 0.9 });

  // Shaft
  const shaft = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.9, 8), woodMat);
  shaft.rotation.x = Math.PI / 2;
  arrow.add(shaft);

  // Steel arrowhead
  const tip = new THREE.Mesh(new THREE.ConeGeometry(0.05, 0.16, 4), steelMat);
  tip.position.z = 0.5;
  tip.rotation.x = Math.PI / 2;
  arrow.add(tip);

  // Fletcher feathers (back)
  const featherL = new THREE.Mesh(new THREE.BoxGeometry(0.01, 0.1, 0.18), fletcherMat);
  featherL.position.set(-0.04, 0, -0.4);
  arrow.add(featherL);

  const featherR = new THREE.Mesh(new THREE.BoxGeometry(0.01, 0.1, 0.18), fletcherMat);
  featherR.position.set(0.04, 0, -0.4);
  arrow.add(featherR);

  return arrow;
}
