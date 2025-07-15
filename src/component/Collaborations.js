import { Col, Container, Row } from "react-bootstrap"
import { LiaUniversitySolid } from "react-icons/lia"

const Collaborations = ({mobile}) => {
    return(
        <div style={{paddingTop: 50, paddingBottom: 50}} className="bg-body-tertiary">
            <Container>
                <Row>
                    <Col>
                        <h4 style={{fontSize: 35, fontStyle: "normal", fontWeight: 700, fontFamily: "Mullin", color: "#000"}} className="text-center">We partner with other univerities</h4>
                        <h4 className="text-center" style={{display: "block", fontSize: 18, fontStyle: "normal", fontWeight: 400, fontFamily: "Inria Serif", color: "#000"}}>
                            We are collaborating with other universities home and
                            abroad to bring the best courses to our students at
                            Delta State University
                        </h4>
                    </Col>
                </Row>
                <Row className="pt-4">
                    <Col className="col-md-3 sm-6"  style={{textAlign: "center"}}>
                       <LiaUniversitySolid color="#0096ff"  size={80} />
                       <h5>University of Ibadan</h5>
                    </Col>
                    <Col className="col-md-3 sm-6"  style={{textAlign: "center"}}>
                       <LiaUniversitySolid color="#0096ff"  size={80} />
                       <h5>University of Nigeria</h5>
                    </Col>
                    <Col className="col-md-3 sm-6" style={{textAlign: "center"}}>
                       <LiaUniversitySolid color="#0096ff"  size={80} />
                       <h5>University of Lagos</h5>
                    </Col>
                    <Col className="col-md-3 sm-6"  style={{textAlign: "center"}}>
                       <LiaUniversitySolid color="#0096ff"  size={80} />
                       <h5 className="text-center">MIT</h5>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Collaborations