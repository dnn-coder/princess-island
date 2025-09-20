var scrollpos = window.scrollY;
var header = document.getElementById("header");
var navcontent = document.getElementById("nav-content");
var navaction = document.getElementById("navAction");
var brandname = document.getElementById("brandname");
var toToggle = document.querySelectorAll(".toggleColour");

document.addEventListener("scroll", function () {
  /*Apply classes for slide in bar*/
  scrollpos = window.scrollY;

  if (scrollpos > 10) {
    header.classList.add("bg-white");
    navaction.classList.remove("bg-white");
    navaction.classList.add("gradient");
    navaction.classList.remove("text-gray-800");
    navaction.classList.add("text-white");
    //Use to switch toggleColour colours
    for (var i = 0; i < toToggle.length; i++) {
      toToggle[i].classList.add("text-gray-800");
      toToggle[i].classList.remove("text-white");
    }
    header.classList.add("shadow");
    navcontent.classList.remove("bg-gray-100");
    navcontent.classList.add("bg-white");
  } else {
    header.classList.remove("bg-white");
    navaction.classList.remove("gradient");
    navaction.classList.add("bg-white");
    navaction.classList.remove("text-white");
    navaction.classList.add("text-gray-800");
    //Use to switch toggleColour colours
    for (var i = 0; i < toToggle.length; i++) {
      toToggle[i].classList.add("text-white");
      toToggle[i].classList.remove("text-gray-800");
    }

    header.classList.remove("shadow");
    navcontent.classList.remove("bg-white");
    navcontent.classList.add("bg-gray-100");
  }
});

/*Toggle dropdown list*/
/*https://gist.github.com/slavapas/593e8e50cf4cc16ac972afcbad4f70c8*/

var navMenuDiv = document.getElementById("nav-content");
var navMenu = document.getElementById("nav-toggle");

document.onclick = check;
function check(e) {
  var target = (e && e.target) || (event && event.srcElement);

  //Nav Menu
  if (!checkParent(target, navMenuDiv)) {
    // click NOT on the menu
    if (checkParent(target, navMenu)) {
      // click on the link
      if (navMenuDiv.classList.contains("hidden")) {
        navMenuDiv.classList.remove("hidden");
      } else {
        navMenuDiv.classList.add("hidden");
      }
    } else {
      // click both outside link and outside menu, hide menu
      navMenuDiv.classList.add("hidden");
    }
  }
}
function checkParent(t, elm) {
  while (t.parentNode) {
    if (t == elm) {
      return true;
    }
    t = t.parentNode;
  }
  return false;
}

