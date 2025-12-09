import { useState } from "react";
import { sendScoutEntry } from "../services/sheets";

export default function ScoutForm() {
  const [form, setForm] = useState({});

  function update(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function submit() {
    await sendScoutEntry(form);
    alert("Scouting enviado com sucesso!");
  }

  return (
    <div>
      <h2>Enviar Scouting</h2>

      <input name="team" placeholder="Team Number" onChange={update} /><br />
      <input name="match" placeholder="Match Number" onChange={update} /><br />

      <input name="autonomousScore" placeholder="Autonomous Score" onChange={update} /><br />
      <input name="teleopScore" placeholder="TeleOp Score" onChange={update} /><br />
      <input name="endgameScore" placeholder="Endgame Score" onChange={update} /><br />

      <textarea name="notes" placeholder="Observações" onChange={update}></textarea><br />

      <input name="scoutName" placeholder="Scout Name" onChange={update} /><br />

      <button onClick={submit}>Enviar</button>
    </div>
  );
}
