import axios from "axios";

const tenantId = "ziyoungsRoom";
const API_URL = `https://assignment-todolist-api.vercel.app/api/${tenantId}`;

const api = axios.create({
  baseURL: API_URL,
});

export { api, tenantId };
