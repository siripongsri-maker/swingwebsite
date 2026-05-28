function Home({ lang, navigate, onAppt, onArticle }) {
  const t = DATA[lang];

  return (
    <main className="page-enter">

      {/* Hero */}
      <section className="hero">
        <div className="hero__inner">
          <img className="hero__logo" src="../project/assets/swing-logo-high.png" alt="SWING Foundation" />
          <div className="hero__eyebrow">{t.hero.eyebrow}</div>
          <h1 className="hero__title">{t.hero.title}</h1>
          <p className="hero__lede">{t.hero.lede}</p>
          <div className="hero__actions">
            <button className="btn btn--primary btn--lg" onClick={onAppt}>
              <Icon name="calendar" size={18} />
              {t.hero.cta_appt}
            </button>
            <button
              className="btn btn--outline btn--lg"
              onClick={() => navigate('about')}
            >
              {t.hero.cta_about}
              <Icon name="arrow-right" size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* Wave down */}
      <Wave src="../project/assets/asset-12.png" />

      {/* Stats bar */}
      <div className="stats-bar">
        <div className="stats-bar__inner">
          {t.stats.map((s, i) => (
            <div key={i} className="stat-item">
              <div className="stat-item__value">{s.value}</div>
              <div className="stat-item__label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Wave up from purple */}
      <Wave src="../project/assets/asset-56.png" flip />

      {/* Mission */}
      <section className="section section--purple">
        <div className="section__inner section__inner--narrow">
          <div className="section__eyebrow">{t.mission.eyebrow}</div>
          <div className="mission__quote-wrap">
            <blockquote className="mission__quote">{t.mission.quote}</blockquote>
            <div className="mission__attribution">{t.mission.attribution}</div>
          </div>
        </div>
      </section>

      {/* Wave down from purple */}
      <Wave src="../project/assets/asset-11.png" />

      {/* Three Pillars */}
      <section className="section">
        <div className="section__inner">
          <SectionHeader
            eyebrow={t.programmes.eyebrow}
            title={t.programmes.title}
            lede={t.programmes.lede}
          />
          <div className="pillars">
            {t.programmes.items.map((p, i) => (
              <div key={i} className="pillar">
                <div className="pillar__icon-wrap">
                  <Icon name={p.icon} size={26} />
                </div>
                <div>
                  <div className="pillar__title">{p.title}</div>
                  <p className="pillar__desc">{p.desc}</p>
                </div>
                <button
                  className="pillar__link btn btn--ghost"
                  onClick={() => navigate(p.link)}
                >
                  {lang === 'en' ? 'Learn more' : 'เรียนรู้เพิ่มเติม'}
                  <Icon name="arrow-right" size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wave into muted */}
      <Wave src="../project/assets/asset-57.png" />

      {/* Services preview */}
      <section className="section section--muted">
        <div className="section__inner">
          <SectionHeader
            eyebrow={t.services.eyebrow}
            title={t.services.title}
            lede={t.services.lede}
          />
          <div className="services-grid">
            {t.services.items.slice(0, 6).map((s, i) => (
              <ServiceCard key={i} item={s} />
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 36 }}>
            <button
              className="btn btn--primary"
              onClick={() => navigate('services')}
            >
              {lang === 'en' ? 'All services & locations' : 'บริการและสาขาทั้งหมด'}
              <Icon name="arrow-right" size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* Wave out of muted */}
      <Wave src="../project/assets/asset-12.png" flip />

      {/* Articles preview */}
      <section className="section">
        <div className="section__inner">
          <SectionHeader
            eyebrow={t.articles.eyebrow}
            title={t.articles.title}
            lede={t.articles.lede}
          />
          <div className="articles-grid">
            {t.articles.items.slice(0, 3).map((a, i) => (
              <ArticleCard key={i} item={a} lang={lang} onClick={onArticle} />
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 36 }}>
            <button
              className="btn btn--outline"
              onClick={() => navigate('articles')}
            >
              {t.articles.all}
              <Icon name="arrow-right" size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* CTA band */}
      <CtaBand lang={lang} navigate={navigate} onAppt={onAppt} />

    </main>
  );
}

window.Home = Home;
