import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function Header() {
  const linkStyle = {
    textDecoration: "none",
    marginLeft: "20px",
  };
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/home">Online Quiz</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Link style={linkStyle} to="/">
              Home
            </Link>
            <Link style={linkStyle} to="/topic">
              Topic
            </Link>
            <Link style={linkStyle} to="/statistics">
              Statistics
            </Link>
            <Link style={linkStyle} to="/blogs">
              Blog
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
