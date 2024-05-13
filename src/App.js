import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Page/Home";
import Login from "./Page/Login";
import Signup from "./Page/Signup";
import AuthenticateWithEmail from "./Components/AuthenticationSignUp/AuthenticateWithEmail";
import AuthenticateWithOTP from "./Components/AuthenticateWithOTP";
import ResetPasswordWithEmail from "./Components/ResetPassword/ResetPasswordWithEmail";
import ResetPasswordWithOTP from "./Components/ResetPassword/ResetPasswordWithOTP";
import ResetPassword from "./Components/ResetPassword/ResetPassword";
import ConfirmCode from "./Page/ConfirmCode";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/confirm-code/:token" element={<ConfirmCode />} />
          <Route path="/forgot-password" element={<ResetPasswordWithEmail />} />
          <Route
            path="/resetPasswordWithOTP"
            element={<ResetPasswordWithOTP />}
          />
          <Route path="/resetPassword" element={<ResetPassword />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
