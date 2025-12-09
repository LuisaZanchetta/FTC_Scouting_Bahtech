function Dashboard() {
  const [entries, setEntries] = React.useState([]);

  React.useEffect(() => {
    fetchAllEntries().then(res => {
      const data = res.data || [];

      // Converte para números (Recharts quebra se receber strings)
      const cleaned = data.map(e => ({
        ...e,
        autonomousScore: Number(e.autonomousScore || 0),
        teleopScore: Number(e.teleopScore || 0),
        endgameScore: Number(e.endgameScore || 0)
      }));

      setEntries(cleaned);
    });
  }, []);

  const { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } = Recharts;

  return (
    <div>
      <h2>Dashboard – Autonomous por Equipe</h2>

      {entries.length === 0 ? (
        <p>Carregando dados...</p>
      ) : (
        <BarChart width={800} height={300} data={entries}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="team" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="autonomousScore" fill="#82ca9d" />
        </BarChart>
      )}
    </div>
  );
}
