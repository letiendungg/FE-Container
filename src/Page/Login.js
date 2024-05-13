import React, { useEffect, useState } from "react";
import Layout from "./Layout/Layout";
import { useForm } from "react-hook-form";
import { Input } from "../shared/input";
import { FaRegEyeSlash } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa6";
import { InlineError } from "../shared/error";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { loginApi } from "../api/auth";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { signInSuccess } from "../Redux/user.slice";
import GoogleLogin from "../Components/GoogleLogin";
import "./style.scss";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isShowPass, setIsShowPass] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser, users } = useSelector((state) => state.user);
  // const { applications } = useSelector((state) => state.application);

  const { mutate, isLoading } = useMutation(loginApi, {
    onSuccess: (data) => {
      localStorage.setItem("token", data.access_token);
      //goi action reudx
      //cai nay goi redux toolkit
      dispatch(signInSuccess(data.user));
      toast.success("Login success");
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
  return (
    <Layout>
      <div className="min-h-screen background">
        <div className="flex mx-auto w-[500px] bg-white">
          <div className="px-14 py-8 w-full">
            <div>
              <h2 className="font-semibold text-3xl">Please Login in</h2>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col gap-4 my-5">
                <div>
                  <Input
                    label="Email-address"
                    placeholder="Enter your email"
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
              </div>
              <div>
                <button
                  type="submit"
                  className="text-white bg-subMain rounded font-semibold w-full py-2 hover:bg-white hover:text-subMain hover:border"
                >
                  {isLoading ? "Loading" : "Log in"}
                </button>
              </div>
            </form>
            <div className="border border-t-1 border-slate-300 w-full my-6"></div>
            <GoogleLogin />
            <div className="flex justify-between py-3 mt-6">
              <Link to={"/sign-up"} className=" text-xs">
                Dont have account?{" "}
                <span className="text-subMain underline">Signup now</span>
              </Link>
              <Link
                to={"/forgot-password"}
                className="text-subMain text-xs underline"
              >
                Forgot your password ?
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Login;
