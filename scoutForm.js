// scoutForm.js
function ScoutForm({ onSent }) {
  const [form, setForm] = React.useState({
    team: "",
    match: "",
    autonomousScore: "",
    teleopScore: "",
    endgameScore: "",
    notes: "",
    scoutName: ""
  });
  const [sending, setSending] = React.useState(false);

  function update(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }

  async function submit() {
    try {
      setSending(true);
      // transformar campos numéricos
      const payload = {
        ...form,
        autonomousScore: Number(form.autonomousScore) || 0,
        teleopScore: Number(form.teleopScore) || 0,
        endgameScore: Number(form.endgameScore) || 0,
        timestamp: new Date().toISOString()
      };
      await sendScoutEntry(payload);
      alert("Scouting enviado com sucesso!");
      setForm({
        team: "",
        match: "",
        autonomousScore: "",
        teleopScore: "",
        endgameScore: "",
        notes: "",
        scoutName: ""
      });
      onSent && onSent();
    } catch (err) {
      console.error(err);
      alert("Erro ao enviar. Verifique a URL do Apps Script e permissões.");
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="card">
      <h2>Enviar Scouting</h2>

      <label>Equipe (número ou nome)</label>
      <input name="team" value={form.team} onChange={update} placeholder="ex: 12345 ou Bahtech" />

      <label>Match</label>
      <input name="match" value={form.match} onChange={update} placeholder="nº do match" />

      <div className="row">
        <div className="col">
          <label>Autonomous (pontos)</label>
          <input name="autonomousScore" value={form.autonomousScore} onChange={update} type="number" />
        </div>
        <div className="col">
          <label>TeleOp (pontos)</label>
          <input name="teleopScore" value={form.teleopScore} onChange={update} type="number" />
        </div>
      </div>

      <label>Endgame (pontos)</label>
      <input name="endgameScore" value={form.endgameScore} onChange={update} type="number" />

      <label>Notas</label>
      <textarea name="notes" value={form.notes} onChange={update} rows="3" />

      <label>Nome do Scout</label>
      <input name="scoutName" value={form.scoutName} onChange={update} />

      <div style={{display:"flex", gap:8}}>
        <button className="btn primary" onClick={submit} disabled={sending}>
          {sending ? "Enviando..." : "Enviar"}
        </button>
        <button className="btn" onClick={() => { setForm({ team:"", match:"", autonomousScore:"", teleopScore:"", endgameScore:"", notes:"", scoutName:"" }) }}>
          Limpar
        </button>
      </div>
    </div>
  );
}
