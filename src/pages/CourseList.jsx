import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, Button, Container, Row, Col } from "react-bootstrap";

const CourseList = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const storedCourses = JSON.parse(localStorage.getItem("courses")) || [];
    setCourses(storedCourses);
  }, []);

  return (
    <Container className="mt-4">
      <h2 className="mb-4">Available Courses</h2>
      <Row>
        {courses.length > 0 ? (
          courses.map((course) => (
            <Col key={course.id} md={6} lg={4} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Img
                  variant="top"
                  src={course.image}
                  alt={course.title}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{course.title}</Card.Title>
                  <Card.Text>Instructor: {course.instructor}</Card.Text>
                  <Card.Text>Price: ₹{course.price}</Card.Text>
                  <Button
                    as={Link}
                    to={`/courses/${course.id}`}
                    variant="primary"
                    className="mt-auto"
                  >
                    View Details
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <p>No courses available. Please contact admin.</p>
        )}
      </Row>
    </Container>
  );
};

export default CourseList;
