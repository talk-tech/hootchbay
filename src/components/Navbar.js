import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../styles/Navbar.css"

function NavbarSide() {
  return (
    <Navbar className="navbar"  expand="md">
      <Container>
        <Navbar.Brand href="/" className="logo"><span className='brand-name'>HOOTCH</span> <span className='next-brand'>BAY</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="/" className="nav-item-name">Home</Nav.Link>
            <Nav.Link href="/search" className="nav-item-name">Search</Nav.Link>
            <Nav.Link href="/collections" className="nav-item-name">Collections</Nav.Link>
            <Nav.Link href="/about" className="nav-item-name">About</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/developerpanel" className="developer-link">Developer</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarSide;
