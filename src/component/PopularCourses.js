import { Button, Card, Container, Row, Col } from "react-bootstrap"
import img2 from "../component/courses4.jpg"
import { BiSolidVideo } from "react-icons/bi"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const PopularCourses = ({mobile}) => {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 4
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
        },
        {
            id: "2",
            image: img2,
            title: "GST 102",
            text: "Some quick example text to build on the card title and make up the bulk of the cards content.",
        },
        {
            id: "3",
            image: img2,
            title: "GST 103",
            text: "Some quick example text to build on the card title and make up the bulk of the cards content.",
        },
        {
            id: "4",
            image: img2,
            title: "GST 104",
            text: "Some quick example text to build on the card title and make up the bulk of the cards content.",
        },
        {
            id: "5",
            image: img2,
            title: "GST 105",
            text: "Some quick example text to build on the card title and make up the bulk of the cards content.",
        },
        {
            id: "6",
            image: img2,
            title: "GST 106",
            text: "Some quick example text to build on the card title and make up the bulk of the cards content.",
        },
    ]

    let courses
    courses = all_courses.map(m => (
        <div style={{margin: 10}}>
            <Card className="bg-body-tertiary">
                <Card.Img variant="top" src={m.image} />
                    <Card.Body>
                        <Card.Title style={{fontSize: 20, fontWeight: 700, fontStyle: "normal", fontFamily: "mullin"}}>{m.title}</Card.Title>
                        <Card.Text style={{fontSize: 16, fontWeight: 400, fontStyle: "normal", fontFamily: "Inria Serif"}}>
                            {m.text}
                        </Card.Text>
                        <Button style={{backgroundColor: '#0096ff', fontWeight: 400, fontStyle: 'normal', fontFamily: "Inria Serif", fontSize: 16}}>
                            <BiSolidVideo color="#fff" />&nbsp;
                             View watch
                        </Button>
                    </Card.Body>
            </Card>
        </div>
    ))

    return(
        <div style={{paddingTop: 50, paddingBottom: 50}} className="">
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
        </div>
    )
}
export default PopularCourses