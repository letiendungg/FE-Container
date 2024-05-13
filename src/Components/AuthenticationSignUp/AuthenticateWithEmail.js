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
function AuthenticateWithEmail() {
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
              <h2 className="font-semibold text-3xl">Register Account</h2>
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

export default AuthenticateWithEmail;
