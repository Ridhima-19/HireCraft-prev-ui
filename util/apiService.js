import axios from "axios";
import { enqueueSnackbar } from "notistack";

export class ApiService {
  static instance;
  api;

  constructor() {
    if (ApiService.instance) {
      return ApiService.instance;
    }

    this.api = axios.create({
      baseURL: import.meta.env.VITE_API_BASE_URL,
    });

    // Add request interceptors
    this.api.interceptors.request.use(
      this.handleRequest,
      this.handleRequestError
    );

    // Add response interceptors
    this.api.interceptors.response.use(
      this.handleResponse,
      this.handleResponseError
    );

    ApiService.instance = this;
  }

  handleRequest(config) {
    // Add headers, authentication, or other behaviors here
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  }

  handleRequestError(error) {
    return Promise.reject(error);
  }

  handleResponse(response) {
    return response.data;
  }

  handleResponseError(error) {
    if (error.response?.status === 403) {
      localStorage.removeItem("token");
      const event = new StorageEvent("storage", {
        key: "token",
        oldValue: localStorage.getItem("token"),
        newValue: null,
        url: window.location.href,
        storageArea: localStorage,
      });
      window.dispatchEvent(event);
      enqueueSnackbar("Session Expired !", { variant: "error" });
    } else {
      const responseData = error.response?.data;
      enqueueSnackbar(responseData?.message || error.message, {
        variant: "error",
      });
    }
    return Promise.reject(error);
  }

  static getInstance() {
    if (!ApiService.instance) {
      ApiService.instance = new ApiService();
    }
    return ApiService.instance;
  }

  async get(resource, params) {
    return this.api.get(resource, { params });
  }

  async post(resource, data, config) {
    return this.api.post(resource, data, config);
  }

  async patch(resource, data) {
    return this.api.patch(resource, data);
  }

  async put(resource, data) {
    return this.api.put(resource, data);
  }

  async delete(resource, data) {
    return this.api.delete(resource, { data });
  }

  logout() {
    localStorage.removeItem("token");
    const event = new StorageEvent("storage", {
      key: "token",
      oldValue: localStorage.getItem("token"),
      newValue: null,
      url: window.location.href,
      storageArea: localStorage,
    });
    window.dispatchEvent(event);
  }
}
