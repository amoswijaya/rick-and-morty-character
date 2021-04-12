import { Navbar, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
export default function NavBar() {
  return (
    <>
      <Navbar bg="light" expand="lg" className="d-flex bd-highlight mb-3 fixed-top">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="p-2 bd-highlight">
          <Nav className="mr-auto">
            <NavLink to="/" className="nav-link">Home</NavLink>
            <NavLink to="/character" className="nav-link">Favorite Character</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}