import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Card, ListGroup, Container, Button } from "react-bootstrap";

const CourseDetail = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    const storedCourses = JSON.parse(localStorage.getItem("courses")) || [];
    const foundCourse = storedCourses.find((c) => c.id === id);
    setCourse(foundCourse);
  }, [id]);

  if (!course) {
    return (
      <Container className="mt-5 text-center">
        <h4>Course not found!</h4>
      </Container>
    );
  }

  const handleAddToCart = () => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    const alreadyInCart = existingCart.find((item) => item.id === course.id);

    if (!alreadyInCart) {
      const updatedCart = [...existingCart, course];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      alert("Course added to cart!");
    } else {
      alert("Course is already in your cart.");
    }
  };

  return (
    <Container className="mt-5 d-flex justify-content-center">
      <Card className="shadow-sm" style={{ maxWidth: "350px", width: "100%" }}>
        <Card.Img
          variant="top"
          src={course.image}
          style={{ height: "180px", objectFit: "cover" }}
        />
        <Card.Body>
          <Card.Title className="text-center mb-2" style={{ fontSize: "1.4rem" }}>
            {course.title}
          </Card.Title>

          <Card.Text style={{ fontSize: "0.95rem" }}>
            <strong>Instructor:</strong> {course.instructor}
          </Card.Text>
          <Card.Text style={{ fontSize: "0.95rem" }}>
            <strong>Price:</strong> ₹{course.price}
          </Card.Text>
          <Card.Text style={{ fontSize: "0.95rem" }}>
            <strong>Description:</strong> {course.description}
          </Card.Text>

          <h6 className="mt-3">Lessons:</h6>
          <ListGroup className="mb-3">
            {course.lessons.map((lesson, index) => (
              <ListGroup.Item key={index} style={{ fontSize: "0.9rem" }}>
                {lesson}
              </ListGroup.Item>
            ))}
          </ListGroup>

          <div className="d-grid">
            <Button variant="primary" size="sm" onClick={handleAddToCart}>
              Add to Cart
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default CourseDetail;
