// Common Layout Components Injection for Vanilla HTML/JS
document.addEventListener('DOMContentLoaded', () => {
  // 1. Inject Header
  const headerRoot = document.getElementById('header-root');
  if (headerRoot) {
    const currentFile = window.location.pathname.split('/').pop() || 'index.html';
    
    headerRoot.innerHTML = `
      <header class="glass">
        <div class="container navbar">
          <a href="index.html" class="logo">
            <img src="public/img/logo.png" alt="Cathedral Logo">
            <div class="logo-text">
              <h1>All Saints' Cathedral</h1>
              <p>Abayi-Umuocham</p>
            </div>
          </a>
          
          <nav class="nav-links" id="main-nav">
            <a href="index.html" class="${currentFile === 'index.html' ? 'active' : ''}">Home</a>
            <a href="about.html" class="${currentFile === 'about.html' ? 'active' : ''}">About</a>
            <a href="activities.html" class="${currentFile === 'activities.html' ? 'active' : ''}">Ministries</a>
            <a href="groups.html" class="${currentFile === 'groups.html' || currentFile.includes('group-detail.html') ? 'active' : ''}">Saints Groups</a>
            <a href="sermons.html" class="${currentFile === 'sermons.html' ? 'active' : ''}">Sermons</a>
            <a href="announcements.html" class="${currentFile === 'announcements.html' ? 'active' : ''}">Announcements</a>
            <a href="gallery.html" class="${currentFile === 'gallery.html' ? 'active' : ''}">Gallery</a>
            <a href="contact.html" class="${currentFile === 'contact.html' ? 'active' : ''}">Contact</a>
            <a href="admin.html" class="${currentFile === 'admin.html' ? 'active' : ''}">Admin Portal</a>
          </nav>

          <div style="display: flex; align-items: center; gap: 12px;">
            <button id="theme-toggle-btn" class="theme-toggle" aria-label="Toggle dark mode">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-moon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
            </button>
          </div>
        </div>
      </header>
    `;
    
    // Theme toggle handler
    const btn = document.getElementById('theme-toggle-btn');
    const storedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', storedTheme);
    updateThemeIcon(btn, storedTheme);

    btn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
      const nextTheme = currentTheme === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', nextTheme);
      localStorage.setItem('theme', nextTheme);
      updateThemeIcon(btn, nextTheme);
    });
  }

  // 2. Inject Footer
  const footerRoot = document.getElementById('footer-root');
  if (footerRoot) {
    footerRoot.innerHTML = `
      <footer>
        <div class="container">
          <div class="grid-12">
            <div style="grid-column: span 5; space-y-4">
              <div class="logo" style="margin-bottom: 20px;">
                <img src="public/img/logo.png" alt="Cathedral Logo" style="filter: brightness(0) invert(1);">
                <div class="logo-text">
                  <h1 style="color: white;">All Saints' Cathedral</h1>
                  <p style="color: var(--primary-orange);">Diocese of Aba Ngwa North</p>
                </div>
              </div>
              <p style="font-size: 13px; color: #94A3B8; max-width: 320px; margin-bottom: 24px;">
                A place of worship, fellowship, spiritual growth, and transformation. Under the guidance of Rt. Rev. Nathan C. O. Kanu, PhD.
              </p>
              <div style="display: flex; gap: 12px;">
                <a href="https://facebook.com" class="btn btn-outline" style="padding: 8px 16px; font-size: 11px;">Facebook</a>
                <a href="https://youtube.com" class="btn btn-outline" style="padding: 8px 16px; font-size: 11px;">YouTube</a>
              </div>
            </div>
            
            <div style="grid-column: span 3;">
              <h3>Quick Links</h3>
              <ul style="list-style: none; space-y-2; font-size: 13px; display: flex; flex-direction: column; gap: 10px;">
                <li><a href="about.html">Our History & Clergy</a></li>
                <li><a href="activities.html">Cathedral Activities</a></li>
                <li><a href="groups.html">Saints Fellowships</a></li>
                <li><a href="sermons.html">Sermons & Bulletins</a></li>
                <li><a href="privacy.html">Privacy Policy</a></li>
              </ul>
            </div>
            
            <div style="grid-column: span 4;">
              <h3>Contact Info</h3>
              <p style="font-size: 13px; color: #94A3B8; margin-bottom: 12px;">
                📍 Abayi-Umuocham Road, Opp. Ngwa High School, Abayi, Aba, Abia State, Nigeria.
              </p>
              <p style="font-size: 13px; color: #94A3B8; margin-bottom: 12px;">
                📞 +234 803 123 4567
              </p>
              <p style="font-size: 13px; color: #94A3B8;">
                ✉️ info@allsaintscathedralaba.org
              </p>
            </div>
          </div>
          
          <div style="border-t: 1px solid rgba(255,255,255,0.05); margin-top: 60px; padding-top: 24px; text-align: center; font-size: 11px; color: #64748B;">
            © ${new Date().getFullYear()} All Saints' Cathedral Abayi-Umuocham. All Rights Reserved.
          </div>
        </div>
      </footer>
    `;
  }

  function updateThemeIcon(button, theme) {
    if (theme === 'dark') {
      button.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sun"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
      `;
    } else {
      button.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-moon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
      `;
    }
  }
});
