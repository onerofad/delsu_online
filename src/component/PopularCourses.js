import { Button, Card, Container, Row, Col } from "react-bootstrap"
import img1 from "../component/unilag.jpg"
import img2 from "../component/courses4.jpg"
import { BsCameraVideo, BsViewList } from "react-icons/bs"
import { BiSolidVideo } from "react-icons/bi"

const PopularCourses = ({mobile}) => {

    return(
        <div style={{padding: mobile? 0 : 80}} className="">
            <Container>
                <Row className="pb-4">
                    <Col>
                        <h4 style={{fontSize: 35, fontStyle: "normal", fontWeight: 700, fontFamily: "Mullin", color: "#000"}} className="text-center">Our popular courses</h4>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <Card>
                            <Card.Img variant="top" src={img2} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button style={{backgroundColor: '#0096ff', fontWeight: 400, fontStyle: 'normal', fontFamily: "Inria Serif", fontSize: 16}}>
                                    <BiSolidVideo color="#fff" />&nbsp;
                                    View watch
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card>
                            <Card.Img variant="top" src={img2} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button style={{backgroundColor: '#0096ff' , fontWeight: 400, fontStyle: 'normal', fontFamily: "Inria Serif", fontSize: 16}}>
                                   <BiSolidVideo color="#fff" />&nbsp;
                                    View watch
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card>
                            <Card.Img variant="top" src={img2} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button style={{backgroundColor: '#0096ff', fontWeight: 400, fontStyle: 'normal', fontFamily: "Inria Serif", fontSize: 16}}>
                                    <BiSolidVideo color="#fff" />&nbsp;
                                    View watch
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default PopularCourses