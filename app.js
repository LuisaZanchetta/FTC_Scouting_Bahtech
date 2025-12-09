// app.js
function AppRoot(){
  const [page, setPage] = React.useState("scout"); // 'scout' | 'dashboard' | 'teams'
  const [refreshKey, setRefreshKey] = React.useState(0);

  // expõe função global para compatibilidade com botões estáticos no index.html
  React.useEffect(() => {
    window.setPage = (p) => setPage(p);
    return () => { window.setPage = undefined; };
  }, []);

  // quando um envio é feito, atualiza dashboard
  function handleSent() {
    // força o dashboard a recarregar dos dados
    setRefreshKey(k => k + 1);
    // ir automaticamente pro dashboard, opcional:
    // setPage("dashboard");
  }

  return (
    <div>
      {/* navegação interna (visível) */}
      <div style={{display:"flex", gap:8, marginBottom:12}}>
        <button className={`btn ${page==='scout'?'primary':''}`} onClick={() => setPage('scout')}>Enviar Scouting</button>
        <button className={`btn ${page==='dashboard'?'primary':''}`} onClick={() => setPage('dashboard')}>Dashboard</button>
        <button className={`btn ${page==='teams'?'primary':''}`} onClick={() => setPage('teams')}>Equipes</button>
      </div>

      {page === 'scout' && <ScoutForm onSent={handleSent} key={refreshKey} />}
      {page === 'dashboard' && <Dashboard key={refreshKey} />}
      {page === 'teams' && <Teams />}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<AppRoot />);
