/* BlogList.jsx — 3-up grid of article cards with category chips */
function BlogList({ lang, onArticleClick }) {
  const t = COPY[lang].articles;
  const chipClass = (i) => i % 2 === 0 ? 'chip chip--pink' : 'chip chip--purple';
  return (
    <section id="articles" className="section section--muted">
      <div className="section__inner">
        <div className="section__eyebrow">{t.eyebrow}</div>
        <h2 className="section__title">{t.title}</h2>
        <p className="section__lede">{t.lede}</p>
        <div className="articles">
          {t.items.map((a, i) => (
            <button key={i} className="article" onClick={() => onArticleClick(a)}>
              <div className="article__photo"><img src={a.img} alt="" /></div>
              <div>
                <h3 className="article__title">{a.title}</h3>
                <p className="article__excerpt">{a.excerpt}</p>
              </div>
              <div className="article__meta">
                {a.tag.map((tg, j) => <span key={j} className={chipClass(j)}>{tg}</span>)}
                <span>{a.date}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

window.BlogList = BlogList;
