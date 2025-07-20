import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Image from "react-bootstrap/Image"
import img from "../component/student.jpg"


const Testimonies = () => {

    return(
        <div className="" style={{paddingTop: 50, paddingBottom: 50}}>
            <Container>
                <Row>
                    <Col>
                        <h4 style={{fontSize: 35, fontStyle: "normal", fontWeight: 700, fontFamily: "Mullin", color: "#000"}} className="text-center">Students Testimonies</h4>
                         <h4 className="pb-4 text-center" style={{display: "block", fontSize: 18, fontStyle: "normal", fontWeight: 400, fontFamily: "Inria Serif", color: "#000"}}>
                            See what our students are saying
                        </h4>
                    </Col>
                </Row>
                <Row>
                    <Col style={{textAlign: "center"}} md={4} xs={12}>
                        <Image width={200} src={img} roundedCircle />
                        <h4 className="mt-4" style={{fontSize: 24, fontWeight: 700, fontStyle: "normal", fontFamily: "mullin"}}>Emenike Micheal</h4>
                        <p style={{fontSize: 16, fontWeight: 400, fontStyle: "normal", fontFamily: "Inria Serif"}}>
                            I have taken several courses in Delta Edu 
                            and i have no cause to regret registering
                        </p>
                    </Col>
                    <Col style={{textAlign: "center"}} md={4} xs={12}>
                        <Image width={200} src={img} roundedCircle />
                        <h4 className="mt-4" style={{fontSize: 24, fontWeight: 700, fontStyle: "normal", fontFamily: "mullin"}}>Emenike Micheal</h4>
                        <p style={{fontSize: 16, fontWeight: 400, fontStyle: "normal", fontFamily: "Inria Serif"}}>
                            I have taken several courses in Delta Edu 
                            and i have no cause to regret registering
                        </p>
                    </Col>
                    <Col style={{textAlign: "center"}} md={4} xs={12}>
                        <Image width={200} src={img} roundedCircle />
                        <h4 className="mt-4" style={{fontSize: 24, fontWeight: 700, fontStyle: "normal", fontFamily: "mullin"}}>Emenike Micheal</h4>
                        <p style={{fontSize: 16, fontWeight: 400, fontStyle: "normal", fontFamily: "Inria Serif"}}>
                            I have taken several courses in Delta Edu 
                            and i have no cause to regret registering
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Testimonies