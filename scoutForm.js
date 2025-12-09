function ScoutForm() {
  const [form, setForm] = React.useState({});

  function update(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function submit() {
    await sendScoutEntry(form);
    alert("Scouting enviado!");
  }

  return (
    <div>
      <h2>Enviar Scouting</h2>

      <input name="team" placeholder="Team" onChange={update} /><br/>
      <input name="match" placeholder="Match" onChange={update} /><br/>

      <input name="autonomousScore" placeholder="Autonomous" onChange={update} /><br/>
      <input name="teleopScore" placeholder="TeleOp" onChange={update} /><br/>
      <input name="endgameScore" placeholder="Endgame" onChange={update} /><br/>

      <textarea name="notes" placeholder="Notes" onChange={update}></textarea><br/>

      <input name="scoutName" placeholder="Scout Name" onChange={update} /><br/>

      <button onClick={submit}>Enviar</button>
    </div>
  );
}
