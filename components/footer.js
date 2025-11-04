class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        footer {
          background: #111827;
          color: white;
          padding: 4rem 2rem;
        }
        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
          align-items: start;
        }
        .footer-section h3 {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          color: #D97706;
        }
        .footer-section ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .footer-section li {
          margin-bottom: 0.75rem;
        }
        .footer-section a {
          color: #E5E7EB;
          text-decoration: none;
          transition: color 0.2s;
        }
        .footer-section a:hover {
          color: #D97706;
        }
        .social-links {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
          margin-top: 1rem;
        }
        .social-links a {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 42px;
          height: 42px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          transition: all 0.3s;
        }
        .social-links a:hover {
          background: #D97706;
          transform: translateY(-3px) scale(1.1);
        }
        .copyright {
          text-align: center;
          margin-top: 3rem;
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          color: #9CA3AF;
          font-size: 0.9rem;
        }
        @media (max-width: 768px) {
          .footer-container {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .social-links {
            justify-content: center;
          }
        }
      </style>

      <footer>
        <div class="footer-container">

          <!-- Sezione Social -->
          <div class="footer-section">
            <h3>Seguici</h3>
            <div class="social-links">
              <a href="https://www.facebook.com/nidonelcuorewalser/" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <i data-feather="facebook"></i>
              </a>
              <a href="https://www.instagram.com/nidonelcuorewalser/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <i data-feather="instagram"></i>
              </a>
              <a href="https://www.tiktok.com/@nido.nel.cuore.walser" aria-label="TikTok" target="_blank" rel="noopener noreferrer">
                <i data-feather="music"></i>
              </a>
              <a href="https://www.youtube.com/@nidonelcuorewalser" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
                <i data-feather="youtube"></i>
              </a>
            </div>
          </div>

          <!-- Link Veloci -->
          <div class="footer-section">
            <h3>Link veloci</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="#descrizione">Descrizione</a></li>
              <li><a href="#mappa">Mappa</a></li>
              <li><a href="#booking">Prenotazioni</a></li>
              <li><a href="https://www.airbnb.it/rooms/1044803211763912273" target="_blank">Airbnb</a></li>
            </ul>
          </div>

          <!-- Contatti -->
          <div class="footer-section">
            <h3>Contatti</h3>
            <ul>
              <li><i data-feather="map-pin" class="inline mr-2"></i> Via Linty Waeg 4, Gressoney-Saint-Jean (AO)</li>
              <li><i data-feather="phone" class="inline mr-2"></i> <a href="tel:+393358321878">+39 335 8321878</a></li>
              <li><i data-feather="mail" class="inline mr-2"></i> <a href="mailto:info@nidonelcuorewalser.it">info@nidonelcuorewalser.it</a></li>
            </ul>
          </div>
        </div>

        <div class="copyright">
          <p>&copy; ${new Date().getFullYear()} Nido nel Cuore Walser. Tutti i diritti riservati.</p>
        </div>
      </footer>
    `;

    // Attiva le icone feather
    feather.replace();
  }
}

customElements.define('custom-footer', CustomFooter);
