import React, { useEffect, useState } from "react";
import Layout from "../../Page/Layout/Layout";
import { useForm } from "react-hook-form";
import { Input, Select } from "../../shared/input";
import { InlineError } from "../../shared/error";
import { Link, useNavigate } from "react-router-dom";
import { FaRegEyeSlash } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa6";
import { useMutation } from "react-query";
import { SignupApi } from "../../api/auth";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
function ResetPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const password = watch("password", ""); // Watching the value of the "password" input
  const cpassword = watch("Cpassword", "");
  const [isShowPass, setIsShowPass] = useState(false);
  const [isShowCPass, setIsShowCPass] = useState(false);
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
                The code has been verified. You can now continue.
              </p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col gap-4 mt-5 mb-4">
                <div>
                  <Input
                    label="Password"
                    placeholder="Enter your password"
                    suffix={
                      <span onClick={() => setIsShowPass(!isShowPass)}>
                        {isShowPass ? <FaRegEyeSlash /> : <FaRegEye />}
                      </span>
                    }
                    type={isShowPass ? "text" : "password"}
                    register={register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Password must be more than 6 characters",
                      },
                      maxLength: {
                        value: 50,
                        message: "Password must be less than 50 characters",
                      },
                      pattern: {
                        value: /^(?=.*[0-9])/,
                        message: "Password must contain at least one number",
                      },
                    })}
                  />
                  {errors.password && (
                    <InlineError text={errors.password.message} />
                  )}
                </div>
                <div>
                  <Input
                    label="Confirm Password"
                    placeholder="Enter your password again"
                    suffix={
                      <span onClick={() => setIsShowCPass(!isShowCPass)}>
                        {isShowCPass ? <FaRegEyeSlash /> : <FaRegEye />}
                      </span>
                    }
                    type={isShowCPass ? "text" : "password"}
                    register={register("Cpassword", {
                      required: "Confirm Password is required",
                      validate: (value) =>
                        value === password || "The passwords do not match",
                    })}
                  />
                  {errors.Cpassword && (
                    <InlineError text={errors.Cpassword.message} />
                  )}
                </div>
                <button
                  type="submit"
                  className="text-white bg-subMain rounded font-semibold w-full py-2 hover:bg-white hover:text-subMain hover:border"
                >
                  {isLoading ? "Loading" : "Continue"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ResetPassword;
