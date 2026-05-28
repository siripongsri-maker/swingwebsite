/* AppointmentModal.jsx — booking form modal */
function AppointmentModal({ lang, onClose }) {
  const t = COPY[lang].modal;
  const services = COPY[lang].services.items.map(s => s.title);
  const [submitted, setSubmitted] = React.useState(false);
  const [form, setForm] = React.useState({ name: '', phone: '', service: services[0], date: '' });

  function submit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="modal-scrim" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <button className="modal__close" onClick={onClose} aria-label="Close">×</button>
        {submitted ? (
          <div style={{ textAlign: 'center', padding: '16px 0' }}>
            <div style={{
              width: 64, height: 64, borderRadius: 999,
              background: 'var(--swing-pink-soft)',
              color: 'var(--swing-pink-deep)',
              margin: '0 auto 16px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: 'var(--font-display)', fontSize: 32, fontWeight: 700
            }}>✓</div>
            <h2>{lang === 'en' ? 'Thank you' : 'ขอบคุณ'}</h2>
            <p className="modal__lede" style={{ marginBottom: 24 }}>{t.success}</p>
            <button className="btn btn--primary" onClick={onClose}>{lang === 'en' ? 'Done' : 'ปิด'}</button>
          </div>
        ) : (
          <form onSubmit={submit}>
            <h2>{t.title}</h2>
            <p className="modal__lede">{t.lede}</p>
            <div className="field">
              <label>{t.name}</label>
              <input value={form.name} onChange={e => setForm({...form, name: e.target.value})} required />
            </div>
            <div className="field">
              <label>{t.phone}</label>
              <input value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} required />
            </div>
            <div className="field">
              <label>{t.service}</label>
              <select value={form.service} onChange={e => setForm({...form, service: e.target.value})}>
                {services.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
            <div className="field">
              <label>{t.date}</label>
              <input type="date" value={form.date} onChange={e => setForm({...form, date: e.target.value})} required />
            </div>
            <button type="submit" className="btn btn--primary btn--lg" style={{ width: '100%', marginTop: 8 }}>{t.submit}</button>
          </form>
        )}
      </div>
    </div>
  );
}

/* ArticleModal — stub overlay when an article card is clicked */
function ArticleModal({ lang, article, onClose }) {
  return (
    <div className="modal-scrim" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()} style={{ maxWidth: 560 }}>
        <button className="modal__close" onClick={onClose} aria-label="Close">×</button>
        <div style={{ display: 'flex', gap: 16, marginBottom: 16, alignItems: 'flex-start' }}>
          <div style={{ width: 88, height: 88, borderRadius: 999, overflow: 'hidden', flexShrink: 0 }}>
            <img src={article.img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <h2 style={{ fontSize: 22, lineHeight: 1.3 }}>{article.title}</h2>
        </div>
        <p className="modal__lede">{article.excerpt}</p>
        <div style={{
          padding: 14,
          background: 'var(--paper-2)',
          border: '1px dashed var(--ink-300)',
          borderRadius: 12,
          fontFamily: 'var(--font-mono)',
          fontSize: 12,
          color: 'var(--fg-3)',
          marginBottom: 16
        }}>
          {lang === 'en' ? 'Full article view not modelled in this UI kit. On the live site this would route to /blog/{slug}.' : 'หน้าบทความฉบับเต็มไม่ได้ถูกจำลองใน UI kit นี้ เว็บไซต์จริงจะนำไปยัง /blog/{slug}'}
        </div>
        <button className="btn btn--outline" onClick={onClose}>{lang === 'en' ? 'Back' : 'กลับ'}</button>
      </div>
    </div>
  );
}

window.AppointmentModal = AppointmentModal;
window.ArticleModal = ArticleModal;
