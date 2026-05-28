function AppointmentModal({ lang, onClose }) {
  const t = DATA[lang].modal_appt;
  const svcs = DATA[lang].services.items.map(s => s.title);
  const locs = DATA[lang].locations.map(l => l.name);
  const [done, setDone] = React.useState(false);
  const [form, setForm] = React.useState({
    name: '', phone: '', service: svcs[0], location: locs[0], date: '', note: ''
  });

  const set = k => e => setForm(f => ({ ...f, [k]: e.target.value }));

  function submit(e) {
    e.preventDefault();
    setDone(true);
  }

  return (
    <div className="modal-scrim" onClick={onClose} role="dialog" aria-modal="true" aria-label={t.title}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <button className="modal__close" onClick={onClose} aria-label="Close">
          <Icon name="x" size={18} />
        </button>

        {done ? (
          <div className="modal-success">
            <div className="modal-success__check">
              <Icon name="check" size={36} />
            </div>
            <h2>{lang === 'en' ? 'Thank you' : 'ขอบคุณ'}</h2>
            <p className="modal__lede">{t.success}</p>
            <p className="modal-success__sub">{t.success_sub}</p>
            <button className="btn btn--primary" style={{ marginTop: 20 }} onClick={onClose}>
              {lang === 'en' ? 'Done' : 'ปิด'}
            </button>
          </div>
        ) : (
          <form onSubmit={submit}>
            <h2>{t.title}</h2>
            <p className="modal__lede">{t.lede}</p>

            <div className="field">
              <label htmlFor="appt-name">{t.name}</label>
              <input id="appt-name" value={form.name} onChange={set('name')} required autoComplete="name" />
            </div>
            <div className="field">
              <label htmlFor="appt-phone">{t.phone}</label>
              <input id="appt-phone" value={form.phone} onChange={set('phone')} required />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              <div className="field">
                <label htmlFor="appt-service">{t.service}</label>
                <select id="appt-service" value={form.service} onChange={set('service')}>
                  {svcs.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
              <div className="field">
                <label htmlFor="appt-location">{t.location}</label>
                <select id="appt-location" value={form.location} onChange={set('location')}>
                  {locs.map(l => <option key={l} value={l}>{l}</option>)}
                </select>
              </div>
            </div>
            <div className="field">
              <label htmlFor="appt-date">{t.date}</label>
              <input id="appt-date" type="date" value={form.date} onChange={set('date')} required min={new Date().toISOString().split('T')[0]} />
            </div>
            <div className="field">
              <label htmlFor="appt-note">{t.note}</label>
              <textarea id="appt-note" value={form.note} onChange={set('note')} rows={3} style={{ minHeight: 72 }} />
            </div>
            <button type="submit" className="btn btn--primary btn--lg" style={{ width: '100%', justifyContent: 'center', marginTop: 8 }}>
              <Icon name="calendar" size={18} />
              {t.submit}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

function ArticleModal({ lang, article, onClose }) {
  if (!article) return null;
  const chipColors = ['chip--pink', 'chip--purple', 'chip--outline'];

  return (
    <div className="modal-scrim" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal" style={{ maxWidth: 600 }} onClick={e => e.stopPropagation()}>
        <button className="modal__close" onClick={onClose} aria-label="Close">
          <Icon name="x" size={18} />
        </button>

        <div style={{ display: 'flex', gap: 16, marginBottom: 20, alignItems: 'flex-start' }}>
          <div style={{
            width: 88, height: 88,
            borderRadius: 999,
            overflow: 'hidden',
            flexShrink: 0,
            background: 'var(--ink-100)'
          }}>
            <img src={article.img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div>
            <div style={{ display: 'flex', gap: 6, marginBottom: 10, flexWrap: 'wrap' }}>
              {article.tag.map((tg, i) => (
                <span key={tg} className={`chip ${chipColors[i % chipColors.length]}`}>{tg}</span>
              ))}
            </div>
            <h2 style={{ fontSize: 20, lineHeight: 1.3, marginBottom: 0 }}>{article.title}</h2>
          </div>
        </div>

        <p className="modal__lede" style={{ marginBottom: 16 }}>{article.excerpt}</p>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.7, color: 'var(--fg-1)', marginBottom: 20 }}>
          {article.body}
        </p>

        <div style={{
          padding: '12px 16px',
          background: 'var(--paper-2)',
          borderRadius: 12,
          fontFamily: 'var(--font-mono)',
          fontSize: 11,
          color: 'var(--fg-3)',
          marginBottom: 20
        }}>
          {lang === 'en'
            ? 'Full article available on swingthailand.org — this is a representative excerpt.'
            : 'บทความฉบับเต็มอยู่ที่ swingthailand.org — นี่เป็นตัวอย่างบางส่วน'}
        </div>

        <div style={{ display: 'flex', gap: 10 }}>
          <button className="btn btn--outline" onClick={onClose}>
            {lang === 'en' ? 'Back' : 'กลับ'}
          </button>
          <a
            href="https://www.swingthailand.org/en"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--ghost"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}
          >
            {lang === 'en' ? 'Visit SWING website' : 'เยี่ยมชมเว็บไซต์ SWING'}
            <Icon name="external-link" size={14} />
          </a>
        </div>
      </div>
    </div>
  );
}

window.AppointmentModal = AppointmentModal;
window.ArticleModal = ArticleModal;
