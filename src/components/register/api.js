import { ApiService } from "../../../util/apiService";

export async function register(email, password) {
  return ApiService.getInstance().post("/api/user/register", {email, password});
}

export async function verifyOtp(userId, otp) {
  return ApiService.getInstance().get(`/api/user/registration-otp-verify?userId=${userId}&otp=${otp}`);
}