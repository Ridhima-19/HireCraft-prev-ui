import { ApiService } from "../../../util/apiService";

export async function createOTP(data, name = "") {
  return ApiService.getInstance().post("/api/user/createOTP", {
    mobileNumber: String(data.mobileNumber),
    name,
  });
}

export async function verifyOTP(data) {
  return ApiService.getInstance().post("/api/user/verifyOTP", {
    mobileNumber: String(data.mobileNumber),
    otp: String(data.otp),
  });
}
