import { useState, useEffect } from "react";
import {
  Card,
  Form,
  Button,
  Container,
  Row,
  Col,
  ListGroup,
} from "react-bootstrap";

const Admin = () => {
  const [course, setCourse] = useState({
    id: "",
    title: "",
    instructor: "",
    price: "",
    image: "",
    description: "",
    lessons: ["", "", "", ""],
  });

  const [coursesList, setCoursesList] = useState([]);

  useEffect(() => {
    const storedCourses = JSON.parse(localStorage.getItem("courses")) || [];
    setCoursesList(storedCourses);
  }, []);

  const handleChange = (e) => {
    setCourse({ ...course, [e.target.name]: e.target.value });
  };

  const handleLessonChange = (index, value) => {
    const updatedLessons = [...course.lessons];
    updatedLessons[index] = value;
    setCourse({ ...course, lessons: updatedLessons });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const existingCourses = JSON.parse(localStorage.getItem("courses")) || [];

    // Prevent duplicate IDs
    if (existingCourses.find((c) => c.id === course.id)) {
      alert("Course ID already exists. Please use a unique ID.");
      return;
    }

    const updatedCourses = [...existingCourses, course];
    localStorage.setItem("courses", JSON.stringify(updatedCourses));
    setCoursesList(updatedCourses);
    alert("Course saved to localStorage!");
    setCourse({
      id: "",
      title: "",
      instructor: "",
      price: "",
      image: "",
      description: "",
      lessons: ["", "", "", ""],
    });
  };

  const handleDelete = (id) => {
    const filteredCourses = coursesList.filter((c) => c.id !== id);
    localStorage.setItem("courses", JSON.stringify(filteredCourses));
    setCoursesList(filteredCourses);
  };

  return (
    <Container className="mt-4">
      <Row>
        <Col md={6} lg={5}>
          <Card className="p-3 shadow-sm rounded-4">
            <Card.Title className="text-center mb-3 fs-4">
              Add New Course
            </Card.Title>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-2">
                <Form.Control
                  type="text"
                  name="id"
                  placeholder="Course ID"
                  value={course.id}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Control
                  type="text"
                  name="title"
                  placeholder="Course Title"
                  value={course.title}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Control
                  type="text"
                  name="instructor"
                  placeholder="Instructor Name"
                  value={course.instructor}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Control
                  type="number"
                  name="price"
                  placeholder="Course Price"
                  value={course.price}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Control
                  type="text"
                  name="image"
                  placeholder="Image URL"
                  value={course.image}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Control
                  as="textarea"
                  name="description"
                  placeholder="Course Description"
                  value={course.description}
                  onChange={handleChange}
                  rows={2}
                  required
                />
              </Form.Group>
              {course.lessons.map((lesson, index) => (
                <Form.Group key={index} className="mb-2">
                  <Form.Control
                    type="text"
                    placeholder={`Lesson ${index + 1}`}
                    value={lesson}
                    onChange={(e) => handleLessonChange(index, e.target.value)}
                  />
                </Form.Group>
              ))}
              <div className="d-grid mt-3">
                <Button type="submit" variant="primary">
                  Add Course
                </Button>
              </div>
            </Form>
          </Card>
        </Col>

        <Col md={6} lg={7}>
          <h4 className="mb-3">Existing Courses</h4>
          {coursesList.length === 0 ? (
            <p>No courses available.</p>
          ) : (
            <ListGroup>
              {coursesList.map(({ id, title }) => (
                <ListGroup.Item
                  key={id}
                  className="d-flex justify-content-between align-items-center"
                >
                  {title}
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => handleDelete(id)}
                  >
                    Delete
                  </Button>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Admin;
