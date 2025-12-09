// teams.js
// util simples para salvar/read de equipes no localStorage
const TEAMS_KEY = "ftc_teams_v1";

function saveTeamLocal(team) {
  const list = JSON.parse(localStorage.getItem(TEAMS_KEY) || "[]");
  list.push(team);
  localStorage.setItem(TEAMS_KEY, JSON.stringify(list));
  return list;
}

function getAllTeamsLocal() {
  return JSON.parse(localStorage.getItem(TEAMS_KEY) || "[]");
}

function clearTeamsLocal() {
  localStorage.removeItem(TEAMS_KEY);
}

