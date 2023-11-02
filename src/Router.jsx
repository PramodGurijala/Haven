import { Navigate, Route, Routes } from "react-router-dom";
import LaunchScreen from "./screens/LaunchScreen";
import HomeScreen from './screens/Home';

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/LaunchScreen" />} />
      <Route path="/index.html" element={<Navigate replace to="/LaunchScreen" />} />
      <Route path="/LaunchScreen" element={<LaunchScreen />} />
      <Route path="/HomeScreen" element={<HomeScreen />} />

    </Routes>
  );
}
