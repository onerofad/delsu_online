import { Col, Container, Row, Card } from "react-bootstrap"
import { LiaUniversitySolid } from "react-icons/lia"

const Collaborations = ({mobile}) => {
    return(
        <div style={{paddingTop: 50, paddingBottom: 50}} className="bg-body-tertiary">
            <Container>
                <Row>
                    <Col>
                        <h4 style={{fontSize: 35, fontStyle: "normal", fontWeight: 700, fontFamily: "Mullin", color: "#000"}} className="text-center">Our partner univerities</h4>
                        <h4 className="text-center" style={{display: "block", fontSize: 18, fontStyle: "normal", fontWeight: 400, fontFamily: "Inria Serif", color: "#000"}}>
                            We collaborate with top universities to bring the best courses to our students
                        </h4>
                    </Col>
                </Row>
                <Row className="pt-4">
                    <Col md={3} xs={6}  style={{textAlign: "center"}}>
                        <Card border="primary" style={{backgroundColor: '#2980b9', justifyContent: "center", alignItems: "center"}}>
                            <LiaUniversitySolid color="#fff"  size={80} />
                            <h5 style={{color: '#fff', fontSize: 20, fontWeight: 700, fontStyle: "normal", fontFamily: "Inria Serif"}}>University of Ibadan</h5>
                       </Card>
                       <br/>
                    </Col>
                    <Col md={3} xs={6} style={{textAlign: "center"}}>
                        <Card border="primary" style={{backgroundColor: '#2980b9', justifyContent: "center", alignItems: "center"}}>
                            <LiaUniversitySolid color="#fff"  size={80} />
                            <h5 style={{color: '#fff', fontSize: 20, fontWeight: 700, fontStyle: "normal", fontFamily: "Inria Serif"}}>University of Nigeria</h5>
                        </Card>
                        <br/>
                    </Col>
                    <Col md={3} xs={6} style={{textAlign: "center"}}>
                       <Card border="primary" style={{backgroundColor: '#2980b9', justifyContent: "center", alignItems: "center"}}> 
                            <LiaUniversitySolid color="#fff"  size={80} />
                            <h5 style={{color: '#fff', fontSize: 20, fontWeight: 700, fontStyle: "normal", fontFamily: "Inria Serif"}}>University of Lagos</h5>
                       </Card>
                       <br/>
                    </Col>
                    <Col md={3} xs={6} style={{textAlign: "center"}}>
                       <Card border="primary" style={{backgroundColor: '#2980b9', justifyContent: "center", alignItems: "center"}}> 
                            <LiaUniversitySolid color="#fff"  size={80} />
                            <h5 style={{color: '#fff', fontSize: 20, fontWeight: 700, fontStyle: "normal", fontFamily: "Inria Serif"}}>University of Ilorin</h5>
                       </Card><br/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Collaborations