import { useEffect, useState } from "react";
import CourseCard from "../components/CouseCard.jsx";
import Footer from "../components/Footer.jsx";
import { courses as defaultCourses } from "../constants/courses.js";

const Home = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const storedCourses = localStorage.getItem("courses");
    if (storedCourses) {
      setCourses(JSON.parse(storedCourses));
    } else {
      setCourses(defaultCourses);
      localStorage.setItem("courses", JSON.stringify(defaultCourses));
    }
  }, []);

  return (
    <div>
      {/* Banner Section */}
      <div
        style={{
          position: "relative",
          textAlign: "center",
          color: "white",
          margin: "20px",
        }}
      >
        <img
          src="homebanner.jpg"
          alt="LMS Banner"
          style={{ width: "100%", height: "350px", objectFit: "cover" }}
        />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "rgba(0,0,0,0.5)",
            padding: "20px 40px",
            borderRadius: "10px",
          }}
        >
          <h1 style={{ fontSize: "3rem", fontWeight: "bold" }}>
            Welcome to VTS Academy
          </h1>
          <p className="lead">Learn new skills online with top instructors.</p>
        </div>
      </div>

      {/* Featured Courses Section */}
      <div className="container mt-5 d-flex flex-wrap justify-content-start">
        <h3 className="w-100 mb-3">Featured Courses</h3>
        {courses.length > 0 ? (
          courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))
        ) : (
          <p>No courses found. Please add some from Admin panel.</p>
        )}
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Home;
