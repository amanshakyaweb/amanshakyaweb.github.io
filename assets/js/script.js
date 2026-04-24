

// ─── CURSOR ───
const cursor = document.getElementById('cursor');
const follower = document.getElementById('cursor-follower');
let mx = 0, my = 0, fx = 0, fy = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  cursor.style.left = mx + 'px';
  cursor.style.top = my + 'px';
});

function animFollower() {
  fx += (mx - fx) * 0.1;
  fy += (my - fy) * 0.1;
  follower.style.left = fx + 'px';
  follower.style.top = fy + 'px';
  requestAnimationFrame(animFollower);
}
animFollower();

document.querySelectorAll('a, button').forEach(el => {
  el.addEventListener('mouseenter', () => document.body.classList.add('hovering'));
  el.addEventListener('mouseleave', () => document.body.classList.remove('hovering'));
});

// ─── SCROLL PROGRESS ───
const scrollBar = document.getElementById('scroll-bar');
window.addEventListener('scroll', () => {
  const pct = window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100;
  scrollBar.style.width = pct + '%';
});

// ─── LOADER ───
const loaderBar = document.getElementById('loader-bar');
const loaderText = document.getElementById('loader-text');
let progress = 0;

const loadInterval = setInterval(() => {
  progress += Math.random() * 15;
  if (progress > 100) progress = 100;
  loaderBar.style.width = progress + '%';
  if (progress >= 100) {
    clearInterval(loadInterval);
    setTimeout(startIntro, 300);
  }
}, 80);

function startIntro() {
  const tl = gsap.timeline();
  tl.to('#loader', {
    yPercent: -100,
    duration: 1,
    ease: 'power4.inOut',
    delay: 0.2
  });

  // Hero animations after loader
  
  tl.from('.hero-title .line span', {
    yPercent: 100,
    opacity: 0,
    stagger: 0.12,
    duration: 1,
    ease: 'power3.out'
  }, '-=0.6');

  tl.from('.hero-desc', {
    y: 20,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out'
  }, '-=0.4');

  tl.from('.hero-scroll', {
    y: 20,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out'
  }, '-=0.6');

  tl.from('#nav', {
    y: -30,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out'
  }, 0.6);
}



