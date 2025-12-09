<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Equipes - FTC Scouting</title>

  <link rel="stylesheet" href="styling.css" />

  <!-- React + Babel -->
  <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
</head>

<body>

  <div class="container">
    <h1 class="title">Gerenciar Equipes</h1>

    <a class="btn" href="index.html">Voltar</a>

    <div id="root"></div>
  </div>

  <script type="text/babel" src="teams.js"></script>

  <script type="text/babel">
    function TeamsPage() {
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
          <h2>Adicionar nova equipe</h2>

          <input
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
            className="input"
            placeholder="Nome da equipe"
          />

          <button className="btn" onClick={addTeam}>Adicionar</button>

          <h3 style={{ marginTop: 25 }}>Equipes cadastradas</h3>

          {teams.length === 0 ? (
            <p className="small">Nenhuma equipe cadastrada ainda.</p>
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
          }}>Limpar tudo</button>
        </div>
      );
    }

    ReactDOM.createRoot(document.getElementById("root")).render(<TeamsPage />);
  </script>

</body>
</html>
