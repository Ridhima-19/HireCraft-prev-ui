import { ApiService } from "../../../util/apiService";

export async function loginUser(email, password) {
  return ApiService.getInstance().post("/api/user/login", {email, password});
}