const SITES=[
  {name:"Aura Studio",    cat:"Branding",    tag:"Live",     img:"https://static.vecteezy.com/vite/assets/photo-masthead-375-BoK_p8LG.webp", dot:"#a855f7", tagBg:"#f3e8ff", tagC:"#7c3aed", price:"Brand Kit"},
  {name:"Haze Coffee",    cat:"E-Commerce",  tag:"Active",   img:"https://static.vecteezy.com/vite/assets/photo-masthead-375-BoK_p8LG.webp", dot:"#f59e0b", tagBg:"#fef9ee", tagC:"#b45309", price:"Shopify"},
  {name:"Forma Arch",     cat:"Portfolio",   tag:"Live",     img:"https://images.unsplash.com/photo-1510773549543-a586f822548b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", dot:"#10b981", tagBg:"#ecfdf5", tagC:"#065f46", price:"Portfolio"},
  {name:"Nox Agency",     cat:"Agency",      tag:"Featured", img:"https://static.vecteezy.com/vite/assets/photo-masthead-375-BoK_p8LG.webp", dot:"#6366f1", tagBg:"#eef2ff", tagC:"#4338ca", price:"Agency"},
  {name:"Bloom Skin",     cat:"Beauty",      tag:"New",      img:"https://static.vecteezy.com/vite/assets/photo-masthead-375-BoK_p8LG.webp", dot:"#ec4899", tagBg:"#fdf2f8", tagC:"#9d174d", price:"Store"},
  {name:"Orbit Tech",     cat:"SaaS",        tag:"Beta",     img:"https://static.vecteezy.com/vite/assets/photo-masthead-375-BoK_p8LG.webp", dot:"#0ea5e9", tagBg:"#f0f9ff", tagC:"#075985", price:"SaaS"},
  {name:"Root Foods",     cat:"Restaurant",  tag:"Live",     img:"https://static.vecteezy.com/vite/assets/photo-masthead-375-BoK_p8LG.webp", dot:"#eab308", tagBg:"#fefce8", tagC:"#854d0e", price:"Menu"},
  {name:"Vault Films",    cat:"Film",        tag:"Live",     img:"https://static.vecteezy.com/vite/assets/photo-masthead-375-BoK_p8LG.webp", dot:"#f97316", tagBg:"#fff7ed", tagC:"#c2410c", price:"Reel"},
  {name:"Mira Yoga",      cat:"Wellness",    tag:"Active",   img:"https://static.vecteezy.com/vite/assets/photo-masthead-375-BoK_p8LG.webp", dot:"#34d399", tagBg:"#f0fdf4", tagC:"#14532d", price:"Class"},
  {name:"Pulse Music",    cat:"Music",       tag:"Live",     img:"https://static.vecteezy.com/vite/assets/photo-masthead-375-BoK_p8LG.webp", dot:"#a78bfa", tagBg:"#f5f3ff", tagC:"#5b21b6", price:"Label"},
  {name:"Peak Sports",    cat:"Sports",      tag:"Featured", img:"https://static.vecteezy.com/vite/assets/photo-masthead-375-BoK_p8LG.webp", dot:"#f43f5e", tagBg:"#fff1f2", tagC:"#9f1239", price:"Store"},
  {name:"Slate Legal",    cat:"Law Firm",    tag:"Live",     img:"https://static.vecteezy.com/vite/assets/photo-masthead-375-BoK_p8LG.webp", dot:"#64748b", tagBg:"#f8fafc", tagC:"#334155", price:"Firm"},
  {name:"Cleo Jewels",    cat:"Luxury",      tag:"New",      img:"https://static.vecteezy.com/vite/assets/photo-masthead-375-BoK_p8LG.webp", dot:"#f59e0b", tagBg:"#fffbeb", tagC:"#92400e", price:"Luxury"},
  {name:"Zest Travel",    cat:"Travel",      tag:"Active",   img:"https://static.vecteezy.com/vite/assets/photo-masthead-375-BoK_p8LG.webp", dot:"#3b82f6", tagBg:"#eff6ff", tagC:"#1e40af", price:"Agency"},
  {name:"Dusk Interiors", cat:"Interior",    tag:"Live",     img:"https://static.vecteezy.com/vite/assets/photo-masthead-375-BoK_p8LG.webp", dot:"#d946ef", tagBg:"#fdf4ff", tagC:"#6b21a8", price:"Design"},
  {name:"Core Fitness",   cat:"Fitness",     tag:"Beta",     img:"https://static.vecteezy.com/vite/assets/photo-masthead-375-BoK_p8LG.webp", dot:"#f97316", tagBg:"#fff7ed", tagC:"#9a3412", price:"App"},
  {name:"Mint Finance",   cat:"FinTech",     tag:"Live",     img:"https://static.vecteezy.com/vite/assets/photo-masthead-375-BoK_p8LG.webp", dot:"#22c55e", tagBg:"#f0fdf4", tagC:"#14532d", price:"SaaS"},
  {name:"Dust Gallery",   cat:"Art",         tag:"Featured", img:"https://static.vecteezy.com/vite/assets/photo-masthead-375-BoK_p8LG.webp", dot:"#c8a96e", tagBg:"#fef9ee", tagC:"#92400e", price:"Gallery"},
];
const SWAYS  = ['sw1','sw2','sw3','sw4','sw5'];
const STRH   = [55,75,45,65,85,50,70,60,80,55,75,65,45,85,70,60,55,75];
const CARD_W = 188;

/*
   BUILD CARDS*/
const track = document.getElementById('hTrack');

