import Form from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Container, Row, Col, Button } from 'react-bootstrap'

const Header = () => {
    return(
        <Container>
        <Row>
            <Col>
                <Navbar expand="lg" style={{}} class="navbar navbar-expand-sm bg-light navbar-light">
                        <Navbar.Brand>
                            <h4 style={{
                                    color: "#0096ff",
                                    fontFamily: "Mulish",
                                    fontSize: 40,
                                    fontWeight: 800,
                                    fontStyle: "normal"
                                }}>
                                Delsu online
                            </h4>
                        </Navbar.Brand>
                         <Nav className="">
                            <Nav.Item>
                                <Nav.Link style={{
                                    fontSize: 20,
                                    fontFamily: "Inria Serif",
                                    fontWeight: 400,
                                    fontStyle: "normal"

                                }}>Courses</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link style={{
                                    fontSize: 20,
                                    fontFamily: "Inria Serif",
                                    fontWeight: 400,
                                    fontStyle: "normal"
                                }}>Lectures</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Form className="mr-auto">
                                    <Form.Group>
                                        <Form.Control
                                            placeholder="Search courses"
                                            type="text"
                                            className="outline-primary"
                                            style={{
                                                width: 400,
                                                borderRadius: 20,
                                                fontSize: 20,
                                                fontFamily: "Inria Serif",
                                                fontWeight: 400,
                                                fontStyle: "normal"
                                            }}
                                        />
                                    </Form.Group>
                                </Form>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link 
                                    style={{
                                        fontSize: 20,
                                        fontFamily: "Inria Serif",
                                        fontWeight: 400,
                                        fontStyle: "normal"
                                    }} 
                                    href="login"
                                >
                                    Log in
                                    </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Button 
                                    style={{
                                        fontSize: 20,
                                        fontFamily: "Inria Serif",
                                        fontWeight: 400,
                                        fontStyle: "normal"
                                    }}  
                                    className="lg" 
                                    variant="outline-primary"
                                >
                                    Sign up
                                </Button>
                            </Nav.Item>
                           
                        </Nav>

                </Navbar>
            </Col>
        </Row>
        </Container>
    )
}
export default Header