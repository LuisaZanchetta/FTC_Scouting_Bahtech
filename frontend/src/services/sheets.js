import axios from "axios";

const API_URL = "SUA_URL_DO_APPS_SCRIPT_AQUI";

export function sendScoutEntry(data) {
  return axios.post(API_URL, data);
}

export function fetchAllEntries() {
  return axios.get(API_URL);
}
