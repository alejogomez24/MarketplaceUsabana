
// ============================================================
// SABANA MARKET — shared.js
// Estado global, mock data, nav, toast, helpers
// ============================================================

// === MOCK DATA ===
const MOCK_PRODUCTS = [
  {
    id: 1, title: 'Cálculo Integral - Stewart 8va Ed.',
    price: 65000, priceOld: 90000,
    category: 'libros', estado: 'usado',
    sellerId: 2, sellerName: 'Camila Ríos', sellerCareer: 'Ingeniería Industrial',
    sellerRating: 4.8, sellerAvatar: '👩‍💻',
    rating: 4.7, reviews: 12,
    emoji: '📘', bg: '#EEF4FF',
    stock: 3,
    badge: 'Popular',
    description: 'Libro en excelente estado, con algunos subrayados en lápiz. Edición 8va en español. Incluye acceso a recursos digitales.',
    images: ['📘','📗','📙'],
    tags: ['cálculo', 'matemáticas', 'ingeniería']
  },
  {
    id: 2, title: 'Tutoría de Inglés B2 — 4 sesiones',
    price: 120000, priceOld: null,
    category: 'tutorias', estado: 'nuevo',
    sellerId: 3, sellerName: 'Andrés Mora', sellerCareer: 'Lenguas Modernas',
    sellerRating: 4.9, sellerAvatar: '👨‍🎓',
    rating: 5.0, reviews: 8,
    emoji: '🗣️', bg: '#F0FFF4',
    stock: 10,
    badge: 'Nuevo',
    description: 'Paquete de 4 sesiones de tutoría personalizada de inglés nivel B2. Preparación para certificaciones Cambridge. Clases virtuales o presenciales.',
    images: ['🗣️','📝','🎯'],
    tags: ['inglés', 'idiomas', 'certificación']
  },
  {
    id: 3, title: 'Kit Laboratorio de Química',
    price: 85000, priceOld: 110000,
    category: 'laboratorio', estado: 'usado',
    sellerId: 4, sellerName: 'Sara Gómez', sellerCareer: 'Química Farmacéutica',
    sellerRating: 4.6, sellerAvatar: '👩‍🔬',
    rating: 4.5, reviews: 5,
    emoji: '🧪', bg: '#FFFBEE',
    stock: 1,
    badge: 'Oferta',
    description: 'Kit completo de laboratorio con tubos de ensayo, gradillas, pipetas y guantes. Todo en buen estado. Usado solo un semestre.',
    images: ['🧪','⚗️','🔬'],
    tags: ['laboratorio', 'química', 'ciencias']
  },
  {
    id: 4, title: 'Diseño de Logo + Branding',
    price: 200000, priceOld: null,
    category: 'diseno', estado: 'nuevo',
    sellerId: 5, sellerName: 'Luis Herrera', sellerCareer: 'Diseño Gráfico',
    sellerRating: 4.9, sellerAvatar: '🎨',
    rating: 4.9, reviews: 20,
    emoji: '✏️', bg: '#FFF0F5',
    stock: 99,
    badge: 'Popular',
    description: 'Diseño profesional de logotipo e identidad de marca. Incluye manual de marca, 3 propuestas y revisiones ilimitadas. Entrega en 7 días.',
    images: ['✏️','🖌️','🎨'],
    tags: ['diseño', 'branding', 'logo']
  },
  {
    id: 5, title: 'Principios de Administración - Robbins',
    price: 45000, priceOld: 70000,
    category: 'libros', estado: 'usado',
    sellerId: 6, sellerName: 'María Pinto', sellerCareer: 'Administración de Empresas',
    sellerRating: 4.3, sellerAvatar: '👩‍💼',
    rating: 4.2, reviews: 7,
    emoji: '📗', bg: '#F0F8FF',
    stock: 2,
    badge: null,
    description: 'Libro de administración en buen estado. Algunas páginas marcadas con resaltador. Edición en español. Perfecto para primer semestre.',
    images: ['📗','📖','📚'],
    tags: ['administración', 'negocios', 'gestión']
  },
  {
    id: 6, title: 'Reparación de Computadores',
    price: 50000, priceOld: null,
    category: 'servicios', estado: 'nuevo',
    sellerId: 2, sellerName: 'Camila Ríos', sellerCareer: 'Ingeniería Industrial',
    sellerRating: 4.8, sellerAvatar: '👩‍💻',
    rating: 4.6, reviews: 15,
    emoji: '💻', bg: '#EEF4FF',
    stock: 99,
    badge: 'Nuevo',
    description: 'Servicio de reparación y mantenimiento de computadores portátiles y de escritorio. Diagnóstico gratis. Trabajo garantizado por 30 días.',
    images: ['💻','🔧','⚙️'],
    tags: ['tecnología', 'servicio', 'computadores']
  }
];

