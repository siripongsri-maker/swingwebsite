function Support({ lang, navigate, onAppt }) {
  const t = DATA[lang];
  const s = t.support;
  const amounts = ['500 ฿', '1,500 ฿', '5,000 ฿', '20,000 ฿'];
  const [selected, setSelected] = React.useState('1,500 ฿');
  const [custom, setCustom] = React.useState('');
  const [submitted, setSubmitted] = React.useState(false);
  const [volunteered, setVolunteered] = React.useState(false);

  return (
    <main className="page-enter">
      <PageHero
        eyebrow={s.eyebrow}
        title={s.title}
        lede={s.lede}
      />

      {/* Impact */}
      <section className="section">
        <div className="section__inner">
          <div className="section__eyebrow">{s.impact_title}</div>
          <h2 className="section__title" style={{ marginBottom: 48 }}>
            {lang === 'en' ? 'Every baht goes directly to programmes.' : 'ทุกบาทไปยังโครงการโดยตรง'}
          </h2>
          <div className="impact-grid">
            {s.impact.map((item, i) => (
              <div key={i} className="impact-item">
                <div className="impact-item__amount">{item.amount}</div>
                <div className="impact-item__desc">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wave */}
      <Wave src="../project/assets/asset-56.png" />

      {/* Donate */}
      <section className="section section--purple">
        <div className="section__inner">
          <div className="section__eyebrow">{s.donate_title}</div>
          <h2 className="section__title" style={{ color: 'white', marginBottom: 48 }}>
            {lang === 'en' ? 'Choose your impact.' : 'เลือกผลกระทบของคุณ'}
          </h2>
          <div className="donate-box">
            <h3>{s.donate_title}</h3>
            <p className="donate-box__lede">{s.donate_lede}</p>

            {submitted ? (
              <div style={{ textAlign: 'center', padding: '16px 0' }}>
                <div style={{
                  width: 64, height: 64, borderRadius: '50%',
                  background: 'var(--swing-pink-soft)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 16px',
                  color: 'var(--swing-pink)',
                }}>
                  <Icon name="check" size={32} />
                </div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 20, color: 'var(--swing-purple-deep)', marginBottom: 8 }}>
                  {lang === 'en' ? 'Thank you for your support!' : 'ขอบคุณสำหรับการสนับสนุนของคุณ!'}
                </div>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--fg-2)', marginBottom: 20, lineHeight: 1.6 }}>
                  {lang === 'en'
                    ? 'Please use the bank details below to complete your transfer. Every contribution makes a difference.'
                    : 'กรุณาใช้รายละเอียดธนาคารด้านล่างเพื่อทำการโอนให้เสร็จสมบูรณ์ ทุกการสนับสนุนสร้างความแตกต่าง'}
                </p>
                <div className="bank-box">{s.bank}</div>
              </div>
            ) : (
              <React.Fragment>
                <div className="donate-amounts">
                  {amounts.map(a => (
                    <button
                      key={a}
                      className={`donate-btn${selected === a ? ' selected' : ''}`}
                      onClick={() => { setSelected(a); setCustom(''); }}
                    >
                      {a}
                    </button>
                  ))}
                  <input
                    type="number"
                    placeholder={lang === 'en' ? 'Other amount' : 'จำนวนอื่น'}
                    value={custom}
                    onChange={e => { setCustom(e.target.value); setSelected(''); }}
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 600,
                      fontSize: 15,
                      padding: '10px 16px',
                      borderRadius: 999,
                      border: '1.5px solid var(--ink-100)',
                      background: 'white',
                      color: 'var(--fg-1)',
                      outline: 'none',
                      width: 130,
                    }}
                  />
                </div>
                <button
                  className="btn btn--primary btn--lg"
                  style={{ width: '100%', justifyContent: 'center', marginBottom: 20 }}
                  onClick={() => setSubmitted(true)}
                >
                  <Icon name="heart" size={18} />
                  {lang === 'en'
                    ? `Donate ${selected || (custom ? custom + ' ฿' : '')}`
                    : `บริจาค ${selected || (custom ? custom + ' ฿' : '')}`}
                </button>
              </React.Fragment>
            )}

            {!submitted && (
              <React.Fragment>
                <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 14, color: 'var(--swing-purple-deep)', marginBottom: 8 }}>
                  {s.bank_title}
                </h4>
                <div className="bank-box">{s.bank}</div>
              </React.Fragment>
            )}
          </div>
        </div>
      </section>

      {/* Wave */}
      <Wave src="../project/assets/asset-11.png" flip />

      {/* Volunteer */}
      <section className="section section--muted">
        <div className="section__inner">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
            <div>
              <div style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 600,
                fontSize: 12,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--swing-pink)',
                marginBottom: 14,
              }}>
                {s.volunteer_title}
              </div>
              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: 'clamp(28px, 3.5vw, 42px)',
                color: 'var(--swing-purple-deep)',
                lineHeight: 1.1,
                marginBottom: 20,
                textWrap: 'balance',
              }}>
                {lang === 'en' ? 'Skills, time, resources — it all matters.' : 'ทักษะ เวลา ทรัพยากร — ทุกอย่างมีความหมาย'}
              </h2>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.7, color: 'var(--fg-2)', marginBottom: 24 }}>
                {s.volunteer_lede}
              </p>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {(lang === 'en'
                  ? ['Medical professionals', 'Translators', 'Legal advocates', 'Graphic designers', 'IT support', 'Educators']
                  : ['บุคลากรทางการแพทย์', 'นักแปล', 'ทนายความ', 'นักออกแบบ', 'ฝ่าย IT', 'นักการศึกษา']
                ).map((role, i) => (
                  <span key={i} className="chip chip--purple">{role}</span>
                ))}
              </div>
            </div>

            <div>
              {volunteered ? (
                <div style={{ textAlign: 'center', padding: 32, background: 'white', borderRadius: 20, border: '1px solid var(--ink-100)' }}>
                  <div style={{
                    width: 64, height: 64, borderRadius: '50%',
                    background: 'var(--swing-pink-soft)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    margin: '0 auto 16px',
                    color: 'var(--swing-pink)',
                  }}>
                    <Icon name="check" size={32} />
                  </div>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18, color: 'var(--swing-purple-deep)', marginBottom: 8 }}>
                    {lang === 'en' ? 'Message received!' : 'ได้รับข้อความแล้ว!'}
                  </div>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--fg-2)', lineHeight: 1.6 }}>
                    {lang === 'en'
                      ? 'Our team will be in touch within 3 working days.'
                      : 'ทีมของเราจะติดต่อกลับภายใน 3 วันทำการ'}
                  </p>
                </div>
              ) : (
                <div style={{ background: 'white', borderRadius: 20, padding: 28, border: '1px solid var(--ink-100)' }}>
                  <div className="field">
                    <label>{DATA[lang].contact.form_name}</label>
                    <input placeholder={lang === 'en' ? 'Your name' : 'ชื่อของคุณ'} />
                  </div>
                  <div className="field">
                    <label>{DATA[lang].contact.form_email}</label>
                    <input type="email" placeholder={DATA[lang].footer.newsletter_placeholder} />
                  </div>
                  <div className="field">
                    <label>{lang === 'en' ? 'How can you help?' : 'คุณสามารถช่วยได้อย่างไร?'}</label>
                    <textarea placeholder={lang === 'en' ? 'Tell us about your skills and availability…' : 'บอกเราเกี่ยวกับทักษะและความพร้อมของคุณ…'} />
                  </div>
                  <button
                    className="btn btn--primary"
                    style={{ width: '100%', justifyContent: 'center' }}
                    onClick={() => setVolunteered(true)}
                  >
                    {lang === 'en' ? 'Get in touch' : 'ติดต่อเรา'}
                    <Icon name="arrow-right" size={16} />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <CtaBand lang={lang} navigate={navigate} onAppt={onAppt} />
    </main>
  );
}

window.Support = Support;
