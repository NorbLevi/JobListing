import { Navigate, Route, Routes } from "react-router-dom";
import { LandingPage } from "../modules/Landing/Landing";
import Register from "../modules/Build/user/Register";
import Login from "../modules/Build/user/Login";
import Dashboard from "../modules/Build/dashboard/employerdashboard/Dashboard";
import EmployeeDashboard from "../modules/Build/dashboard/EmployeeDashboard/EmployeeDashboard";
import JobSearchPage from "../modules/Build/Searchengine/JobSearchPage";
import SingleEmployerViewer from "../modules/Build/Searchengine/SingleEmployerViewer";
import JobApplicationTab from "../modules/Build/Searchengine/JobApplicationTab";
import EmployerViewer from "../modules/Build/Searchengine/EmployerViewer";



export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={ <Dashboard /> }/>
      <Route path="/clientdashboard" element={ <EmployeeDashboard/>}/>
      <Route path="/jobs" element={JobSearchPage} />
        <Route path="/job/:id" element={SingleJobViewer} />
        <Route path="/apply/:id" element={JobApplicationTab} />
        <Route path="/employers" element={EmployerViewer} />
        <Route path="/employer/:id" element={SingleEmployerViewer} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