const MOCK_USERS = {
  1: { id: 1, name: 'Admin Sabana', email: 'admin@unisabana.edu.co', career: 'Administrador', avatar: '🛡️', role: 'admin', rating: 5.0, joinDate: '2023-01-15', sales: 0 },
  2: { id: 2, name: 'Camila Ríos', email: 'camila.rios@unisabana.edu.co', career: 'Ingeniería Industrial', avatar: '👩‍💻', role: 'seller', rating: 4.8, joinDate: '2023-08-20', sales: 32 },
  3: { id: 3, name: 'Andrés Mora', email: 'andres.mora@unisabana.edu.co', career: 'Lenguas Modernas', avatar: '👨‍🎓', role: 'seller', rating: 4.9, joinDate: '2023-09-01', sales: 18 },
  4: { id: 4, name: 'Sara Gómez', email: 'sara.gomez@unisabana.edu.co', career: 'Química Farmacéutica', avatar: '👩‍🔬', role: 'seller', rating: 4.6, joinDate: '2024-02-10', sales: 7 },
  5: { id: 5, name: 'Luis Herrera', email: 'luis.herrera@unisabana.edu.co', career: 'Diseño Gráfico', avatar: '🎨', role: 'seller', rating: 4.9, joinDate: '2023-11-05', sales: 45 },
  6: { id: 6, name: 'María Pinto', email: 'maria.pinto@unisabana.edu.co', career: 'Administración de Empresas', avatar: '👩‍💼', role: 'seller', rating: 4.3, joinDate: '2024-01-22', sales: 9 },
  99: { id: 99, name: 'Demo Estudiante', email: 'demo@unisabana.edu.co', career: 'Ingeniería de Sistemas', avatar: '🧑‍💻', role: 'buyer', rating: 4.5, joinDate: '2024-08-30', sales: 0 }
};

const DEMO_ORDERS = [
  { id: 'ORD-001', productId: 1, productTitle: 'Cálculo Integral - Stewart 8va Ed.', price: 65000, qty: 1, status: 'entregada', date: '2025-03-15', sellerId: 2 },
  { id: 'ORD-002', productId: 2, productTitle: 'Tutoría de Inglés B2 — 4 sesiones', price: 120000, qty: 1, status: 'confirmada', date: '2025-04-01', sellerId: 3 },
  { id: 'ORD-003', productId: 6, productTitle: 'Reparación de Computadores', price: 50000, qty: 1, status: 'pendiente', date: '2025-04-20', sellerId: 2 }
];

const DEMO_NOTIFICATIONS = [
  { id: 1, text: 'Tu orden ORD-002 fue confirmada por Andrés Mora', type: 'order', read: false, time: 'hace 2h' },
  { id: 2, text: 'Camila Ríos respondió tu mensaje sobre "Reparación de Computadores"', type: 'message', read: false, time: 'hace 5h' },
  { id: 3, text: 'Nueva reseña en tu perfil: ⭐⭐⭐⭐⭐', type: 'review', read: true, time: 'hace 1d' },
];

const MOCK_REVIEWS = {
  1: [
    { userId: 99, userName: 'Demo Estudiante', avatar: '🧑‍💻', rating: 5, comment: 'Libro en perfectas condiciones, envío muy rápido. Lo recomiendo totalmente.', date: '2025-03-20' },
    { userId: 7, userName: 'Juan García', avatar: '👨‍🎓', rating: 4, comment: 'Buen estado, tal como se describe. El vendedor muy amable.', date: '2025-02-10' },
  ],
  2: [
    { userId: 8, userName: 'Laura Torres', avatar: '👩‍🎓', rating: 5, comment: 'Excelente tutor, muy paciente y claro. Ya mejoré mucho mi inglés.', date: '2025-03-25' },
  ],
  4: [
    { userId: 9, userName: 'Carlos Mejía', avatar: '👨‍💼', rating: 5, comment: 'Diseño espectacular, superó mis expectativas. 100% recomendado.', date: '2025-04-05' },
    { userId: 99, userName: 'Demo Estudiante', avatar: '🧑‍💻', rating: 5, comment: 'Muy profesional y creativo. Entregó antes del plazo.', date: '2025-03-18' },
  ]
};

const CHAT_HISTORY = {
  '99_2': [
    { from: 2, text: '¡Hola! Gracias por contactarme. ¿En qué te puedo ayudar?', time: '10:30' },
    { from: 99, text: '¿El libro tiene los ejercicios resueltos al final?', time: '10:32' },
    { from: 2, text: 'Sí, los capítulos 1-8 tienen soluciones completas. Los demás tienen las respuestas impares.', time: '10:35' },
  ]
};

