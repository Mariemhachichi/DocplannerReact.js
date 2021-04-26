
import {Container,Navbar,Nav} from 'react-bootstrap';

function Navb(){
    return(<div>
   <Container>
     <Navbar>
  <Navbar.Brand href="#home"><a href="#home"><img src="./assets/images/logo.png" alt="log"/></a></Navbar.Brand>
  <Navbar.Toggle />
  <Navbar.Collapse className="justify-content-end">
  <Nav>
      <Nav.Link href="#deets" className="color">About-us</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">Career</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">Départements</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
</Container>
        
    </div>)
}
export default Navb