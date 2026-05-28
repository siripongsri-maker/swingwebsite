function App() {
  const [lang, setLang] = React.useState('th');
  const [page, setPage] = React.useState('home');
  const [showAppt, setShowAppt] = React.useState(false);
  const [article, setArticle] = React.useState(null);
  const [toast, setToast] = React.useState(null);

  function navigate(target) {
    setPage(target);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.history.pushState(null, '', `#${target}`);
  }

  React.useEffect(() => {
    const hash = window.location.hash.replace('#', '') || 'home';
    const valid = ['home', 'about', 'services', 'articles', 'support', 'contact'];
    setPage(valid.includes(hash) ? hash : 'home');
  }, []);

  React.useEffect(() => {
    const handler = () => {
      const hash = window.location.hash.replace('#', '') || 'home';
      const valid = ['home', 'about', 'services', 'articles', 'support', 'contact'];
      setPage(valid.includes(hash) ? hash : 'home');
    };
    window.addEventListener('popstate', handler);
    return () => window.removeEventListener('popstate', handler);
  }, []);

  React.useEffect(() => {
    document.documentElement.lang = lang;
    document.title = lang === 'en'
      ? 'SWING Foundation Thailand — Value, Dignity, Equality'
      : 'มูลนิธิเพื่อนพนักงานบริการ SWING — คุณค่า ศักดิ์ศรี ความเท่าเทียม';
  }, [lang]);

  React.useEffect(() => {
    if (!toast) return;
    const id = setTimeout(() => setToast(null), 2600);
    return () => clearTimeout(id);
  }, [toast]);

  function showToast(msg) {
    setToast(msg);
    setTimeout(() => setToast(null), 2600);
  }

  function onLineClick() {
    showToast(lang === 'en' ? 'Opening LINE — add @swingthailand' : 'กำลังเปิด LINE — เพิ่ม @swingthailand');
  }

  const pageProps = { lang, navigate, onAppt: () => setShowAppt(true) };
  const pages = {
    home:     <Home {...pageProps} onArticle={setArticle} />,
    about:    <About {...pageProps} />,
    services: <Services {...pageProps} />,
    articles: <Articles {...pageProps} onArticle={setArticle} />,
    support:  <Support {...pageProps} />,
    contact:  <Contact {...pageProps} />,
  };

  return (
    <React.Fragment>
      <Header
        lang={lang}
        setLang={setLang}
        navigate={navigate}
        page={page}
        onAppt={() => setShowAppt(true)}
      />

      {pages[page] || pages.home}

      <Footer lang={lang} navigate={navigate} />

      {/* LINE floating widget */}
      <button className="line-widget" onClick={onLineClick} aria-label="Chat on LINE @swingthailand">
        <span className="line-widget__dot">L</span>
        <span>@swingthailand</span>
      </button>

      {/* Modals */}
      {showAppt && (
        <AppointmentModal lang={lang} onClose={() => setShowAppt(false)} />
      )}
      {article && (
        <ArticleModal lang={lang} article={article} onClose={() => setArticle(null)} />
      )}

      {/* Toast */}
      {toast && <div className="toast" role="status">{toast}</div>}
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
