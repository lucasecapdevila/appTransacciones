import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <Navbar bg="dark" expand="lg">
      <Navbar.Brand className='ms-2'>
        <Link className='nav-link list-unstyled text-white' to='/'>Inicio</Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className='light'>
        <Nav className="ms-auto">
          <Nav.Item>
            <Link className='nav-link list-unstyled text-white' to='/'>Transacciones</Link> 
          </Nav.Item>
          <Nav.Item>
            <Link className='nav-link list-unstyled text-white' to='/lista'>Lista de Transacciones</Link> 
          </Nav.Item>
          <Nav.Item>
            <Link className='nav-link list-unstyled text-white' to='/buscador'>Buscador de Transacciones</Link> 
          </Nav.Item>
          <Nav.Item>
            <Link className='nav-link list-unstyled text-white' to='/resumen'>Resumen</Link> 
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Menu;
