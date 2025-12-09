// sheets.js
// URL do seu Apps Script
const API_URL =
  "https://script.google.com/macros/s/AKfycbyU_6mDlW12lmnLY0Khfjj_2d7tjFGYcux-LtUaLMGh4vAe6znGc0hotERTM7ZsZp3a/exec";

// envia dados do formulário de scouting
function sendScoutEntry(data) {
  return axios.post(API_URL, data);
}

// busca todos os registros para o dashboard
function fetchAllEntries() {
  return axios.get(API_URL);
}
