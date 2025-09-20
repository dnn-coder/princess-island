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
      e.preventDefault();

      // Check if mobile (screen width < 768px)
      if (window.innerWidth < 768) {
        // Show cute bear modal for mobile
        showBearModal();
      } else {
        // Show navigation menu for desktop
        if (navMenuDiv.classList.contains("hidden")) {
          navMenuDiv.classList.remove("hidden");
        } else {
          navMenuDiv.classList.add("hidden");
        }
      }
    } else {
      // click both outside link and outside menu, hide menu
      navMenuDiv.classList.add("hidden");
      // Also hide bear modal if open
      hideBearModal();
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

// Bear modal functions for mobile hamburger menu
function showBearModal() {
  let bearModal = document.getElementById('bearModal');
  if (!bearModal) {
    // Create the modal if it doesn't exist
    bearModal = document.createElement('div');
    bearModal.id = 'bearModal';
    bearModal.innerHTML = `
      <div class="bear-modal-overlay" style="
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.7);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10000;
        animation: fadeIn 0.3s ease-in-out;
      ">
        <div class="bear-modal-content" style="
          background: linear-gradient(135deg, #ff69b4, #ffb6c1);
          border-radius: 20px;
          padding: 30px;
          text-align: center;
          max-width: 300px;
          width: 90%;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
          animation: slideIn 0.4s ease-out;
          position: relative;
        ">
          <div class="bear-svg-container" style="margin-bottom: 20px;">
            <svg viewBox="0 0 200 200" style="width: 120px; height: 120px; margin: 0 auto; display: block;">
              <defs>
                <radialGradient id="bearHeadGrad" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" style="stop-color:#8B4513;stop-opacity:1" />
                  <stop offset="100%" style="stop-color:#654321;stop-opacity:1" />
                </radialGradient>
              </defs>
              <!-- Head -->
              <ellipse cx="100" cy="105" rx="85" ry="75" fill="url(#bearHeadGrad)" />
              <!-- Ears -->
              <ellipse cx="60" cy="55" rx="25" ry="20" fill="url(#bearHeadGrad)" />
              <ellipse cx="140" cy="55" rx="25" ry="20" fill="url(#bearHeadGrad)" />
              <!-- Inner Ears -->
              <ellipse cx="60" cy="55" rx="15" ry="10" fill="#D2B48C" />
              <ellipse cx="140" cy="55" rx="15" ry="10" fill="#D2B48C" />
              <!-- Eyes -->
              <circle cx="80" cy="90" r="8" fill="#000" />
              <circle cx="120" cy="90" r="8" fill="#000" />
              <!-- Eye Highlights -->
              <circle cx="82" cy="88" r="3" fill="#fff" />
              <circle cx="122" cy="88" r="3" fill="#fff" />
              <!-- Nose -->
              <ellipse cx="100" cy="110" rx="6" ry="4" fill="#000" />
              <!-- Mouth -->
              <path d="M90 120 Q100 135 110 120" stroke="#000" stroke-width="2" fill="none" />
              <!-- Cheeks -->
              <ellipse cx="70" cy="115" rx="10" ry="5" fill="#FFB6C1" opacity="0.5" />
              <ellipse cx="130" cy="115" rx="10" ry="5" fill="#FFB6C1" opacity="0.5" />
              <!-- Fur Lines -->
              <path d="M50 70 Q60 60 70 70" stroke="#654321" stroke-width="1" fill="none" />
              <path d="M130 70 Q140 60 150 70" stroke="#654321" stroke-width="1" fill="none" />
              <path d="M75 130 Q85 120 95 130" stroke="#654321" stroke-width="1" fill="none" />
              <path d="M105 130 Q115 120 125 130" stroke="#654321" stroke-width="1" fill="none" />
            </svg>
          </div>
          <h2 style="
            color: #fff;
            font-size: 24px;
            font-weight: bold;
            margin-bottom: 10px;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
          ">¡Te Amo Princesa!</h2>
          <p style="
            color: #fff;
            font-size: 18px;
            margin-bottom: 20px;
            text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
          ">Feliz Día 💕</p>
          <button onclick="hideBearModal()" style="
            background: linear-gradient(135deg, #ff1493, #ff69b4);
            color: white;
            border: none;
            padding: 12px 24px;
            border-radius: 25px;
            font-size: 16px;
            font-weight: bold;
            cursor: pointer;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
            transition: all 0.3s ease;
          " onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">❤️ Cerrar</button>
        </div>
      </div>
    `;
    document.body.appendChild(bearModal);
  } else {
    bearModal.style.display = 'flex';
  }
}

function hideBearModal() {
  const bearModal = document.getElementById('bearModal');
  if (bearModal) {
    bearModal.style.display = 'none';
  }
}

// Happy bear modal for "Te Amo" button
function showHappyBearModal() {
  let happyBearModal = document.getElementById('happyBearModal');
  if (!happyBearModal) {
    // Create the modal if it doesn't exist
    happyBearModal = document.createElement('div');
    happyBearModal.id = 'happyBearModal';
    happyBearModal.innerHTML = `
      <div class="happy-bear-modal-overlay" style="
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, #ff69b4, #ffb6c1, #ffd700);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10000;
        animation: rainbowFadeIn 0.5s ease-in-out;
      ">
        <div class="happy-bear-modal-content" style="
          background: linear-gradient(135deg, #ffffff, #fff5f5);
          border-radius: 25px;
          padding: 30px;
          text-align: center;
          max-width: 320px;
          width: 90%;
          box-shadow: 0 15px 35px rgba(255, 105, 180, 0.4);
          animation: happyBounceIn 0.6s ease-out;
          position: relative;
          border: 3px solid #ff69b4;
        ">
          <div class="happy-bear-svg-container" style="margin-bottom: 20px;">
            <svg viewBox="0 0 200 200" style="width: 140px; height: 140px; margin: 0 auto; display: block;">
              <defs>
                <radialGradient id="happyBearHeadGrad" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" style="stop-color:#ff69b4;stop-opacity:1" />
                  <stop offset="50%" style="stop-color:#ffb6c1;stop-opacity:1" />
                  <stop offset="100%" style="stop-color:#ffd700;stop-opacity:1" />
                </radialGradient>
                <radialGradient id="happyBearCheekGrad" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" style="stop-color:#ff1493;stop-opacity:0.8" />
                  <stop offset="100%" style="stop-color:#ffb6c1;stop-opacity:0.4" />
                </radialGradient>
              </defs>
              <!-- Head -->
              <ellipse cx="100" cy="105" rx="85" ry="75" fill="url(#happyBearHeadGrad)" />
              <!-- Ears -->
              <ellipse cx="60" cy="55" rx="25" ry="20" fill="url(#happyBearHeadGrad)" />
              <ellipse cx="140" cy="55" rx="25" ry="20" fill="url(#happyBearHeadGrad)" />
              <!-- Inner Ears -->
              <ellipse cx="60" cy="55" rx="15" ry="10" fill="#ffb6c1" />
              <ellipse cx="140" cy="55" rx="15" ry="10" fill="#ffb6c1" />
              <!-- Happy Eyes -->
              <ellipse cx="80" cy="90" rx="8" ry="6" fill="#000" />
              <ellipse cx="120" cy="90" rx="8" ry="6" fill="#000" />
              <!-- Eye Highlights -->
              <circle cx="82" cy="88" r="2.5" fill="#fff" />
              <circle cx="122" cy="88" r="2.5" fill="#fff" />
              <!-- Blushing Cheeks -->
              <ellipse cx="70" cy="115" rx="12" ry="8" fill="url(#happyBearCheekGrad)" />
              <ellipse cx="130" cy="115" rx="12" ry="8" fill="url(#happyBearCheekGrad)" />
              <!-- Happy Mouth -->
              <path d="M85 125 Q100 145 115 125" stroke="#000" stroke-width="3" fill="none" stroke-linecap="round" />
              <!-- Tongue -->
              <ellipse cx="100" cy="135" rx="6" ry="8" fill="#ff69b4" />
              <!-- Heart nose -->
              <path d="M95 105 Q100 100 105 105 Q105 110 100 115 Q95 110 95 105 Z" fill="#ff1493" />
            </svg>
          </div>
          <h2 style="
            color: #ff1493;
            font-size: 28px;
            font-weight: bold;
            margin-bottom: 15px;
            text-shadow: 2px 2px 4px rgba(255, 20, 147, 0.3);
            font-family: 'Arial', sans-serif;
          ">¡Soy muy feliz a tu lado! 💕</h2>
          <p style="
            color: #ff69b4;
            font-size: 18px;
            margin-bottom: 25px;
            text-shadow: 1px 1px 2px rgba(255, 105, 180, 0.3);
            font-weight: bold;
          ">Cada momento contigo es mágico ✨</p>
          <div style="display: flex; justify-content: center; gap: 10px; margin-bottom: 20px;">
            <span style="font-size: 30px;">💖</span>
            <span style="font-size: 30px;">🥰</span>
            <span style="font-size: 30px;">💕</span>
            <span style="font-size: 30px;">😍</span>
            <span style="font-size: 30px;">💖</span>
          </div>
          <button onclick="hideHappyBearModal()" style="
            background: linear-gradient(135deg, #ff1493, #ff69b4, #ffb6c1);
            color: white;
            border: none;
            padding: 15px 30px;
            border-radius: 25px;
            font-size: 18px;
            font-weight: bold;
            cursor: pointer;
            box-shadow: 0 6px 15px rgba(255, 20, 147, 0.4);
            transition: all 0.3s ease;
            text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
          " onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">❤️ Gracias mi amor</button>
        </div>
      </div>
    `;
    document.body.appendChild(happyBearModal);
  } else {
    happyBearModal.style.display = 'flex';
  }
}

function hideHappyBearModal() {
  const happyBearModal = document.getElementById('happyBearModal');
  if (happyBearModal) {
    happyBearModal.style.display = 'none';
  }
}

// Cute effects for pear game WITH photos
function showCuteEffects() {
  const imageContainer = document.getElementById('imageContainer');
  const randomImage = document.getElementById('randomImage');

  // Clear any existing content
  imageContainer.innerHTML = '';

  // Create combined container with photo background and effects overlay
  const combinedContainer = document.createElement('div');
  combinedContainer.id = 'combinedEffects';
  combinedContainer.style.cssText = `
    position: relative;
    width: 100%;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    border-radius: 15px;
  `;

  // Add the photo as background
  const imgSrc = getRandomImage();
  const photoBackground = document.createElement('img');
  photoBackground.src = imgSrc;
  photoBackground.style.cssText = `
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 15px;
    z-index: 1;
  `;

  // Add a subtle overlay to make effects more visible
  const overlay = document.createElement('div');
  overlay.style.cssText = `
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(255, 230, 240, 0.3), rgba(230, 243, 255, 0.3), rgba(240, 230, 255, 0.3));
    border-radius: 15px;
    z-index: 2;
  `;

  // Create effects container (overlay on photo)
  const effectsContainer = document.createElement('div');
  effectsContainer.id = 'cuteEffects';
  effectsContainer.style.cssText = `
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 3;
    pointer-events: none;
  `;

  // Randomly choose an effect
  const effects = ['hearts', 'butterflies', 'flowers', 'stars', 'rainbow'];
  const randomEffect = effects[Math.floor(Math.random() * effects.length)];

  switch (randomEffect) {
    case 'hearts':
      createHeartBloomEffect(effectsContainer);
      break;
    case 'butterflies':
      createButterflyEffect(effectsContainer);
      break;
    case 'flowers':
      createFlowerBloomEffect(effectsContainer);
      break;
    case 'stars':
      createStarShowerEffect(effectsContainer);
      break;
    case 'rainbow':
      createRainbowEffect(effectsContainer);
      break;
  }

  // Assemble the combined display
  combinedContainer.appendChild(photoBackground);
  combinedContainer.appendChild(overlay);
  combinedContainer.appendChild(effectsContainer);
  imageContainer.appendChild(combinedContainer);
  imageContainer.classList.remove('hidden');

  // Handle image loading
  photoBackground.onload = () => {
    // Image loaded successfully
    console.log('Photo loaded successfully');
  };

  photoBackground.onerror = () => {
    console.error('Failed to load image:', imgSrc);
    // Fallback: show effects without photo
    photoBackground.style.display = 'none';
    overlay.style.background = 'linear-gradient(135deg, #ffe6f0, #e6f3ff, #f0e6ff)';
  };

  // Remove effects after animation
  setTimeout(() => {
    if (combinedContainer.parentNode) {
      combinedContainer.remove();
    }
  }, 8000);
}

function createHeartBloomEffect(container) {
  // Create multiple hearts blooming from center
  for (let i = 0; i < 12; i++) {
    setTimeout(() => {
      const heart = document.createElement('div');
      heart.innerHTML = '💖';
      heart.style.cssText = `
        position: absolute;
        font-size: 30px;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) scale(0);
        animation: heartBloom 2s ease-out forwards;
        animation-delay: ${i * 0.1}s;
      `;
      container.appendChild(heart);
    }, i * 100);
  }

  // Add floating smaller hearts
  for (let i = 0; i < 8; i++) {
    const smallHeart = document.createElement('div');
    smallHeart.innerHTML = ['💕', '💓', '💗', '💘'][Math.floor(Math.random() * 4)];
    smallHeart.style.cssText = `
      position: absolute;
      font-size: 20px;
      left: ${20 + Math.random() * 60}%;
      top: ${20 + Math.random() * 60}%;
      animation: floatAround 4s ease-in-out infinite;
      animation-delay: ${Math.random() * 2}s;
      opacity: 0.8;
    `;
    container.appendChild(smallHeart);
  }
}

function createButterflyEffect(container) {
  // Create butterflies flying around
  const butterflies = ['🦋', '🐛', '🌸', '🌺', '🌻'];

  for (let i = 0; i < 6; i++) {
    const butterfly = document.createElement('div');
    butterfly.innerHTML = butterflies[Math.floor(Math.random() * butterflies.length)];
    butterfly.style.cssText = `
      position: absolute;
      font-size: 25px;
      left: ${10 + Math.random() * 80}%;
      top: ${10 + Math.random() * 80}%;
      animation: butterflyFlight 6s ease-in-out infinite;
      animation-delay: ${Math.random() * 3}s;
    `;
    container.appendChild(butterfly);
  }

  // Add flower background
  for (let i = 0; i < 5; i++) {
    const flower = document.createElement('div');
    flower.innerHTML = ['🌸', '🌺', '🌻', '🌷', '🌹'][Math.floor(Math.random() * 5)];
    flower.style.cssText = `
      position: absolute;
      font-size: 18px;
      left: ${15 + Math.random() * 70}%;
      bottom: 10px;
      opacity: 0.6;
      animation: gentleSway 3s ease-in-out infinite;
      animation-delay: ${Math.random() * 2}s;
    `;
    container.appendChild(flower);
  }
}

function createFlowerBloomEffect(container) {
  // Create flower blooming animation
  const flower = document.createElement('div');
  flower.innerHTML = '🌸';
  flower.style.cssText = `
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: 20px;
    animation: flowerBloom 3s ease-out forwards;
  `;
  container.appendChild(flower);

  // Add petals
  for (let i = 0; i < 8; i++) {
    setTimeout(() => {
      const petal = document.createElement('div');
      petal.innerHTML = '🌸';
      petal.style.cssText = `
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        font-size: 15px;
        animation: petalFly 2s ease-out forwards;
        animation-delay: ${i * 0.1}s;
      `;
      container.appendChild(petal);
    }, i * 200);
  }

  // Add bees
  for (let i = 0; i < 3; i++) {
    const bee = document.createElement('div');
    bee.innerHTML = '🐝';
    bee.style.cssText = `
      position: absolute;
      font-size: 16px;
      left: ${20 + Math.random() * 60}%;
      top: ${20 + Math.random() * 60}%;
      animation: beeBuzz 4s ease-in-out infinite;
      animation-delay: ${Math.random() * 2}s;
    `;
    container.appendChild(bee);
  }
}

function createStarShowerEffect(container) {
  // Create star shower
  for (let i = 0; i < 15; i++) {
    setTimeout(() => {
      const star = document.createElement('div');
      star.innerHTML = ['⭐', '✨', '🌟', '💫'][Math.floor(Math.random() * 4)];
      star.style.cssText = `
        position: absolute;
        font-size: 20px;
        left: ${Math.random() * 100}%;
        top: -20px;
        animation: starFall 3s linear forwards;
        animation-delay: ${Math.random() * 2}s;
      `;
      container.appendChild(star);
    }, i * 200);
  }

  // Add moon
  const moon = document.createElement('div');
  moon.innerHTML = '🌙';
  moon.style.cssText = `
    position: absolute;
    font-size: 30px;
    right: 20px;
    top: 20px;
    animation: gentleGlow 4s ease-in-out infinite;
  `;
  container.appendChild(moon);

  // Add clouds
  for (let i = 0; i < 3; i++) {
    const cloud = document.createElement('div');
    cloud.innerHTML = '☁️';
    cloud.style.cssText = `
      position: absolute;
      font-size: 18px;
      left: ${10 + i * 30}%;
      top: ${15 + Math.random() * 20}%;
      animation: cloudDrift 8s ease-in-out infinite;
      animation-delay: ${i * 1.5}s;
      opacity: 0.7;
    `;
    container.appendChild(cloud);
  }
}

function createRainbowEffect(container) {
  // Create rainbow arc
  const rainbow = document.createElement('div');
  rainbow.style.cssText = `
    position: absolute;
    left: 50%;
    top: 60%;
    transform: translateX(-50%);
    width: 200px;
    height: 100px;
    border-radius: 50% 50% 50% 50% / 100% 100% 0% 0%;
    background: linear-gradient(to top, #ff0000, #ff8000, #ffff00, #00ff00, #0080ff, #8000ff);
    animation: rainbowAppear 2s ease-out forwards;
    opacity: 0;
  `;
  container.appendChild(rainbow);

  // Add rainbow text
  setTimeout(() => {
    const text = document.createElement('div');
    text.innerHTML = '¡Magia del Amor! 🌈';
    text.style.cssText = `
      position: absolute;
      left: 50%;
      top: 30%;
      transform: translateX(-50%);
      font-size: 18px;
      font-weight: bold;
      color: #ff69b4;
      text-shadow: 2px 2px 4px rgba(255, 105, 180, 0.3);
      animation: textGlow 2s ease-out forwards;
      opacity: 0;
    `;
    container.appendChild(text);
  }, 1000);

  // Add floating unicorns
  for (let i = 0; i < 4; i++) {
    const unicorn = document.createElement('div');
    unicorn.innerHTML = '🦄';
    unicorn.style.cssText = `
      position: absolute;
      font-size: 20px;
      left: ${15 + Math.random() * 70}%;
      top: ${20 + Math.random() * 50}%;
      animation: unicornFloat 5s ease-in-out infinite;
      animation-delay: ${Math.random() * 3}s;
      opacity: 0.8;
    `;
    container.appendChild(unicorn);
  }
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

  // Generate dynamic image array for all images in the folder
  // To add more images, simply place them in the images/ folder and update the number below
  const generateImageArray = () => {
    const images = [];
    // Currently includes 25 images (1.jpg through 25.jpg)
    // Update this number when you add more images to the folder
    const totalImages = 25;

    for (let i = 1; i <= totalImages; i++) {
      images.push(`images/${i}.jpg`);
    }
    return images;
  };

  const images = generateImageArray();

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

      // Game constants
      this.baseWidth = 800;
      this.baseHeight = 400;
      this.scale = 1;

      // Game state
      this.gameState = 'start'; // start, playing, paused, gameOver, levelComplete, win
      this.level = 1;
      this.world = 1;
      this.score = 0;
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
      this.worldHeight = this.canvas.height / this.scale; // Match canvas height

      // Player (King) - controllable character
      this.player = {
        x: 100,
        y: this.worldHeight - 100, // Position relative to ground
        width: 32,
        height: 32,
        velocityX: 0, // Start with no movement
        velocityY: 0,
        onGround: true, // Start on ground
        speed: 3, // Movement speed
        jumpPower: -15, // Jump strength
        gravity: 0.6,
        facing: 1, // 1 = right, -1 = left
        jumping: false,
        jumpCharge: 0,
        maxJumpCharge: 30
      };

      // Input debouncing
      this.lastJumpTime = 0;

      // Game objects
      this.platforms = [];
      this.hearts = [];
      this.enemies = [];
      this.powerUps = [];
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

      // UI elements initialized

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
      // Update world height to match new canvas dimensions
      this.worldHeight = this.canvas.height / this.scale;
      this.camera.height = this.baseHeight;
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

        // Removed crouch functionality as requested

        // Handle key presses for game controls
      };

      this.keyupHandler = (e) => {
        this.keys[e.code] = false;

        if (e.code === 'ArrowUp' && this.gameState === 'playing') {
          this.releaseJump();
        }

        // Removed crouch functionality as requested
      };

      // Touch controls for mobile
      this.touchStartHandler = (e) => {
        e.preventDefault();
        if (this.gameState === 'playing') {
          this.startJumpCharge();
        }
      };

      this.touchEndHandler = (e) => {
        e.preventDefault();
        if (this.gameState === 'playing') {
          this.releaseJump();
        }
      };

      // Button controls for desktop - simplified
      this.leftBtnHandler = (e) => {
        e.preventDefault();
        e.target.style.transform = 'scale(0.9)';
        e.target.style.backgroundColor = '#4c1d95';
        this.keys['ArrowLeft'] = true;
        if (this.gameState !== 'playing') {
          this.startGame();
        }
      };

      this.leftBtnReleaseHandler = (e) => {
        e.preventDefault();
        e.target.style.transform = '';
        e.target.style.backgroundColor = '';
        this.keys['ArrowLeft'] = false;
      };

      this.rightBtnHandler = (e) => {
        e.preventDefault();
        e.target.style.transform = 'scale(0.9)';
        e.target.style.backgroundColor = '#4c1d95';
        this.keys['ArrowRight'] = true;
        if (this.gameState !== 'playing') {
          this.startGame();
        }
      };

      this.rightBtnReleaseHandler = (e) => {
        e.preventDefault();
        e.target.style.transform = '';
        e.target.style.backgroundColor = '';
        this.keys['ArrowRight'] = false;
      };

      this.jumpBtnHandler = (e) => {
        e.preventDefault();
        e.target.style.transform = 'scale(0.9)';
        e.target.style.backgroundColor = '#9d174d';

        // Only allow jump when on ground and not already jumping
        // Add input debouncing to prevent rapid presses
        const now = Date.now();
        if (this.lastJumpTime && now - this.lastJumpTime < 150) return; // 150ms debounce

        if (this.gameState === 'playing' && this.player && this.player.onGround && !this.player.jumping) {
          this.player.velocityY = this.player.jumpPower;
          this.player.onGround = false;
          this.player.jumping = true;
          this.lastJumpTime = now;
          this.playSound(523, 0.1); // Jump sound
        }
      };

      this.jumpBtnReleaseHandler = (e) => {
        e.preventDefault();
        e.target.style.transform = '';
        e.target.style.backgroundColor = '';
      };


      // Mobile button controls - simplified
      this.leftBtnMobileHandler = (e) => {
        e.preventDefault();
        e.target.style.transform = 'scale(0.9)';
        e.target.style.backgroundColor = '#4c1d95';
        this.keys['ArrowLeft'] = true;
        if (this.gameState !== 'playing') {
          this.startGame();
        }
      };

      this.leftBtnMobileReleaseHandler = (e) => {
        e.preventDefault();
        e.target.style.transform = '';
        e.target.style.backgroundColor = '';
        this.keys['ArrowLeft'] = false;
      };

      this.rightBtnMobileHandler = (e) => {
        e.preventDefault();
        e.target.style.transform = 'scale(0.9)';
        e.target.style.backgroundColor = '#4c1d95';
        this.keys['ArrowRight'] = true;
        if (this.gameState !== 'playing') {
          this.startGame();
        }
      };

      this.rightBtnMobileReleaseHandler = (e) => {
        e.preventDefault();
        e.target.style.transform = '';
        e.target.style.backgroundColor = '';
        this.keys['ArrowRight'] = false;
      };

      this.jumpBtnMobileHandler = (e) => {
        e.preventDefault();
        e.target.style.transform = 'scale(0.9)';
        e.target.style.backgroundColor = '#9d174d';

        // Only allow jump when on ground and not already jumping
        // Add input debouncing to prevent rapid presses
        const now = Date.now();
        if (this.lastJumpTime && now - this.lastJumpTime < 150) return; // 150ms debounce

        if (this.gameState === 'playing' && this.player && this.player.onGround && !this.player.jumping) {
          this.player.velocityY = this.player.jumpPower;
          this.player.onGround = false;
          this.player.jumping = true;
          this.lastJumpTime = now;
          this.playSound(523, 0.1); // Jump sound
        }
      };

      this.jumpBtnMobileReleaseHandler = (e) => {
        e.preventDefault();
        e.target.style.transform = '';
        e.target.style.backgroundColor = '';
      };


      // Add event listeners
      document.addEventListener('keydown', this.keydownHandler);
      document.addEventListener('keyup', this.keyupHandler);
      this.canvas.addEventListener('touchstart', this.touchStartHandler);
      this.canvas.addEventListener('touchend', this.touchEndHandler);

      // Button event listeners - using mousedown/mouseup for continuous control
      const leftBtn = document.getElementById('leftBtn');
      const rightBtn = document.getElementById('rightBtn');
      const jumpBtn = document.getElementById('jumpBtn');
      const leftBtnMobile = document.getElementById('leftBtnMobile');
      const rightBtnMobile = document.getElementById('rightBtnMobile');
      const jumpBtnMobile = document.getElementById('jumpBtnMobile');

      if (leftBtn) {
        leftBtn.addEventListener('mousedown', this.leftBtnHandler);
        leftBtn.addEventListener('mouseup', this.leftBtnReleaseHandler);
        leftBtn.addEventListener('mouseleave', this.leftBtnReleaseHandler); // Handle mouse leaving button
      }
      if (rightBtn) {
        rightBtn.addEventListener('mousedown', this.rightBtnHandler);
        rightBtn.addEventListener('mouseup', this.rightBtnReleaseHandler);
        rightBtn.addEventListener('mouseleave', this.rightBtnReleaseHandler);
      }
      if (jumpBtn) {
        jumpBtn.addEventListener('mousedown', this.jumpBtnHandler.bind(this));
        jumpBtn.addEventListener('mouseup', this.jumpBtnReleaseHandler.bind(this));
        jumpBtn.addEventListener('mouseleave', this.jumpBtnReleaseHandler.bind(this));
      }
      if (leftBtnMobile) {
        leftBtnMobile.addEventListener('touchstart', this.leftBtnMobileHandler);
        leftBtnMobile.addEventListener('touchend', this.leftBtnMobileReleaseHandler);
      }
      if (rightBtnMobile) {
        rightBtnMobile.addEventListener('touchstart', this.rightBtnMobileHandler);
        rightBtnMobile.addEventListener('touchend', this.rightBtnMobileReleaseHandler);
      }
      if (jumpBtnMobile) {
        jumpBtnMobile.addEventListener('touchstart', this.jumpBtnMobileHandler.bind(this));
        jumpBtnMobile.addEventListener('touchend', this.jumpBtnMobileReleaseHandler.bind(this));
      }

      // Controls setup complete
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
      const leftBtnMobile = document.getElementById('leftBtnMobile');
      const rightBtnMobile = document.getElementById('rightBtnMobile');
      const jumpBtnMobile = document.getElementById('jumpBtnMobile');

      if (leftBtn) {
        if (this.leftBtnHandler) leftBtn.removeEventListener('mousedown', this.leftBtnHandler);
        if (this.leftBtnReleaseHandler) leftBtn.removeEventListener('mouseup', this.leftBtnReleaseHandler);
        if (this.leftBtnReleaseHandler) leftBtn.removeEventListener('mouseleave', this.leftBtnReleaseHandler);
      }
      if (rightBtn) {
        if (this.rightBtnHandler) rightBtn.removeEventListener('mousedown', this.rightBtnHandler);
        if (this.rightBtnReleaseHandler) rightBtn.removeEventListener('mouseup', this.rightBtnReleaseHandler);
        if (this.rightBtnReleaseHandler) rightBtn.removeEventListener('mouseleave', this.rightBtnReleaseHandler);
      }
      if (jumpBtn) {
        if (this.jumpBtnHandler) jumpBtn.removeEventListener('mousedown', this.jumpBtnHandler);
        if (this.jumpBtnReleaseHandler) jumpBtn.removeEventListener('mouseup', this.jumpBtnReleaseHandler);
        if (this.jumpBtnReleaseHandler) jumpBtn.removeEventListener('mouseleave', this.jumpBtnReleaseHandler);
      }
      if (leftBtnMobile) {
        if (this.leftBtnMobileHandler) leftBtnMobile.removeEventListener('touchstart', this.leftBtnMobileHandler);
        if (this.leftBtnMobileReleaseHandler) leftBtnMobile.removeEventListener('touchend', this.leftBtnMobileReleaseHandler);
      }
      if (rightBtnMobile) {
        if (this.rightBtnMobileHandler) rightBtnMobile.removeEventListener('touchstart', this.rightBtnMobileHandler);
        if (this.rightBtnMobileReleaseHandler) rightBtnMobile.removeEventListener('touchend', this.rightBtnMobileReleaseHandler);
      }
      if (jumpBtnMobile) {
        if (this.jumpBtnMobileHandler) jumpBtnMobile.removeEventListener('touchstart', this.jumpBtnMobileHandler);
        if (this.jumpBtnMobileReleaseHandler) jumpBtnMobile.removeEventListener('touchend', this.jumpBtnMobileReleaseHandler);
      }
    }

    startJumpCharge() {
      if (this.player.onGround && !this.player.jumping) {
        this.player.jumpCharge = 0;
        this.player.jumping = true;
      }
    }

    releaseJump() {
      if (this.player.onGround && !this.player.jumping) {
        this.player.velocityY = this.player.jumpPower;
        this.player.onGround = false;
        this.player.jumping = true;
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

      // Player movement - simplified
      let baseSpeed = this.player.speed + (this.speedBoostActive ? 2 : 0);
      if (this.keys['ArrowLeft']) {
        this.player.velocityX = -baseSpeed; // Move left
      } else if (this.keys['ArrowRight']) {
        this.player.velocityX = baseSpeed; // Move right
      } else {
        this.player.velocityX = 0; // Stop when no buttons pressed
      }

      // Apply gravity
      this.player.velocityY += this.player.gravity;

      // Update player position
      this.player.x += this.player.velocityX;
      this.player.y += this.player.velocityY;

      // Update camera
      this.updateCamera();

      // Platform collision - reset onGround flag each frame
      this.player.onGround = false;
      for (let platform of this.platforms) {
        if (this.checkCollision(this.player, platform)) {
          // Check if player is falling onto platform from above
          if (this.player.velocityY >= 0 &&
              this.player.y + this.player.height >= platform.y &&
              this.player.y + this.player.height <= platform.y + platform.height &&
              this.player.y < platform.y) {
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
      // Standard player collision rectangle
      let playerRect = {
        x: this.player.x,
        y: this.player.y,
        width: this.player.width,
        height: this.player.height
      };

      // Heart collection
      for (let i = 0; i < this.hearts.length; i++) {
        if (!this.hearts[i].collected && this.checkCollision(playerRect, this.hearts[i])) {
          this.hearts[i].collected = true;
          this.heartsCollected++;
          this.score += 1000;
          this.playSound(659, 0.2); // Heart collection sound
          this.createParticles(this.hearts[i].x + 15, this.hearts[i].y + 15, '#ff69b4', 10);

          if (this.heartsCollected >= this.totalHearts) {
            this.winGame();
          }
        }
      }

      // No coin collection in simplified version

      // Power-up collection
      for (let i = 0; i < this.powerUps.length; i++) {
        if (!this.powerUps[i].collected && this.checkCollision(playerRect, this.powerUps[i])) {
          this.powerUps[i].collected = true;
          this.collectPowerUp(this.powerUps[i]);
        }
      }

      // Enemy collision
      for (let enemy of this.enemies) {
        if (enemy.alive && this.checkCollision(playerRect, enemy)) {
          if (this.invincible || this.shieldActive) {
            // Defeat enemy
            enemy.alive = false;
            this.score += 200;
            this.playSound(1047, 0.3); // Enemy defeat sound
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
          this.playSound(1319, 0.3); // Shield power-up sound
          break;
        case 'star':
          this.invincible = true;
          this.invincibleTime = 10000; // 10 seconds
          this.playSound(1568, 0.3); // Star power-up sound
          break;
        case 'speed':
          this.speedBoostActive = true;
          this.speedBoostTime = 15000; // 15 seconds
          this.player.speed = 4;
          this.playSound(1175, 0.3); // Speed power-up sound
          break;
        case 'life':
          this.lives++;
          this.playSound(988, 0.3); // Life power-up sound
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
      this.playSound(220, 0.5); // Player hit sound

      if (this.lives <= 0) {
        this.gameOver();
      } else {
        // Reset player position
        this.player.x = 100;
        this.player.y = this.worldHeight - 100; // Position relative to ground
        this.player.velocityX = 0;
        this.player.velocityY = 0;
        this.player.onGround = true; // Reset to on ground
        this.player.jumping = false;
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
      // Clear canvas with scaled dimensions
      this.ctx.clearRect(0, 0, this.canvas.width / this.scale, this.canvas.height / this.scale);

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

        // No coins to draw in simplified version

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
        const scaledHeight = this.canvas.height / this.scale;
        const gradient = this.ctx.createLinearGradient(0, 0, 0, scaledHeight);
        gradient.addColorStop(0, '#87CEEB');
        gradient.addColorStop(0.7, '#98FB98');
        gradient.addColorStop(1, '#228B22');
        this.ctx.fillStyle = gradient;
        this.ctx.fillRect(this.camera.x, 0, this.worldWidth, scaledHeight);

        // Draw animated clouds
        this.drawClouds();

        // Draw castle towers in background
        this.ctx.fillStyle = '#8B4513';
        for (let i = 0; i < 5; i++) {
          const x = 200 + i * 400;
          this.ctx.fillRect(x, 150, 40, 150);
          this.ctx.fillRect(x - 10, 130, 60, 20); // Tower top
        }
      }
    }

    drawClouds() {
      const time = this.frameCount * 0.01; // Slow animation

      // Draw multiple colorful clouds at different positions
      const clouds = [
        { x: 100, y: 80, scale: 1.2, color: 'rgba(255, 255, 255, 0.9)' },
        { x: 400, y: 60, scale: 0.8, color: 'rgba(255, 182, 193, 0.8)' },
        { x: 700, y: 90, scale: 1.0, color: 'rgba(255, 215, 0, 0.7)' },
        { x: 1000, y: 70, scale: 1.3, color: 'rgba(255, 105, 180, 0.8)' },
        { x: 1300, y: 85, scale: 0.9, color: 'rgba(173, 216, 230, 0.8)' },
        { x: 1600, y: 65, scale: 1.1, color: 'rgba(255, 160, 122, 0.7)' },
        { x: 1900, y: 75, scale: 0.7, color: 'rgba(221, 160, 221, 0.8)' },
        { x: 2200, y: 80, scale: 1.4, color: 'rgba(152, 251, 152, 0.8)' },
        { x: 2500, y: 55, scale: 1.0, color: 'rgba(255, 218, 185, 0.8)' },
        { x: 2800, y: 95, scale: 0.8, color: 'rgba(240, 128, 128, 0.7)' },
        { x: 3100, y: 70, scale: 1.2, color: 'rgba(135, 206, 235, 0.8)' },
        { x: 3400, y: 85, scale: 0.9, color: 'rgba(255, 228, 196, 0.8)' }
      ];

      clouds.forEach((cloud, index) => {
        const cloudX = cloud.x + this.camera.x + Math.sin(time + index) * 25;
        const cloudY = cloud.y + Math.cos(time * 0.5 + index) * 5; // Add vertical movement
        const scale = cloud.scale;

        // Main cloud body with color
        this.ctx.fillStyle = cloud.color;
        this.ctx.beginPath();
        this.ctx.arc(cloudX, cloudY, 25 * scale, 0, Math.PI * 2);
        this.ctx.arc(cloudX + 20 * scale, cloudY, 30 * scale, 0, Math.PI * 2);
        this.ctx.arc(cloudX + 40 * scale, cloudY, 25 * scale, 0, Math.PI * 2);
        this.ctx.arc(cloudX + 15 * scale, cloudY - 15 * scale, 20 * scale, 0, Math.PI * 2);
        this.ctx.arc(cloudX + 35 * scale, cloudY - 15 * scale, 18 * scale, 0, Math.PI * 2);
        this.ctx.fill();

        // Add rainbow effect for some clouds
        if (index % 3 === 0) {
          // Rainbow arc
          const rainbowColors = ['#ff0000', '#ff8000', '#ffff00', '#00ff00', '#0080ff', '#8000ff'];
          rainbowColors.forEach((color, rainbowIndex) => {
            this.ctx.strokeStyle = color;
            this.ctx.lineWidth = 2;
            this.ctx.beginPath();
            this.ctx.arc(cloudX + 20 * scale, cloudY - 10 * scale, (15 + rainbowIndex * 2) * scale, Math.PI, 2 * Math.PI);
            this.ctx.stroke();
          });
        }

        // Enhanced shadow for depth
        this.ctx.fillStyle = 'rgba(100, 100, 100, 0.2)';
        this.ctx.beginPath();
        this.ctx.arc(cloudX + 8 * scale, cloudY + 12 * scale, 18 * scale, 0, Math.PI * 2);
        this.ctx.arc(cloudX + 28 * scale, cloudY + 12 * scale, 22 * scale, 0, Math.PI * 2);
        this.ctx.arc(cloudX + 48 * scale, cloudY + 12 * scale, 18 * scale, 0, Math.PI * 2);
        this.ctx.fill();

        // Add sparkle effects for some clouds
        if (index % 4 === 0 && Math.sin(time * 2 + index) > 0.8) {
          this.ctx.fillStyle = '#ffffff';
          this.ctx.beginPath();
          this.ctx.arc(cloudX + 10 * scale, cloudY - 5 * scale, 2, 0, Math.PI * 2);
          this.ctx.fill();
          this.ctx.beginPath();
          this.ctx.arc(cloudX + 30 * scale, cloudY - 8 * scale, 1.5, 0, Math.PI * 2);
          this.ctx.fill();
        }
      });

      // Add some floating particles for extra magic
      for (let i = 0; i < 8; i++) {
        const particleX = (this.camera.x + i * 200) % (this.worldWidth + 400) - 200;
        const particleY = 150 + Math.sin(time * 0.8 + i) * 30;

        this.ctx.fillStyle = `hsl(${(time * 50 + i * 45) % 360}, 70%, 80%)`;
        this.ctx.beginPath();
        this.ctx.arc(particleX, particleY, 3, 0, Math.PI * 2);
        this.ctx.fill();
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
      // Scale characters for mobile
      const isMobile = window.innerWidth < 768;
      const scale = isMobile ? 1.5 : 1.0; // 50% bigger on mobile

      // Adjust dimensions based on scale
      const scaledWidth = width * scale;
      const scaledHeight = height * scale;
      const scaledX = x - (scaledWidth - width) / 2; // Center the scaled character
      const scaledY = y - (scaledHeight - height) / 2;

      // Standard king dimensions (removed crouching)
      let drawHeight = scaledHeight;
      let bodyHeight = 20 * scale;
      let bodyOffset = 8 * scale;

      // Shield effect
      if (this.shieldActive) {
        this.ctx.strokeStyle = '#FFD700';
        this.ctx.lineWidth = 2 * scale;
        this.ctx.beginPath();
        this.ctx.arc(scaledX + scaledWidth/2, scaledY + drawHeight/2, scaledWidth/2 + 5 * scale, 0, Math.PI * 2);
        this.ctx.stroke();
      }

      // Invincibility effect
      if (this.invincible) {
        this.ctx.strokeStyle = this.frameCount % 10 < 5 ? '#FFFFFF' : '#FFFF00';
        this.ctx.lineWidth = 2 * scale;
        this.ctx.strokeRect(scaledX - 2 * scale, scaledY - 2 * scale, scaledWidth + 4 * scale, drawHeight + 4 * scale);
      }

      // King body
      this.ctx.fillStyle = '#4B0082';
      this.ctx.fillRect(scaledX + 4 * scale, scaledY + bodyOffset, 24 * scale, bodyHeight);

      // Crown
      this.ctx.fillStyle = '#FFD700';
      this.ctx.fillRect(scaledX + 8 * scale, scaledY + 2 * scale, 16 * scale, 6 * scale);
      this.ctx.fillRect(scaledX + 6 * scale, scaledY, 4 * scale, 4 * scale);
      this.ctx.fillRect(scaledX + 10 * scale, scaledY - 2 * scale, 4 * scale, 4 * scale);
      this.ctx.fillRect(scaledX + 16 * scale, scaledY - 2 * scale, 4 * scale, 4 * scale);
      this.ctx.fillRect(scaledX + 22 * scale, scaledY, 4 * scale, 4 * scale);

      // Crown jewels
      this.ctx.fillStyle = '#FF1493';
      this.ctx.fillRect(scaledX + 9 * scale, scaledY + 1 * scale, 2 * scale, 2 * scale);
      this.ctx.fillRect(scaledX + 13 * scale, scaledY - 1 * scale, 2 * scale, 2 * scale);
      this.ctx.fillRect(scaledX + 19 * scale, scaledY - 1 * scale, 2 * scale, 2 * scale);
      this.ctx.fillRect(scaledX + 23 * scale, scaledY + 1 * scale, 2 * scale, 2 * scale);

      // Face
      this.ctx.fillStyle = '#FFE4B5';
      this.ctx.fillRect(scaledX + 8 * scale, scaledY + bodyOffset, 16 * scale, 12 * scale);

      // Eyes
      this.ctx.fillStyle = '#000';
      this.ctx.fillRect(scaledX + 10 * scale, scaledY + bodyOffset + 2 * scale, 2 * scale, 2 * scale);
      this.ctx.fillRect(scaledX + 18 * scale, scaledY + bodyOffset + 2 * scale, 2 * scale, 2 * scale);

      // Mustache
      this.ctx.fillStyle = '#654321';
      this.ctx.fillRect(scaledX + 11 * scale, scaledY + bodyOffset + 6 * scale, 10 * scale, 3 * scale);

      // Arms
      this.ctx.fillStyle = '#FFE4B5';
      this.ctx.fillRect(scaledX + 2 * scale, scaledY + bodyOffset + 2 * scale, 6 * scale, 8 * scale);
      this.ctx.fillRect(scaledX + 24 * scale, scaledY + bodyOffset + 2 * scale, 6 * scale, 8 * scale);

      // Legs
      let legHeight = 8 * scale;
      let legY = scaledY + bodyOffset + bodyHeight;
      this.ctx.fillStyle = '#4B0082';
      this.ctx.fillRect(scaledX + 8 * scale, legY, 6 * scale, legHeight);
      this.ctx.fillRect(scaledX + 18 * scale, legY, 6 * scale, legHeight);

      // Shoes
      let shoeY = legY + legHeight - 2 * scale;
      this.ctx.fillStyle = '#8B4513';
      this.ctx.fillRect(scaledX + 6 * scale, shoeY, 10 * scale, 4 * scale);
      this.ctx.fillRect(scaledX + 16 * scale, shoeY, 10 * scale, 4 * scale);

      // Sword
      let swordHeight = 16 * scale;
      let swordY = scaledY + bodyOffset;
      this.ctx.fillStyle = '#C0C0C0';
      this.ctx.fillRect(scaledX + 28 * scale, swordY, 2 * scale, swordHeight);
      this.ctx.fillStyle = '#FFD700';
      this.ctx.fillRect(scaledX + 26 * scale, swordY - 2 * scale, 6 * scale, 4 * scale);
    }

    drawEnemy(x, y, width, height, type) {
      // Scale enemies for mobile
      const isMobile = window.innerWidth < 768;
      const scale = isMobile ? 1.5 : 1.0; // 50% bigger on mobile

      // Adjust dimensions based on scale
      const scaledWidth = width * scale;
      const scaledHeight = height * scale;
      const scaledX = x - (scaledWidth - width) / 2; // Center the scaled enemy
      const scaledY = y - (scaledHeight - height) / 2;

      if (type === 'nogro') {
        // Nogro enemy - menacing creature
        this.ctx.fillStyle = '#000000';
        this.ctx.fillRect(scaledX + 2 * scale, scaledY + 2 * scale, scaledWidth - 4 * scale, scaledHeight - 4 * scale);

        // Glowing red eyes
        this.ctx.fillStyle = '#FF0000';
        this.ctx.fillRect(scaledX + 6 * scale, scaledY + 6 * scale, 4 * scale, 4 * scale);
        this.ctx.fillRect(scaledX + 16 * scale, scaledY + 6 * scale, 4 * scale, 4 * scale);

        // Sharp teeth
        this.ctx.fillStyle = '#FFFFFF';
        this.ctx.fillRect(scaledX + 8 * scale, scaledY + 16 * scale, 2 * scale, 4 * scale);
        this.ctx.fillRect(scaledX + 10 * scale, scaledY + 18 * scale, 2 * scale, 2 * scale);
        this.ctx.fillRect(scaledX + 14 * scale, scaledY + 18 * scale, 2 * scale, 2 * scale);
        this.ctx.fillRect(scaledX + 16 * scale, scaledY + 16 * scale, 2 * scale, 4 * scale);

        // Dark aura
        this.ctx.strokeStyle = '#330000';
        this.ctx.lineWidth = 1 * scale;
        this.ctx.strokeRect(scaledX, scaledY, scaledWidth, scaledHeight);
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
      // Draw HUD with scaled dimensions
      const scaledWidth = this.canvas.width / this.scale;
      const scaledHeight = this.canvas.height / this.scale;
      this.ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
      this.ctx.fillRect(0, 0, scaledWidth, 40);

      this.ctx.fillStyle = '#FFFFFF';
      this.ctx.font = '16px Arial';
      this.ctx.textAlign = 'left';

      // Lives
      this.ctx.fillText(`❤️ ${this.lives}`, 10, 25);

      // Hearts collected
      this.ctx.fillText(`💖 ${this.heartsCollected}/${this.totalHearts}`, scaledWidth * 0.1, 25);

      // Score
      this.ctx.fillText(`Score: ${this.score}`, scaledWidth * 0.25, 25);

      // No coin display in simplified version

      // Time
      const minutes = Math.floor(this.timeLeft / 60);
      const seconds = this.timeLeft % 60;
      this.ctx.fillText(`Time: ${minutes}:${seconds.toString().padStart(2, '0')}`, scaledWidth * 0.6, 25);

      // Level
      this.ctx.fillText(`World ${this.world}-${this.level}`, scaledWidth * 0.75, 25);

      // Power-up indicators
      if (this.shieldActive) {
        this.ctx.fillStyle = '#FFD700';
        this.ctx.fillText('🛡️', scaledWidth * 0.9, 25);
      }

      if (this.invincible) {
        this.ctx.fillStyle = '#FFFF00';
        this.ctx.fillText('⭐', scaledWidth * 0.92, 25);
      }

      if (this.speedBoostActive) {
        this.ctx.fillStyle = '#00FF00';
        this.ctx.fillText('💨', scaledWidth * 0.94, 25);
      }
    }

    loadLevel(world, level) {
      // Reset level elements
      this.platforms = [];
      this.hearts = [];
      this.enemies = [];
      this.powerUps = [];
      this.particles = [];

      // Create level based on world and level
      if (world === 1) {
        this.loadCastleLevel(level);
      }

      // Reset player position
      this.player.x = 100;
      this.player.y = this.worldHeight - 100; // Position relative to ground
      this.player.velocityX = 0;
      this.player.velocityY = 0;
      this.player.onGround = true; // Ensure player starts on ground
      this.player.jumping = false;
      this.camera.x = 0;
      this.camera.y = 0;
    }

    loadCastleLevel(level) {
      // Ground platforms - use scaled world height
      const groundY = this.worldHeight - 20; // 20 pixels from bottom
      this.platforms.push(
        { x: 0, y: groundY, width: this.worldWidth, height: 20, type: 'normal' }
      );

      // Floating platforms - position relative to ground
      this.platforms.push(
        { x: 200, y: groundY - 100, width: 150, height: 20, type: 'normal' },
        { x: 450, y: groundY - 150, width: 150, height: 20, type: 'normal' },
        { x: 700, y: groundY - 80, width: 120, height: 20, type: 'normal' },
        { x: 900, y: groundY - 120, width: 100, height: 20, type: 'normal' },
        { x: 1100, y: groundY - 150, width: 150, height: 20, type: 'normal' },
        { x: 1350, y: groundY - 100, width: 120, height: 20, type: 'normal' },
        { x: 1600, y: groundY - 200, width: 100, height: 20, type: 'normal' },
        { x: 1850, y: groundY - 150, width: 120, height: 20, type: 'normal' }
      );

      // Hearts - position relative to ground
      const heartPositions = [
        { x: 250, y: groundY - 120 }, { x: 500, y: groundY - 170 }, { x: 750, y: groundY - 100 },
        { x: 1000, y: groundY - 140 }, { x: 1250, y: groundY - 170 }, { x: 1500, y: groundY - 220 },
        { x: 1750, y: groundY - 170 }, { x: 2000, y: groundY - 120 }
      ];

      heartPositions.forEach(pos => {
        this.hearts.push({
          x: pos.x, y: pos.y, width: 30, height: 30, collected: false
        });
      });

      // No coins in this simplified version

      // Power-ups - position relative to ground
      this.powerUps.push(
        { x: 320, y: groundY - 280, width: 20, height: 20, type: 'shield', collected: false },
        { x: 820, y: groundY - 200, width: 20, height: 20, type: 'star', collected: false },
        { x: 1320, y: groundY - 220, width: 20, height: 20, type: 'speed', collected: false },
        { x: 1820, y: groundY - 230, width: 20, height: 20, type: 'life', collected: false }
      );

      // Enemies - position relative to ground
      this.enemies.push(
        { x: 300, y: groundY - 40, width: 30, height: 30, velocityX: 1, type: 'nogro', alive: true, direction: 1 },
        { x: 600, y: groundY - 170, width: 30, height: 30, velocityX: 1, type: 'nogro', alive: true, direction: 1 },
        { x: 900, y: groundY - 140, width: 30, height: 30, velocityX: 1, type: 'nogro', alive: true, direction: 1 },
        { x: 1200, y: groundY - 170, width: 30, height: 30, velocityX: 1, type: 'nogro', alive: true, direction: 1 },
        { x: 1500, y: groundY - 220, width: 30, height: 30, velocityX: 1, type: 'nogro', alive: true, direction: 1 }
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

    playVictoryMusic() {
      if (!this.audioContext) return;

      // Create a victory melody using Web Audio API
      const playNote = (frequency, startTime, duration) => {
        const oscillator = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(this.audioContext.destination);

        oscillator.frequency.setValueAtTime(frequency, startTime);
        oscillator.type = 'triangle'; // Softer sound for victory

        gainNode.gain.setValueAtTime(0, startTime);
        gainNode.gain.linearRampToValueAtTime(0.4, startTime + 0.1);
        gainNode.gain.setValueAtTime(0.4, startTime + duration - 0.1);
        gainNode.gain.linearRampToValueAtTime(0, startTime + duration);

        oscillator.start(startTime);
        oscillator.stop(startTime + duration);
      };

      const currentTime = this.audioContext.currentTime;

      // Victory melody notes (C major scale)
      const melody = [
        { note: 523, time: 0, duration: 0.4 },    // C
        { note: 659, time: 0.4, duration: 0.4 },  // E
        { note: 784, time: 0.8, duration: 0.4 },  // G
        { note: 1047, time: 1.2, duration: 0.8 }, // C (higher)
        { note: 784, time: 2.0, duration: 0.4 },  // G
        { note: 659, time: 2.4, duration: 0.4 },  // E
        { note: 523, time: 2.8, duration: 0.8 },  // C
        { note: 659, time: 3.6, duration: 0.4 },  // E
        { note: 784, time: 4.0, duration: 0.4 },  // G
        { note: 1047, time: 4.4, duration: 1.2 }, // C (higher)
      ];

      // Play the melody
      melody.forEach(note => {
        playNote(note.note, currentTime + note.time, note.duration);
      });

      // Add some celebratory sound effects
      setTimeout(() => {
        for (let i = 0; i < 5; i++) {
          setTimeout(() => {
            this.playSound(800 + Math.random() * 400, 0.2, 'sine');
          }, i * 200);
        }
      }, 2000);
    }

    startGame() {
      if (!this.initialized) {
        console.error('Game not initialized');
        return;
      }

      // Force hide start screen immediately
      const startScreen = document.getElementById('gameStart');
      if (startScreen) {
        startScreen.style.display = 'none';
        startScreen.style.visibility = 'hidden';
        startScreen.classList.add('hidden');
        // Ensure it's hidden after a short delay
        setTimeout(() => {
          if (startScreen) {
            startScreen.style.display = 'none';
            startScreen.style.visibility = 'hidden';
          }
        }, 100);
      }

      // Scroll down on mobile for better gameplay
      if (window.innerWidth < 768) {
        setTimeout(() => {
          const gameSection = document.querySelector('section.bg-gradient-to-br.from-purple-200.to-pink-300');
          if (gameSection) {
            gameSection.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        }, 200);
      }

      this.gameState = 'playing';
      this.timeLeft = 300;
      this.gameTime = 0;
      this.heartsCollected = 0;
      this.score = 0;
      this.lives = 3;
      this.shieldActive = false;
      this.speedBoostActive = false;
      this.invincible = false;

      // Reset player position
      this.player.x = 100;
      this.player.y = this.worldHeight - 100; // Position relative to ground
      this.player.velocityX = 0;
      this.player.velocityY = 0;
      this.player.onGround = true; // Ensure player starts on ground
      this.player.jumping = false;
      this.camera.x = 0;
      this.camera.y = 0;

      // Load level
      this.loadLevel(this.world, this.level);

      // Hide all screens (backup)
      this.hideAllScreens();

      // Force start the game loop if not already running
      if (!this.animationId) {
        this.lastTime = performance.now();
        this.gameLoop();
      }
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
      let kingX = -50; // King starts from left
      let princessX = 450; // Princess starts from right
      let kingY = 180;
      let princessY = 180;
      let animationPhase = 0; // 0: approaching, 1: meeting, 2: celebration

      const animate = () => {
        if (!this.victoryCtx) return;

        this.victoryCtx.clearRect(0, 0, 400, 300);

        // Enhanced castle background with towers
        this.victoryCtx.fillStyle = '#8B4513';
        this.victoryCtx.fillRect(0, 200, 400, 100);

        // Castle towers
        this.victoryCtx.fillRect(50, 120, 30, 80);
        this.victoryCtx.fillRect(320, 120, 30, 80);
        this.victoryCtx.fillRect(150, 100, 100, 100);

        // Tower tops
        this.victoryCtx.fillRect(45, 110, 40, 15);
        this.victoryCtx.fillRect(315, 110, 40, 15);
        this.victoryCtx.fillRect(145, 90, 110, 15);

        // Castle door
        this.victoryCtx.fillStyle = '#654321';
        this.victoryCtx.fillRect(185, 170, 30, 30);

        // Animation phases
        if (animationPhase === 0) {
          // King approaching from left
          kingX += 2;
          if (kingX >= 140) {
            kingX = 140;
            animationPhase = 1;
          }

          // Princess approaching from right
          princessX -= 2;
          if (princessX <= 230) {
            princessX = 230;
            animationPhase = 1;
          }
        } else if (animationPhase === 1) {
          // They meet and celebrate
          if (frame > 100) {
            animationPhase = 2;
          }
        } else if (animationPhase === 2) {
          // Celebration phase - they jump together
          kingY = 180 - Math.sin(frame * 0.1) * 10;
          princessY = 180 - Math.sin(frame * 0.1) * 10;
        }

        // Draw King with realistic details
        // King body (robe)
        this.victoryCtx.fillStyle = '#4B0082';
        this.victoryCtx.fillRect(kingX + 8, kingY + 15, 14, 20);

        // King head
        this.victoryCtx.fillStyle = '#FFE4B5';
        this.victoryCtx.beginPath();
        this.victoryCtx.arc(kingX + 15, kingY + 8, 7, 0, Math.PI * 2);
        this.victoryCtx.fill();

        // King crown (more detailed)
        this.victoryCtx.fillStyle = '#FFD700';
        this.victoryCtx.fillRect(kingX + 10, kingY + 1, 10, 4);
        // Crown points
        this.victoryCtx.fillRect(kingX + 9, kingY - 1, 3, 4);
        this.victoryCtx.fillRect(kingX + 13, kingY - 2, 4, 5);
        this.victoryCtx.fillRect(kingX + 18, kingY - 1, 3, 4);
        // Crown jewels
        this.victoryCtx.fillStyle = '#FF1493';
        this.victoryCtx.fillRect(kingX + 10, kingY + 2, 2, 2);
        this.victoryCtx.fillRect(kingX + 16, kingY + 2, 2, 2);

        // King eyes
        this.victoryCtx.fillStyle = '#000';
        this.victoryCtx.fillRect(kingX + 12, kingY + 6, 2, 2);
        this.victoryCtx.fillRect(kingX + 16, kingY + 6, 2, 2);

        // King smile
        this.victoryCtx.strokeStyle = '#000';
        this.victoryCtx.lineWidth = 1;
        this.victoryCtx.beginPath();
        this.victoryCtx.arc(kingX + 15, kingY + 9, 3, 0, Math.PI);
        this.victoryCtx.stroke();

        // King arms
        this.victoryCtx.fillStyle = '#FFE4B5';
        this.victoryCtx.fillRect(kingX + 5, kingY + 18, 4, 8);
        this.victoryCtx.fillRect(kingX + 21, kingY + 18, 4, 8);

        // King legs
        this.victoryCtx.fillStyle = '#4B0082';
        this.victoryCtx.fillRect(kingX + 10, kingY + 35, 4, 8);
        this.victoryCtx.fillRect(kingX + 16, kingY + 35, 4, 8);

        // King shoes
        this.victoryCtx.fillStyle = '#8B4513';
        this.victoryCtx.fillRect(kingX + 8, kingY + 40, 6, 4);
        this.victoryCtx.fillRect(kingX + 16, kingY + 40, 6, 4);

        // King sword (more detailed)
        this.victoryCtx.fillStyle = '#C0C0C0';
        this.victoryCtx.fillRect(kingX + 25, kingY + 15, 2, 18);
        this.victoryCtx.fillStyle = '#FFD700';
        this.victoryCtx.fillRect(kingX + 23, kingY + 12, 6, 5);
        // Sword guard
        this.victoryCtx.fillRect(kingX + 24, kingY + 17, 4, 2);

        // Draw Princess with realistic details
        // Princess dress (main body)
        this.victoryCtx.fillStyle = '#FF69B4';
        this.victoryCtx.fillRect(princessX + 8, princessY + 15, 14, 25);

        // Princess head
        this.victoryCtx.fillStyle = '#FFE4B5';
        this.victoryCtx.beginPath();
        this.victoryCtx.arc(princessX + 15, princessY + 8, 7, 0, Math.PI * 2);
        this.victoryCtx.fill();

        // Princess crown (more elegant)
        this.victoryCtx.fillStyle = '#FFD700';
        this.victoryCtx.fillRect(princessX + 10, princessY + 1, 10, 4);
        // Crown points (more delicate)
        this.victoryCtx.fillRect(princessX + 9, princessY - 1, 3, 4);
        this.victoryCtx.fillRect(princessX + 13, princessY - 3, 4, 6);
        this.victoryCtx.fillRect(princessX + 18, princessY - 1, 3, 4);
        // Crown jewels (pink diamonds)
        this.victoryCtx.fillStyle = '#FF1493';
        this.victoryCtx.fillRect(princessX + 10, princessY + 2, 2, 2);
        this.victoryCtx.fillRect(princessX + 16, princessY + 2, 2, 2);
        // Center jewel
        this.victoryCtx.fillRect(princessX + 14, princessY - 1, 2, 3);

        // Princess eyes
        this.victoryCtx.fillStyle = '#000';
        this.victoryCtx.fillRect(princessX + 12, princessY + 6, 2, 2);
        this.victoryCtx.fillRect(princessX + 16, princessY + 6, 2, 2);
        // Eye highlights
        this.victoryCtx.fillStyle = '#fff';
        this.victoryCtx.fillRect(princessX + 12, princessY + 6, 1, 1);
        this.victoryCtx.fillRect(princessX + 16, princessY + 6, 1, 1);

        // Princess smile
        this.victoryCtx.strokeStyle = '#000';
        this.victoryCtx.lineWidth = 1;
        this.victoryCtx.beginPath();
        this.victoryCtx.arc(princessX + 15, princessY + 9, 3, 0, Math.PI);
        this.victoryCtx.stroke();

        // Princess hair (long and flowing)
        this.victoryCtx.fillStyle = '#8B4513';
        this.victoryCtx.fillRect(princessX + 8, princessY + 2, 14, 8);
        // Hair strands
        this.victoryCtx.fillRect(princessX + 6, princessY + 5, 4, 12);
        this.victoryCtx.fillRect(princessX + 20, princessY + 5, 4, 12);

        // Princess arms
        this.victoryCtx.fillStyle = '#FFE4B5';
        this.victoryCtx.fillRect(princessX + 5, princessY + 18, 4, 8);
        this.victoryCtx.fillRect(princessX + 21, princessY + 18, 4, 8);

        // Princess dress details (fluffy)
        this.victoryCtx.fillStyle = '#FFB6C1';
        this.victoryCtx.fillRect(princessX + 2, princessY + 30, 8, 10);
        this.victoryCtx.fillRect(princessX + 20, princessY + 30, 8, 10);
        // Dress ruffles
        this.victoryCtx.fillRect(princessX + 6, princessY + 35, 4, 6);
        this.victoryCtx.fillRect(princessX + 20, princessY + 35, 4, 6);

        // Princess legs
        this.victoryCtx.fillStyle = '#FFE4B5';
        this.victoryCtx.fillRect(princessX + 10, princessY + 40, 4, 8);
        this.victoryCtx.fillRect(princessX + 16, princessY + 40, 4, 8);

        // Princess shoes
        this.victoryCtx.fillStyle = '#FF1493';
        this.victoryCtx.fillRect(princessX + 8, princessY + 45, 6, 4);
        this.victoryCtx.fillRect(princessX + 16, princessY + 45, 6, 4);

        // Victory text with animation
        this.victoryCtx.fillStyle = '#000';
        this.victoryCtx.font = 'bold 20px Arial';
        this.victoryCtx.textAlign = 'center';

        if (animationPhase === 2) {
          this.victoryCtx.fillText('¡Victoria!', 200, 40);
          this.victoryCtx.font = '16px Arial';
          this.victoryCtx.fillText('El Rey ha salvado a la Princesa', 200, 65);
          this.victoryCtx.fillText('¡Amor Eterno! 💕', 200, 85);
        } else {
          this.victoryCtx.fillText('¡Victoria!', 200, 50);
          this.victoryCtx.font = '16px Arial';
          this.victoryCtx.fillText('El Rey rescata a la Princesa', 200, 75);
        }

        // Enhanced hearts animation
        for (let i = 0; i < 15; i++) {
          const x = 200 + Math.sin(frame * 0.08 + i) * 120;
          const y = 120 + Math.cos(frame * 0.06 + i) * 60;
          this.victoryCtx.fillStyle = i % 3 === 0 ? '#FF1493' : i % 3 === 1 ? '#FF69B4' : '#FFB6C1';
          this.victoryCtx.font = '20px Arial';
          this.victoryCtx.fillText('♥', x, y);
        }

        // Sparkle effects during celebration
        if (animationPhase === 2) {
          for (let i = 0; i < 8; i++) {
            const x = 150 + Math.random() * 100;
            const y = 100 + Math.random() * 80;
            this.victoryCtx.fillStyle = '#FFFF00';
            this.victoryCtx.fillText('✨', x, y);
          }
        }

        frame++;
        if (frame < 400) {
          requestAnimationFrame(animate);
        } else {
          // Play victory music when animation ends
          this.playVictoryMusic();
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
      this.lives = 3;
      this.loadLevel(this.world, this.level);
      this.startGame();
    }
  }

  // Initialize the game
  const game = new KingRescueGame();

  // Function to safely add event listeners
  function addSafeEventListener(elementId, eventType, callback) {
    const element = document.getElementById(elementId);
    if (element) {
      element.addEventListener(eventType, (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (callback) callback();
      });
    }
  }

  // Add event listener for "Te Amo" button
  const teAmoBtn = document.getElementById('teAmoBtn');
  if (teAmoBtn) {
    teAmoBtn.addEventListener('click', (e) => {
      e.preventDefault();
      showHappyBearModal();
    });
  }

  // Event listeners for game buttons with improved error handling
  addSafeEventListener('startGameBtn', 'click', () => {
    if (game && typeof game.startGame === 'function') {
      game.startGame();
    } else {
      console.error('Game not initialized properly');
    }
  });

  addSafeEventListener('restartLevelBtn', 'click', () => {
    if (game && typeof game.restartLevel === 'function') {
      game.restartLevel();
    }
  });

  addSafeEventListener('restartGameBtn', 'click', () => {
    if (game && typeof game.restartGame === 'function') {
      game.restartGame();
    }
  });

  addSafeEventListener('startFromInstructionsBtn', 'click', () => {
    if (game && typeof game.startGame === 'function') {
      game.startGame();
    }
  });

  addSafeEventListener('resumeBtn', 'click', () => {
    if (game && typeof game.resumeGame === 'function') {
      game.resumeGame();
    }
  });

  addSafeEventListener('restartLevelBtn', 'click', () => {
    if (game && typeof game.restartLevel === 'function') {
      game.restartLevel();
    }
  });

  addSafeEventListener('quitBtn', 'click', () => {
    if (game && typeof game.showScreen === 'function') {
      game.showScreen('instructions');
    }
  });

  addSafeEventListener('restartLevelBtnComplete', 'click', () => {
    if (game && typeof game.restartLevel === 'function') {
      game.restartLevel();
    }
  });

  addSafeEventListener('nextLevelBtn', 'click', () => {
    if (game && typeof game.nextLevel === 'function') {
      game.nextLevel();
    }
  });

  addSafeEventListener('nextLevelBtnWin', 'click', () => {
    if (game && typeof game.nextLevel === 'function') {
      game.nextLevel();
    }
  });

  addSafeEventListener('playAgainBtn', 'click', () => {
    if (game && typeof game.restartGame === 'function') {
      game.restartGame();
    }
  });

  addSafeEventListener('restartGameBtnWin', 'click', () => {
    if (game && typeof game.restartGame === 'function') {
      game.restartGame();
    }
  });

  // Add touch event listeners for mobile buttons
  function addTouchEventListener(elementId, callback) {
    const element = document.getElementById(elementId);
    if (element) {
      element.addEventListener('touchstart', (e) => {
        e.preventDefault();
        if (callback) callback();
      }, { passive: false });

      element.addEventListener('touchend', (e) => {
        e.preventDefault();
      }, { passive: false });
    }
  }

  // Add touch support for mobile buttons
  addTouchEventListener('startGameBtn', () => {
    if (game && typeof game.startGame === 'function') {
      game.startGame();
    }
  });

  addTouchEventListener('resumeBtn', () => {
    if (game && typeof game.resumeGame === 'function') {
      game.resumeGame();
    }
  });

  addTouchEventListener('restartLevelBtn', () => {
    if (game && typeof game.restartLevel === 'function') {
      game.restartLevel();
    }
  });

  addTouchEventListener('nextLevelBtn', () => {
    if (game && typeof game.nextLevel === 'function') {
      game.nextLevel();
    }
  });


  // Game initialization complete
});