// === STATE MANAGEMENT ===
const State = {
  get user() { 
    try { return JSON.parse(sessionStorage.getItem('sm_user') || 'null'); } 
    catch(e) { return null; }
  },
  set user(v) { sessionStorage.setItem('sm_user', JSON.stringify(v)); },
  
  get cart() { 
    try { return JSON.parse(sessionStorage.getItem('sm_cart') || '[]'); } 
    catch(e) { return []; }
  },
  set cart(v) { sessionStorage.setItem('sm_cart', JSON.stringify(v)); },
  
  get notifications() { 
    try { 
      const stored = sessionStorage.getItem('sm_notifications');
      return stored ? JSON.parse(stored) : [...DEMO_NOTIFICATIONS]; 
    } catch(e) { return [...DEMO_NOTIFICATIONS]; }
  },
  set notifications(v) { sessionStorage.setItem('sm_notifications', JSON.stringify(v)); },
  
  get orders() {
    try {
      const stored = sessionStorage.getItem('sm_orders');
      return stored ? JSON.parse(stored) : [...DEMO_ORDERS];
    } catch(e) { return [...DEMO_ORDERS]; }
  },
  set orders(v) { sessionStorage.setItem('sm_orders', JSON.stringify(v)); },

  get products() {
    try {
      const stored = sessionStorage.getItem('sm_products');
      return stored ? JSON.parse(stored) : [...MOCK_PRODUCTS];
    } catch(e) { return [...MOCK_PRODUCTS]; }
  },
  set products(v) { sessionStorage.setItem('sm_products', JSON.stringify(v)); },

  addToCart(product, qty = 1) {
    const cart = this.cart;
    const existing = cart.find(i => i.id === product.id);
    if (existing) {
      existing.qty = Math.min(existing.qty + qty, product.stock);
    } else {
      cart.push({ ...product, qty });
    }
    this.cart = cart;
    this.updateCartBadge();
  },
  
  removeFromCart(productId) {
    this.cart = this.cart.filter(i => i.id !== productId);
    this.updateCartBadge();
  },
  
  updateCartQty(productId, qty) {
    const cart = this.cart;
    const item = cart.find(i => i.id === productId);
    if (item) {
      if (qty <= 0) { this.cart = cart.filter(i => i.id !== productId); }
      else { item.qty = qty; this.cart = cart; }
    }
    this.updateCartBadge();
  },
  
  getCartTotal() {
    return this.cart.reduce((sum, i) => sum + i.price * i.qty, 0);
  },
  
  getCartCount() {
    return this.cart.reduce((sum, i) => sum + i.qty, 0);
  },
  
  addNotification(text, type = 'info') {
    const notifs = this.notifications;
    notifs.unshift({ id: Date.now(), text, type, read: false, time: 'ahora' });
    this.notifications = notifs;
    this.updateNotifBadge();
  },
  
  getUnreadCount() {
    return this.notifications.filter(n => !n.read).length;
  },

  markAllRead() {
    const notifs = this.notifications.map(n => ({ ...n, read: true }));
    this.notifications = notifs;
    this.updateNotifBadge();
  },
  
  updateCartBadge() {
    const badge = document.getElementById('cart-badge');
    if (badge) {
      const count = this.getCartCount();
      badge.textContent = count;
      badge.style.display = count > 0 ? 'flex' : 'none';
    }
  },
  
  updateNotifBadge() {
    const badge = document.getElementById('notif-badge');
    if (badge) {
      const count = this.getUnreadCount();
      badge.textContent = count;
      badge.style.display = count > 0 ? 'flex' : 'none';
    }
  },

  addOrder(order) {
    const orders = this.orders;
    orders.unshift(order);
    this.orders = orders;
  },

  addProduct(product) {
    const products = this.products;
    products.unshift(product);
    this.products = products;
  }
};

// === TOAST ===
function showToast(message, type = 'success') {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.style.cssText = 'position:fixed;bottom:32px;right:32px;z-index:9999;display:flex;flex-direction:column;gap:12px;';
    document.body.appendChild(container);
  }
  const toast = document.createElement('div');
  const icons = { success: '✅', error: '❌', info: 'ℹ️', warning: '⚠️' };
  const colors = { success: '#1A3A6B', error: '#C0392B', info: '#2C5FA8', warning: '#C9A84C' };
  toast.style.cssText = `background:${colors[type]};color:#fff;padding:14px 20px;border-radius:10px;font-family:'DM Sans',sans-serif;font-size:14px;display:flex;align-items:center;gap:10px;box-shadow:0 4px 24px rgba(26,58,107,0.18);min-width:280px;max-width:380px;animation:toastIn 0.3s ease;`;
  toast.innerHTML = `<span>${icons[type]}</span><span>${message}</span>`;
  container.appendChild(toast);
  setTimeout(() => { toast.style.animation = 'toastOut 0.3s ease forwards'; setTimeout(() => toast.remove(), 300); }, 3500);
}

// === HELPERS ===
function formatPrice(p) {
  return new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0 }).format(p);
}

function formatDate(d) {
  return new Date(d).toLocaleDateString('es-CO', { year: 'numeric', month: 'long', day: 'numeric' });
}

function renderStars(rating, interactive = false) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  let html = '<span class="stars">';
  for (let i = 1; i <= 5; i++) {
    if (i <= full) html += '<span class="star filled">★</span>';
    else if (i === full + 1 && half) html += '<span class="star half">★</span>';
    else html += '<span class="star empty">☆</span>';
  }
  html += `</span>`;
  return html;
}

