import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Button from "react-bootstrap/Button"

import Container from "react-bootstrap/Container"
import { PiStudentFill } from "react-icons/pi"

const Community = () => {
    return(
        <div className="bg-body-tertiary" style={{paddingTop: 50, paddingBottom: 50}}>
            <Container>
                <Row>
                    <Col md={8}>
                        <h4 className="mt-4" style={{fontSize: 30, fontWeight: 700, fontStyle: "normal", fontFamily: "mullin"}}>
                            Join our vibrant student community
                        </h4>
                        <Button size="lg" className="mt-4" style={{backgroundColor: "#2980b9", fontSize: 20, fontWeight: 400, fontStyle: "normal", fontFamily: "Inria Serif"}}>
                            Join Now
                        </Button>
                    </Col>
                    <Col md={4} style={{textAlign: "center"}}>
                        <PiStudentFill color="#2980b9"  size={120} />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Community