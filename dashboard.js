// dashboard.js
function Dashboard() {
  const [entries, setEntries] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [chartData, setChartData] = React.useState([]);

  React.useEffect(() => {
    setLoading(true);
    fetchAllEntries()
      .then(res => {
        // seu Apps Script deve retornar JSON array; em alguns casos a resposta pode vir em res.data ou res.data.records
        const data = res.data || [];
        setEntries(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        alert("Erro ao buscar scout entries. Verifique a URL do Apps Script.");
        setLoading(false);
      });
  }, []);

  // recalcula médias por equipe
  React.useEffect(() => {
    // se não houver entries, tenta usar um array vazio
    const arr = entries || [];
    // map por team -> {team, sum, count}
    const map = {};
    arr.forEach(e => {
      // normaliza nome do team
      const t = (e.team || "Unknown").toString();
      const auto = Number(e.autonomousScore) || 0;
      if (!map[t]) map[t] = { team: t, sumAuto: 0, count: 0, sumTele:0 };
      map[t].sumAuto += auto;
      map[t].count += 1;
      map[t].sumTele += Number(e.teleopScore) || 0;
    });
    const result = Object.values(map).map(x => ({
      team: x.team,
      avgAuto: +(x.sumAuto / x.count).toFixed(2),
      avgTele: +(x.sumTele / x.count).toFixed(2),
      entries: x.count
    }));
    // ordenar por média decrescente
    result.sort((a,b)=> b.avgAuto - a.avgAuto);
    setChartData(result);
  }, [entries]);

  const { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } = Recharts;

  return (
    <div className="card">
      <h2>Dashboard — Média Autonomous por Equipe</h2>

      {loading ? <div className="small">Carregando dados...</div> : null}

      {chartData.length === 0 && !loading ? (
        <div className="small">Nenhum dado disponível. Envie alguns scout entries primeiro.</div>
      ) : (
        <div style={{ width:"100%", height: 360 }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} margin={{top:20, right:30, left:0, bottom:60}}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="team" angle={-45} textAnchor="end" interval={0} height={80} />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="avgAuto" name="Média Auto" fill="#b22222" />
              <Bar dataKey="avgTele" name="Média TeleOp" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}

      <div style={{marginTop:12}}>
        <h3 style={{marginBottom:8}}>Resumo por equipe</h3>
        <div className="team-list">
          {chartData.map(t => (
            <div key={t.team} className="team-pill">
              <strong>{t.team}</strong> — Avg Auto: {t.avgAuto} (entradas: {t.entries})
            </div>
          ))}
        </div>
      </div>

      <div style={{marginTop:12}}>
        <button className="btn" onClick={() => window.setPage && window.setPage('scout')}>Voltar ao envio</button>
      </div>
    </div>
  );
}