function slugify(str) {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, '-');
}

function getPagePath(page) {
  const pages = {
    home: '01_home.html', listing: '02_listing.html', product: '03_product.html',
    cart: '04_cart.html', login: '05_login.html', profile: '06_profile.html',
    publish: '07_publish.html', errors: '08_errors.html'
  };
  return pages[page] || '01_home.html';
}

function requireLogin() {
  if (!State.user) {
    window.location.href = '05_login.html?redirect=' + encodeURIComponent(window.location.pathname);
    return false;
  }
  return true;
}

// === CATEGORY DATA ===
const CATEGORIES = [
  { id: 'libros', name: 'Libros', emoji: '📚', color: '#EEF4FF', count: 47 },
  { id: 'tutorias', name: 'Tutorías', emoji: '🎓', color: '#F0FFF4', count: 23 },
  { id: 'laboratorio', name: 'Laboratorio', emoji: '🧪', color: '#FFFBEE', count: 15 },
  { id: 'diseno', name: 'Diseño', emoji: '✏️', color: '#FFF0F5', count: 19 },
  { id: 'servicios', name: 'Servicios', emoji: '🔧', color: '#F5F0FF', count: 31 },
];

// === BASE CSS ===
const BASE_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,600&family=DM+Sans:wght@300;400;500;600;700&display=swap');
  
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --blue-dark: #1A3A6B;
    --blue-mid: #2C5FA8;
    --blue-light: #7FB3E8;
    --gold: #C9A84C;
    --gold-light: #F0D080;
    --bg: #F4F6FB;
    --white: #FFFFFF;
    --border: #DDE3F0;
    --text: #344054;
    --muted: #7A9CC8;
    --font-serif: 'Playfair Display', Georgia, serif;
    --font-sans: 'DM Sans', system-ui, sans-serif;
    --radius: 12px;
    --radius-sm: 8px;
    --shadow: 0 2px 12px rgba(26,58,107,0.08);
    --shadow-md: 0 4px 24px rgba(26,58,107,0.12);
    --shadow-lg: 0 8px 40px rgba(26,58,107,0.16);
    --max-w: 1280px;
    --nav-h: 72px;
  }

  html { scroll-behavior: smooth; }
  body { font-family: var(--font-sans); background: var(--bg); color: var(--text); min-height: 100vh; }

  a { color: var(--blue-mid); text-decoration: none; }
  a:hover { color: var(--blue-dark); }

  h1, h2 { font-family: var(--font-serif); font-style: italic; }

  .container { max-width: var(--max-w); margin: 0 auto; padding: 0 40px; }

  /* Navbar */
  #nav { position: sticky; top: 0; z-index: 1000; background: var(--blue-dark); box-shadow: 0 2px 16px rgba(0,0,0,0.18); }
  .nav-inner { max-width: var(--max-w); margin: 0 auto; padding: 0 40px; height: var(--nav-h); display: flex; align-items: center; gap: 32px; }
  .nav-logo { display: flex; align-items: center; gap: 12px; text-decoration: none; flex-shrink: 0; }
  .nav-logo-icon { width: 38px; height: 38px; background: var(--gold); border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 20px; }
  .nav-logo-text { color: #fff; font-family: var(--font-serif); font-size: 18px; font-style: italic; font-weight: 700; line-height: 1.1; }
  .nav-logo-text span { display: block; font-size: 11px; font-style: normal; font-family: var(--font-sans); font-weight: 400; color: var(--blue-light); letter-spacing: 0.05em; }
  .nav-search { flex: 1; max-width: 480px; position: relative; }
  .nav-search input { width: 100%; padding: 10px 44px 10px 16px; border-radius: 8px; border: none; background: rgba(255,255,255,0.12); color: #fff; font-family: var(--font-sans); font-size: 14px; outline: none; transition: background 0.2s; }
  .nav-search input::placeholder { color: rgba(255,255,255,0.5); }
  .nav-search input:focus { background: rgba(255,255,255,0.2); }
  .nav-search-btn { position: absolute; right: 12px; top: 50%; transform: translateY(-50%); background: none; border: none; color: rgba(255,255,255,0.6); cursor: pointer; font-size: 16px; padding: 0; }
  .nav-links { display: flex; align-items: center; gap: 4px; }
  .nav-link { color: rgba(255,255,255,0.8); font-size: 14px; font-weight: 500; padding: 8px 12px; border-radius: 6px; transition: all 0.2s; white-space: nowrap; }
  .nav-link:hover, .nav-link.active { color: #fff; background: rgba(255,255,255,0.1); }
  .nav-actions { display: flex; align-items: center; gap: 8px; margin-left: auto; }
  .nav-icon-btn { position: relative; background: rgba(255,255,255,0.1); border: none; border-radius: 8px; width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; cursor: pointer; color: rgba(255,255,255,0.85); font-size: 18px; transition: background 0.2s; }
  .nav-icon-btn:hover { background: rgba(255,255,255,0.2); }
  .nav-badge { position: absolute; top: -4px; right: -4px; background: var(--gold); color: var(--blue-dark); font-size: 10px; font-weight: 700; min-width: 18px; height: 18px; border-radius: 9px; display: flex; align-items: center; justify-content: center; padding: 0 3px; }
  .nav-btn { padding: 9px 18px; border-radius: 8px; font-family: var(--font-sans); font-size: 14px; font-weight: 600; cursor: pointer; transition: all 0.2s; border: none; }
  .btn-outline-white { background: transparent; border: 1.5px solid rgba(255,255,255,0.5); color: #fff; }
  .btn-outline-white:hover { background: rgba(255,255,255,0.1); border-color: #fff; }
  .btn-gold { background: var(--gold); color: var(--blue-dark); font-weight: 700; }
  .btn-gold:hover { background: var(--gold-light); }
  .nav-avatar { width: 38px; height: 38px; border-radius: 50%; background: rgba(255,255,255,0.15); border: 2px solid rgba(255,255,255,0.3); display: flex; align-items: center; justify-content: center; font-size: 18px; cursor: pointer; transition: border-color 0.2s; }
  .nav-avatar:hover { border-color: var(--gold); }

  /* Dropdown */
  .nav-dropdown-wrap { position: relative; }
  .nav-dropdown { position: absolute; top: calc(100% + 12px); right: 0; background: #fff; border: 1px solid var(--border); border-radius: 12px; box-shadow: var(--shadow-lg); min-width: 300px; display: none; z-index: 1001; overflow: hidden; }
  .nav-dropdown.open { display: block; animation: dropIn 0.18s ease; }
  .dropdown-header { padding: 14px 16px 12px; border-bottom: 1px solid var(--border); display: flex; align-items: center; justify-content: space-between; }
  .dropdown-header h4 { font-family: var(--font-sans); font-size: 13px; font-weight: 700; color: var(--text); text-transform: uppercase; letter-spacing: 0.06em; }
  .dropdown-header a { font-size: 12px; color: var(--blue-mid); }
  .dropdown-list { max-height: 320px; overflow-y: auto; }
  .dropdown-item { padding: 12px 16px; display: flex; align-items: flex-start; gap: 10px; border-bottom: 1px solid #f0f2f8; cursor: pointer; transition: background 0.15s; }
  .dropdown-item:hover { background: var(--bg); }
  .dropdown-item.unread { background: #f0f6ff; }
  .dropdown-item-icon { font-size: 20px; flex-shrink: 0; margin-top: 2px; }
  .dropdown-item-text { font-size: 13px; color: var(--text); line-height: 1.4; }
  .dropdown-item-time { font-size: 11px; color: var(--muted); margin-top: 3px; }
  .dropdown-empty { padding: 24px 16px; text-align: center; color: var(--muted); font-size: 13px; }

  /* User dropdown */
  .user-dropdown { min-width: 200px; }
  .user-dropdown-info { padding: 14px 16px; border-bottom: 1px solid var(--border); }
  .user-dropdown-name { font-weight: 700; font-size: 14px; color: var(--text); }
  .user-dropdown-email { font-size: 12px; color: var(--muted); margin-top: 2px; }
  .user-dropdown-link { padding: 10px 16px; font-size: 14px; color: var(--text); display: flex; align-items: center; gap: 10px; cursor: pointer; transition: background 0.15s; }
  .user-dropdown-link:hover { background: var(--bg); }
  .user-dropdown-link.danger { color: #C0392B; }

  /* Buttons */
  .btn { padding: 10px 20px; border-radius: var(--radius-sm); font-family: var(--font-sans); font-size: 14px; font-weight: 600; cursor: pointer; transition: all 0.2s; border: none; display: inline-flex; align-items: center; gap: 8px; }
  .btn-primary { background: var(--blue-dark); color: #fff; }
  .btn-primary:hover { background: var(--blue-mid); }
  .btn-secondary { background: transparent; border: 1.5px solid var(--blue-mid); color: var(--blue-mid); }
  .btn-secondary:hover { background: #EEF4FF; }
  .btn-gold-solid { background: var(--gold); color: var(--blue-dark); font-weight: 700; }
  .btn-gold-solid:hover { background: var(--gold-light); }
  .btn-sm { padding: 7px 14px; font-size: 13px; }
  .btn-lg { padding: 14px 28px; font-size: 16px; }
  .btn:disabled { opacity: 0.45; cursor: not-allowed; }

  /* Cards */
  .card { background: var(--white); border-radius: var(--radius); border: 1px solid var(--border); box-shadow: var(--shadow); }
  .product-card { cursor: pointer; transition: transform 0.22s ease, box-shadow 0.22s ease; overflow: hidden; }
  .product-card:hover { transform: translateY(-3px); box-shadow: var(--shadow-md); }
  .product-card-img { height: 160px; display: flex; align-items: center; justify-content: center; font-size: 64px; position: relative; }
  .product-card-body { padding: 16px; }
  .product-card-title { font-size: 14px; font-weight: 600; color: var(--text); line-height: 1.35; margin-bottom: 6px; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
  .product-card-meta { display: flex; align-items: center; gap: 6px; margin-bottom: 8px; }
  .product-card-price { font-size: 18px; font-weight: 700; color: var(--blue-dark); }
  .product-card-price-old { font-size: 12px; color: var(--muted); text-decoration: line-through; }
  .product-card-footer { display: flex; align-items: center; justify-content: space-between; margin-top: 12px; padding-top: 12px; border-top: 1px solid var(--border); }
  .product-card-rating { font-size: 12px; color: var(--muted); display: flex; align-items: center; gap: 4px; }

  /* Badge */
  .badge { display: inline-flex; align-items: center; padding: 3px 10px; border-radius: 20px; font-family: var(--font-sans); font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.07em; }
  .badge-nuevo { background: #EEF9F0; color: #1A7A3A; }
  .badge-usado { background: #FFF8ED; color: #B07A20; }
  .badge-popular { background: #EEF4FF; color: var(--blue-dark); }
  .badge-oferta { background: #FFF0F0; color: #C0392B; }
  .badge-agotado { background: #F0F0F0; color: #888; }
  .badge-gold { background: var(--gold); color: var(--blue-dark); }
  .badge-pendiente { background: #FFF8ED; color: #B07A20; }
  .badge-confirmada { background: #EEF4FF; color: var(--blue-dark); }
  .badge-entregada { background: #EEF9F0; color: #1A7A3A; }

  /* Stars */
  .stars { color: #E5B800; font-size: 14px; letter-spacing: 1px; }
  .star.empty { color: #D0D5DD; }

  /* Form */
  .form-group { margin-bottom: 20px; }
  .form-label { display: block; font-size: 13px; font-weight: 600; color: var(--text); margin-bottom: 6px; }
  .form-input { width: 100%; padding: 11px 14px; border: 1.5px solid var(--border); border-radius: var(--radius-sm); font-family: var(--font-sans); font-size: 14px; color: var(--text); background: #fff; outline: none; transition: border-color 0.2s; }
  .form-input:focus { border-color: var(--blue-mid); }
  .form-input.error { border-color: #C0392B; }
  .form-error { font-size: 12px; color: #C0392B; margin-top: 5px; display: none; }
  .form-error.show { display: block; }
  select.form-input { cursor: pointer; }
  textarea.form-input { resize: vertical; min-height: 100px; }

  /* Section */
  .section { padding: 64px 0; }
  .section-title { font-family: var(--font-serif); font-style: italic; font-size: 32px; color: var(--blue-dark); margin-bottom: 8px; }
  .section-sub { font-size: 15px; color: var(--muted); margin-bottom: 40px; }

  /* Grid */
  .grid-4 { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; }
  .grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
  .grid-2 { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; }

  /* Footer */
  footer { background: var(--blue-dark); color: rgba(255,255,255,0.75); padding: 48px 0 24px; margin-top: 80px; }
  .footer-inner { max-width: var(--max-w); margin: 0 auto; padding: 0 40px; }
  .footer-grid { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 40px; margin-bottom: 40px; }
  .footer-brand h3 { font-family: var(--font-serif); font-style: italic; color: #fff; font-size: 22px; margin-bottom: 10px; }
  .footer-brand p { font-size: 13px; line-height: 1.6; }
  .footer-col h4 { color: #fff; font-size: 12px; text-transform: uppercase; letter-spacing: 0.08em; font-weight: 700; margin-bottom: 16px; }
  .footer-col a { display: block; font-size: 13px; color: rgba(255,255,255,0.65); margin-bottom: 8px; transition: color 0.2s; }
  .footer-col a:hover { color: var(--gold-light); }
  .footer-bottom { border-top: 1px solid rgba(255,255,255,0.1); padding-top: 20px; display: flex; align-items: center; justify-content: space-between; font-size: 12px; }

  /* Animations */
  @keyframes fadeIn { from { opacity:0; transform: translateY(8px); } to { opacity:1; transform: translateY(0); } }
  @keyframes toastIn { from { opacity:0; transform: translateX(24px); } to { opacity:1; transform: translateX(0); } }
  @keyframes toastOut { from { opacity:1; transform: translateX(0); } to { opacity:0; transform: translateX(24px); } }
  @keyframes dropIn { from { opacity:0; transform: translateY(-8px); } to { opacity:1; transform: translateY(0); } }
  @keyframes spin { to { transform: rotate(360deg); } }

  .fade-in { animation: fadeIn 0.4s ease both; }

  /* Modal */
  .modal-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.45); z-index: 2000; display: flex; align-items: center; justify-content: center; padding: 20px; backdrop-filter: blur(2px); }
  .modal { background: #fff; border-radius: 16px; box-shadow: var(--shadow-lg); max-width: 540px; width: 100%; max-height: 90vh; overflow-y: auto; animation: fadeIn 0.2s ease; }
  .modal-header { padding: 24px 24px 0; display: flex; align-items: center; justify-content: space-between; }
  .modal-title { font-family: var(--font-serif); font-style: italic; font-size: 22px; color: var(--blue-dark); }
  .modal-close { background: none; border: none; font-size: 22px; color: var(--muted); cursor: pointer; padding: 4px; line-height: 1; }
  .modal-body { padding: 20px 24px 24px; }

  /* Empty state */
  .empty-state { text-align: center; padding: 64px 24px; }
  .empty-state-icon { font-size: 64px; margin-bottom: 16px; opacity: 0.6; }
  .empty-state h3 { font-family: var(--font-serif); font-style: italic; font-size: 24px; color: var(--blue-dark); margin-bottom: 8px; }
  .empty-state p { font-size: 15px; color: var(--muted); margin-bottom: 24px; }

  /* Chat */
  .chat-messages { display: flex; flex-direction: column; gap: 10px; padding: 16px; height: 280px; overflow-y: auto; background: var(--bg); border-radius: 8px; }
  .chat-msg { max-width: 75%; padding: 10px 14px; border-radius: 12px; font-size: 13px; line-height: 1.45; }
  .chat-msg.mine { align-self: flex-end; background: var(--blue-dark); color: #fff; border-bottom-right-radius: 3px; }
  .chat-msg.theirs { align-self: flex-start; background: #fff; border: 1px solid var(--border); color: var(--text); border-bottom-left-radius: 3px; }
  .chat-time { font-size: 10px; margin-top: 4px; opacity: 0.65; }
  .chat-input-row { display: flex; gap: 8px; margin-top: 12px; }
  .chat-input { flex: 1; padding: 10px 14px; border: 1.5px solid var(--border); border-radius: 8px; font-family: var(--font-sans); font-size: 14px; outline: none; }
  .chat-input:focus { border-color: var(--blue-mid); }

  /* Responsive */
  @media (max-width: 1024px) {
    .grid-4 { grid-template-columns: repeat(2, 1fr); }
    .footer-grid { grid-template-columns: 1fr 1fr; }
  }
  @media (max-width: 768px) {
    .container { padding: 0 20px; }
    .nav-inner { padding: 0 20px; }
    .nav-search { display: none; }
    .grid-4, .grid-3 { grid-template-columns: repeat(2, 1fr); }
    .grid-2 { grid-template-columns: 1fr; }
    .section { padding: 40px 0; }
  }
`;

// === NAV RENDERER ===
function renderNav(activePage = '') {
  const user = State.user;
  const cartCount = State.getCartCount();
  const notifUnread = State.getUnreadCount();

  return `
  <div class="nav-inner">
    <a href="01_home.html" class="nav-logo">
      <div class="nav-logo-icon">🎓</div>
      <div class="nav-logo-text">Sabana Market<span>Universidad de La Sabana</span></div>
    </a>
    <div class="nav-search">
      <input type="text" id="nav-search-input" placeholder="Buscar productos, libros, servicios..." onkeydown="if(event.key==='Enter'){window.location.href='02_listing.html?q='+encodeURIComponent(this.value)}">
      <button class="nav-search-btn" onclick="window.location.href='02_listing.html?q='+encodeURIComponent(document.getElementById('nav-search-input').value)">🔍</button>
    </div>
    <nav class="nav-links">
      <a href="02_listing.html" class="nav-link ${activePage==='listing'?'active':''}">Explorar</a>
      <a href="02_listing.html?cat=libros" class="nav-link">Libros</a>
      <a href="02_listing.html?cat=tutorias" class="nav-link">Tutorías</a>
      <a href="07_publish.html" class="nav-link ${activePage==='publish'?'active':''}">Publicar</a>
    </nav>
    <div class="nav-actions">
      <div class="nav-dropdown-wrap">
        <button class="nav-icon-btn" id="notif-btn" onclick="toggleDropdown('notif-dropdown')" title="Notificaciones">
          🔔
          <span class="nav-badge" id="notif-badge" style="display:${notifUnread>0?'flex':'none'}">${notifUnread}</span>
        </button>
        <div class="nav-dropdown" id="notif-dropdown">
          <div class="dropdown-header">
            <h4>Notificaciones</h4>
            <a href="#" onclick="State.markAllRead();document.getElementById('notif-badge').style.display='none';renderNotifList();return false;">Marcar todo leído</a>
          </div>
          <div class="dropdown-list" id="notif-list"></div>
        </div>
      </div>
      <div class="nav-dropdown-wrap">
        <button class="nav-icon-btn" onclick="window.location.href='04_cart.html'" title="Carrito">
          🛒
          <span class="nav-badge" id="cart-badge" style="display:${cartCount>0?'flex':'none'}">${cartCount}</span>
        </button>
      </div>
      ${user ? `
        <div class="nav-dropdown-wrap">
          <div class="nav-avatar" onclick="toggleDropdown('user-dropdown')" title="${user.name}">${user.avatar}</div>
          <div class="nav-dropdown user-dropdown" id="user-dropdown">
            <div class="user-dropdown-info">
              <div class="user-dropdown-name">${user.name}</div>
              <div class="user-dropdown-email">${user.email}</div>
            </div>
            <div class="user-dropdown-link" onclick="window.location.href='06_profile.html'">👤 Mi Perfil</div>
            <div class="user-dropdown-link" onclick="window.location.href='07_publish.html'">➕ Publicar</div>
            <div class="user-dropdown-link" onclick="window.location.href='04_cart.html'">🛒 Mi Carrito</div>
            <div class="user-dropdown-link danger" onclick="logout()">🚪 Cerrar sesión</div>
          </div>
        </div>
      ` : `
        <button class="nav-btn btn-outline-white" onclick="window.location.href='05_login.html'">Iniciar sesión</button>
        <button class="nav-btn btn-gold" onclick="window.location.href='05_login.html?tab=register'">Registrarse</button>
      `}
    </div>
  </div>`;
}

function renderNotifList() {
  const list = document.getElementById('notif-list');
  if (!list) return;
  const notifs = State.notifications;
  if (notifs.length === 0) {
    list.innerHTML = '<div class="dropdown-empty">Sin notificaciones</div>';
    return;
  }
  const icons = { order: '📦', message: '💬', review: '⭐', info: 'ℹ️' };
  list.innerHTML = notifs.slice(0, 8).map(n => `
    <div class="dropdown-item ${n.read ? '' : 'unread'}" onclick="markNotifRead(${n.id})">
      <span class="dropdown-item-icon">${icons[n.type] || 'ℹ️'}</span>
      <div>
        <div class="dropdown-item-text">${n.text}</div>
        <div class="dropdown-item-time">${n.time}</div>
      </div>
    </div>
  `).join('');
}

function markNotifRead(id) {
  const notifs = State.notifications.map(n => n.id === id ? { ...n, read: true } : n);
  State.notifications = notifs;
  State.updateNotifBadge();
  renderNotifList();
}

function toggleDropdown(id) {
  const dd = document.getElementById(id);
  const wasOpen = dd.classList.contains('open');
  // Close all
  document.querySelectorAll('.nav-dropdown').forEach(d => d.classList.remove('open'));
  if (!wasOpen) {
    dd.classList.add('open');
    if (id === 'notif-dropdown') renderNotifList();
  }
}

document.addEventListener('click', function(e) {
  if (!e.target.closest('.nav-dropdown-wrap')) {
    document.querySelectorAll('.nav-dropdown').forEach(d => d.classList.remove('open'));
  }
});

function logout() {
  State.user = null;
  showToast('Sesión cerrada correctamente', 'info');
  setTimeout(() => window.location.href = '01_home.html', 800);
}

// === INIT PAGE ===
function initPage(activePage = '') {
  // Inject CSS
  let style = document.getElementById('shared-css');
  if (!style) {
    style = document.createElement('style');
    style.id = 'shared-css';
    document.head.insertBefore(style, document.head.firstChild);
  }
  style.textContent = BASE_CSS;

  // Render nav
  const nav = document.getElementById('nav');
  if (nav) nav.innerHTML = renderNav(activePage);

  // Inject toast CSS
  const toastStyle = document.createElement('style');
  toastStyle.textContent = `
    @keyframes toastIn{from{opacity:0;transform:translateX(24px)}to{opacity:1;transform:translateX(0)}}
    @keyframes toastOut{from{opacity:1;transform:translateX(0)}to{opacity:0;transform:translateX(24px)}}
  `;
  document.head.appendChild(toastStyle);
}

// === FOOTER ===
function renderFooter() {
  return `
  <div class="footer-inner">
    <div class="footer-grid">
      <div class="footer-brand">
        <h3>Sabana Market</h3>
        <p>El marketplace oficial de la comunidad estudiantil de la Universidad de La Sabana. Compra, vende y conecta con otros estudiantes.</p>
      </div>
      <div class="footer-col">
        <h4>Marketplace</h4>
        <a href="02_listing.html">Explorar</a>
        <a href="02_listing.html?cat=libros">Libros</a>
        <a href="02_listing.html?cat=tutorias">Tutorías</a>
        <a href="07_publish.html">Publicar</a>
      </div>
      <div class="footer-col">
        <h4>Cuenta</h4>
        <a href="05_login.html">Iniciar sesión</a>
        <a href="05_login.html?tab=register">Registrarse</a>
        <a href="06_profile.html">Mi Perfil</a>
        <a href="04_cart.html">Carrito</a>
      </div>
      <div class="footer-col">
        <h4>Universidad</h4>
        <a href="#">Reglamento</a>
        <a href="#">Ayuda</a>
        <a href="#">Reportar problema</a>
        <a href="08_errors.html">Estado del sistema</a>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2025 Sabana Market · Universidad de La Sabana · Chía, Colombia</span>
      <span style="color:var(--gold-light)">Solo para correos @unisabana.edu.co</span>
    </div>
  </div>`;
}
