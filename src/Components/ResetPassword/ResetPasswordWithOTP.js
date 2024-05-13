import React, { useEffect, useState } from "react";
import Layout from "../../Page/Layout/Layout";
import { useForm } from "react-hook-form";
import { Input, Select } from "../../shared/input";
import { InlineError } from "../../shared/error";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { SignupApi } from "../../api/auth";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import "../style.scss";
function ResetPasswordWithOTP() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const { mutate, isLoading } = useMutation(SignupApi, {
    onSuccess: (data) => {
      // dispatch(signInSuccess(data.user));
      navigate("/login");
      toast.success("Sign up success");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  const onSubmit = (data) => {
    mutate(data);
  };
  useEffect(() => {
    console.log(currentUser);
  }, [currentUser]);
  return (
    <Layout>
      <div className="min-h-screen background">
        <div className="flex mx-auto w-[500px] bg-white">
          <div className="px-14 py-10 w-full">
            <div>
              <h2 className="font-semibold text-3xl">Reset Password</h2>
              <p className="text-xs mt-1 opacity-65">
                Verification code has been sent. Please copy it to the input box
                below
              </p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col gap-4 mt-5 mb-4">
                <div>
                  <Input
                    label="Enter OTP"
                    placeholder="Enter otp "
                    register={register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^\d{6}$/i,
                        message: "Invalid OTP code, please enter 6 digits.",
                      },
                    })}
                  />
                  {errors.email && <InlineError text={errors.email.message} />}
                  <p className="text-xs mt-1 opacity-65">
                    Check you email box and paste the code you received and
                    click Verify code
                  </p>
                </div>

                <button
                  type="submit"
                  className="text-white bg-subMain rounded font-semibold w-full py-2 hover:bg-white hover:text-subMain hover:border"
                >
                  {isLoading ? "Loading" : "Continue"}
                </button>
              </div>
              <Link to={"/resetPasswordWithOTP"} className="">
                <button className="text-cancel bg-cancel rounded font-semibold w-full py-2 hover:bg-white hover:text-subMain hover:border">
                  Send new code
                </button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ResetPasswordWithOTP;
