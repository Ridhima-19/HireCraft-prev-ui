import { ApiService } from "../../../util/apiService";

export async function getJdReport(page, size, jdId=3) {
  return ApiService.getInstance().get(`/api/candidates?page=${page}&size=${size}&jdId=${jdId}`);
}

export async function getJdById(jdId=3) {
  return ApiService.getInstance().get(`/api/jd/${jdId}`);
}