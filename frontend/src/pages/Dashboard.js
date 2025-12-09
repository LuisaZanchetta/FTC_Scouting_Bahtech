import { useEffect, useState } from "react";
import api from "../services/api";

export default function Dashboard() {
const [entries, setEntries] = useState([]);

useEffect(() => {
api.get("/scouts").then((res) => setEntries(res.data));
}, []);

return (
<div>
<h2>Dashboard</h2>
<ul>
{entries.map((e) => (
<li key={e.id}>Auto: {e.autonomousScore} | TeleOp: {e.teleopScore}</li>
))}
</ul>
</div>
);
}
