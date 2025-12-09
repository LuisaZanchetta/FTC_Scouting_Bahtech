// scoutForm.js
function ScoutForm() {
  const [form, setForm] = React.useState({
    team: "",
    match: "",
    autonomousScore: "",
    teleopScore: "",
    endgameScore: "",
    notes: "",
    scoutName: ""
  });

  function update(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  async function submit() {
    try {
      await sendScoutEntry(form);
      alert("Scouting enviado com sucesso!");

      // limpa o formulário
      setForm({
        team: "",
        match: "",
        autonomousScore: "",
        teleopScore: "",
        endgameScore: "",
        notes: "",
        scoutName: ""
      });

    } catch (err) {
      console.error(err);
      alert("Erro ao enviar scouting!");
    }
  }

  return (
    <div className="card">
      <h2>Enviar Scouting</h2>

      <input className="input" name="team" placeholder="Team" onChange={update} value={form.team} />
      <input className="input" name="match" placeholder="Match" onChange={update} value={form.match} />

      <input className="input" name="autonomousScore" placeholder="Autonomous" onChange={update} value={form.autonomousScore} />
      <input className="input" name="teleopScore" placeholder="TeleOp" onChange={update} value={form.teleopScore} />
      <input className="input" name="endgameScore" placeholder="Endgame" onChange={update} value={form.endgameScore} />

      <textarea className="input" name="notes" placeholder="Notes" onChange={update} value={form.notes}></textarea>

      <input className="input" name="scoutName" placeholder="Scout Name" onChange={update} value={form.scoutName} />

      <button className="btn" onClick={submit}>Enviar</button>
    </div>
  );
}
