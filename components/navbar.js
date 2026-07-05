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
          gap: 0.5rem;
        }
        .logo img {
          height: 32px;
          width: 32px;
          border-radius: 50%;
          box-shadow: 0 0 6px rgba(0,0,0,0.3);
        }
        .logo-icon {
          color: #D97706;
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
        .social-icons {
          display: flex;
          gap: 0.75rem;
          align-items: center;
          margin-left: 1rem;
        }
        .social-icons a {
          color: white;
          transition: color 0.2s, transform 0.2s;
          font-size: 1.2rem;
        }
        .social-icons a:hover {
          color: #D97706;
          transform: scale(1.15);
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
          .social-icons {
            display: none;
          }
        }
      </style>

      <nav id="navbar">
        <div class="logo">
          <img src="assets/img/LogoNido.png" alt="Logo Nido nel Cuore Walser">
          <i data-feather="home" class="logo-icon"></i>
          <span>Nido nel Cuore Walser</span>
        </div>

        <button class="mobile-menu-button" id="menuButton">
          <i data-feather="menu"></i>
        </button>

        <ul id="navLinks">
          <li><a href="/">Home</a></li>
          <li><a href="#descrizione">Descrizione</a></li>
          <li><a href="#mappa">Mappa</a></li>
          <li><a href="https://forms.gle/EY2i4GCxAFNV2sHn7" target="_blank">Registrazione Ospiti</a></li>
          <li><a href="#booking" class="book-now">Prenota Ora</a></li>
        </ul>

        <div class="social-icons">
          <a href="https://www.instagram.com/nidonelcuorewalser/" target="_blank" aria-label="Instagram">
            <i data-feather="instagram"></i>
          </a>
          <a href="https://www.tiktok.com/@nido.nel.cuore.walser" target="_blank" aria-label="TikTok">
            <i data-feather="music"></i>
          </a>
          <a href="https://www.facebook.com/nidonelcuorewalser/" target="_blank" aria-label="Facebook">
            <i data-feather="facebook"></i>
          </a>
          <a href="https://www.youtube.com/@nidonelcuorewalser" target="_blank" aria-label="YouTube">
            <i data-feather="youtube"></i>
          </a>
        </div>
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

    // Feather icons rendering
    if (window.feather) {
      const icons = this.shadowRoot.querySelectorAll('i[data-feather]');
      icons.forEach(icon => {
        const name = icon.getAttribute('data-feather');
        const svg = feather.icons[name]?.toSvg({ class: icon.className });
        if (svg) icon.outerHTML = svg;
      });
    }
  }
}

customElements.define('custom-navbar', CustomNavbar);
