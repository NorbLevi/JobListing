import { Navigate, Route, Routes } from "react-router-dom";
import { LandingPage } from "../modules/Landing/Landing";
import Register from "../modules/Build/user/Register";
import Login from "../modules/Build/user/Login";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
