// sheets.js
// URL do seu Apps Script
const API_URL = "https://script.google.com/macros/s/AKfycbyA9lfkVGK6l8yFMgolFbYkgXsbn11LkCfHTdmZQEjD6M2T4WRlijV-nC8T50h3LNjt/exec";

// envia dados do formulário de scouting
function sendScoutEntry(data) {
  return axios.post(API_URL, data);
}

// busca todos os registros para o dashboard
function fetchAllEntries() {
  return axios.get(API_URL);
}
