function Dashboard() {
  const [entries, setEntries] = React.useState([]);

  React.useEffect(() => {
    fetchAllEntries().then(res => setEntries(res.data));
  }, []);

  const { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } = Recharts;

  return (
    <div>
      <h2>Dashboard – Autonomous por equipe</h2>

      <BarChart width={800} height={300} data={entries}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="team" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="autonomousScore" fill="#82ca9d" />
      </BarChart>
    </div>
  );
}
