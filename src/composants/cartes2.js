
import {Container, Row, Col, Card, Button} from 'react-bootstrap'


function Car() {
  return(
    <div>
        <Container>
            <Row>
                <Col md={4}>
                    <Card className="mb-4 cardCount">
                       <img src="./assets/images/img1.png"/>
                        <Card.Body className="d-flex justify-content-around">
                            <Card.Title>Warsaw</Card.Title>
                            <Button className="text-uppercase"  variant="primary">see openings </Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="mb-4 cardCount">
                    <img src="./assets/images/img2.png"/>
                        <Card.Body className="d-flex justify-content-around">
                            <Card.Title>Barcelona</Card.Title>
                            <Button className="text-uppercase"  variant="primary">see openings </Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="mb-4 cardCount">
                    <img src="./assets/images/img3.png"/> 
                        <Card.Body className="d-flex justify-content-around">
                            <Card.Title>Istanbul</Card.Title>
                            <Button className="text-uppercase"  variant="primary">see openings </Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="mb-4 cardCount">
                    <img src="./assets/images/img4.png"/> 
                        <Card.Body className="d-flex justify-content-around">
                            <Card.Title>Rome</Card.Title>
                            <Button className="text-uppercase"  variant="primary">see openings </Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="mb-4 cardCount">
                    <img src="./assets/images/img5.png"/> 
                        <Card.Body className="d-flex justify-content-around">
                            <Card.Title>Bologna</Card.Title>
                            <Button className="text-uppercase"  variant="primary">see openings </Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="mb-4 cardCount">
                    <img src="./assets/images/img6.png"/> 
                        <Card.Body className="d-flex justify-content-around">
                            <Card.Title>Curitiba</Card.Title>
                            <Button className="text-uppercase"  variant="primary">see openings </Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="mb-4 cardCount">
                    <img src="./assets/images/img7.png"/> 
                        <Card.Body className="d-flex justify-content-around">
                            <Card.Title>Mexico City</Card.Title>
                            <Button className="text-uppercase"  variant="primary">see openings </Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </div>
   )

 }

export default Car