function buildCard(s, i){
  const d = document.createElement('div');
  d.className = 'h-card';
  d.innerHTML = `
    <div class="h-card-inner ${SWAYS[i%SWAYS.length]}">
      <div class="h-hanger">
        <svg viewBox="0 0 60 44" fill="none">
          <defs>
            <linearGradient id="hg${i}" x1="0" y1="0" x2="60" y2="44" gradientUnits="userSpaceOnUse">
              <stop offset="0%"   stop-color="#d4a95a"/>
              <stop offset="50%"  stop-color="#f0d090"/>
              <stop offset="100%" stop-color="#a07830"/>
            </linearGradient>
          </defs>
          <circle cx="30" cy="3" r="3.5" fill="none" stroke="url(#hg${i})" stroke-width="2.5"/>
          <path d="M30 7C30 14 20 18 8 28C4 31 2 34 2 36C2 38 4 39 6 39L54 39C56 39 58 38 58 36C58 34 56 31 52 28C40 18 30 14 30 7Z"
                fill="url(#hg${i})" opacity=".13" stroke="url(#hg${i})" stroke-width="1.5" stroke-linejoin="round"/>
          <path d="M30 7C30 14 20 18 8 28C4 31 2 34 2 36"     fill="none" stroke="url(#hg${i})" stroke-width="2" stroke-linecap="round"/>
          <path d="M30 7C30 14 40 18 52 28C56 31 58 34 58 36" fill="none" stroke="url(#hg${i})" stroke-width="2" stroke-linecap="round"/>
          <line x1="2" y1="36" x2="58" y2="36" stroke="url(#hg${i})" stroke-width="3" stroke-linecap="round"/>
        </svg>
      </div>
      <div class="h-string" style="height:${STRH[i%STRH.length]}px"></div>
      <div class="h-site-card">
        <div class="h-ptag">
          <div class="h-ptag-str"></div>
          <div class="h-ptag-body">${s.price}</div>
        </div>
        <div class="h-preview">
        <img src="${s.img}" alt="">
        </div>
        <div class="h-body">
          <div class="h-cat">${s.cat}</div>
          <div class="h-name">${s.name}</div>
          <div class="h-footer">
            <div style="display:flex;align-items:center;gap:5px">
              <div class="h-dot" style="background:${s.dot}"></div>
              <span class="h-tag-txt">${s.tag}</span>
            </div>
            <div class="h-tag-pill" style="background:${s.tagBg};color:${s.tagC}">${s.cat}</div>
          </div>
        </div>
      </div>
    </div>`;
  return d;
}

SITES.forEach((s,i) => track.appendChild(buildCard(s,i)));

/* 
   DRAG ENGINE
   Uses getBoundingClientRect of the SECTION
   so coordinates are correct when embedded */
const section   = document.getElementById('hangerHero');
const viewport  = document.getElementById('hViewport');
const dragLabel = document.getElementById('dragLabel');
const cur       = document.getElementById('cur');
const curRing   = document.getElementById('curRing');

const TOTAL = SITES.length;
const totalW = TOTAL * CARD_W;

let currentX   = 0;
let isDragging = false;
let startMx    = 0;
let startTx    = 0;
let velX       = 0;
let lastMx     = 0;
let rafId      = null;

function getVW(){ return section.offsetWidth; }
function getMaxX(){ return 48; }
function getMinX(){ return getVW() - totalW - 48; }

/* Center the track on load */
(function centerTrack(){
  const vw = getVW();
  const cx = Math.max(getMinX(), Math.min(getMaxX(), (vw - totalW) / 2));
  currentX = cx;
  track.style.transform = `translateX(${cx}px)`;
})();

/* ── CURSOR ── */
document.addEventListener('mousemove', e => {
  cur.style.left  = e.clientX + 'px';
  cur.style.top   = e.clientY + 'px';
  curRing.style.left = e.clientX + 'px';
  curRing.style.top  = e.clientY + 'px';
});

/* ── MOUSE DRAG (listen on section, not document — avoids conflicts) ── */
section.addEventListener('mousedown', e => {
  isDragging = true;
  startMx = e.clientX;
  startTx = currentX;
  lastMx  = e.clientX;
  velX    = 0;
  cur.classList.add('drag');
  curRing.classList.add('drag');
  dragLabel.classList.add('show');
  cancelAnimationFrame(rafId);
  /* pause sway while dragging */
  track.querySelectorAll('.h-card-inner').forEach(c => c.style.animationPlayState = 'paused');
  e.preventDefault();
});

