/* Header.jsx — sticky white header with logo, nav, language toggle, primary CTA */
function Header({ lang, setLang, onAppointmentClick }) {
  const t = COPY[lang];
  const linkClass = (active) => active ? 'active' : '';
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a href="#" className="site-header__brand">
          <img src="../../assets/swing-logo-high.png" alt="SWING" />
          <span className="sub">{lang === 'en' ? 'Service Workers in Group' : 'มูลนิธิเพื่อน\nพนักงานบริการ'}</span>
        </a>
        <nav className="site-header__nav">
          <a href="#" className={linkClass(true)}>{t.nav.main}</a>
          <a href="#about">{t.nav.about}</a>
          <a href="#articles">{t.nav.article}</a>
          <a href="#donation">{t.nav.donation}</a>
          <a href="#contact">{t.nav.contact}</a>
        </nav>
        <div className="site-header__right">
          <div className="lang">
            <button className={lang === 'th' ? 'active' : ''} onClick={() => setLang('th')}>TH</button>
            <button className={lang === 'en' ? 'active' : ''} onClick={() => setLang('en')}>EN</button>
          </div>
          <button className="btn btn--primary" onClick={onAppointmentClick}>{t.cta.appt}</button>
        </div>
      </div>
    </header>
  );
}

window.Header = Header;
