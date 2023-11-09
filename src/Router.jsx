import { Navigate, Route, Routes } from "react-router-dom";
import LaunchScreen from "./screens/LaunchScreen";
import HomeScreen from './screens/Home';
import { BDSurvey } from "./screens/BDSurvey";
import {VerifyBDSurvey} from './screens/BDSurvey/VerifyBDSurvey';
import  EmailScreen  from "./screens/EmailScreen";

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/LaunchScreen" />} />
      <Route path="/index.html" element={<Navigate replace to="/LaunchScreen" />} />
      <Route path="/LaunchScreen" element={<LaunchScreen />} />
      <Route path="/HomeScreen" element={<HomeScreen />} />
      <Route path="/BDSurvey" element={<BDSurvey />} />
      <Route path="/VerifyBDSurvey" element={<VerifyBDSurvey />} />
      <Route path="/EmailScreen" element={<EmailScreen />} />
    </Routes>
  );
}
