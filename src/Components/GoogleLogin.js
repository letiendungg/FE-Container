import React, { useEffect } from "react";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "../config/firebase";
import { toast } from "react-toastify";
import { useMutation } from "react-query";
import { authenGoogleApi } from "../api/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signInSuccess } from "../Redux/user.slice";

function GoogleLogin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const { mutate, isLoading } = useMutation(authenGoogleApi, {
    onSuccess: (data) => {
      localStorage.setItem("token", data.access_token);
      dispatch(signInSuccess(data));
      toast.success("Login success");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  useEffect(() => {
    if (currentUser) {
      navigate("/");
    }
  }, [currentUser, navigate]);
  const handleGoogleClick = async () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: "select_account" });

    try {
      const resultFormGoogle = await signInWithPopup(auth, provider);
      const data = {
        name: resultFormGoogle.user.displayName,
        email: resultFormGoogle.user.email,
        googlePhoto: resultFormGoogle.user.photoURL,
      };
      mutate(data);
    } catch (error) {
      toast.error("Login with google is error");
    }
  };
  return (
    <div
      onClick={handleGoogleClick}
      className="flex gap-2 justify-center border border-slate-600 py-2 rounded hover:cursor-pointer"
    >
      {isLoading ? (
        "Loading..."
      ) : (
        <>
          <img className="w-6 h-6" src="/google.png" alt="google" />
          <p>Login with google</p>
        </>
      )}
    </div>
  );
}

export default GoogleLogin;
