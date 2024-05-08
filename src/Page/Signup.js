import React, { useEffect, useState } from "react";
import Layout from "./Layout/Layout";
import { useForm } from "react-hook-form";
import { Input } from "../shared/input";
import { FaRegEyeSlash } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa6";
import { InlineError } from "../shared/error";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { SignupApi } from "../api/signup";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { signInSuccess } from "../Redux/user.slice";
function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
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
      <div className="min-h-screen bg-gray">
        <div className="flex mx-auto w-[500px] bg-white">
          <div className="px-14 py-14 w-full">
            <div>
              <h2 className="font-semibold text-3xl">Register Account</h2>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col gap-4 my-8">
                <div>
                  <Input
                    label="Email-address"
                    placeholder="Enter your email 111"
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
                    label="Address"
                    placeholder="Enter your address"
                    register={register("address", {
                      required: "address is required",
                      pattern: {
                        value: /^[A-Za-z0-9,.\s]+$/i,
                        message: "Invalid address",
                      },
                    })}
                  />
                  {errors.address && (
                    <InlineError text={errors.address.message} />
                  )}
                </div>
                <div class="flex flex-wrap -mx-3">
                  <div class="w-full md:w-1/2 px-3 md:mb-0">
                    <Input
                      label="Fullname"
                      placeholder="Enter your fullname"
                      register={register("fullname", {
                        required: "fullname is required",
                        pattern: {
                          value: /^[A-Za-z\s]{6,20}$/,
                          message:
                            "Invalid full name. It should contain only letters and spaces with a length between 6 and 20 characters.",
                        },
                      })}
                    />
                    {errors.fullname && (
                      <InlineError text={errors.fullname.message} />
                    )}
                  </div>
                  <div class="w-full md:w-1/2 px-3">
                    <Input
                      label="Phone number"
                      placeholder="Enter your phone"
                      register={register("phone", {
                        required: "phone is required",
                        pattern: {
                          value: /^\d{10}$/i,
                          message:
                            "Invalid phone number. It should contain only 10 digits.",
                        },
                      })}
                    />
                    {errors.phone && (
                      <InlineError text={errors.phone.message} />
                    )}
                  </div>
                </div>
                <div class="flex flex-wrap -mx-3">
                  <div class="w-full md:w-1/2 px-3 md:mb-0">
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
                  <div class="w-full md:w-1/2 px-3">
                    <Input
                      label="Comfirm Password"
                      placeholder="Enter your CPassword"
                      suffix={
                        <span onClick={() => setIsShowCPass(!isShowCPass)}>
                          {isShowCPass ? <FaRegEyeSlash /> : <FaRegEye />}
                        </span>
                      }
                      type={isShowCPass ? "text" : "Comfirm Password"}
                      register={register("Comfirm Password", {
                        required: "Comfirm Password is required",
                        minLength: {
                          value: 6,
                          message:
                            "Comfirm Password must be more than 6 characters",
                        },
                        maxLength: {
                          value: 50,
                          message:
                            "Comfirm Password must be less than 50 characters",
                        },
                        pattern: {
                          value: /^(?=.*[0-9])/,
                          message:
                            "Comfirm Password must contain at least one number",
                        },
                      })}
                    />
                    {errors.ComfirmPassword && (
                      <InlineError text={errors.ComfirmPassword.message} />
                    )}
                  </div>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="text-white bg-subMain rounded font-semibold w-full py-2 hover:bg-white hover:text-subMain hover:border"
                >
                  {isLoading ? "Loading" : "Sign up"}
                </button>
              </div>
            </form>
            <div className="border border-t-1 border-slate-300 w-full my-6"></div>

            <div className="flex justify-between py-3 mt-6">
              <Link to={"/login"} className=" text-xs">
                Dont have account?{" "}
                <span className="text-subMain underline">Signup now</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Signup;
