import { courses } from "../constants/courses.js";
import CourseDetail from "./CourseDetail.jsx";

const Home = () => {
  return (
    <div>
      {/* Banner Section */}
      <div style={{ position: 'relative', textAlign: 'center', color: 'white', margin: "20px" }}>
        <img
          src="homebanner.jpg"
          alt="LMS Banner"
          style={{ width: '100%', height: '350px', objectFit: 'cover' }}
        />
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'rgba(0,0,0,0.5)',
            padding: '20px 40px',
            borderRadius: '10px',
          }}
        >
          <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>Welcome to VTS Academy</h1>
          <p className="lead">Learn new skills online with top instructors.</p>
        </div>
      </div>

      {/* Featured Courses Section */}
      <div className="container mt-5">
        <h3 className="mb-3">Featured Courses</h3>
        <CourseDetail courses={courses} />
      </div>
    </div>
  );
};

export default Home;
