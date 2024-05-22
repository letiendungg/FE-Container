import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Page/Home";
import Login from "./Page/Login";
import Signup from "./Page/Signup";
import ConfirmCode from "./Page/ConfirmCode";
import ForgotPassword from "./Page/ForgotPassword";
import ResetPassword from "./Page/ResetPassword";
import Schedule from "./Page/Schedule";
import AboutUs from "./Page/AboutUs";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/confirm-code/:token" element={<ConfirmCode />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/AboutUs" element={<AboutUs/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
