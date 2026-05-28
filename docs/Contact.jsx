function Contact({ lang, navigate, onAppt }) {
  const t = DATA[lang];
  const c = t.contact;
  const [submitted, setSubmitted] = React.useState(false);
  const [form, setForm] = React.useState({ name: '', email: '', subject: '', message: '' });
  const set = k => e => setForm(f => ({ ...f, [k]: e.target.value }));

  const socials = [
    { name: 'Facebook',  icon: 'facebook',  href: 'https://www.facebook.com/SWINGThailandTH/' },
    { name: 'Instagram', icon: 'instagram', href: '#' },
    { name: 'X',         icon: 'twitter',   href: '#' },
    { name: 'YouTube',   icon: 'youtube',   href: '#' },
    { name: 'TikTok',    icon: 'tiktok',    href: 'https://www.tiktok.com/@swingthailand' },
    { name: 'LINE',      icon: 'line',      href: '#' },
  ];

  return (
    <main className="page-enter">
      <PageHero
        eyebrow={c.eyebrow}
        title={c.title}
        lede={c.lede}
      />

      {/* Locations */}
      <section className="section">
        <div className="section__inner">
          <div className="section__eyebrow">
            {lang === 'en' ? 'Find us' : 'ค้นหาเรา'}
          </div>
          <h2 className="section__title" style={{ marginBottom: 48 }}>
            {lang === 'en' ? 'Three locations across Thailand.' : 'สามสาขาทั่วประเทศไทย'}
          </h2>
          <div className="locations-grid">
            {t.locations.map((loc, i) => (
              <LocationCard key={i} loc={loc} />
            ))}
          </div>
        </div>
      </section>

      {/* Wave */}
      <Wave src="../project/assets/asset-56.png" />

      {/* Contact form + social */}
      <section className="section section--purple">
        <div className="section__inner">
          <div className="contact-grid">

            {/* Form */}
            <div>
              <div style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 600,
                fontSize: 12,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: '#FFB8D9',
                marginBottom: 12,
              }}>
                {lang === 'en' ? 'Send a message' : 'ส่งข้อความ'}
              </div>
              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: 'clamp(24px,3vw,36px)',
                color: 'white',
                marginBottom: 28,
                lineHeight: 1.15,
              }}>
                {lang === 'en' ? 'We read every message.' : 'เราอ่านทุกข้อความ'}
              </h2>

              {submitted ? (
                <div style={{
                  background: 'rgba(255,255,255,0.08)',
                  borderRadius: 20,
                  padding: 32,
                  textAlign: 'center',
                }}>
                  <div style={{
                    width: 64, height: 64, borderRadius: '50%',
                    background: 'rgba(255,0,153,0.2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    margin: '0 auto 16px',
                    color: 'var(--swing-pink)',
                  }}>
                    <Icon name="check" size={32} />
                  </div>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18, color: 'white', marginBottom: 8 }}>
                    {lang === 'en' ? 'Message sent!' : 'ส่งข้อความแล้ว!'}
                  </div>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>
                    {lang === 'en'
                      ? 'We\'ll get back to you within 2 working days.'
                      : 'เราจะตอบกลับภายใน 2 วันทำการ'}
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={e => { e.preventDefault(); setSubmitted(true); }}
                  style={{ background: 'rgba(255,255,255,0.06)', borderRadius: 20, padding: 28 }}
                >
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                    <div className="field">
                      <label style={{ color: 'rgba(255,255,255,0.75)' }}>{c.form_name}</label>
                      <input value={form.name} onChange={set('name')} required
                        style={{ background: 'rgba(255,255,255,0.08)', borderColor: 'rgba(255,255,255,0.1)', color: 'white' }}
                      />
                    </div>
                    <div className="field">
                      <label style={{ color: 'rgba(255,255,255,0.75)' }}>{c.form_email}</label>
                      <input type="email" value={form.email} onChange={set('email')} required
                        style={{ background: 'rgba(255,255,255,0.08)', borderColor: 'rgba(255,255,255,0.1)', color: 'white' }}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label style={{ color: 'rgba(255,255,255,0.75)' }}>{c.form_subject}</label>
                    <input value={form.subject} onChange={set('subject')} required
                      style={{ background: 'rgba(255,255,255,0.08)', borderColor: 'rgba(255,255,255,0.1)', color: 'white' }}
                    />
                  </div>
                  <div className="field">
                    <label style={{ color: 'rgba(255,255,255,0.75)' }}>{c.form_msg}</label>
                    <textarea value={form.message} onChange={set('message')} required
                      style={{ background: 'rgba(255,255,255,0.08)', borderColor: 'rgba(255,255,255,0.1)', color: 'white', minHeight: 120 }}
                    />
                  </div>
                  <button type="submit" className="btn btn--primary btn--lg" style={{ width: '100%', justifyContent: 'center' }}>
                    <Icon name="mail" size={18} />
                    {c.form_send}
                  </button>
                </form>
              )}
            </div>

            {/* Direct contact + social */}
            <div>
              <div style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 600,
                fontSize: 12,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: '#FFB8D9',
                marginBottom: 12,
              }}>
                {lang === 'en' ? 'Direct contact' : 'ติดต่อโดยตรง'}
              </div>
              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: 'clamp(24px,3vw,36px)',
                color: 'white',
                marginBottom: 32,
                lineHeight: 1.15,
              }}>
                {lang === 'en' ? 'Prefer to call or message?' : 'ต้องการโทรหรือส่งข้อความ?'}
              </h2>

              {/* Contact details */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginBottom: 36 }}>
                <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: 12,
                    background: 'rgba(255,0,153,0.18)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--swing-pink)',
                    flexShrink: 0,
                  }}>
                    <Icon name="phone" size={20} />
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 14, color: 'white', marginBottom: 4 }}>
                      {lang === 'en' ? 'Phone' : 'โทรศัพท์'}
                    </div>
                    <div style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, whiteSpace: 'pre-line' }}>
                      {t.footer.tel}
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: 12,
                    background: 'rgba(255,0,153,0.18)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--swing-pink)',
                    flexShrink: 0,
                  }}>
                    <Icon name="map-pin" size={20} />
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 14, color: 'white', marginBottom: 4 }}>
                      {lang === 'en' ? 'Address' : 'ที่อยู่'}
                    </div>
                    <div style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, whiteSpace: 'pre-line' }}>
                      {t.footer.addr}
                    </div>
                  </div>
                </div>

                {/* LINE CTA */}
                <button
                  style={{
                    background: '#06C755',
                    border: 'none',
                    borderRadius: 14,
                    padding: '16px 20px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12,
                    cursor: 'pointer',
                    transition: 'all var(--t-fast)',
                  }}
                  onMouseEnter={e => e.currentTarget.style.background = '#05a847'}
                  onMouseLeave={e => e.currentTarget.style.background = '#06C755'}
                >
                  <span style={{
                    width: 36, height: 36, borderRadius: '50%',
                    background: 'rgba(255,255,255,0.2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontWeight: 800, fontSize: 18, color: 'white',
                  }}>L</span>
                  <div style={{ textAlign: 'left' }}>
                    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 14, color: 'white' }}>
                      {c.line_cta}
                    </div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'rgba(255,255,255,0.8)' }}>
                      {c.line_id}
                    </div>
                  </div>
                </button>
              </div>

              {/* Social */}
              <div style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 600,
                fontSize: 12,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.5)',
                marginBottom: 14,
              }}>
                {c.social_title}
              </div>
              <div className="footer-social">
                {socials.map(s => (
                  <a key={s.name} href={s.href} title={s.name} target="_blank" rel="noopener noreferrer">
                    <Icon name={s.icon} size={15} />
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Wave */}
      <Wave src="../project/assets/asset-12.png" flip />

      {/* Map placeholder */}
      <section className="section section--sm section--muted">
        <div className="section__inner">
          <div style={{
            background: 'var(--ink-100)',
            borderRadius: 20,
            height: 260,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            gap: 12,
            border: '1.5px dashed var(--ink-300)',
          }}>
            <Icon name="map-pin" size={32} style={{ color: 'var(--ink-300)' }} />
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--fg-3)', textAlign: 'center', lineHeight: 1.5 }}>
              {lang === 'en'
                ? 'Interactive map — Silom64 Building, Bangkok\n(Integrate Google Maps or Mapbox for production)'
                : 'แผนที่แบบโต้ตอบ — อาคารสีลม 64 กรุงเทพฯ\n(เชื่อมต่อ Google Maps หรือ Mapbox สำหรับเวอร์ชัน production)'}
            </p>
            <a
              href="https://maps.google.com/?q=SWING+Foundation+Bangkok"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--outline btn--sm"
            >
              <Icon name="external-link" size={14} />
              {lang === 'en' ? 'Open in Google Maps' : 'เปิดใน Google Maps'}
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}

window.Contact = Contact;