document.addEventListener('mousemove', e => {
  if(!isDragging) return;
  velX   = e.clientX - lastMx;
  lastMx = e.clientX;
  const dx = e.clientX - startMx;
  let nx = clamp(startTx + dx, getMinX(), getMaxX());
  currentX = nx;
  track.style.transform = `translateX(${nx}px)`;
});

document.addEventListener('mouseup', () => {
  if(!isDragging) return;
  isDragging = false;
  cur.classList.remove('drag');
  curRing.classList.remove('drag');
  dragLabel.classList.remove('show');
  track.querySelectorAll('.h-card-inner').forEach(c => c.style.animationPlayState = 'running');
  startMomentum();
});

/* ── TOUCH DRAG ── */
section.addEventListener('touchstart', e => {
  const tx = e.touches[0].clientX;
  startMx = tx; startTx = currentX; lastMx = tx; velX = 0; isDragging = true;
  cancelAnimationFrame(rafId);
  track.querySelectorAll('.h-card-inner').forEach(c => c.style.animationPlayState = 'paused');
}, {passive:true});

section.addEventListener('touchmove', e => {
  if(!isDragging) return;
  const tx = e.touches[0].clientX;
  velX   = tx - lastMx;
  lastMx = tx;
  let nx = clamp(startTx + (tx - startMx), getMinX(), getMaxX());
  currentX = nx;
  track.style.transform = `translateX(${nx}px)`;
}, {passive:true});

section.addEventListener('touchend', () => {
  isDragging = false;
  track.querySelectorAll('.h-card-inner').forEach(c => c.style.animationPlayState = 'running');
  startMomentum();
});

/* ── MOMENTUM ── */
function startMomentum(){
  cancelAnimationFrame(rafId);
  function step(){
    velX *= 0.92;
    if(Math.abs(velX) < 0.3){ velX = 0; return; }
    let nx = currentX + velX;
    const mn = getMinX(), mx = getMaxX();
    if(nx > mx){ nx = mx; velX *= -0.25; }
    if(nx < mn){ nx = mn; velX *= -0.25; }
    currentX = nx;
    track.style.transform = `translateX(${nx}px)`;
    rafId = requestAnimationFrame(step);
  }
  rafId = requestAnimationFrame(step);
}

/* ── HELPERS ── */
function clamp(v, mn, mx){ return Math.max(mn, Math.min(mx, v)); }

/* ── COUNT DISPLAY ── */
setInterval(() => {
  const idx = Math.round((-currentX + getVW()/2) / CARD_W);
  document.getElementById('cntNum').textContent =
    Math.max(1, Math.min(TOTAL, TOTAL - idx + 1));
}, 120);

/* ── CURSOR EXPAND ON CARD HOVER ── */
track.querySelectorAll('.h-site-card').forEach(c => {
  c.addEventListener('mouseenter', () => {
    if(isDragging) return;
    cur.style.transform    = 'translate(-50%,-50%) scale(2.5)';
    curRing.style.opacity  = '0';
  });
  c.addEventListener('mouseleave', () => {
    cur.style.transform   = 'translate(-50%,-50%) scale(1)';
    curRing.style.opacity = '1';
  });
});

/* ── RESIZE — recenter if window changes ── */
window.addEventListener('resize', () => {
  currentX = clamp(currentX, getMinX(), getMaxX());
  track.style.transform = `translateX(${currentX}px)`;
});

// ─── SCROLL ANIMATIONS ───
gsap.registerPlugin(ScrollTrigger);

// About heading
gsap.from('.about-left h2', {
  scrollTrigger: { trigger: '#about', start: 'top 75%' },
  y: 60,
  opacity: 0,
  duration: 1,
  ease: 'power3.out'
});

gsap.from('.about-right p', {
  scrollTrigger: { trigger: '#about', start: 'top 65%' },
  y: 40,
  opacity: 0,
  stagger: 0.2,
  duration: 0.9,
  ease: 'power3.out'
});

// Stats counter
document.querySelectorAll('.stat-num').forEach(el => {
  const target = parseInt(el.dataset.count);
  ScrollTrigger.create({
    trigger: el,
    start: 'top 85%',
    once: true,
    onEnter: () => {
      gsap.to({ val: 0 }, {
        val: target,
        duration: 1.5,
        ease: 'power2.out',
        onUpdate: function() {
          el.textContent = Math.round(this.targets()[0].val) + '+';
        }
      });
    }
  });
});

