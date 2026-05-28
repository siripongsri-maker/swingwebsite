/* Shared primitive components used across pages */

function Wave({ src, flip = false }) {
  return (
    <div className={`wave${flip ? ' wave--flipv' : ''}`}>
      <img src={src} alt="" aria-hidden="true" />
    </div>
  );
}

function SectionHeader({ eyebrow, title, lede, dark = false }) {
  return (
    <React.Fragment>
      {eyebrow && <div className="section__eyebrow">{eyebrow}</div>}
      {title   && <h2 className="section__title">{title}</h2>}
      {lede    && <p  className="section__lede">{lede}</p>}
    </React.Fragment>
  );
}

function PageHero({ eyebrow, title, lede }) {
  return (
    <div className="page-hero">
      {eyebrow && <div className="page-hero__eyebrow">{eyebrow}</div>}
      <h1 className="page-hero__title">{title}</h1>
      {lede && <p className="page-hero__lede">{lede}</p>}
    </div>
  );
}

function ServiceCard({ item }) {
  return (
    <div className="service-card">
      <div className="service-card__icon">
        <img src={item.img} alt="" loading="lazy" />
      </div>
      <h3 className="service-card__title">{item.title}</h3>
      <p className="service-card__desc">{item.desc}</p>
    </div>
  );
}

function ArticleCard({ item, lang, onClick }) {
  const chipColors = ['chip--pink', 'chip--purple', 'chip--outline'];
  return (
    <button className="article-card" onClick={() => onClick(item)}>
      <div className="article-card__photo">
        <img src={item.img} alt="" loading="lazy" />
      </div>
      <div>
        <h3 className="article-card__title">{item.title}</h3>
        <p className="article-card__excerpt">{item.excerpt}</p>
      </div>
      <div className="article-card__meta">
        {item.tag.map((tg, i) => (
          <span key={tg} className={`chip ${chipColors[i % chipColors.length]}`}>{tg}</span>
        ))}
        <span className="article-card__date">{item.date}</span>
      </div>
    </button>
  );
}

function LocationCard({ loc }) {
  return (
    <div className="location-card">
      <div className="location-card__icon">
        <Icon name="map-pin" size={22} />
      </div>
      <div className="location-card__name">{loc.name}</div>
      <div className="location-card__addr">{loc.addr}</div>
      {loc.tel && (
        <div className="location-card__detail">
          <Icon name="phone" size={14} />
          <span>{loc.tel}{loc.tel_clinic ? `\n${loc.tel_clinic}` : ''}</span>
        </div>
      )}
      <div className="location-card__detail">
        <Icon name="clock" size={14} />
        <span>{loc.hours}</span>
      </div>
      <a
        href={loc.map_link}
        className="location-card__map"
        target="_blank"
        rel="noopener noreferrer"
      >
        {loc.name.includes('Map') ? 'View' : (loc.map_link.includes('love2test') ? 'View on Love2Test' : 'View on Google Maps')}
        <Icon name="external-link" size={13} />
      </a>
    </div>
  );
}

function CtaBand({ lang, navigate, onAppt }) {
  const isEn = lang === 'en';
  return (
    <div className="cta-band">
      <h2>{isEn ? 'Ready to take care of your health?' : 'พร้อมดูแลสุขภาพของคุณแล้วหรือยัง?'}</h2>
      <p>
        {isEn
          ? 'All services are confidential. Walk-ins welcome. Our clinics are here for you.'
          : 'บริการทุกอย่างเป็นความลับ รับ Walk-in ยินดีต้อนรับทุกท่าน คลินิกของเราพร้อมให้บริการ'}
      </p>
      <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
        <button className="btn btn--secondary btn--lg" onClick={onAppt}>
          <Icon name="calendar" size={18} />
          {DATA[lang].nav.appt}
        </button>
        <button
          className="btn btn--outline btn--lg"
          onClick={() => navigate('contact')}
        >
          {DATA[lang].nav.contact}
        </button>
      </div>
    </div>
  );
}

window.Wave = Wave;
window.SectionHeader = SectionHeader;
window.PageHero = PageHero;
window.ServiceCard = ServiceCard;
window.ArticleCard = ArticleCard;
window.LocationCard = LocationCard;
window.CtaBand = CtaBand;
