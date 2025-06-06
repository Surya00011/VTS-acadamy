import { Link } from "react-router-dom";
import { courses } from "../constants/courses";

const CourseList = () => (
  <div className="container mt-4">
    <h2>Available Courses</h2>
    <div className="row">
      {courses.map((course) => (
        <div key={course.id} className="col-md-6 mb-3">
          <div className="card">
            <img
              src={course.image}
              className="card-img-top"
              alt={course.title}
            />
            <div className="card-body">
              <h5 className="card-title">{course.title}</h5>
              <p className="card-text">{course.instructor}</p>
              <Link to={`/courses/${course.id}`} className="btn btn-primary">
                View Details
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default CourseList;
