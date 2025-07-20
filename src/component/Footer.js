import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

const Footer = () => {
    return(
        <div className="" style={{color: '#fff', paddingTop: 50, paddingBottom: 50, backgroundColor: '#2980b9'}}>
            <Container>
                <Row>
                    <Col xs={12} md={3}>
                        <h4 style={{fontSize: 20, fontWeight: 700, fontStyle: "normal", fontFamily: "mullin"}}>Quick links</h4>
                        <p>
                            <a className="text-white text-decoration-none" style={{fontSize: 14, fontWeight: 400, fontStyle: "normal", fontFamily: "Inria Serif", color: "#000"}} href="/">Mission & Vision</a>
                        </p>
                         <p>
                            <a className="text-white text-decoration-none" style={{fontSize: 14, fontWeight: 400, fontStyle: "normal", fontFamily: "Inria Serif", color: "#000"}} href="/">About us</a>

                        </p>
                         <p>
                            <a className="text-white text-decoration-none" style={{fontSize: 14, fontWeight: 400, fontStyle: "normal", fontFamily: "Inria Serif", color: "#000"}} href="/">Out partners</a>

                        </p>
                         <p>
                            <a className="text-white text-decoration-none" style={{fontSize: 14, fontWeight: 400, fontStyle: "normal", fontFamily: "Inria Serif", color: "#000"}} href="/">General Courses</a>
                        </p>
                         <p>
                            <a className="text-white text-decoration-none" style={{fontSize: 14, fontWeight: 400, fontStyle: "normal", fontFamily: "Inria Serif", color: "#000"}} href="/">Student Testimonials</a>

                        </p>
                        <br/>
                    </Col>
                    <Col xs={12} md={3}>
                        <h4 style={{fontSize: 20, fontWeight: 700, fontStyle: "normal", fontFamily: "mullin"}}>Vocations</h4>
                        <p>
                            <a className="text-white text-decoration-none" style={{fontSize: 14, fontWeight: 400, fontStyle: "normal", fontFamily: "Inria Serif", color: "#000"}} href="/">Fashion courses</a>
                        </p>
                         <p>
                            <a className="text-white text-decoration-none" style={{fontSize: 14, fontWeight: 400, fontStyle: "normal", fontFamily: "Inria Serif", color: "#000"}} href="/">Software courses</a>

                        </p>
                         <p>
                            <a className="text-white text-decoration-none" style={{fontSize: 14, fontWeight: 400, fontStyle: "normal", fontFamily: "Inria Serif", color: "#000"}} href="/">Fish farming </a>

                        </p>
                         <p>
                            <a className="text-white text-decoration-none" style={{fontSize: 14, fontWeight: 400, fontStyle: "normal", fontFamily: "Inria Serif", color: "#000"}} href="/">Soap making courses</a>
                        </p>
                         <p>
                            <a className="text-white text-decoration-none" style={{fontSize: 14, fontWeight: 400, fontStyle: "normal", fontFamily: "Inria Serif", color: "#000"}} href="/">Bead making courses</a>

                        </p>
                        <br/>
                    </Col>
                    <Col xs={12} md={3}>
                        <h4 style={{fontSize: 20, fontWeight: 700, fontStyle: "normal", fontFamily: "mullin"}}>Communities</h4>
                        <p>
                            <a className="text-white text-decoration-none" style={{fontSize: 14, fontWeight: 400, fontStyle: "normal", fontFamily: "Inria Serif", color: "#000"}} href="/">Discussion groups</a>
                        </p>
                         <p>
                            <a className="text-white text-decoration-none" style={{fontSize: 14, fontWeight: 400, fontStyle: "normal", fontFamily: "Inria Serif", color: "#000"}} href="/">Play games</a>

                        </p>
                         <p>
                            <a className="text-white text-decoration-none" style={{fontSize: 14, fontWeight: 400, fontStyle: "normal", fontFamily: "Inria Serif", color: "#000"}} href="/">Other activities</a>

                        </p>
                        <br/>
                    </Col>
                    <Col xs={12} md={3}>
                        <h4 style={{fontSize: 20, fontWeight: 700, fontStyle: "normal", fontFamily: "mullin"}}>More</h4>
                        <p>
                            <a className="text-white text-decoration-none" style={{fontSize: 14, fontWeight: 400, fontStyle: "normal", fontFamily: "Inria Serif", color: "#000"}} href="/">Help</a>
                        </p>
                         <p>
                            <a className="text-white text-decoration-none" style={{fontSize: 14, fontWeight: 400, fontStyle: "normal", fontFamily: "Inria Serif", color: "#000"}} href="/">Feedback</a>

                        </p>
                         <p>
                            <a className="text-white text-decoration-none" style={{fontSize: 14, fontWeight: 400, fontStyle: "normal", fontFamily: "Inria Serif", color: "#000"}} href="/">Support</a>

                        </p>
                        <br/>
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col>
                        <span style={{fontFamily: "Inria Serif", fontSize: 16, fontStyle: "normal", fontWeight: 400}}>
                            &copy;2025 Delsu online. All rights reserved
                        </span>
                    </Col>
                </Row>
            </Container>
        </div>

    )
}
export default Footer