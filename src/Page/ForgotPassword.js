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
function ForgotPassowrd() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);
  const { mutate, isLoading } = useMutation("", {
    onSuccess: (data) => {
      toast.warning("Check otp code");
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
      <div className="min-h-screen background flex items-center">
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
              <button
                type="submit"
                className="text-subMain bg-white rounded font-semibold w-full py-2 hover:bg-white hover:text-subMain hover:border"
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ForgotPassowrd;
