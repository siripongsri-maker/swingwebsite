function Header({ lang, setLang, navigate, page, onAppt }) {
  const t = DATA[lang];
  const [scrolled, setScrolled] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  React.useEffect(() => { setMenuOpen(false); }, [page]);

  const navLinks = [
    { key: 'home',     label: t.nav.home },
    { key: 'about',    label: t.nav.about },
    { key: 'services', label: t.nav.services },
    { key: 'articles', label: t.nav.articles },
    { key: 'support',  label: t.nav.support },
    { key: 'contact',  label: t.nav.contact },
  ];

  return (
    <React.Fragment>
      <header className={`site-header${scrolled ? ' scrolled' : ''}`}>
        <div className="site-header__inner">
          <a
            href="#"
            className="site-header__brand"
            onClick={e => { e.preventDefault(); navigate('home'); }}
          >
            <img src="../project/assets/swing-logo-high.png" alt="SWING" />
            <div className="site-header__brand-text">
              <span className="site-header__brand-name">SWING</span>
              <span className="site-header__brand-sub">
                {lang === 'en' ? 'Service Workers in Group' : 'มูลนิธิเพื่อนพนักงานบริการ'}
              </span>
            </div>
          </a>

          <nav className="site-header__nav" aria-label="Main navigation">
            {navLinks.map(({ key, label }) => (
              <a
                key={key}
                href={`#${key}`}
                className={page === key ? 'active' : ''}
                onClick={e => { e.preventDefault(); navigate(key); }}
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="site-header__right">
            <div className="lang-toggle" role="group" aria-label="Language">
              <button
                className={lang === 'th' ? 'active' : ''}
                onClick={() => setLang('th')}
                aria-pressed={lang === 'th'}
              >TH</button>
              <button
                className={lang === 'en' ? 'active' : ''}
                onClick={() => setLang('en')}
                aria-pressed={lang === 'en'}
              >EN</button>
            </div>
            <button className="btn btn--primary btn--sm" onClick={onAppt}>
              {t.nav.appt}
            </button>
            <button
              className={`hamburger${menuOpen ? ' open' : ''}`}
              onClick={() => setMenuOpen(o => !o)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <span/><span/><span/>
            </button>
          </div>
        </div>
      </header>

      <nav className={`mobile-nav${menuOpen ? ' open' : ''}`} aria-label="Mobile navigation">
        {navLinks.map(({ key, label }) => (
          <a
            key={key}
            href={`#${key}`}
            className={page === key ? 'active' : ''}
            onClick={e => { e.preventDefault(); navigate(key); }}
          >
            {label}
          </a>
        ))}
        <button
          className="btn btn--primary"
          style={{ marginTop: 12, width: '100%', justifyContent: 'center' }}
          onClick={() => { setMenuOpen(false); onAppt(); }}
        >
          {t.nav.appt}
        </button>
      </nav>
    </React.Fragment>
  );
}

window.Header = Header;
