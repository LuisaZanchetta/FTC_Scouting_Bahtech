// teams.js
const TEAMS_KEY = "ftc_teams_v1";

function saveTeamLocal(team) {
  const list = JSON.parse(localStorage.getItem(TEAMS_KEY) || "[]");
  list.push(team);
  localStorage.setItem(TEAMS_KEY, JSON.stringify(list));
  return list;
}

function getAllTeamsLocal() {
  return JSON.parse(localStorage.getItem(TEAMS_KEY) || "[]");
}

function clearTeamsLocal() {
  localStorage.removeItem(TEAMS_KEY);
}

function TeamsPage() {
  const [teamName, setTeamName] = React.useState("");
  const [teams, setTeams] = React.useState(getAllTeamsLocal());

  function addTeam() {
    if (!teamName.trim()) return alert("Digite um nome válido!");
    const updated = saveTeamLocal(teamName.trim());
    setTeams(updated);
    setTeamName("");
  }

  return (
    <div className="card">
      <h2>Cadastrar Equipes</h2>

      <input
        className="input"
        placeholder="Nome da equipe"
        value={teamName}
        onChange={(e) => setTeamName(e.target.value)}
      />

      <button className="btn" onClick={addTeam}>Adicionar</button>

      <h3 style={{ marginTop: 20 }}>Equipes cadastradas</h3>

      {teams.length === 0 ? (
        <p>Nenhuma equipe cadastrada.</p>
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
        Limpar todas
      </button>
    </div>
  );
}
