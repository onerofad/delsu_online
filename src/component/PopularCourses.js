import { Button, Card, Container, Row, Col, Modal, Image, CloseButton } from "react-bootstrap"
import img2 from "../component/courses4.jpg"
import { BiPlay, BiSolidVideo } from "react-icons/bi"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useState } from "react";

const PopularCourses = ({mobile}) => {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    const all_courses = [
        {
            id: "1",
            image: img2,
            title: "GST 101",
            text: "Some quick example text to build on the card title and make up the bulk of the cards content.",
            video: "https://player.cloudinary.com/embed/?cloud_name=du3ck2joa&public_id=delsu%2Ftie_zbdlhu&profile=cld-default"
        },
        {
            id: "2",
            image: img2,
            title: "GST 102",
            text: "Some quick example text to build on the card title and make up the bulk of the cards content.",
            video: "https://player.cloudinary.com/embed/?cloud_name=du3ck2joa&public_id=delsu%2Ftie_zbdlhu&profile=cld-default"
        },
        {
            id: "3",
            image: img2,
            title: "GST 103",
            text: "Some quick example text to build on the card title and make up the bulk of the cards content.",
            video: "https://player.cloudinary.com/embed/?cloud_name=du3ck2joa&public_id=delsu%2Ftie_zbdlhu&profile=cld-default"

        },
        {
            id: "4",
            image: img2,
            title: "GST 104",
            text: "Some quick example text to build on the card title and make up the bulk of the cards content.",
            video: "https://player.cloudinary.com/embed/?cloud_name=du3ck2joa&public_id=delsu%2Ftie_zbdlhu&profile=cld-default"
        },
        {
            id: "5",
            image: img2,
            title: "GST 105",
            text: "Some quick example text to build on the card title and make up the bulk of the cards content.",
            video: "https://player.cloudinary.com/embed/?cloud_name=du3ck2joa&public_id=delsu%2Ftie_zbdlhu&profile=cld-default"
        },
        {
            id: "6",
            image: img2,
            title: "GST 106",
            text: "Some quick example text to build on the card title and make up the bulk of the cards content.",
            video: "https://player.cloudinary.com/embed/?cloud_name=du3ck2joa&public_id=delsu%2Ftie_zbdlhu&profile=cld-default"
        },
    ]

    
    const [loading, setLoading] = useState(false)

    const [show, setShow] = useState(false)

    const handleClose = () => {
        setShow(false)
    }

    const handleCourse = () => {
        setShow(true)
    }

    const [url, setUrl] = useState('https://player.cloudinary.com/embed/?cloud_name=du3ck2joa&public_id=delsu%2Ftie_zbdlhu&profile=cld-default')

    let courses
    courses = all_courses.map(m => (
        <div style={{margin: 10}}>
            <Card className="">
                <Card.Img variant="top" src={m.image} />
                    <Card.Body>
                        <Card.Title style={{fontSize: 20, fontWeight: 700, fontStyle: "normal", fontFamily: "mullin"}}>{m.title}</Card.Title>
                        <Card.Text style={{fontSize: 16, fontWeight: 400, fontStyle: "normal", fontFamily: "Inria Serif"}}>
                            {m.text}
                        </Card.Text>
                        <Button onClick={handleCourse} style={{backgroundColor: '#2980b9', fontWeight: 400, fontStyle: 'normal', fontFamily: "Inria Serif", fontSize: 16}}>
                            <BiSolidVideo color="#fff" />&nbsp;
                             View watch
                        </Button>
                    </Card.Body>
            </Card>
        </div>
    ))

    return(
        <div style={{paddingTop: 50, paddingBottom: 50}} className="bg-body-tertiary">
            <Container>
                <Row className="pb-4">
                    <Col>
                        <h4 style={{fontSize: 35, fontStyle: "normal", fontWeight: 700, fontFamily: "Mullin", color: "#000"}} className="text-center">General courses</h4>
                    </Col>
                </Row>
                    <Carousel responsive={responsive}>
                        {courses}
                    </Carousel>; 
            </Container>
            <Modal
                show={show}
                onHide={handleClose}
                size="md"
                backdrop="static"
            >
                <Modal.Header className="bg-dark text-white">
                    <Modal.Title>GST 101 Course</Modal.Title>
                    <CloseButton onClick={handleClose} className="bg-white" />
                </Modal.Header>
                <Modal.Body className="bg-dark">
                    <Card className="bg-dark text-white">
                        <iframe
                            src={url}
                            style={{width: '100%', height: 300}}
                            allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                            allowfullscreen
                            frameborder="0">                               
                        </iframe>
                        <Card.Body className="bg-dark">
                            <Row>
                                <Col>
                                    <h4>Course Content</h4>
                                </Col>
                            </Row>
                            <hr/>
                            <Row>
                                <Col md={2}>
                                    <Image style={{width: 60, height: 40}} src={img2} />
                                </Col>
                                <Col md={6}>
                                    <Card.Text>course Introduction</Card.Text>
                                </Col>
                                <Col md={2}>
                                    <Card.Text>2:56</Card.Text>
                                </Col>
                                <Col md={2}>
                                    <BiPlay style={{cursor: 'pointer'}} onClick={() => setUrl('https://player.cloudinary.com/embed/?cloud_name=du3ck2joa&public_id=delsu%2Ftie_zbdlhu&profile=cld-default')} size={30} color="#fff" />
                                </Col>
                            </Row>
                            <hr/>
                             <Row>
                                <Col md={2}>
                                    <Image style={{width: 60, height: 40}} src={img2} />
                                </Col>
                                <Col md={6}>
                                    <Card.Text>fundamental of GST</Card.Text>
                                </Col>
                                <Col md={2}>
                                    <Card.Text>2:56</Card.Text>
                                </Col>
                                <Col md={2}>
                                    <BiPlay size={30} color="#fff" />
                                </Col>
                            </Row>
                            <hr/>
                             <Row>
                                <Col md={2}>
                                    <Image style={{width: 60, height: 40}} src={img2} />
                                </Col>
                                <Col md={6}>
                                    <Card.Text>Culture and Religion</Card.Text>
                                </Col>
                                <Col md={2}>
                                    <Card.Text>2:56</Card.Text>
                                </Col>
                                <Col md={2}>
                                    <BiPlay size={30} color="#fff" />
                                </Col>
                            </Row>
                            <hr/>
                             <Row>
                                <Col md={2}>
                                    <Image style={{width: 60, height: 40}} src={img2} />
                                </Col>
                                <Col md={6}>
                                    <Card.Text>Nigerian History</Card.Text>
                                </Col>
                                <Col md={2}>
                                    <Card.Text>2:56</Card.Text>
                                </Col>
                                   <Col md={2}>
                                    <BiPlay size={30} color="#fff" />
                                </Col>
                            </Row>
                            <hr/>
                             <Row>
                                <Col md={2}>
                                    <Image style={{width: 60, height: 40}} src={img2} />
                                </Col>
                                <Col md={6}>
                                    <Card.Text>Nigerian civil war</Card.Text>
                                </Col>
                                <Col md={2}>
                                    <Card.Text>2:56</Card.Text>
                                </Col>
                                   <Col md={2}>
                                    <BiPlay size={30} color="#fff" />
                                </Col>
                            </Row>
                            <hr/>
                             <Row>
                                <Col md={2}>
                                    <Image style={{width: 60, height: 40}} src={img2} />
                                </Col>
                                <Col md={6}>
                                    <Card.Text>Nigerian Government Institutions</Card.Text>
                                </Col>
                                <Col md={2}>
                                    <Card.Text>2:56</Card.Text>
                                </Col>
                                <Col md={2}>
                                    <BiPlay size={30} color="#fff" />
                                </Col>
                            </Row>
                            <hr/>
                        </Card.Body>
                    </Card>
                </Modal.Body>
            </Modal>
        </div>
    )
}
export default PopularCourses