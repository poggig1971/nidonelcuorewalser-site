class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          transition: all 0.3s ease;
        }
        nav {
          background: rgba(17, 24, 39, 0.9);
          backdrop-filter: blur(10px);
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }
        .scrolled {
          background: rgba(17, 24, 39, 0.98);
          padding: 0.5rem 2rem;
        }
        .logo {
          color: white;
          font-weight: bold;
          font-size: 1.5rem;
          display: flex;
          align-items: center;
        }
        .logo-icon {
          color: #D97706;
          margin-right: 0.5rem;
        }
        ul {
          display: flex;
          gap: 2rem;
          list-style: none;
          margin: 0;
          padding: 0;
          align-items: center;
        }
        a {
          color: white;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.2s;
          position: relative;
        }
        a:hover {
          color: #D97706;
        }
        a:after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -4px;
          left: 0;
          background-color: #D97706;
          transition: width 0.3s;
        }
        a:hover:after {
          width: 100%;
        }
        .book-now {
          background: #D97706;
          padding: 0.5rem 1.5rem;
          border-radius: 9999px;
          transition: all 0.3s;
        }
        .book-now:hover {
          background: #B45309;
          transform: translateY(-2px);
        }
        .mobile-menu-button {
          display: none;
          background: none;
          border: none;
          color: white;
          font-size: 1.5rem;
          cursor: pointer;
        }
        @media (max-width: 768px) {
          ul {
            display: none;
          }
          .mobile-menu-button {
            display: block;
          }
          .mobile-menu {
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: rgba(17, 24, 39, 0.98);
            padding: 1rem;
            display: flex;
            flex-direction: column;
            gap: 1rem;
          }
        }
      </style>
      <nav id="navbar">
        <div class="logo">
          <i data-feather="home" class="logo-icon"></i>
          <span>Alpine Nest Retreat</span>
        </div>
        <button class="mobile-menu-button" id="menuButton">
          <i data-feather="menu"></i>
        </button>
        <ul id="navLinks">
          <li><a href="/">Home</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#location">Location</a></li>
          <li><a href="#booking" class="book-now">Book Now</a></li>
        </ul>
      </nav>
    `;

    // Mobile menu toggle
    const menuButton = this.shadowRoot.getElementById('menuButton');
    const navLinks = this.shadowRoot.getElementById('navLinks');
    
    menuButton.addEventListener('click', () => {
      navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    });

    // Scroll effect
    const navbar = this.shadowRoot.getElementById('navbar');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });

    // Initialize feather icons
    feather.replace();
  }
}
customElements.define('custom-navbar', CustomNavbar);