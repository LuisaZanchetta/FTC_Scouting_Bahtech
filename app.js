// app.js
function Navbar({ page, setPage }) {
  return (
    <div className="navbar">
      <button 
        className={`btn ${page === "scout" ? "active" : ""}`}
        onClick={() => setPage("scout")}
      >
        Enviar Scouting
      </button>

      <button 
        className={`btn ${page === "dashboard" ? "active" : ""}`}
        onClick={() => setPage("dashboard")}
      >
        Dashboard
      </button>

      <button 
        className={`btn ${page === "teams" ? "active" : ""}`}
        onClick={() => setPage("teams")}
      >
        Equipes
      </button>
    </div>
  );
}


function Teams() {
  const [teamName, setTeamName] = React.useState("");
  const [teams, setTeams] = React.useState(getAllTeamsLocal());

  function addTeam() {
    if (!teamName.trim()) return alert("Digite um nome válido");
    const updated = saveTeamLocal(teamName.trim());
    setTeams(updated);
    setTeamName("");
  }

  return (
    <div className="card">
      <h2>Gerenciar Equipes</h2>

      <input
        value={teamName}
        onChange={(e) => setTeamName(e.target.value)}
        placeholder="Nome da equipe"
        className="input"
      />

      <button className="btn" onClick={addTeam}>Adicionar</button>

      <h3 style={{ marginTop: 20 }}>Equipes cadastradas:</h3>
      {teams.length === 0 ? (
        <p className="small">Nenhuma equipe cadastrada.</p>
      ) : (
        <ul>
          {teams.map((t, i) => (
            <li key={i}>{t}</li>
          ))}
        </ul>
      )}

      <button className="btn danger" onClick={() => {
        clearTeamsLocal();
        setTeams([]);
      }}>
        Limpar equipes
      </button>
    </div>
  );
}


function App() {
  const [page, setPage] = React.useState("scout");

  // torna setPage disponível globalmente (dashboard usa isso)
  window.setPage = setPage;

  return (
    <div>
      <Navbar page={page} setPage={setPage} />

      {page === "scout" && <ScoutForm />}
      {page === "dashboard" && <Dashboard />}
      {page === "teams" && <Teams />}

      <footer className="footer">
        Bahtech • Scouting com Google Sheets • React sem build
      </footer>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
