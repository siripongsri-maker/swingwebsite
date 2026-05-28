function About({ lang, navigate, onAppt }) {
  const t = DATA[lang];
  const a = t.about;

  return (
    <main className="page-enter">
      <PageHero eyebrow={a.eyebrow} title={a.title} lede={a.lede} />

      {/* History timeline */}
      <section className="section">
        <div className="section__inner">
          <div className="section__eyebrow">{a.history_title}</div>
          <h2 className="section__title" style={{ marginBottom: 48 }}>
            {lang === 'en' ? 'Twenty years, one mission.' : 'ยี่สิบปี หนึ่งพันธกิจ'}
          </h2>
          <div className="timeline">
            {a.timeline.map((item, i) => (
              <div key={i} className="timeline-item">
                <div className="timeline-item__year">{item.year}</div>
                <div className="timeline-item__text">{item.event}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wave */}
      <Wave src="../project/assets/asset-56.png" />

      {/* Values */}
      <section className="section section--muted">
        <div className="section__inner">
          <div className="section__eyebrow">{a.values_title}</div>
          <h2 className="section__title" style={{ marginBottom: 48 }}>
            {lang === 'en' ? 'Principles that guide everything we do' : 'หลักการที่นำทางทุกสิ่งที่เราทำ'}
          </h2>
          <div className="values-grid">
            {a.values.map((v, i) => (
              <div key={i} className="value-card">
                <div className="value-card__icon">
                  <Icon name={v.icon} size={22} />
                </div>
                <div>
                  <div className="value-card__title">{v.title}</div>
                  <div className="value-card__desc">{v.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wave */}
      <Wave src="../project/assets/asset-11.png" flip />

      {/* Three programmes — summary */}
      <section className="section section--purple">
        <div className="section__inner">
          <div className="section__eyebrow">{t.programmes.eyebrow}</div>
          <h2 className="section__title" style={{ marginBottom: 12 }}>{t.programmes.title}</h2>
          <p className="section__lede">{t.programmes.lede}</p>
          <div className="pillars" style={{ marginTop: 0 }}>
            {t.programmes.items.map((p, i) => (
              <div key={i} className="pillar" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
                <div className="pillar__icon-wrap" style={{ background: 'rgba(255,0,153,0.18)', color: '#FFB8D9' }}>
                  <Icon name={p.icon} size={26} />
                </div>
                <div>
                  <div className="pillar__title" style={{ color: 'white' }}>{p.title}</div>
                  <p className="pillar__desc" style={{ color: 'rgba(255,255,255,0.75)' }}>{p.desc}</p>
                </div>
                <button
                  className="pillar__link"
                  style={{ color: '#FFB8D9' }}
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

      {/* Wave */}
      <Wave src="../project/assets/asset-12.png" />

      {/* Partners */}
      <section className="section section--sm">
        <div className="section__inner section__inner--narrow" style={{ textAlign: 'center' }}>
          <div className="section__eyebrow">{a.partners_title}</div>
          <h2 className="section__title" style={{ fontSize: 'clamp(24px,3vw,36px)', marginBottom: 36 }}>
            {lang === 'en' ? 'We work with organisations that share our values.' : 'เราทำงานร่วมกับองค์กรที่มีคุณค่าเดียวกัน'}
          </h2>
          <div className="partners-strip">
            {a.partners.map((p, i) => (
              <span key={i} className="partner-chip">{p}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Photography */}
      <section className="section section--sm section--muted">
        <div className="section__inner">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16 }}>
            {['../project/assets/photo-clinic.jpg', '../project/assets/photo-rights.jpg', '../project/assets/ed4.webp', '../project/assets/hr3.webp'].map((src, i) => (
              <div key={i} style={{ aspectRatio: '1', borderRadius: 16, overflow: 'hidden', background: 'var(--ink-100)' }}>
                <img src={src} alt="" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            ))}
          </div>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--fg-3)', textAlign: 'center', marginTop: 14 }}>
            {lang === 'en'
              ? 'All photography is community-sourced — real clinics, real outreach, real people.'
              : 'ภาพถ่ายทั้งหมดมาจากชุมชน — คลินิกจริง การออกหน่วยจริง คนจริง'}
          </p>
        </div>
      </section>

      <CtaBand lang={lang} navigate={navigate} onAppt={onAppt} />
    </main>
  );
}

window.About = About;
