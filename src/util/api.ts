import axios, { AxiosInstance } from "axios";

const instance: AxiosInstance = axios.create();
const apiBase = "https://lol.fandom.com/api.php?action=cargoquery&format=json";

instance.interceptors.request.use((config) => {
  config.headers.Accept = "application/json";

  return config;
});

export { instance as api };
export { apiBase };
