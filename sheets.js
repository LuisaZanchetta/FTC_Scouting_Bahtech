// sheets.js - frontend
// coloque aqui a URL exata do seu deployment do Apps Script (veja instruções abaixo)
const API_URL = "https://script.google.com/macros/s/AKfycbxejBp2cK0CmrAHjIEDwyUvGwTOxOGjwgymtui2UwlCP5fSF8JJnZ5CM1iAA9YLO27u/exec";

// envia dados do formulário de scouting (POST)
function sendScoutEntry(data) {
  // axios retorna uma Promise
  return axios.post(API_URL, data, {
    headers: { "Content-Type": "application/json" },
    // timeout opcional
    timeout: 10000
  });
}

// busca todos os registros para o dashboard (GET)
function fetchAllEntries() {
  return axios.get(API_URL, {
    headers: { "Accept": "application/json" },
    timeout: 10000
  });
}
