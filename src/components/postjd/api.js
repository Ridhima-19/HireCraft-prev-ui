import { ApiService } from "../../../util/apiService";

export async function analyzeJd(formData) {
  return ApiService.getInstance().post("/api/jd/analyze",formData);
}

export async function addJd(formData) {
  return ApiService.getInstance().post("/api/jd", formData);
}


