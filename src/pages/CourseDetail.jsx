import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const CourseDetail = ({ courses }) => {
  return (
    <div className="row justify-content-center">
      {courses.map((course) => (
        <div key={course.id} className="col-sm-6 col-md-4 col-lg-3 mb-3">
          <Card
            className="shadow-sm"
            style={{ maxWidth: "260px", margin: "0 auto", fontSize: "0.9rem" }}
          >
            <Card.Img
              variant="top"
              src={course.image}
              style={{ height: "160px", objectFit: "cover" }}
            />
            <Card.Body className="d-flex flex-column p-2">
              <Card.Title style={{ fontSize: "1rem" }}>{course.title}</Card.Title>
              <Card.Text className="mb-1">Instructor: {course.instructor}</Card.Text>
              <Card.Text className="mb-2">Price: ₹{course.price}</Card.Text>
              <Button variant="primary" href="/login" className="btn-sm mt-auto">
                Learn
              </Button>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default CourseDetail;
