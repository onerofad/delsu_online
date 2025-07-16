import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Button from "react-bootstrap/Button"

import Container from "react-bootstrap/Container"

const Community = () => {
    return(
        <div style={{paddingTop: 50, paddingBottom: 50}}>
            <Container>
                <Row>
                    <Col md={8}>
                        <h4 className="mt-4" style={{fontSize: 30, fontWeight: 700, fontStyle: "normal", fontFamily: "mullin"}}>
                            Join our vibrant student community
                        </h4>
                        <Button size="lg" className="mt-4" style={{backgroundColor: "#0086ff", fontSize: 20, fontWeight: 400, fontStyle: "normal", fontFamily: "Inria Serif"}}>
                            Join Now
                        </Button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Community