import React from "react";
import AuthenticateWithOTP from "../Components/AuthenticateWithOTP";
import { useParams } from "react-router-dom";

function ConfirmCode() {
  const { token } = useParams();

  return <AuthenticateWithOTP token={token} />;
}

export default ConfirmCode;
