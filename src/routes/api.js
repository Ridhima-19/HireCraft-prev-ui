import { ApiService } from "./../../util/apiService";

export async function getProfile() {
  return ApiService.getInstance().get(`/api/user/profile`);
}
