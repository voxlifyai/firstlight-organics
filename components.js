// Shared nav and footer — edit here to update all pages at once.

const SUN_SVG = `<svg style="display:none" xmlns="http://www.w3.org/2000/svg">
  <symbol id="sun" viewBox="0 0 160 100" fill="none">
    <path d="M 52 98 A 28 28 0 0 1 108 98" stroke="#B88A2B" stroke-width="1.5" fill="none"/>
    <line x1="80.0" y1="70.0" x2="80.0" y2="24.0" stroke="#B88A2B" stroke-width="1.1"/>
    <line x1="85.8" y1="70.6" x2="95.4" y2="25.6" stroke="#B88A2B" stroke-width="1"/>
    <line x1="74.2" y1="70.6" x2="64.6" y2="25.6" stroke="#B88A2B" stroke-width="1"/>
    <line x1="91.4" y1="72.4" x2="110.1" y2="30.4" stroke="#B88A2B" stroke-width="1"/>
    <line x1="68.6" y1="72.4" x2="49.9" y2="30.4" stroke="#B88A2B" stroke-width="1"/>
    <line x1="96.5" y1="75.3" x2="123.5" y2="38.1" stroke="#B88A2B" stroke-width="1"/>
    <line x1="63.5" y1="75.3" x2="36.5" y2="38.1" stroke="#B88A2B" stroke-width="1"/>
    <line x1="100.8" y1="79.3" x2="134.9" y2="48.5" stroke="#B88A2B" stroke-width="1"/>
    <line x1="59.2" y1="79.3" x2="25.1" y2="48.5" stroke="#B88A2B" stroke-width="1"/>
    <line x1="104.2" y1="84.0" x2="144.1" y2="61.0" stroke="#B88A2B" stroke-width="1"/>
    <line x1="55.8" y1="84.0" x2="15.9" y2="61.0" stroke="#B88A2B" stroke-width="1"/>
    <line x1="106.6" y1="89.3" x2="150.4" y2="72.1" stroke="#B88A2B" stroke-width="1"/>
    <line x1="53.4" y1="89.3" x2="9.6" y2="72.1" stroke="#B88A2B" stroke-width="1"/>
  </symbol>
</svg>`;

const NAV_HTML = `<nav>
  <ul class="nav-links">
    <li><a href="index.html">Home</a></li>
    <li><a href="shop.html">Shop</a></li>
    <li><a href="learn.html">Learn</a></li>
  </ul>
  <a class="nav-logo" href="index.html">
    <img src="images/logo.png" alt="First Light Organics" class="nav-logo-img">
  </a>
  <ul class="nav-links">
    <li><a href="about.html">About</a></li>
    <li><a href="reviews.html">Reviews</a></li>
    <li><a href="contact.html">Contact</a></li>
  </ul>
</nav>`;

const FOOTER_HTML = `<footer>
  <div class="footer-top">
    <div class="footer-brand">
      <svg width="36" height="22" style="opacity:0.55"><use href="#sun"/></svg>
      <div class="footer-wordmark">First Light Organics</div>
      <div class="footer-tagline">Handcrafted in Boise, Idaho</div>
      <div class="footer-scripture">"...by which the sunrise shall visit us from on high." Luke 1:78</div>
    </div>
    <div class="footer-nav">
      <div class="footer-col">
        <h4>Shop</h4>
        <ul>
          <li><a href="shop.html">All Products</a></li>
          <li><a href="shop.html">Lavender Balm</a></li>
          <li><a href="shop.html">Cedar Balm</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Learn</h4>
        <ul>
          <li><a href="learn.html#why-tallow">Why Tallow?</a></li>
          <li><a href="learn.html#ingredients">Our Ingredients</a></li>
          <li><a href="learn.html#process">Our Process</a></li>
          <li><a href="learn.html#faq">FAQ</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>About</h4>
        <ul>
          <li><a href="about.html">Our Story</a></li>
          <li><a href="about.html#standards">Our Standards</a></li>
          <li><a href="about.html#philosophy">Our Philosophy</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Help</h4>
        <ul>
          <li><a href="contact.html">Contact Us</a></li>
          <li><a href="reviews.html">Reviews</a></li>
          <li><a href="#">Shipping Policy</a></li>
          <li><a href="#">Return Policy</a></li>
        </ul>
      </div>
    </div>
  </div>
  <div class="footer-bottom">
    <span>&copy; 2025 First Light Organics. All rights reserved. Handcrafted in Boise, Idaho.</span>
    <span style="display:flex;gap:24px">
      <a href="#">Privacy Policy</a>
      <a href="#">Terms</a>
    </span>
  </div>
</footer>`;

// Inject on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  // SVG defs
  document.body.insertAdjacentHTML('afterbegin', SUN_SVG);
  // Nav
  document.body.insertAdjacentHTML('afterbegin', NAV_HTML);
  // Footer
  document.body.insertAdjacentHTML('beforeend', FOOTER_HTML);

  // Mark active nav link
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.getAttribute('href') === path) a.classList.add('active');
  });
});

// Shop "coming soon" handler
function shopClick(e, name) {
  e.preventDefault();
  const msg = document.getElementById('shop-msg');
  if (msg) {
    msg.textContent = 'Our shop is launching soon. Thank you for your interest in ' + name + '!';
    msg.style.display = 'block';
  }
}

// Newsletter handler
function handleNewsletter(e) {
  e.preventDefault();
  e.target.innerHTML = '<p style="font-size:13px;letter-spacing:0.08em;color:var(--gold)">Thank you. We\'ll be in touch.</p>';
}

// Contact form handler
function handleContact(e) {
  e.preventDefault();
  e.target.innerHTML = '<p style="font-size:15px;font-family:var(--serif);font-weight:300;color:var(--charcoal)">Thank you for reaching out. We\'ll respond within one business day.</p>';
}

// FAQ toggle
function toggleFaq(el) {
  const item = el.closest('.faq-item');
  const was = item.classList.contains('open');
  document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
  if (!was) item.classList.add('open');
}
