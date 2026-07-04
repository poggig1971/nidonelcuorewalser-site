class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        footer {
          background: #111827;
          color: #d1d5db;
          text-align: center;
          padding: 2.5rem 1rem;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          font-size: 0.875rem;
          line-height: 1.7;
        }
        a {
          color: #F59E0B;
          text-decoration: none;
        }
        a:hover {
          text-decoration: underline;
        }
        .social {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          margin-bottom: 1rem;
          flex-wrap: wrap;
        }
        .social a {
          color: #d1d5db;
          font-weight: 500;
        }
        .social a:hover {
          color: #F59E0B;
        }
        .titolo {
          color: #ffffff;
          font-weight: 700;
        }
        .note {
          color: #6b7280;
          margin-top: 0.75rem;
        }
      </style>

      <footer>
        <div class="social">
          <a href="https://www.instagram.com/nidonelcuorewalser/" target="_blank" rel="noopener">Instagram</a>
          <a href="https://www.tiktok.com/@nido.nel.cuore.walser" target="_blank" rel="noopener">TikTok</a>
          <a href="https://www.facebook.com/nidonelcuorewalser/" target="_blank" rel="noopener">Facebook</a>
          <a href="https://www.youtube.com/@nidonelcuorewalser" target="_blank" rel="noopener">YouTube</a>
        </div>
        <p><span class="titolo">Nido nel Cuore Walser</span> – Via Linty Waeg 4, 11025 Gressoney-Saint-Jean (AO)</p>
        <p>
          <a href="mailto:info@nidonelcuorewalser.it">info@nidonelcuorewalser.it</a>
          &nbsp;·&nbsp;
          <a href="https://wa.me/393358321878" target="_blank" rel="noopener">+39 335 8321878 (WhatsApp)</a>
        </p>
        <p class="note">&copy; ${new Date().getFullYear()} Nido nel Cuore Walser – Tutti i diritti riservati.</p>
      </footer>
    `;
  }
}

customElements.define('custom-footer', CustomFooter);
