import { ApiService } from "../../../util/apiService";

export async function getJdList(page,size) {
  return ApiService.getInstance().get(`/api/jd?page=${page}&size=${size}`);
}