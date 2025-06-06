import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import CourseList from "../pages/CourseList";
import CourseDetail from "../pages/CourseDetail";
import ProtectedRoute from "../components/ProtectedRoute";
import Admin from "../pages/admin";
import About from "../pages/About";
import Cart from "../pages/Cart";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route
      path="/admin"
      element={
        <ProtectedRoute>
          <Admin />
        </ProtectedRoute>
      }
    />
    <Route path="/courses" element={<CourseList />} />
    <Route path="/courses/:id" element={<CourseDetail />} />
    <Route path="/about" element={<About />} />
    <Route path="/cart" element={<Cart />} />
  </Routes>
);

export default AppRoutes;
