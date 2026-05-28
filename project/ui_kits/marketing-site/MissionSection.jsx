/* MissionSection.jsx — purple-ground centered quote with attribution */
function MissionSection({ lang }) {
  const t = COPY[lang].mission;
  return (
    <section id="about" className="section section--purple">
      <div className="section__inner">
        <div className="section__eyebrow">{t.eyebrow}</div>
        <p className="mission__quote">{t.quote}</p>
        <div className="mission__attribution">{t.attribution}</div>
      </div>
    </section>
  );
}

/* ServiceGrid.jsx — 3-up grid of round-thumbnail service tiles */
function ServiceGrid({ lang }) {
  const t = COPY[lang].services;
  return (
    <section id="services" className="section">
      <div className="section__inner">
        <div className="section__eyebrow">{t.eyebrow}</div>
        <h2 className="section__title">{t.title}</h2>
        <p className="section__lede">{t.lede}</p>
        <div className="services">
          {t.items.map((s, i) => (
            <article key={i} className="service">
              <div className="service__icon"><img src={s.img} alt="" /></div>
              <h3 className="service__title">{s.title}</h3>
              <p className="service__desc">{s.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

window.MissionSection = MissionSection;
window.ServiceGrid = ServiceGrid;
