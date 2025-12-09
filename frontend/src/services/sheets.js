import axios from "axios";

const API_URL = "https://script.google.com/macros/s/AKfycbyU_6mDlW12lmnLY0Khfjj_2d7tjFGYcux-LtUaLMGh4vAe6znGc0hotERTM7ZsZp3a/exec";

export function sendScoutEntry(data) {
  return axios.post(API_URL, data);
}

export function fetchAllEntries() {
  return axios.get(API_URL);
}
