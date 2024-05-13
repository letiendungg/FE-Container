import React, { useEffect } from "react";
import Layout from "../Page/Layout/Layout";
import { useForm } from "react-hook-form";
import { Input } from "../shared/input";
import { InlineError } from "../shared/error";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { ConfirmCodeApi, SignupApi } from "../api/auth";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import "../Page/style.scss";

//api: confirmCode/:token
function AuthenticateWithOTP({ token }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);
  const { mutate, isLoading } = useMutation(ConfirmCodeApi, {
    onSuccess: (data) => {
      navigate("/login");
      toast.success("Already to login");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  const onSubmit = (data) => {
    mutate({ data, token });
  };
  useEffect(() => {
    if (currentUser) {
      navigate("/login");
    }
  }, [currentUser]);
  return (
    <Layout>
      <div className="flex items-center min-h-screen background rounded-lg">
        <div className="flex mx-auto w-[500px] bg-white">
          <div className="px-14 py-10 w-full">
            <div>
              <h2 className="font-semibold text-3xl">CONFIRM OTP</h2>
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
                    register={register("code", {
                      required: "Code is required",
                      pattern: {
                        value: /^.{6}$/i,
                        message: "Invalid OTP code, please enter 6 characters.",
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
              <Link to={"/login"} className="">
                <button className="text-cancel bg-cancel rounded font-semibold w-full py-2 hover:bg-white hover:text-subMain hover:border">
                  Cancel
                </button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default AuthenticateWithOTP;
