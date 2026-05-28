function Articles({ lang, navigate, onArticle }) {
  const t = DATA[lang];
  const a = t.articles;

  const allTags = lang === 'en'
    ? ['All', 'Article', 'News', 'Health', 'Rights', 'Film']
    : ['ทั้งหมด', 'บทความ', 'ข่าว', 'สุขภาพ', 'สิทธิ', 'ภาพยนตร์'];

  const [activeTag, setActiveTag] = React.useState(allTags[0]);

  const filtered = activeTag === allTags[0]
    ? a.items
    : a.items.filter(item => item.tag.includes(activeTag));

  return (
    <main className="page-enter">
      <PageHero
        eyebrow={a.eyebrow}
        title={a.title}
        lede={a.lede}
      />

      <section className="section">
        <div className="section__inner">
          {/* Filter bar */}
          <div className="filter-bar" role="group" aria-label={lang === 'en' ? 'Filter by category' : 'กรองตามหมวดหมู่'}>
            {allTags.map(tag => (
              <button
                key={tag}
                className={`filter-btn${activeTag === tag ? ' active' : ''}`}
                onClick={() => setActiveTag(tag)}
                aria-pressed={activeTag === tag}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Articles grid */}
          {filtered.length > 0 ? (
            <div className="articles-grid">
              {filtered.map((item, i) => (
                <ArticleCard key={item.slug} item={item} lang={lang} onClick={onArticle} />
              ))}
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '48px 0', color: 'var(--fg-3)', fontFamily: 'var(--font-body)' }}>
              {lang === 'en' ? 'No articles in this category yet.' : 'ยังไม่มีบทความในหมวดหมู่นี้'}
            </div>
          )}

          {/* Load more placeholder */}
          <div style={{ textAlign: 'center', marginTop: 48 }}>
            <button className="btn btn--outline" style={{ opacity: 0.5, cursor: 'not-allowed' }}>
              {lang === 'en' ? 'Load more articles' : 'โหลดบทความเพิ่มเติม'}
            </button>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: 12,
              color: 'var(--fg-3)',
              marginTop: 10,
            }}>
              {lang === 'en'
                ? 'More articles available at swingthailand.org'
                : 'บทความเพิ่มเติมที่ swingthailand.org'}
            </p>
          </div>
        </div>
      </section>

      {/* Subscribe CTA */}
      <section className="section section--muted section--sm">
        <div className="section__inner section__inner--narrow" style={{ textAlign: 'center' }}>
          <div className="section__eyebrow">
            {lang === 'en' ? 'Stay informed' : 'รับข่าวสาร'}
          </div>
          <h2 className="section__title" style={{ fontSize: 'clamp(26px,3vw,38px)', marginBottom: 16 }}>
            {lang === 'en' ? 'Never miss an update.' : 'ไม่พลาดข่าวสาร'}
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, color: 'var(--fg-2)', marginBottom: 28, lineHeight: 1.6 }}>
            {lang === 'en'
              ? 'One short email per month with our latest news, clinic updates, and advocacy wins.'
              : 'อีเมลสั้นๆ เดือนละครั้ง พร้อมข่าวล่าสุด อัปเดตคลินิก และชัยชนะในการรณรงค์'}
          </p>
          <div style={{ display: 'flex', gap: 0, maxWidth: 440, margin: '0 auto', borderRadius: 14, overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
            <input
              type="email"
              placeholder={DATA[lang].footer.newsletter_placeholder}
              style={{
                flex: 1,
                padding: '14px 18px',
                border: 'none',
                fontFamily: 'var(--font-body)',
                fontSize: 15,
                outline: 'none',
                background: 'white',
              }}
            />
            <button
              className="btn btn--primary"
              style={{ borderRadius: 0, padding: '14px 22px' }}
            >
              {DATA[lang].footer.newsletter_cta}
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

window.Articles = Articles;
