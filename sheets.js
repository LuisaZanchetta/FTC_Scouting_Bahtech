// sheets.js
const API_URL = "https://script.google.com/macros/s/AKfycbyU_6mDlW12lmnLY0Khfjj_2d7tjFGYcux-LtUaLMGh4vAe6znGc0hotERTM7ZsZp3a/exec";

// enviar um entry (POST)
function sendScoutEntry(data) {
  // o Apps Script que você tem provavelmente espera POST; alguns scripts retornam texto — este usa axios
  return axios.post(API_URL, data);
}

// buscar todos (GET)
function fetchAllEntries() {
  return axios.get(API_URL);
}
