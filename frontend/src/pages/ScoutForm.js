import { useState } from "react";
import api from "../services/api";

export default function ScoutForm() {
const [data, setData] = useState({});

const send = async () => {
const res = await api.post("/scouts", data);
alert(JSON.stringify(res.data));
};

return (
<div>
<h2>Scout Form</h2>
<input placeholder="Auto Score" onChange={(e) => setData({ ...data, autonomousScore: e.target.value })} />
<input placeholder="TeleOp Score" onChange={(e) => setData({ ...data, teleopScore: e.target.value })} />
<input placeholder="Endgame Score" onChange={(e) => setData({ ...data, endgameScore: e.target.value })} />
<textarea placeholder="Notes" onChange={(e) => setData({ ...data, notes: e.target.value })}></textarea>
<button onClick={send}>Submit</button>
</div>
);
}
