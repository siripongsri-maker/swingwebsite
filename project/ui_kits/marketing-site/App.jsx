/* App.jsx — composes the marketing site */
function App() {
  const [lang, setLang] = React.useState('en');
  const [showApt, setShowApt] = React.useState(false);
  const [article, setArticle] = React.useState(null);
  const [toast, setToast] = React.useState(null);

  React.useEffect(() => {
    if (!toast) return;
    const id = setTimeout(() => setToast(null), 2400);
    return () => clearTimeout(id);
  }, [toast]);

  return (
    <React.Fragment>
      <Header lang={lang} setLang={setLang} onAppointmentClick={() => setShowApt(true)} />
      <Hero lang={lang} onAppointmentClick={() => setShowApt(true)} />
      <WaveDivider src="../../assets/asset-12.png" />
      <MissionSection lang={lang} />
      <WaveDivider variant="up" src="../../assets/asset-56.png" />
      <ServiceGrid lang={lang} />
      <WaveDivider src="../../assets/asset-11.png" />
      <BlogList lang={lang} onArticleClick={setArticle} />
      <Footer lang={lang} />
      <LineWidget lang={lang} onLineClick={() => setToast(lang === 'en' ? 'Opening LINE — add @swingthailand to chat with us.' : 'กำลังเปิด LINE — เพิ่ม @swingthailand เพื่อแชทกับเรา')} />
      {showApt && <AppointmentModal lang={lang} onClose={() => setShowApt(false)} />}
      {article && <ArticleModal lang={lang} article={article} onClose={() => setArticle(null)} />}
      {toast && <div className="toast">{toast}</div>}
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
