/* Footer.jsx — bilingual contact block + social icon row */
function Footer({ lang }) {
  const t = COPY[lang].footer;
  const Icon = ({ d }) => <svg viewBox="0 0 24 24" dangerouslySetInnerHTML={{__html: d}} />;
  const socials = [
    { label: 'Facebook',  d: '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>' },
    { label: 'Instagram', d: '<rect x="2" y="2" width="20" height="20" rx="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>' },
    { label: 'X',         d: '<path d="M4 4l16 16"/><path d="M20 4L4 20"/>' },
    { label: 'YouTube',   d: '<path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>' },
    { label: 'TikTok',    d: '<path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/>' },
    { label: 'LINE',      d: '<path d="M12 3C7 3 3 6.4 3 10.6c0 2.7 1.7 5 4.3 6.4-.1.4-.7 2.5-.8 2.9 0 0 0 .2.1.3.1.1.2.1.3 0 .3-.1 3.4-2.2 3.9-2.5.4 0 .8.1 1.2.1 5 0 9-3.4 9-7.6S17 3 12 3z"/>' }
  ];

  return (
    <footer id="contact" className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__brand">
          <img src="../../assets/swing-logo-high.png" alt="SWING" />
          <div className="site-footer__addr">
            <strong>{t.name}</strong>
            {t.addr.split('\n').map((l, i) => <span key={i}>{l}<br/></span>)}
            <br/>
            {t.tel.split('\n').map((l, i) => <span key={i}>{l}<br/></span>)}
          </div>
        </div>
        <div>
          <div className="site-footer__addr">
            <strong>{lang === 'en' ? 'Stay in touch' : 'ติดตามเรา'}</strong>
            {lang === 'en' ? 'Follow our channels for stories, clinic hours, and event invites.' : 'ติดตามช่องทางของเราเพื่อข่าวสาร เวลาเปิดทำการคลินิก และกิจกรรม'}
          </div>
          <div className="site-footer__social">
            {socials.map(s => (
              <a key={s.label} href="#" title={s.label}><Icon d={s.d} /></a>
            ))}
          </div>
        </div>
        <div>
          <div className="site-footer__addr">
            <strong>{lang === 'en' ? 'Newsletter' : 'รับข่าวสาร'}</strong>
            {lang === 'en' ? 'One short email a month. No spam, ever.' : 'อีเมลสั้นๆ เดือนละครั้ง ไม่มีสแปม'}
          </div>
          <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
            <input
              type="email"
              placeholder={lang === 'en' ? 'your@email.com' : 'อีเมลของคุณ'}
              style={{ flex: 1, padding: '10px 14px', border: '1.5px solid var(--ink-100)', borderRadius: 10, fontFamily: 'var(--font-body)', fontSize: 14, outline: 'none', background: 'white' }}
            />
            <button className="btn btn--primary">{lang === 'en' ? 'Subscribe' : 'สมัคร'}</button>
          </div>
        </div>
      </div>
      <div className="site-footer__bottom">
        <span>{t.copyright}</span>
        <span>{t.visitors}</span>
      </div>
    </footer>
  );
}

/* LineWidget.jsx — pinned LINE QR chip bottom-right */
function LineWidget({ lang, onLineClick }) {
  return (
    <button className="line-widget" onClick={onLineClick}>
      <span className="line-widget__avatar">L</span>
      <span>{COPY[lang].line}</span>
    </button>
  );
}

window.Footer = Footer;
window.LineWidget = LineWidget;
