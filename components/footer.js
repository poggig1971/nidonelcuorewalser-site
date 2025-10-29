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
          margin-top: 1rem;
        }
        .social-links a {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          transition: all 0.3s;
        }
        .social-links a:hover {
          background: #D97706;
          transform: translateY(-3px);
        }
        .copyright {
          text-align: center;
          margin-top: 3rem;
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          color: #9CA3AF;
        }
        @media (max-width: 768px) {
          .footer-container {
            grid-template-columns: 1fr;
          }
        }
      </style>
      <footer>
        <div class="footer-container">
          <div class="footer-section">
            <h3>Nido nel Cuore Walser</h3>
            <p>Il tuo accogliente appartamento nel cuore di Gressoney-Saint-Jean, Valle d'Aosta.</p>
<div class="social-links">
              <a href="#" aria-label="Facebook"><i data-feather="facebook"></i></a>
              <a href="#" aria-label="Instagram"><i data-feather="instagram"></i></a>
              <a href="#" aria-label="Airbnb"><i data-feather="home"></i></a>
            </div>
          </div>
          <div class="footer-section">
            <h3>Link veloci</h3>
<ul>
              <li><a href="/">Home</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#location">Location</a></li>
              <li><a href="#booking">Booking</a></li>
            </ul>
          </div>
          <div class="footer-section">
            <h3>Contatti</h3>
<ul>
              <li><i data-feather="map-pin" class="inline mr-2"></i> Via Linty Waeg 4, Gressoney-Saint-Jean</li>
              <li><i data-feather="phone" class="inline mr-2"></i> +39 335 8321878</li>
              <li><i data-feather="mail" class="inline mr-2"></i> info@nidonelcuorewalser.it</li>
            </ul>
          </div>
        </div>
        <div class="copyright">
          <p>&copy; ${new Date().getFullYear()} Nido nel Cuore Walser. Tutti i diritti riservati.</p>
</div>
      </footer>
    `;
    
    // Initialize feather icons
    feather.replace();
  }
}
customElements.define('custom-footer', CustomFooter);