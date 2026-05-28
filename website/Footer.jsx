function Footer({ lang, navigate }) {
  const t = DATA[lang].footer;
  const nav = DATA[lang].nav;

  const socials = [
    { name: 'Facebook',  icon: 'facebook',  href: 'https://www.facebook.com/SWINGThailandTH/' },
    { name: 'Instagram', icon: 'instagram', href: '#' },
    { name: 'X / Twitter', icon: 'twitter', href: '#' },
    { name: 'YouTube',   icon: 'youtube',   href: '#' },
    { name: 'TikTok',    icon: 'tiktok',    href: 'https://www.tiktok.com/@swingthailand' },
    { name: 'LINE',      icon: 'line',      href: '#' },
  ];

  const pages = ['home', 'about', 'services', 'articles', 'support', 'contact'];

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">

        {/* Brand + address */}
        <div>
          <img src="../project/assets/swing-logo-high.png" alt="SWING" />
          <div className="site-footer__tagline">{t.tagline}</div>
          <div className="site-footer__addr">
            <strong>{t.name}</strong>
            {t.addr}{'\n\n'}
            {t.tel}
          </div>
          <div className="footer-social" style={{ marginTop: 20 }}>
            {socials.map(s => (
              <a key={s.name} href={s.href} title={s.name} target="_blank" rel="noopener noreferrer">
                <Icon name={s.icon} size={15} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div className="footer-col">
          <h4>{t.quick_links}</h4>
          <nav className="footer-nav">
            {pages.map(key => (
              <a
                key={key}
                href={`#${key}`}
                onClick={e => { e.preventDefault(); navigate(key); }}
              >
                {nav[key]}
              </a>
            ))}
          </nav>
        </div>

        {/* Social follow */}
        <div className="footer-col">
          <h4>{lang === 'en' ? 'Follow us' : 'ติดตามเรา'}</h4>
          <div className="site-footer__addr">
            {lang === 'en'
              ? 'Stay up to date with clinic hours, events, and advocacy updates on our channels.'
              : 'ติดตามช่องทางของเราเพื่อรับข่าวสารคลินิก กิจกรรม และการรณรงค์'}
          </div>
          <div className="footer-social" style={{ marginTop: 16 }}>
            {socials.map(s => (
              <a key={s.name} href={s.href} title={s.name} target="_blank" rel="noopener noreferrer">
                <Icon name={s.icon} size={15} />
              </a>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div className="footer-col">
          <div className="footer-newsletter">
            <label htmlFor="footer-email">{t.newsletter_label}</label>
            <div className="footer-newsletter__input">
              <input
                id="footer-email"
                type="email"
                placeholder={t.newsletter_placeholder}
                aria-label={t.newsletter_label}
              />
              <button type="button">{t.newsletter_cta}</button>
            </div>
            <div className="site-footer__addr">
              {lang === 'en'
                ? 'One short email per month. No spam, ever.'
                : 'อีเมลสั้นๆ เดือนละครั้ง ไม่มีสแปม'}
            </div>
          </div>
        </div>

      </div>

      <div className="site-footer__bottom">
        <span>{t.copyright}</span>
        <span>{lang === 'en' ? 'Total visitors: 486,915' : 'ผู้เข้าชมทั้งหมด: 486,915'}</span>
      </div>
    </footer>
  );
}

window.Footer = Footer;
