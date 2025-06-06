import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavScrollExample() {
  return (
    <Navbar expand="lg" style={{ backgroundColor: 'orange' }}>
      <Container fluid>
        <Navbar.Brand href="#" style={{ color: 'white', fontWeight: 'bold' }}>
          <img
            src="public/images.jpeg"
            alt="Logo"
            width="30"
            height="30"
            className="d-inline-block align-top me-2"/>          
          VTS ACADAMY</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" style={{ color: 'white' }}>Home</Nav.Link>
            <Nav.Link href="#action2" style={{ color: 'white' }}>About</Nav.Link>
            <Nav.Link href="#action2" style={{ color: 'white' }}>Contact</Nav.Link>
            <NavDropdown title="Course" id="navbarScrollingDropdown" menuVariant="dark">
              <NavDropdown.Item href="#action3">React</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Node</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="dark">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
