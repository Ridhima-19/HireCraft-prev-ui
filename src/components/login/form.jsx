import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";

import { validationSchema } from "./formValidateSchema";
import { vehicleFormInitialState } from "./initialState";
import { createOTP, verifyOTP } from "./form.api";

export default function LoginForm() {
  const [otp, setOTP] = useState(false);
  const [counter, setCounter] = useState(30);
  const [isDisabled, setIsDisabled] = useState(true);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    getValues,
    setValue,
  } = useForm({
    defaultValues: vehicleFormInitialState,
    resolver: zodResolver(validationSchema(() => "Required", otp)), // skip i18n
  });

  useEffect(() => {
    if (counter > 0 && otp) {
      const timer = setTimeout(() => setCounter(counter - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setIsDisabled(false);
    }
  }, [counter, otp]);

  const handleResendClick = async () => {
    setIsDisabled(true);
    setCounter(30);
    await createOTP({ mobileNumber: getValues("mobileNumber") });
  };

  const onSubmit = async (data) => {
    if (!otp) {
      await handleResendClick();
      setOTP(true);
      setValue("otp", ""); // reset otp field
    } else {
      const res = await verifyOTP(data);
      if (!res?.data?.token) {
        alert("Invalid OTP");
        return;
      }
      localStorage.setItem("token", res?.data?.token);
      navigate("/");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {!otp && (
        <div>
          <label>Mobile Number</label>
          <input
            type="text"
            {...register("mobileNumber")}
          />
          {errors.mobileNumber && <p>{errors.mobileNumber.message}</p>}
        </div>
      )}

      {otp && (
        <div>
          <label>Enter OTP</label>
          <input type="text" {...register("otp")} />
          {errors.otp && <p>{errors.otp.message}</p>}

          <div>
            {isDisabled ? (
              <span>Resend OTP in {counter} sec</span>
            ) : (
              <button type="button" onClick={handleResendClick}>
                Resend OTP
              </button>
            )}
            <button type="button" onClick={() => setOTP(false)}>
              Edit Number
            </button>
          </div>
        </div>
      )}

      <button type="submit" disabled={isSubmitting}>
        {otp ? "Verify OTP" : "Get OTP"}
      </button>
    </form>
  );
}