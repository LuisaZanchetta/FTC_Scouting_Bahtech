import { useState } from "react";
import api from "../services/api";

export default function Login() {
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");

const login = async () => {
const res = await api.post("/auth/login", { username, password });
alert(JSON.stringify(res.data));
};

return (
<div>
<h2>Login</h2>
<input placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
<input placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)} />
<button onClick={login}>Login</button>
</div>
);
}
