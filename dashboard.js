// dashboard.js
function Dashboard() {
  const [entries, setEntries] = React.useState([]);
  const [chartData, setChartData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetchAllEntries()
      .then(res => {
        const data = res.data || [];
        setEntries(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        alert("Erro ao carregar dados.");
        setLoading(false);
      });
  }, []);

  React.useEffect(() => {
    const arr = entries || [];
    const map = {};

    arr.forEach(e => {
      const team = (e.team || "Unknown").toString();
      const auto = Number(e.autonomousScore) || 0;
      const tele = Number(e.teleopScore) || 0;

      if (!map[team]) {
        map[team] = { team, autoSum: 0, teleSum: 0, count: 0 };
      }

      map[team].autoSum += auto;
      map[team].teleSum += tele;
      map[team].count += 1;
    });

    const result = Object.values(map).map(t => ({
      team: t.team,
      avgAuto: +(t.autoSum / t.count).toFixed(2),
      avgTele: +(t.teleSum / t.count).toFixed(2),
      entries: t.count
    }));

    result.sort((a, b) => b.avgAuto - a.avgAuto);

    setChartData(result);
  }, [entries]);

  const { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } = Recharts;

  return (
    <div className="card">
      <h2>Médias por Equipe</h2>

      {loading && <p>Carregando...</p>}

      {!loading && chartData.length === 0 && (
        <p>Nenhum dado disponível ainda.</p>
      )}

      {!loading && chartData.length > 0 && (
        <div style={{ width: "100%", height: 350 }}>
          <ResponsiveContainer>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="team" />
              <YAxis />
              <Tooltip />
              <Legend />

              <Bar dataKey="avgAuto" name="Média Autonomous" fill="#b22222" />
              <Bar dataKey="avgTele" name="Média TeleOp" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
}
