import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaCartShopping } from "react-icons/fa6";
import { courses as defaultCourses } from "../constants/courses"; 

function NavBar() {
  const [courses, setCourses] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedCourses = JSON.parse(localStorage.getItem("courses"));
    if (storedCourses && storedCourses.length > 0) {
      setCourses(storedCourses);
    } else {
      setCourses(defaultCourses);
      localStorage.setItem("courses", JSON.stringify(defaultCourses));
    }
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();

    const found = courses.find((course) =>
      course.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (found) {
      navigate(`/courses/${found.id}`);
    } else {
      alert("No course found with that title.");
    }

    setSearchQuery("");
  };

  return (
    <Navbar expand="lg" style={{ backgroundColor: "orange" }} sticky="top">
      <Container fluid>
        <Navbar.Brand
          as={Link}
          to="/"
          style={{ color: "white", fontWeight: "bold" }}
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyZFbnyGrRjGc5REK09YVDAl3lxMBi2KC3Mw&s"
            alt="Logo"
            width="30"
            height="30"
            className="d-inline-block align-top me-2"
          />
          VTS ACADEMY
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <Nav.Link as={Link} to="/" style={{ color: "black" }}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" style={{ color: "black" }}>
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/cart" style={{ color: "dark" }}>
              <FaCartShopping /> Cart
            </Nav.Link>
            <NavDropdown
              title="Course"
              id="navbarScrollingDropdown"
              menuVariant="black"
            >
              {courses.length === 0 ? (
                <NavDropdown.Item disabled>No Courses</NavDropdown.Item>
              ) : (
                courses.map((course) => (
                  <NavDropdown.Item
                    key={course.id}
                    as={Link}
                    to={`/courses/${course.id}`}
                  >
                    {course.title}
                  </NavDropdown.Item>
                ))
              )}
            </NavDropdown>
          </Nav>
          <Nav.Link
            as={Link}
            to="/login"
            style={{ color: "black" }}
            className="me-3"
          >
            Login
          </Nav.Link>

          <Form className="d-flex" onSubmit={handleSearch}>
            <Form.Control
              type="search"
              placeholder="Search Courses"
              className="me-2"
              aria-label="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button variant="dark" type="submit">
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