// Game logic
document.addEventListener('DOMContentLoaded', function() {
  const yesBtn = document.getElementById('yesBtn');
  const noBtn = document.getElementById('noBtn');
  const resetBtn = document.getElementById('resetBtn');
  const result = document.getElementById('result');

  const yesPhrases = [
    "¡Eres maravillosa! Sigue sonriendo. 😊",
    "¡Eres increíble! Tu sonrisa ilumina mi día. 💖",
    "¡Me haces tan feliz! Gracias por ser tú. 🌸",
    "¡Tu alegría es contagiosa! Sigue brillando. ✨",
    "¡Qué linda eres! Tu felicidad me llena el corazón. 💕",
    "¡Eres mi sol! Gracias por compartir tu luz. ☀️",
    "¡Tu sonrisa es mágica! Me enamora cada día. 🥰"
  ];

  const noPhrases = [
    "No te preocupes, mañana será mejor. 🌟",
    "Todo pasa, y lo bueno viene. Tú eres fuerte. 💪",
    "Un mal día no define tu grandeza. ¡Ánimo! 🌈",
    "Recuerda que eres amado y valioso. ¡Levanta la cabeza! 💖",
    "Los días grises pasan, tu luz brilla siempre. 🌞",
    "No estás solo, estoy aquí para ti. ¡Sonríe pronto! 😘",
    "Cada día es una nueva oportunidad. ¡Tú puedes! 🌟"
  ];

  function getRandomPhrase(phrases) {
    return phrases[Math.floor(Math.random() * phrases.length)];
  }

  if (yesBtn && noBtn && resetBtn && result) {
    yesBtn.addEventListener('click', function() {
      result.innerHTML = getRandomPhrase(yesPhrases);
      result.classList.add('show');
    });

    noBtn.addEventListener('click', function() {
      result.innerHTML = getRandomPhrase(noPhrases);
      result.classList.add('show');
    });

    resetBtn.addEventListener('click', function() {
      result.innerHTML = "";
      result.classList.remove('show');
    });
  }

  // Randomize heart positions
  const hearts = document.querySelectorAll('.heart-card');
  hearts.forEach(heart => {
    heart.style.left = Math.random() * 90 + '%';
  });

  // Pear game logic
  const yesBtnPear = document.getElementById('yesBtnPear');
  const noBtnPear = document.getElementById('noBtnPear');
  const resetBtnPear = document.getElementById('resetBtnPear');
  const resultPear = document.getElementById('resultPear');
  const imageContainer = document.getElementById('imageContainer');
  const randomImage = document.getElementById('randomImage');

  const images = ['images/1.jpg', 'images/2.jpg', 'images/3.jpg', 'images/4.jpg', 'images/5.jpg'];

  function getRandomImage() {
    return images[Math.floor(Math.random() * images.length)];
  }

  if (yesBtnPear && noBtnPear && resetBtnPear && resultPear) {
    yesBtnPear.addEventListener('click', function() {
      const imgSrc = getRandomImage();
      randomImage.src = imgSrc;
      randomImage.classList.remove('fade-in'); // Reset
      imageContainer.classList.remove('hidden');
      resultPear.innerHTML = "¡Aquí tienes un momento lindo! 💚";
      resultPear.classList.add('show');
      // Wait for image to load before fading in
      const fadeInImage = () => {
        setTimeout(() => {
          randomImage.classList.add('fade-in');
        }, 100);
      };
      if (randomImage.complete) {
        fadeInImage();
      } else {
        randomImage.onload = fadeInImage;
        randomImage.onerror = () => {
          console.error('Failed to load image:', imgSrc);
          resultPear.innerHTML = "¡Lo siento! No pude cargar la imagen, pero el momento sigue siendo especial. 🌿";
          resultPear.classList.add('show');
        };
      }
      // Reset and start heart animation
      const hearts = document.querySelectorAll('.float-heart');
      hearts.forEach(heart => {
        heart.style.animation = 'none';
        setTimeout(() => {
          heart.style.animation = '';
        }, 10);
      });
    });

    noBtnPear.addEventListener('click', function() {
      imageContainer.classList.add('hidden');
      resultPear.innerHTML = "¡Está bien! Siempre hay más momentos lindos por venir. 🌿";
      resultPear.classList.add('show');
    });

    resetBtnPear.addEventListener('click', function() {
      resultPear.innerHTML = "";
      resultPear.classList.remove('show');
      imageContainer.classList.add('hidden');
      randomImage.src = "";
      randomImage.classList.remove('fade-in');
    });
  }

  // Randomize leaf positions
  const leaves = document.querySelectorAll('.leaf');
  leaves.forEach(leaf => {
    leaf.style.left = Math.random() * 90 + '%';
  });


  // Dog game logic
  const yesBtnDog = document.getElementById('yesBtnDog');
  const noBtnDog = document.getElementById('noBtnDog');
  const resetBtnDog = document.getElementById('resetBtnDog');
  const resultDog = document.getElementById('resultDog');

  const yesPhrasesDog = [
    "¡Woof! Eres la mejor dueña del mundo. 🐶💕",
    "¡Guau! Tu amor me hace tan feliz. 🐕❤️",
    "¡Eres mi humana favorita! Sigue sonriendo. 😊🐾",
    "¡Qué linda eres! Me haces mover la cola. 🐶🥰",
    "¡Te quiero mucho! Gracias por cuidarme. 💖🐕"
  ];

  const noPhrasesDog = [
    "No pasa nada, mañana jugamos. 🌟🐶",
    "Estoy aquí para ti, siempre. 💪🐾",
    "Un mal día no dura para siempre. ¡Ánimo! 🌈🐕",
    "Recuerda que eres amada. ¡Levanta la cabeza! 💖🐶",
    "Los días grises pasan, tu luz brilla. ☀️🐾"
  ];

  if (yesBtnDog && noBtnDog && resetBtnDog && resultDog) {
    yesBtnDog.addEventListener('click', function() {
      resultDog.innerHTML = getRandomPhrase(yesPhrasesDog);
      resultDog.classList.add('show');
    });

    noBtnDog.addEventListener('click', function() {
      resultDog.innerHTML = getRandomPhrase(noPhrasesDog);
      resultDog.classList.add('show');
    });

    resetBtnDog.addEventListener('click', function() {
      resultDog.innerHTML = "";
      resultDog.classList.remove('show');
    });
  }

  // Randomize bone positions
  const bones = document.querySelectorAll('.bone');
  bones.forEach(bone => {
    bone.style.left = Math.random() * 90 + '%';
  });

  // Cat game logic
  const yesBtnCat = document.getElementById('yesBtnCat');
  const noBtnCat = document.getElementById('noBtnCat');
  const resetBtnCat = document.getElementById('resetBtnCat');
  const resultCat = document.getElementById('resultCat');

  const yesPhrasesCat = [
    "¡Miau! Gracias por el abrazo virtual. 🐱💕",
    "¡Purr! Eres maravillosa. 🐈❤️",
    "¡Qué suave eres! Me haces ronronear. 😻🐾",
    "¡Te quiero mucho! Sigue brillando. ✨🐱",
    "¡Eres mi humana favorita! 🥰🐈"
  ];

  const noPhrasesCat = [
    "No te preocupes, estoy aquí. 🌟🐱",
    "Todo pasa, y lo bueno viene. 💪🐾",
    "Un mal día no define tu grandeza. ¡Ánimo! 🌈🐈",
    "Recuerda que eres amada. ¡Levanta la cabeza! 💖🐱",
    "Los días grises pasan, tu luz brilla. ☀️🐾"
  ];

  if (yesBtnCat && noBtnCat && resetBtnCat && resultCat) {
    yesBtnCat.addEventListener('click', function() {
      resultCat.innerHTML = getRandomPhrase(yesPhrasesCat);
      resultCat.classList.add('show');
    });

    noBtnCat.addEventListener('click', function() {
      resultCat.innerHTML = getRandomPhrase(noPhrasesCat);
      resultCat.classList.add('show');
    });

    resetBtnCat.addEventListener('click', function() {
      resultCat.innerHTML = "";
      resultCat.classList.remove('show');
    });
  }

  // Randomize fish positions
  const fish = document.querySelectorAll('.fish');
  fish.forEach(f => {
    f.style.left = Math.random() * 90 + '%';
  });

  // Super Mario Bros Style Platformer - King Rescue Adventure
  class KingRescueGame {
    constructor() {
      this.canvas = document.getElementById('gameCanvas');
      this.initialized = false;
      if (!this.canvas) {
        console.error('Game canvas not found!');
        // Don't return, create a dummy canvas for now
        this.canvas = document.createElement('canvas');
        this.canvas.width = 800;
        this.canvas.height = 400;
      }
      this.ctx = this.canvas.getContext('2d');
      if (!this.ctx) {
        console.error('Could not get canvas context');
        return;
      }
  
      this.victoryCanvas = document.getElementById('victoryCanvas');
      this.victoryCtx = this.victoryCanvas ? this.victoryCanvas.getContext('2d') : null;
      this.initialized = true;
  
      console.log('Game initialized successfully with canvas:', this.canvas);
      console.log('Canvas dimensions:', this.canvas.width, 'x', this.canvas.height);

      // Game constants
      this.baseWidth = 800;
      this.baseHeight = 400;
      this.scale = 1;

      // Game state
      this.gameState = 'start'; // start, playing, paused, gameOver, levelComplete, win
      this.level = 1;
      this.world = 1;
      this.score = 0;
      this.coins = 0;
      this.lives = 3;
      this.heartsCollected = 0;
      this.totalHearts = 8;
      this.timeLeft = 300; // 5 minutes
      this.gameTime = 0;

      // Power-ups
      this.shieldActive = false;
      this.shieldTime = 0;
      this.speedBoostActive = false;
      this.speedBoostTime = 0;
      this.invincible = false;
      this.invincibleTime = 0;

      // Camera and world
      this.camera = {
        x: 0,
        y: 0,
        width: this.baseWidth,
        height: this.baseHeight,
        followSpeed: 0.1
      };
      this.worldWidth = 2400; // Extended world width
      this.worldHeight = this.baseHeight;

      // Player (King) - auto-running character
      this.player = {
        x: 100,
        y: 300,
        width: 32,
        height: 32,
        velocityX: 2, // Auto-run speed
        velocityY: 0,
        onGround: false,
        speed: 2,
        jumpPower: -12,
        maxJumpPower: -16, // For charge jump
        gravity: 0.6,
        facing: 1, // 1 = right, -1 = left
        crouching: false,
        jumping: false,
        jumpCharge: 0,
        maxJumpCharge: 30
      };

      // Game objects
      this.platforms = [];
      this.hearts = [];
      this.enemies = [];
      this.powerUps = [];
      this.coins = [];
      this.particles = [];
      this.checkpoints = [];

      // Controls
      this.keys = {};
      this.touchControls = {};
      this.setupControls();

      // UI elements
      this.uiElements = {
        heartCount: document.getElementById('heartCount'),
        score: document.getElementById('score'),
        timer: document.getElementById('timer'),
        level: document.getElementById('level'),
        lives: document.getElementById('lives'),
        coins: document.getElementById('coins'),
        shieldTimer: document.getElementById('shieldTimer'),
        gameStart: document.getElementById('gameStart'),
        gameOver: document.getElementById('gameOver'),
        levelComplete: document.getElementById('levelComplete'),
        gameWin: document.getElementById('gameWin'),
        victoryAnimation: document.getElementById('victoryAnimation'),
        pauseScreen: document.getElementById('pauseScreen'),
        instructions: document.getElementById('instructions')
      };

      console.log('UI Elements found:', this.uiElements);

      // Animation
      this.animationId = null;
      this.lastTime = 0;
      this.frameCount = 0;

      // Sound effects (simple audio context)
      this.audioContext = null;
      this.setupAudio();

      // Initialize first level
      this.loadLevel(this.world, this.level);

      // Handle window resize
      window.addEventListener('resize', () => this.handleResize());

      // Force initial resize
      setTimeout(() => this.handleResize(), 100);

      // Show start screen initially
      this.showScreen('gameStart');

      // Start the game loop immediately to handle UI updates
      this.lastTime = performance.now();
      this.gameLoop();
    }

    setupResponsiveCanvas() {
      const canvasContainer = this.canvas.parentElement;
      const containerWidth = canvasContainer.clientWidth;
      const containerHeight = canvasContainer.clientHeight;

      // Calculate scale to fit container while maintaining aspect ratio
      const scaleX = containerWidth / this.baseWidth;
      const scaleY = containerHeight / this.baseHeight;
      this.scale = Math.min(scaleX, scaleY);

      // Set canvas size
      this.canvas.width = containerWidth;
      this.canvas.height = containerHeight;

      // Scale context for crisp rendering
      const devicePixelRatio = window.devicePixelRatio || 1;
      if (devicePixelRatio > 1) {
        this.canvas.width = containerWidth * devicePixelRatio;
        this.canvas.height = containerHeight * devicePixelRatio;
        this.canvas.style.width = containerWidth + 'px';
        this.canvas.style.height = containerHeight + 'px';
        this.ctx.scale(devicePixelRatio * this.scale, devicePixelRatio * this.scale);
      } else {
        this.ctx.scale(this.scale, this.scale);
      }

      // Update camera dimensions
      this.camera.width = this.baseWidth;
      this.camera.height = this.baseHeight;
    }

    handleResize() {
      this.setupResponsiveCanvas();
    }

    setupControls() {
      // Remove any existing event listeners first
      this.removeControls();

      // Keyboard controls
      this.keydownHandler = (e) => {
        this.keys[e.code] = true;

        if (e.code === 'Space') {
          e.preventDefault();
          if (this.gameState === 'playing') {
            this.pauseGame();
          } else if (this.gameState === 'paused') {
            this.resumeGame();
          }
        }

        if (e.code === 'ArrowUp' && this.gameState === 'playing') {
          e.preventDefault();
          this.startJumpCharge();
        }

        if (e.code === 'ArrowDown' && this.gameState === 'playing') {
          e.preventDefault();
          this.player.crouching = true;
        }

        // Debug: Log key presses
        if (this.gameState === 'playing') {
          console.log('Key pressed:', e.code);
        }
      };

      this.keyupHandler = (e) => {
        this.keys[e.code] = false;

        if (e.code === 'ArrowUp' && this.gameState === 'playing') {
          this.releaseJump();
        }

        if (e.code === 'ArrowDown') {
          this.player.crouching = false;
        }
      };

      // Touch controls for mobile
      this.touchStartHandler = (e) => {
        e.preventDefault();
        if (this.gameState === 'playing') {
          console.log('Touch start - jumping');
          this.startJumpCharge();
        }
      };

      this.touchEndHandler = (e) => {
        e.preventDefault();
        if (this.gameState === 'playing') {
          console.log('Touch end - releasing jump');
          this.releaseJump();
        }
      };

      // Button controls for desktop
      this.leftBtnHandler = () => {
        if (this.gameState === 'playing') {
          console.log('Left button pressed');
          this.keys['ArrowLeft'] = true;
          setTimeout(() => { this.keys['ArrowLeft'] = false; }, 100);
        }
      };

      this.rightBtnHandler = () => {
        if (this.gameState === 'playing') {
          console.log('Right button pressed');
          this.keys['ArrowRight'] = true;
          setTimeout(() => { this.keys['ArrowRight'] = false; }, 100);
        }
      };

      this.jumpBtnHandler = () => {
        if (this.gameState === 'playing') {
          console.log('Jump button pressed');
          this.startJumpCharge();
          setTimeout(() => this.releaseJump(), 200);
        }
      };

      this.crouchBtnHandler = () => {
        if (this.gameState === 'playing') {
          console.log('Crouch button pressed');
          this.player.crouching = true;
          setTimeout(() => { this.player.crouching = false; }, 200);
        }
      };

      // Mobile button controls
      this.leftBtnMobileHandler = () => {
        if (this.gameState === 'playing') {
          console.log('Mobile left button pressed');
          this.keys['ArrowLeft'] = true;
          setTimeout(() => { this.keys['ArrowLeft'] = false; }, 100);
        }
      };

      this.rightBtnMobileHandler = () => {
        if (this.gameState === 'playing') {
          console.log('Mobile right button pressed');
          this.keys['ArrowRight'] = true;
          setTimeout(() => { this.keys['ArrowRight'] = false; }, 100);
        }
      };

      this.jumpBtnMobileHandler = () => {
        if (this.gameState === 'playing') {
          console.log('Mobile jump button pressed');
          this.startJumpCharge();
          setTimeout(() => this.releaseJump(), 200);
        }
      };

      this.crouchBtnMobileHandler = () => {
        if (this.gameState === 'playing') {
          console.log('Mobile crouch button pressed');
          this.player.crouching = true;
          setTimeout(() => { this.player.crouching = false; }, 200);
        }
      };

      // Add event listeners
      document.addEventListener('keydown', this.keydownHandler);
      document.addEventListener('keyup', this.keyupHandler);
      this.canvas.addEventListener('touchstart', this.touchStartHandler);
      this.canvas.addEventListener('touchend', this.touchEndHandler);

      // Button event listeners
      const leftBtn = document.getElementById('leftBtn');
      const rightBtn = document.getElementById('rightBtn');
      const jumpBtn = document.getElementById('jumpBtn');
      const crouchBtn = document.getElementById('crouchBtn');
      const leftBtnMobile = document.getElementById('leftBtnMobile');
      const rightBtnMobile = document.getElementById('rightBtnMobile');
      const jumpBtnMobile = document.getElementById('jumpBtnMobile');
      const crouchBtnMobile = document.getElementById('crouchBtnMobile');

      if (leftBtn) leftBtn.addEventListener('click', this.leftBtnHandler);
      if (rightBtn) rightBtn.addEventListener('click', this.rightBtnHandler);
      if (jumpBtn) jumpBtn.addEventListener('click', this.jumpBtnHandler);
      if (crouchBtn) crouchBtn.addEventListener('click', this.crouchBtnHandler);
      if (leftBtnMobile) leftBtnMobile.addEventListener('click', this.leftBtnMobileHandler);
      if (rightBtnMobile) rightBtnMobile.addEventListener('click', this.rightBtnMobileHandler);
      if (jumpBtnMobile) jumpBtnMobile.addEventListener('click', this.jumpBtnMobileHandler);
      if (crouchBtnMobile) crouchBtnMobile.addEventListener('click', this.crouchBtnMobileHandler);

      console.log('Controls set up successfully');
    }

    removeControls() {
      if (this.keydownHandler) {
        document.removeEventListener('keydown', this.keydownHandler);
      }
      if (this.keyupHandler) {
        document.removeEventListener('keyup', this.keyupHandler);
      }
      if (this.touchStartHandler) {
        this.canvas.removeEventListener('touchstart', this.touchStartHandler);
      }
      if (this.touchEndHandler) {
        this.canvas.removeEventListener('touchend', this.touchEndHandler);
      }

      // Remove button event listeners
      const leftBtn = document.getElementById('leftBtn');
      const rightBtn = document.getElementById('rightBtn');
      const jumpBtn = document.getElementById('jumpBtn');
      const crouchBtn = document.getElementById('crouchBtn');
      const leftBtnMobile = document.getElementById('leftBtnMobile');
      const rightBtnMobile = document.getElementById('rightBtnMobile');
      const jumpBtnMobile = document.getElementById('jumpBtnMobile');
      const crouchBtnMobile = document.getElementById('crouchBtnMobile');

      if (leftBtn && this.leftBtnHandler) leftBtn.removeEventListener('click', this.leftBtnHandler);
      if (rightBtn && this.rightBtnHandler) rightBtn.removeEventListener('click', this.rightBtnHandler);
      if (jumpBtn && this.jumpBtnHandler) jumpBtn.removeEventListener('click', this.jumpBtnHandler);
      if (crouchBtn && this.crouchBtnHandler) crouchBtn.removeEventListener('click', this.crouchBtnHandler);
      if (leftBtnMobile && this.leftBtnMobileHandler) leftBtnMobile.removeEventListener('click', this.leftBtnMobileHandler);
      if (rightBtnMobile && this.rightBtnMobileHandler) rightBtnMobile.removeEventListener('click', this.rightBtnMobileHandler);
      if (jumpBtnMobile && this.jumpBtnMobileHandler) jumpBtnMobile.removeEventListener('click', this.jumpBtnMobileHandler);
      if (crouchBtnMobile && this.crouchBtnMobileHandler) crouchBtnMobile.removeEventListener('click', this.crouchBtnMobileHandler);
    }

    startJumpCharge() {
      if (this.player.onGround && !this.player.jumping) {
        this.player.jumpCharge = 0;
        this.player.jumping = true;
      }
    }

    releaseJump() {
      if (this.player.jumping && this.player.onGround) {
        const chargeRatio = Math.min(this.player.jumpCharge / this.player.maxJumpCharge, 1);
        const jumpPower = this.player.jumpPower - (chargeRatio * (this.player.jumpPower - this.player.maxJumpPower));
        this.player.velocityY = jumpPower;
        this.player.onGround = false;
        this.player.jumping = false;
        this.player.jumpCharge = 0;
        this.playSound(523, 0.1); // Jump sound
      }
    }

    updateCamera() {
      // Camera follows player with smooth movement
      const targetX = this.player.x - this.camera.width / 2;
      const targetY = this.player.y - this.camera.height / 2;

      // Smooth camera movement
      this.camera.x += (targetX - this.camera.x) * this.camera.followSpeed;
      this.camera.y += (targetY - this.camera.y) * this.camera.followSpeed;

      // Keep camera within world bounds
      this.camera.x = Math.max(0, Math.min(this.camera.x, this.worldWidth - this.camera.width));
      this.camera.y = Math.max(0, Math.min(this.camera.y, this.worldHeight - this.camera.height));
    }

    update(deltaTime) {
      // Always update some things regardless of game state
      this.frameCount++;

      if (this.gameState !== 'playing') return;

      // Update timers
      this.gameTime += deltaTime;
      if (this.gameTime >= 1000) {
        this.timeLeft--;
        this.gameTime = 0;
        if (this.timeLeft <= 0) {
          this.gameOver();
        }
      }

      // Update power-up timers
      if (this.shieldActive) {
        this.shieldTime -= deltaTime;
        if (this.shieldTime <= 0) {
          this.shieldActive = false;
        }
      }

      if (this.speedBoostActive) {
        this.speedBoostTime -= deltaTime;
        if (this.speedBoostTime <= 0) {
          this.speedBoostActive = false;
          this.player.speed = 2;
        }
      }

      if (this.invincible) {
        this.invincibleTime -= deltaTime;
        if (this.invincibleTime <= 0) {
          this.invincible = false;
        }
      }

      // Update jump charge
      if (this.player.jumping && this.player.jumpCharge < this.player.maxJumpCharge) {
        this.player.jumpCharge += deltaTime * 0.1;
      }

      // Player movement (auto-run to the right)
      this.player.velocityX = this.player.speed + (this.speedBoostActive ? 2 : 0);

      // Apply gravity
      this.player.velocityY += this.player.gravity;

      // Update player position
      this.player.x += this.player.velocityX;
      this.player.y += this.player.velocityY;

      // Update camera
      this.updateCamera();

      // Platform collision
      this.player.onGround = false;
      for (let platform of this.platforms) {
        if (this.checkCollision(this.player, platform)) {
          if (this.player.velocityY > 0 && this.player.y < platform.y) {
            this.player.y = platform.y - this.player.height;
            this.player.velocityY = 0;
            this.player.onGround = true;
            this.player.jumping = false;
          }
        }
      }

      // World boundaries
      if (this.player.x < 0) this.player.x = 0;
      if (this.player.x + this.player.width > this.worldWidth) {
        // Level complete!
        this.levelComplete();
      }

      // Fall check
      if (this.player.y > this.worldHeight + 100) {
        this.playerHit();
      }

      // Update enemies
      this.updateEnemies(deltaTime);

      // Update particles
      this.updateParticles(deltaTime);

      // Check collisions
      this.checkCollisions();
    }

    updateEnemies(deltaTime) {
      for (let enemy of this.enemies) {
        if (enemy.alive) {
          // Move enemy
          enemy.x += enemy.velocityX;

          // Enemy platform collision and boundary checks
          let onPlatform = false;
          for (let platform of this.platforms) {
            if (this.checkCollision(enemy, platform)) {
              if (enemy.velocityX > 0 && enemy.x < platform.x) {
                enemy.x = platform.x - enemy.width;
                enemy.velocityX = -enemy.velocityX;
                enemy.direction = -1;
              } else if (enemy.velocityX < 0 && enemy.x + enemy.width > platform.x + platform.width) {
                enemy.x = platform.x + platform.width;
                enemy.velocityX = -enemy.velocityX;
                enemy.direction = 1;
              }
              if (enemy.y + enemy.height >= platform.y && enemy.y + enemy.height <= platform.y + platform.height) {
                onPlatform = true;
              }
            }
          }

          // Boundary checks
          if (enemy.x < 0 || enemy.x + enemy.width > this.worldWidth) {
            enemy.velocityX = -enemy.velocityX;
            enemy.direction = -enemy.direction;
          }

          // Apply gravity if not on platform
          if (!onPlatform) {
            enemy.velocityY += this.player.gravity;
            enemy.y += enemy.velocityY;
          } else {
            enemy.velocityY = 0;
          }
        }
      }
    }

    updateParticles(deltaTime) {
      for (let i = this.particles.length - 1; i >= 0; i--) {
        const particle = this.particles[i];
        particle.x += particle.velocityX;
        particle.y += particle.velocityY;
        particle.velocityY += 0.2; // Gravity
        particle.life -= deltaTime;

        if (particle.life <= 0) {
          this.particles.splice(i, 1);
        }
      }
    }

    checkCollisions() {
      // Heart collection
      for (let i = 0; i < this.hearts.length; i++) {
        if (!this.hearts[i].collected && this.checkCollision(this.player, this.hearts[i])) {
          this.hearts[i].collected = true;
          this.heartsCollected++;
          this.score += 1000;
          this.playSound(659, 0.2); // Collection sound
          this.createParticles(this.hearts[i].x + 15, this.hearts[i].y + 15, '#ff69b4', 10);

          if (this.heartsCollected >= this.totalHearts) {
            this.winGame();
          }
        }
      }

      // Coin collection
      for (let i = 0; i < this.coins.length; i++) {
        if (!this.coins[i].collected && this.checkCollision(this.player, this.coins[i])) {
          this.coins[i].collected = true;
          this.coins++;
          this.score += 100;
          this.playSound(784, 0.1); // Coin sound
          this.createParticles(this.coins[i].x + 8, this.coins[i].y + 8, '#ffd700', 5);
        }
      }

      // Power-up collection
      for (let i = 0; i < this.powerUps.length; i++) {
        if (!this.powerUps[i].collected && this.checkCollision(this.player, this.powerUps[i])) {
          this.powerUps[i].collected = true;
          this.collectPowerUp(this.powerUps[i]);
        }
      }

      // Enemy collision
      for (let enemy of this.enemies) {
        if (enemy.alive && this.checkCollision(this.player, enemy)) {
          if (this.invincible || this.shieldActive) {
            // Defeat enemy
            enemy.alive = false;
            this.score += 200;
            this.playSound(1047, 0.3);
            this.createParticles(enemy.x + enemy.width/2, enemy.y + enemy.height/2, '#ff0000', 15);
          } else {
            this.playerHit();
          }
        }
      }
    }

    collectPowerUp(powerUp) {
      switch (powerUp.type) {
        case 'shield':
          this.shieldActive = true;
          this.shieldTime = 20000; // 20 seconds
          this.playSound(1319, 0.3);
          break;
        case 'star':
          this.invincible = true;
          this.invincibleTime = 10000; // 10 seconds
          this.playSound(1568, 0.3);
          break;
        case 'speed':
          this.speedBoostActive = true;
          this.speedBoostTime = 15000; // 15 seconds
          this.player.speed = 4;
          this.playSound(1175, 0.3);
          break;
        case 'life':
          this.lives++;
          this.playSound(988, 0.3);
          break;
      }
      this.createParticles(powerUp.x + powerUp.width/2, powerUp.y + powerUp.height/2, '#ffff00', 20);
    }

    createParticles(x, y, color, count) {
      for (let i = 0; i < count; i++) {
        this.particles.push({
          x: x,
          y: y,
          velocityX: (Math.random() - 0.5) * 4,
          velocityY: (Math.random() - 0.5) * 4,
          color: color,
          life: 1000 + Math.random() * 1000
        });
      }
    }

    playerHit() {
      if (this.invincible) return;

      this.lives--;
      this.invincible = true;
      this.invincibleTime = 2000; // 2 seconds of invincibility
      this.playSound(220, 0.5);

      if (this.lives <= 0) {
        this.gameOver();
      } else {
        // Reset player position
        this.player.x = 100;
        this.player.y = 300;
        this.player.velocityX = this.player.speed;
        this.player.velocityY = 0;
        this.camera.x = 0;
      }
    }

    checkCollision(rect1, rect2) {
      return rect1.x < rect2.x + rect2.width &&
             rect1.x + rect1.width > rect2.x &&
             rect1.y < rect2.y + rect2.height &&
             rect1.y + rect1.height > rect2.y;
    }

    draw() {
      // Clear canvas
      this.ctx.clearRect(0, 0, this.baseWidth, this.baseHeight);

      // Only draw game world if playing
      if (this.gameState === 'playing') {
        // Save context for camera transformations
        this.ctx.save();

        // Apply camera transformation
        this.ctx.translate(-this.camera.x, -this.camera.y);

        // Draw background based on world
        this.drawBackground();

        // Draw platforms
        for (let platform of this.platforms) {
          this.drawPlatform(platform);
        }

        // Draw coins
        for (let coin of this.coins) {
          if (!coin.collected) {
            this.drawCoin(coin.x, coin.y);
          }
        }

        // Draw power-ups
        for (let powerUp of this.powerUps) {
          if (!powerUp.collected) {
            this.drawPowerUp(powerUp.x, powerUp.y, powerUp.width, powerUp.height, powerUp.type);
          }
        }

        // Draw hearts
        for (let heart of this.hearts) {
          if (!heart.collected) {
            this.drawHeart(heart.x, heart.y, heart.width, heart.height);
          }
        }

        // Draw enemies
        for (let enemy of this.enemies) {
          if (enemy.alive) {
            this.drawEnemy(enemy.x, enemy.y, enemy.width, enemy.height, enemy.type);
          }
        }

        // Draw particles
        for (let particle of this.particles) {
          this.drawParticle(particle);
        }

        // Draw player
        this.drawKing(this.player.x, this.player.y, this.player.width, this.player.height);

        // Restore context
        this.ctx.restore();
      }

      // Always draw UI
      this.drawUI();
    }

    drawBackground() {
      // Different backgrounds for different worlds
      if (this.world === 1) {
        // Castle world
        const gradient = this.ctx.createLinearGradient(0, 0, 0, this.worldHeight);
        gradient.addColorStop(0, '#87CEEB');
        gradient.addColorStop(0.7, '#98FB98');
        gradient.addColorStop(1, '#228B22');
        this.ctx.fillStyle = gradient;
        this.ctx.fillRect(this.camera.x, 0, this.worldWidth, this.worldHeight);

        // Draw castle towers in background
        this.ctx.fillStyle = '#8B4513';
        for (let i = 0; i < 5; i++) {
          const x = 200 + i * 400;
          this.ctx.fillRect(x, 150, 40, 150);
          this.ctx.fillRect(x - 10, 130, 60, 20); // Tower top
        }
      }
    }

    drawPlatform(platform) {
      // Different platform types
      if (platform.type === 'breakable') {
        this.ctx.fillStyle = '#D2691E';
        this.ctx.fillRect(platform.x, platform.y, platform.width, platform.height);
        this.ctx.fillStyle = '#8B4513';
        this.ctx.fillRect(platform.x + 2, platform.y + 2, platform.width - 4, platform.height - 4);
      } else {
        this.ctx.fillStyle = '#8B4513';
        this.ctx.fillRect(platform.x, platform.y, platform.width, platform.height);
        this.ctx.fillStyle = 'rgba(160, 82, 45, 0.6)';
        this.ctx.fillRect(platform.x, platform.y, platform.width, 3);
      }
    }

    drawCoin(x, y) {
      this.ctx.fillStyle = '#FFD700';
      this.ctx.beginPath();
      this.ctx.arc(x + 8, y + 8, 6, 0, Math.PI * 2);
      this.ctx.fill();
      this.ctx.fillStyle = '#FFA500';
      this.ctx.beginPath();
      this.ctx.arc(x + 8, y + 8, 4, 0, Math.PI * 2);
      this.ctx.fill();
    }

    drawKing(x, y, width, height) {
      // Shield effect
      if (this.shieldActive) {
        this.ctx.strokeStyle = '#FFD700';
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();
        this.ctx.arc(x + width/2, y + height/2, width/2 + 5, 0, Math.PI * 2);
        this.ctx.stroke();
      }

      // Invincibility effect
      if (this.invincible) {
        this.ctx.strokeStyle = this.frameCount % 10 < 5 ? '#FFFFFF' : '#FFFF00';
        this.ctx.lineWidth = 2;
        this.ctx.strokeRect(x - 2, y - 2, width + 4, height + 4);
      }

      // King body
      this.ctx.fillStyle = '#4B0082';
      this.ctx.fillRect(x + 4, y + 8, 24, 20);

      // Crown
      this.ctx.fillStyle = '#FFD700';
      this.ctx.fillRect(x + 8, y + 2, 16, 6);
      this.ctx.fillRect(x + 6, y, 4, 4);
      this.ctx.fillRect(x + 10, y - 2, 4, 4);
      this.ctx.fillRect(x + 16, y - 2, 4, 4);
      this.ctx.fillRect(x + 22, y, 4, 4);

      // Crown jewels
      this.ctx.fillStyle = '#FF1493';
      this.ctx.fillRect(x + 9, y + 1, 2, 2);
      this.ctx.fillRect(x + 13, y - 1, 2, 2);
      this.ctx.fillRect(x + 19, y - 1, 2, 2);
      this.ctx.fillRect(x + 23, y + 1, 2, 2);

      // Face
      this.ctx.fillStyle = '#FFE4B5';
      this.ctx.fillRect(x + 8, y + 8, 16, 12);

      // Eyes
      this.ctx.fillStyle = '#000';
      this.ctx.fillRect(x + 10, y + 10, 2, 2);
      this.ctx.fillRect(x + 18, y + 10, 2, 2);

      // Mustache
      this.ctx.fillStyle = '#654321';
      this.ctx.fillRect(x + 11, y + 14, 10, 3);

      // Arms
      this.ctx.fillStyle = '#FFE4B5';
      this.ctx.fillRect(x + 2, y + 10, 6, 8);
      this.ctx.fillRect(x + 24, y + 10, 6, 8);

      // Legs
      this.ctx.fillStyle = '#4B0082';
      this.ctx.fillRect(x + 8, y + 28, 6, 8);
      this.ctx.fillRect(x + 18, y + 28, 6, 8);

      // Shoes
      this.ctx.fillStyle = '#8B4513';
      this.ctx.fillRect(x + 6, y + 34, 10, 4);
      this.ctx.fillRect(x + 16, y + 34, 10, 4);

      // Sword
      this.ctx.fillStyle = '#C0C0C0';
      this.ctx.fillRect(x + 28, y + 8, 2, 16);
      this.ctx.fillStyle = '#FFD700';
      this.ctx.fillRect(x + 26, y + 6, 6, 4);
    }

    drawEnemy(x, y, width, height, type) {
      if (type === 'nogro') {
        // Nogro enemy - menacing creature
        this.ctx.fillStyle = '#000000';
        this.ctx.fillRect(x + 2, y + 2, width - 4, height - 4);

        // Glowing red eyes
        this.ctx.fillStyle = '#FF0000';
        this.ctx.fillRect(x + 6, y + 6, 4, 4);
        this.ctx.fillRect(x + 16, y + 6, 4, 4);

        // Sharp teeth
        this.ctx.fillStyle = '#FFFFFF';
        this.ctx.fillRect(x + 8, y + 16, 2, 4);
        this.ctx.fillRect(x + 10, y + 18, 2, 2);
        this.ctx.fillRect(x + 14, y + 18, 2, 2);
        this.ctx.fillRect(x + 16, y + 16, 2, 4);

        // Dark aura
        this.ctx.strokeStyle = '#330000';
        this.ctx.lineWidth = 1;
        this.ctx.strokeRect(x, y, width, height);
      }
    }

    drawHeart(x, y, width, height) {
      this.ctx.fillStyle = '#DC143C';
      this.ctx.strokeStyle = '#8B0000';
      this.ctx.lineWidth = 1;
      this.ctx.beginPath();
      const topCurveHeight = height * 0.3;
      this.ctx.moveTo(x + width/2, y + topCurveHeight);
      this.ctx.bezierCurveTo(x, y + topCurveHeight, x, y, x + width/2, y);
      this.ctx.bezierCurveTo(x + width, y, x + width, y + topCurveHeight, x + width/2, y + topCurveHeight);
      this.ctx.lineTo(x + width/2, y + height);
      this.ctx.closePath();
      this.ctx.fill();
      this.ctx.stroke();
    }

    drawPowerUp(x, y, width, height, type) {
      switch (type) {
        case 'shield':
          this.ctx.fillStyle = '#FFD700';
          this.ctx.beginPath();
          this.ctx.arc(x + width/2, y + height/2, width/2, 0, Math.PI * 2);
          this.ctx.fill();
          this.ctx.fillStyle = '#FFA500';
          this.ctx.beginPath();
          this.ctx.arc(x + width/2, y + height/2, width/3, 0, Math.PI * 2);
          this.ctx.fill();
          break;
        case 'star':
          this.ctx.fillStyle = '#FFFF00';
          this.ctx.beginPath();
          this.ctx.arc(x + width/2, y + height/2, width/2, 0, Math.PI * 2);
          this.ctx.fill();
          this.ctx.fillStyle = '#FFD700';
          this.ctx.beginPath();
          this.ctx.arc(x + width/2, y + height/2, width/3, 0, Math.PI * 2);
          this.ctx.fill();
          break;
        case 'speed':
          this.ctx.fillStyle = '#00FF00';
          this.ctx.fillRect(x, y, width, height);
          this.ctx.fillStyle = '#FFFFFF';
          this.ctx.fillRect(x + 4, y + 4, width - 8, height - 8);
          break;
        case 'life':
          this.ctx.fillStyle = '#FF0000';
          this.ctx.fillRect(x, y, width, height);
          this.ctx.fillStyle = '#FFFFFF';
          this.ctx.font = '16px Arial';
          this.ctx.textAlign = 'center';
          this.ctx.fillText('♥', x + width/2, y + height/2 + 6);
          break;
      }
    }

    drawParticle(particle) {
      this.ctx.fillStyle = particle.color;
      this.ctx.globalAlpha = particle.life / 2000;
      this.ctx.fillRect(particle.x - 1, particle.y - 1, 3, 3);
      this.ctx.globalAlpha = 1;
    }

    drawUI() {
      // Draw HUD
      this.ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
      this.ctx.fillRect(0, 0, this.baseWidth, 40);

      this.ctx.fillStyle = '#FFFFFF';
      this.ctx.font = '16px Arial';
      this.ctx.textAlign = 'left';

      // Lives
      this.ctx.fillText(`❤️ ${this.lives}`, 10, 25);

      // Hearts collected
      this.ctx.fillText(`💖 ${this.heartsCollected}/${this.totalHearts}`, 80, 25);

      // Score
      this.ctx.fillText(`Score: ${this.score}`, 200, 25);

      // Coins
      this.ctx.fillText(`🪙 ${this.coins}`, 350, 25);

      // Time
      const minutes = Math.floor(this.timeLeft / 60);
      const seconds = this.timeLeft % 60;
      this.ctx.fillText(`Time: ${minutes}:${seconds.toString().padStart(2, '0')}`, 450, 25);

      // Level
      this.ctx.fillText(`World ${this.world}-${this.level}`, 600, 25);

      // Power-up indicators
      if (this.shieldActive) {
        this.ctx.fillStyle = '#FFD700';
        this.ctx.fillText('🛡️', 720, 25);
      }

      if (this.invincible) {
        this.ctx.fillStyle = '#FFFF00';
        this.ctx.fillText('⭐', 750, 25);
      }

      if (this.speedBoostActive) {
        this.ctx.fillStyle = '#00FF00';
        this.ctx.fillText('💨', 780, 25);
      }
    }

    loadLevel(world, level) {
      // Reset level elements
      this.platforms = [];
      this.hearts = [];
      this.enemies = [];
      this.powerUps = [];
      this.coins = [];
      this.particles = [];

      // Create level based on world and level
      if (world === 1) {
        this.loadCastleLevel(level);
      }

      // Reset player position
      this.player.x = 100;
      this.player.y = 300;
      this.camera.x = 0;
      this.camera.y = 0;
    }

    loadCastleLevel(level) {
      // Ground platforms
      this.platforms.push(
        { x: 0, y: 380, width: this.worldWidth, height: 20, type: 'normal' }
      );

      // Floating platforms
      this.platforms.push(
        { x: 200, y: 300, width: 150, height: 20, type: 'normal' },
        { x: 450, y: 250, width: 150, height: 20, type: 'normal' },
        { x: 700, y: 320, width: 120, height: 20, type: 'normal' },
        { x: 900, y: 280, width: 100, height: 20, type: 'normal' },
        { x: 1100, y: 250, width: 150, height: 20, type: 'normal' },
        { x: 1350, y: 300, width: 120, height: 20, type: 'normal' },
        { x: 1600, y: 200, width: 100, height: 20, type: 'normal' },
        { x: 1850, y: 250, width: 120, height: 20, type: 'normal' }
      );

      // Hearts
      const heartPositions = [
        { x: 250, y: 260 }, { x: 500, y: 210 }, { x: 750, y: 280 },
        { x: 1000, y: 240 }, { x: 1250, y: 210 }, { x: 1500, y: 160 },
        { x: 1750, y: 210 }, { x: 2000, y: 260 }
      ];

      heartPositions.forEach(pos => {
        this.hearts.push({
          x: pos.x, y: pos.y, width: 30, height: 30, collected: false
        });
      });

      // Coins scattered throughout
      for (let i = 0; i < 20; i++) {
        this.coins.push({
          x: 150 + i * 100, y: 320, width: 16, height: 16, collected: false
        });
      }

      // Power-ups
      this.powerUps.push(
        { x: 320, y: 120, width: 20, height: 20, type: 'shield', collected: false },
        { x: 820, y: 200, width: 20, height: 20, type: 'star', collected: false },
        { x: 1320, y: 180, width: 20, height: 20, type: 'speed', collected: false },
        { x: 1820, y: 170, width: 20, height: 20, type: 'life', collected: false }
      );

      // Enemies
      this.enemies.push(
        { x: 300, y: 340, width: 30, height: 30, velocityX: 1, type: 'nogro', alive: true, direction: 1 },
        { x: 600, y: 210, width: 30, height: 30, velocityX: 1, type: 'nogro', alive: true, direction: 1 },
        { x: 900, y: 240, width: 30, height: 30, velocityX: 1, type: 'nogro', alive: true, direction: 1 },
        { x: 1200, y: 210, width: 30, height: 30, velocityX: 1, type: 'nogro', alive: true, direction: 1 },
        { x: 1500, y: 160, width: 30, height: 30, velocityX: 1, type: 'nogro', alive: true, direction: 1 }
      );
    }

    setupAudio() {
      try {
        this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
      } catch (e) {
        console.log('Web Audio API not supported');
      }
    }

    playSound(frequency, duration, type = 'square') {
      if (!this.audioContext) return;

      const oscillator = this.audioContext.createOscillator();
      const gainNode = this.audioContext.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(this.audioContext.destination);

      oscillator.frequency.setValueAtTime(frequency, this.audioContext.currentTime);
      oscillator.type = type;

      gainNode.gain.setValueAtTime(0.3, this.audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + duration);

      oscillator.start(this.audioContext.currentTime);
      oscillator.stop(this.audioContext.currentTime + duration);
    }

    startGame() {
      if (!this.initialized) {
        console.error('Game not initialized');
        return;
      }

      console.log('Starting King Rescue Adventure!');
      this.gameState = 'playing';
      this.timeLeft = 300;
      this.gameTime = 0;
      this.heartsCollected = 0;
      this.score = 0;
      this.coins = 0;
      this.lives = 3;
      this.shieldActive = false;
      this.speedBoostActive = false;
      this.invincible = false;

      // Reset player position
      this.player.x = 100;
      this.player.y = 300;
      this.player.velocityX = this.player.speed;
      this.player.velocityY = 0;
      this.camera.x = 0;
      this.camera.y = 0;

      // Load level
      this.loadLevel(this.world, this.level);

      // Hide all screens
      this.hideAllScreens();

      console.log('Game started successfully');
    }

    pauseGame() {
      this.gameState = 'paused';
      if (this.animationId) {
        cancelAnimationFrame(this.animationId);
      }
      this.showScreen('pauseScreen');
    }

    resumeGame() {
      this.gameState = 'playing';
      this.hideAllScreens();
      this.lastTime = performance.now();
      this.gameLoop();
    }

    gameLoop(currentTime = 0) {
      const deltaTime = currentTime - this.lastTime;
      this.lastTime = currentTime;
      this.frameCount++;

      this.update(deltaTime);
      this.draw();

      // Always continue the game loop for UI updates
      this.animationId = requestAnimationFrame(this.gameLoop.bind(this));
    }

    levelComplete() {
      this.gameState = 'levelComplete';
      if (this.animationId) {
        cancelAnimationFrame(this.animationId);
      }
      this.showScreen('levelComplete');
    }

    winGame() {
      this.gameState = 'win';
      if (this.animationId) {
        cancelAnimationFrame(this.animationId);
      }
      this.showScreen('gameWin');
      this.playVictoryAnimation();
    }

    gameOver() {
      this.gameState = 'gameOver';
      if (this.animationId) {
        cancelAnimationFrame(this.animationId);
      }
      this.showScreen('gameOver');
    }

    showScreen(screenName) {
      this.hideAllScreens();
      if (this.uiElements[screenName]) {
        this.uiElements[screenName].classList.remove('hidden');
      }
    }

    hideAllScreens() {
      const screens = ['gameStart', 'gameOver', 'levelComplete', 'gameWin', 'victoryAnimation', 'pauseScreen', 'instructions'];
      screens.forEach(screen => {
        if (this.uiElements[screen]) {
          this.uiElements[screen].classList.add('hidden');
        }
      });
    }

    playVictoryAnimation() {
      this.uiElements.victoryAnimation.classList.remove('hidden');

      let frame = 0;
      const animate = () => {
        if (!this.victoryCtx) return;

        this.victoryCtx.clearRect(0, 0, 400, 300);

        // Castle background
        this.victoryCtx.fillStyle = '#8B4513';
        this.victoryCtx.fillRect(0, 200, 400, 100);
        this.victoryCtx.fillRect(150, 150, 100, 50);

        // Princess
        this.victoryCtx.fillStyle = '#FF69B4';
        this.victoryCtx.fillRect(200, 180, 30, 30);

        // King
        this.victoryCtx.fillStyle = '#4B0082';
        this.victoryCtx.fillRect(170, 180, 30, 30);

        // Victory text
        this.victoryCtx.fillStyle = '#000';
        this.victoryCtx.font = '20px Arial';
        this.victoryCtx.textAlign = 'center';
        this.victoryCtx.fillText('¡Victoria!', 200, 50);
        this.victoryCtx.fillText('El Rey ha salvado a la Princesa', 200, 80);

        // Hearts animation
        for (let i = 0; i < 10; i++) {
          const x = 200 + Math.sin(frame * 0.1 + i) * 100;
          const y = 120 + Math.cos(frame * 0.1 + i) * 50;
          this.victoryCtx.fillStyle = '#FF69B4';
          this.victoryCtx.fillText('♥', x, y);
        }

        frame++;
        if (frame < 300) {
          requestAnimationFrame(animate);
        }
      };
      animate();
    }

    nextLevel() {
      this.level++;
      if (this.level > 3) {
        this.level = 1;
        this.world++;
      }
      this.timeLeft = Math.max(240, this.timeLeft + 60);
      this.loadLevel(this.world, this.level);
      this.startGame();
    }

    restartLevel() {
      this.loadLevel(this.world, this.level);
      this.startGame();
    }

    restartGame() {
      this.world = 1;
      this.level = 1;
      this.heartsCollected = 0;
      this.score = 0;
      this.coins = 0;
      this.lives = 3;
      this.loadLevel(this.world, this.level);
      this.startGame();
    }
  }

  // Initialize the game
  const game = new KingRescueGame();

  // Event listeners for game buttons
  const startGameBtn = document.getElementById('startGameBtn');
  console.log('Looking for startGameBtn:', startGameBtn);
  if (startGameBtn) {
    startGameBtn.addEventListener('click', () => {
      console.log('Start button clicked!');
      if (game && game.startGame) {
        console.log('Calling game.startGame()');
        game.startGame();
      } else {
        console.error('Game object or startGame method not found');
      }
    });
    console.log('Start button event listener attached');
  } else {
    console.error('Start button not found in DOM');
  }

  const restartLevelBtn = document.getElementById('restartLevelBtn');
  if (restartLevelBtn) {
    restartLevelBtn.addEventListener('click', () => game.restartLevel());
  }

  const restartGameBtn = document.getElementById('restartGameBtn');
  if (restartGameBtn) {
    restartGameBtn.addEventListener('click', () => game.restartGame());
  }

  // Additional game UI event listeners
  const startFromInstructionsBtn = document.getElementById('startFromInstructionsBtn');
  if (startFromInstructionsBtn) {
    startFromInstructionsBtn.addEventListener('click', () => {
      if (game && game.startGame) {
        game.startGame();
      }
    });
  }

  const resumeBtn = document.getElementById('resumeBtn');
  if (resumeBtn) {
    resumeBtn.addEventListener('click', () => {
      if (game && game.resumeGame) {
        game.resumeGame();
      }
    });
  }

  const restartBtn = document.getElementById('restartBtn');
  if (restartBtn) {
    restartBtn.addEventListener('click', () => {
      if (game && game.restartLevel) {
        game.restartLevel();
      }
    });
  }

  const quitBtn = document.getElementById('quitBtn');
  if (quitBtn) {
    quitBtn.addEventListener('click', () => {
      if (game && game.showScreen) {
        game.showScreen('instructions');
      }
    });
  }

  const restartLevelBtnComplete = document.getElementById('restartLevelBtnComplete');
  if (restartLevelBtnComplete) {
    restartLevelBtnComplete.addEventListener('click', () => game.restartLevel());
  }

  const nextLevelBtn = document.getElementById('nextLevelBtn');
  if (nextLevelBtn) {
    nextLevelBtn.addEventListener('click', () => game.nextLevel());
  }

  const nextLevelBtnWin = document.getElementById('nextLevelBtnWin');
  if (nextLevelBtnWin) {
    nextLevelBtnWin.addEventListener('click', () => game.nextLevel());
  }

  const playAgainBtn = document.getElementById('playAgainBtn');
  if (playAgainBtn) {
    playAgainBtn.addEventListener('click', () => game.restartGame());
  }

  const restartGameBtnWin = document.getElementById('restartGameBtnWin');
  if (restartGameBtnWin) {
    restartGameBtnWin.addEventListener('click', () => game.restartGame());
  }
});
