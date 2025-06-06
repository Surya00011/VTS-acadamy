import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import CourseList from "../pages/CourseList";
import CourseDetail from "../pages/CourseDetail";
import ProtectedRoute from "../components/ProtectedRoute";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route
      path="/courses"
      element={
        <ProtectedRoute>
          <CourseList />
        </ProtectedRoute>
      }
    />
    <Route
      path="/courses/:id"
      element={
        <ProtectedRoute>
          <CourseDetail />
        </ProtectedRoute>
      }
    />
  </Routes>
);

export default AppRoutes;
