import {Container,Card} from 'react-bootstrap';

function Carte(){
    return(<div>
        <Container>
        <Card style={{ width: '18rem' }}>
  <Card.Body className="cartes">
    <Card.Text className="titr">For patients</Card.Text>
    <Card.Text>
    Find a doctor, book a visit and solve any health-related doubt
    </Card.Text>
    <Card.Link className="link" href="#">Card Link</Card.Link>
  </Card.Body>
</Card>
</Container>
    </div>)
}

export default Carte