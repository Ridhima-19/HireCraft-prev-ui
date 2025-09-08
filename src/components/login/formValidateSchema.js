import { z } from "zod";

export const validationSchema = (t, otp) => {
  if (otp) {
    return z.object({
      otp: z
        .number({ invalid_type_error: t("required") })
        .positive()
        .refine((value) => String(value).trim().length === 4, {
          message: t("otp4CharLong"),
        }),
      mobileNumber: z
        .number({ invalid_type_error: t("required") })
        .positive()
        .refine((value) => String(value).trim().length === 10, {
          message: t("exat10Char"),
        }),
    });
  } else {
    return z.object({
      mobileNumber: z
        .number({ invalid_type_error: t("required") })
        .positive()
        .refine((value) => String(value).trim().length === 10, {
          message: t("exat10Char"),
        }),
    });
  }
};
