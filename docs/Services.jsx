function Services({ lang, navigate, onAppt }) {
  const t = DATA[lang];
  const s = t.services;

  return (
    <main className="page-enter">
      <PageHero
        eyebrow={s.eyebrow}
        title={lang === 'en' ? 'Comprehensive care, no conditions.' : 'การดูแลอย่างครอบคลุม ไม่มีเงื่อนไข'}
        lede={s.lede}
      />

      {/* Service cards */}
      <section className="section">
        <div className="section__inner">
          <div className="section__eyebrow">{lang === 'en' ? 'Our services' : 'บริการของเรา'}</div>
          <h2 className="section__title" style={{ marginBottom: 48 }}>{s.title}</h2>
          <div className="services-grid">
            {s.items.map((item, i) => (
              <ServiceCard key={i} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* Certification bar */}
      <section style={{
        background: 'var(--swing-purple-deep)',
        padding: '32px',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, flexWrap: 'wrap' }}>
            <div style={{
              width: 52, height: 52,
              borderRadius: '50%',
              background: 'rgba(255,0,153,0.2)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: 'var(--swing-pink)',
              flexShrink: 0,
            }}>
              <Icon name="check-circle" size={26} />
            </div>
            <div style={{ textAlign: 'left' }}>
              <div style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: 16,
                color: 'white',
                marginBottom: 4,
              }}>
                {lang === 'en'
                  ? 'Certified by the Department of Medical Sciences'
                  : 'ได้รับการรับรองจากกรมวิทยาศาสตร์การแพทย์'}
              </div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'rgba(255,255,255,0.65)' }}>
                {lang === 'en'
                  ? 'Ministry of Public Health, Thailand · All services meet national health standards'
                  : 'กระทรวงสาธารณสุข ประเทศไทย · บริการทั้งหมดเป็นไปตามมาตรฐานสาธารณสุขแห่งชาติ'}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wave */}
      <Wave src="../project/assets/asset-56.png" flip />

      {/* What to expect */}
      <section className="section section--muted">
        <div className="section__inner section__inner--narrow">
          <div className="section__eyebrow">
            {lang === 'en' ? 'What to expect' : 'คุณจะได้รับอะไร'}
          </div>
          <h2 className="section__title" style={{ marginBottom: 48 }}>
            {lang === 'en' ? 'A visit built around you.' : 'การเข้ารับบริการที่ออกแบบมาเพื่อคุณ'}
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20 }}>
            {(lang === 'en' ? [
              { icon: 'shield', title: 'Confidential', desc: 'Every visit is private. We never share your information without your consent.' },
              { icon: 'activity', title: 'Same-day results', desc: 'Most tests return results the same day. No waiting weeks for peace of mind.' },
              { icon: 'users', title: 'Community-led staff', desc: 'Our team includes people with lived experience. You will not be judged.' },
              { icon: 'heart', title: 'Free or low-cost', desc: 'Services are free or low-cost. We never turn anyone away for inability to pay.' },
            ] : [
              { icon: 'shield', title: 'เป็นความลับ', desc: 'ทุกการเข้ารับบริการเป็นส่วนตัว เราไม่แชร์ข้อมูลของคุณโดยไม่ได้รับความยินยอม' },
              { icon: 'activity', title: 'ผลตรวจในวันเดียว', desc: 'การตรวจส่วนใหญ่รายงานผลในวันเดียวกัน ไม่ต้องรอเป็นสัปดาห์' },
              { icon: 'users', title: 'เจ้าหน้าที่จากชุมชน', desc: 'ทีมของเรารวมถึงคนที่มีประสบการณ์ตรง คุณจะไม่ถูกตัดสิน' },
              { icon: 'heart', title: 'ฟรีหรือราคาต่ำ', desc: 'บริการฟรีหรือราคาต่ำ เราไม่เคยปฏิเสธใครเพราะไม่สามารถจ่ายได้' },
            ]).map((item, i) => (
              <div key={i} className="value-card">
                <div className="value-card__icon">
                  <Icon name={item.icon} size={22} />
                </div>
                <div>
                  <div className="value-card__title">{item.title}</div>
                  <div className="value-card__desc">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wave */}
      <Wave src="../project/assets/asset-11.png" />

      {/* Clinic locations */}
      <section className="section">
        <div className="section__inner">
          <div className="section__eyebrow">
            {lang === 'en' ? 'Clinic locations' : 'สาขาคลินิก'}
          </div>
          <h2 className="section__title" style={{ marginBottom: 48 }}>
            {lang === 'en' ? 'Three clinics, one community.' : 'สามสาขา หนึ่งชุมชน'}
          </h2>
          <div className="locations-grid">
            {t.locations.map((loc, i) => (
              <LocationCard key={i} loc={loc} />
            ))}
          </div>
        </div>
      </section>

      <CtaBand lang={lang} navigate={navigate} onAppt={onAppt} />
    </main>
  );
}

window.Services = Services;
