import React, { useEffect } from "react";
import Layout from "./Layout/Layout";
import { useForm } from "react-hook-form";
import { Input } from "../shared/input";
import { InlineError } from "../shared/error";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import "./style.scss";
import { ForgotPassowrdApi } from "../api/auth";
//api: users/forgotpassword
function ForgotPassowrd() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);
  const { mutate, isLoading } = useMutation(ForgotPassowrdApi, {
    onSuccess: (data) => {
      toast.warning("Send OTP to email!");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  const onSubmit = (data) => {
    mutate(data);
  };
  useEffect(() => {
    if (currentUser) {
      navigate("/");
    }
  }, [currentUser]);
  const handleCancle = () => {
    navigate("/login");
  };
  return (
    <Layout>
      <div className="min-h-screen background pt-24">
        <div className="flex mx-auto w-[500px] bg-white rounded-lg">
          <div className="px-14 py-10 w-full">
            <div>
              <h2 className="font-semibold text-3xl">Reset Password</h2>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col gap-4 mt-5 mb-4">
                <div>
                  <Input
                    label="Email-address"
                    placeholder="Enter your email "
                    register={register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        message: "Invalid email address",
                      },
                    })}
                  />
                  {errors.email && <InlineError text={errors.email.message} />}
                </div>

                <button
                  type="submit"
                  className="text-white bg-subMain rounded font-semibold w-full py-2 hover:bg-white hover:text-subMain hover:border"
                >
                  {isLoading ? "Loading" : "Continue"}
                </button>
              </div>
              <div
                onClick={handleCancle}
                className="flex items- justify-center text-subMain bg-white rounded font-semibold w-full py-2 hover:cursor-pointer hover:bg-white hover:text-subMain hover:border"
              >
                <p>Cancel</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ForgotPassowrd;
