/* Hero.jsx — bilingual hero block with logo, headline, lede, primary CTA */
function Hero({ lang, onAppointmentClick }) {
  const t = COPY[lang].hero;
  return (
    <section className="hero">
      <img className="hero__logo" src="../../assets/swing-logo-high.png" alt="SWING" />
      <div className="hero__eyebrow">{t.eyebrow}</div>
      <h1 className="hero__title">{t.title}</h1>
      <p className="hero__lede">{t.lede}</p>
      <div className="hero__actions">
        <button className="btn btn--primary btn--lg" onClick={onAppointmentClick}>{COPY[lang].cta.appt}</button>
        <a href="#about"><button className="btn btn--outline btn--lg">{lang === 'en' ? 'About SWING' : 'เกี่ยวกับเรา'}</button></a>
      </div>
    </section>
  );
}

/* WaveDivider.jsx — the signature wave decoration. Two variants. */
function WaveDivider({ variant = 'down', src }) {
  const asset = src || '../../assets/asset-12.png';
  return <img className={variant === 'up' ? 'wave wave--flipv' : 'wave'} src={asset} alt="" aria-hidden="true" />;
}

window.Hero = Hero;
window.WaveDivider = WaveDivider;