// Project items stagger
gsap.from('.project-item', {
  scrollTrigger: { trigger: '.projects-list', start: 'top 75%' },
  y: 50,
  opacity: 0,
  stagger: 0.12,
  duration: 0.9,
  ease: 'power3.out'
});

// Skills grid
gsap.from('.skill-card', {
  scrollTrigger: { trigger: '.skills-grid', start: 'top 75%' },
  y: 50,
  opacity: 0,
  stagger: 0.1,
  duration: 0.8,
  ease: 'power3.out'
});

// Contact
gsap.from('#contact h2', {
  scrollTrigger: { trigger: '#contact', start: 'top 70%' },
  y: 80,
  opacity: 0,
  duration: 1.1,
  ease: 'power3.out'
});

gsap.from('.contact-email', {
  scrollTrigger: { trigger: '#contact', start: 'top 60%' },
  y: 30,
  opacity: 0,
  duration: 0.9,
  ease: 'power3.out',
  delay: 0.3
});

// Section headers
gsap.utils.toArray('.section-header').forEach(el => {
  gsap.from(el, {
    scrollTrigger: { trigger: el, start: 'top 80%' },
    y: 40,
    opacity: 0,
    duration: 0.9,
    ease: 'power3.out'
  });
});

// ─── PROJECT IMAGE PREVIEW ───
const previewImg = document.getElementById('previewImg');
const previewImgEl = document.getElementById('previewImgEl');

document.querySelectorAll('.project-item').forEach(item => {
  item.addEventListener('mouseenter', e => {
    previewImgEl.src = item.dataset.preview;
    previewImg.classList.add('visible');
  });

  item.addEventListener('mouseleave', () => {
    previewImg.classList.remove('visible');
  });

  item.addEventListener('mousemove', e => {
    const x = e.clientX + 30;
    const y = e.clientY - 110;
    previewImg.style.left = x + 'px';
    previewImg.style.top = y + 'px';
  });
});
// ─── INTERACTIVE SPRING TEXT ───

const textEl = document.querySelector('#interactive-text');
const originalHTML = textEl.innerHTML;

// Text ko words mein split karna (Simple way without external SplitText library)
const words = textEl.innerText.split(/\s+/);
textEl.innerHTML = words.map(word => `<span>${word}</span>`).join(' ');

const spans = textEl.querySelectorAll('span');

spans.forEach(span => {
  span.addEventListener('mouseenter', () => {
    // Spring Animation using GSAP
    gsap.to(span, {
      y: -20,             // Thoda upar jayega
      scale: 1.2,         // Thoda bada hoga
      rotation: Math.random() * 20 - 10, // Halki si random rotation
      color: getRandomColor(), // Color change function
      duration: 0.4,
      ease: "back.out(4)", // Yahi hai "Spring/Elastic" feel ka raaz
    });
  });

  span.addEventListener('mouseleave', () => {
    // Wapas normal position par aana
    gsap.to(span, {
      y: 0,
      scale: 1,
      rotation: 0,
      color: "inherit", // Wapas original color
      duration: 0.6,
      ease: "elastic.out(1, 0.3)" // Wapas aate waqt bhi springy effect
    });
  });
});

// Random color generator
function getRandomColor() {
  const colors = ['#ffaa00', '#00ffcc', '#ff0066', '#7700ff', '#d36fd1', '#D4AF37'];
  return colors[Math.floor(Math.random() * colors.length)];
}

// ─── SMOOTH SCROLL for nav links ───
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      gsap.to(window, {
        scrollTo: { y: target, offsetY: 80 },
        duration: 1.2,
        ease: 'power3.inOut'
      });
    }
  });
});

// ─── PARALLAX on hero bg number ───
gsap.to('.hero-bg-num', {
  scrollTrigger: {
    trigger: '#hero',
    start: 'top top',
    end: 'bottom top',
    scrub: true
  },
  y: -120,
  ease: 'none'
});
