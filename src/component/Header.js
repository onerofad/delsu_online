import Form from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Container, Button, NavDropdown } from 'react-bootstrap'

const Header = () => {
    return(
    <Navbar expand="lg" className="bg-body-light">
      <Container>
        <Navbar.Brand href="#">
            <h4 style={{color: '#0096ff', fontFamily: 'Mulish', fontSize: 35, fontWeight: 800, fontStyle: 'normal'}}>
                Delsu Online
            </h4>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" style={{fontSize: 16, fontFamily: 'Inria Serif', fontWeight: 400, fontStyle: "normal"}}>Our Courses</Nav.Link>
            <Nav.Link href="#action2" style={{fontSize: 16, fontFamily: 'Inria Serif', fontWeight: 400, fontStyle: "normal"}}>Join Us</Nav.Link>
            <NavDropdown style={{fontSize: 16, fontFamily: 'Inria Serif', fontWeight: 400, fontStyle: "normal"}} title="Latest Courses" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
          
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button style={{color: '#fff', backgroundColor: '#0096ff'}} variant="outline-primary">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}
export default Header
