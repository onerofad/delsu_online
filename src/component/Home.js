import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"
import Container from 'react-bootstrap/Container'

import { Image } from "react-bootstrap"
import img from "../component/back2.jpeg"
import Header from "./Header"
import Collaborations from "./Collaborations"
import PopularCourses from "./PopularCourses"
import Community from "./Community"
import Testimonies from "./Testimonies"
import Footer from "./Footer"


const Home = ({mobile}) => {
    return(
        <>
        <Header />
        <div className="py-0" style={{
                backgroundColor: '#2980b9', 
                height: 400
            }}>
        <Container>
            <Row>
                <Col md="8" className="py-4" style={{}}>
                    <h2 style={{
                        fontFamily: "Montserrat",
                        fontWeight: 700,
                        fontStyle: "normal",
                        fontSize: mobile ? 32: 42,
                        display: 'block'
                    }} 
                        className="text-white py-4">
                        Recreate your learning experience
                        today!
                    </h2>
                    <h4 className="" style={{
                         fontFamily: "Inria Serif",
                         fontWeight: 400,
                         fontStyle: "normal",
                         color: 'ButtonFace',
                         display: 'block',
                         fontSize: mobile ? 18: 20
                    }}>
                        Join us now and enhance your
                        learning <br/>experience through delsu online
                    </h4>
                    <Button 
                        color="#0096ff" 
                        className="mt-4" 
                        size="lg" 
                        variant="light"
                        style={{
                            fontFamily: "Inria Serif",
                            fontWeight: 400,
                            fontStyle: "normal"
                        }}>
                        Get Started Now
                    </Button>
                    </Col>
                    <Col md="4">
                        <Image
                            fluid
                            src={img}
                            style={{
                                height: 400,
                                display: mobile ? "none": "block"

                            }}
                        />
                    </Col>
            </Row>
        </Container>
        </div>
        <Collaborations />
        <PopularCourses />
        <Testimonies />
        <Community />
        <Footer />

        </>
    )
}
export default Home