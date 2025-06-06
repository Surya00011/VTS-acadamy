import { Card, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  return (
    <Card style={{ width: "300px" }} className="m-2 shadow">
      <Card.Img
        variant="top"
        src={course.image}
        style={{ height: "150px", objectFit: "cover" }}
      />
      <Card.Body>
        <Card.Title>{course.title}</Card.Title>
        <Card.Text>
          <strong>Instructor:</strong> {course.instructor}
        </Card.Text>
        <Card.Text>
          <strong>Price:</strong> ₹{course.price}
        </Card.Text>
        <Link to={`/courses/${course.id}`} className="btn btn-primary">
          View Details
        </Link>
      </Card.Body>
    </Card>
  );
};

export default CourseCard;
