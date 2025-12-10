// sheets.js
// URL do seu Apps Script
const API_URL = "https://script.google.com/macros/s/AKfycbyU5UXzYE64qwoHRVFFVsuEGooclVgmrcDmKpENkl_QLRhruhcivo_0IH6gollo7Nlv/exec";

// envia dados do formulário de scouting
function sendScoutEntry(data) {
  return axios.post(API_URL, data);
}

// busca todos os registros para o dashboard
function fetchAllEntries() {
  return axios.get(API_URL);
}
