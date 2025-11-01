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
        <div class="social-links">
          <a href="https://www.facebook.com/nidonelcuorewalser" aria-label="Facebook" target="_blank" rel="noopener">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" viewBox="0 0 24 24">
              <path d="M22.675 0h-21.35A1.33 1.33 0 000 1.325v21.351A1.33 1.33 0 001.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.894-4.788 4.66-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.794.716-1.794 1.764v2.314h3.587l-.467 3.622h-3.12V24h6.117A1.33 1.33 0 0024 22.675V1.325A1.33 1.33 0 0022.675 0z"/>
            </svg>
          </a>

          <a href="https://www.instagram.com/nidonelcuorewalser" aria-label="Instagram" target="_blank" rel="noopener">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.342 3.608 1.317.975.975 1.255 2.242 1.317 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.342 2.633-1.317 3.608-.975.975-2.242 1.255-3.608 1.317-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.342-3.608-1.317-.975-.975-1.255-2.242-1.317-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.342-2.633 1.317-3.608.975-.975 2.242-1.255 3.608-1.317C8.416 2.175 8.796 2.163 12 2.163m0-2.163C8.741 0 8.332.013 7.052.072 5.775.131 4.56.423 3.467 1.516 2.374 2.609 2.082 3.824 2.023 5.101.965 6.381.952 6.79.952 12s.013 5.619.071 6.899c.059 1.277.351 2.492 1.444 3.585 1.093 1.093 2.308 1.385 3.585 1.444C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.071c1.277-.059 2.492-.351 3.585-1.444 1.093-1.093 1.385-2.308 1.444-3.585.058-1.28.071-1.689.071-6.899s-.013-5.619-.071-6.899c-.059-1.277-.351-2.492-1.444-3.585C19.44.423 18.225.131 16.948.072 15.668.013 15.259 0 12 0z"/>
              <path d="M12 5.838A6.162 6.162 0 105.838 12 6.174 6.174 0 0012 5.838m0-2.163A8.325 8.325 0 113.675 12 8.335 8.335 0 0112 3.675z"/>
              <circle cx="18.406" cy="5.594" r="1.44"/>
             </svg>
          </a>

          <a href="https://www.tiktok.com/@nido.nel.cuore.walser" 
             aria-label="TikTok" 
             target="_blank" 
             rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" 
                 width="20" height="20" 
                 fill="white" 
                 viewBox="0 0 24 24">
              <path d="M12.75 2c0 .41.034.822.102 1.23 1.71-.02 3.37.67 4.57 1.93v2.05a6.067 6.067 0 01-4.67-2.34v7.54a3.53 3.53 0 11-2.46-3.36V6.05a6.044 6.044 0 00-1.08-.1A6.75 6.75 0 108.72 20.84 6.718 6.718 0 0012.75 21c3.72 0 6.75-3.03 6.75-6.75V8.5a8.667 8.667 0 01-6.75-6.5z"/>
            </svg>
          </a>

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
