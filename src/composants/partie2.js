import {Container,Row,Col } from 'react-bootstrap'

function Part2 (){
    return(<div className="car mb-5">
        
       <Container>
          <Row>
            <Col xs={12} md={6}>
                <h2>
                The world's biggest <br></br>
                healthcare platform
                </h2>
                <div className="parag">
                We work from 7 offices all over the world, bringing Docplanner Group to life in a dozen countries.
                </div>
                <img src="./assets/images/image1.png" className="img"></img>
            </Col>
            <Col xs={12} md={6}>
             <Row>   
            <Col xs={12} md={6}>
            <div className="stats__item mt-5">
				<div className="vert-align">
					<div>
                        <img src="https://www.docplanner.com/img/flag.png"></img>
                        <h3>Leader in 12 countries</h3>
                        <p>
                            Poland, Brazil, Mexico, Spain, Italy, Turkey, Colombia, Czech Republic, Portugal, Argentina, Peru and Chile
                        </p>
					</div>
				</div>
			</div>
                </Col>
            <Col xs={12} md={6}>
                <div className="stats__item mt-4">
								<div className="vert-align">
									<div>
                                    <img src="https://www.docplanner.com/img/visits.png"></img>
										<h3>4.8 million appointments</h3>
										<p>
											booked last month
										</p>
									</div>
								</div>
							</div>
                </Col>
                <Col xs={12} md={6}>
            <div className="stats__item mt-5">
				<div className="vert-align">
					<div>
                        <img src="https://www.docplanner.com/img/patients.png"></img>
                        <h3>61.9 mln unique patients</h3>
                        <p>
                        visit our websites each month
                        </p>
					</div>
				</div>
			</div>
                </Col>
            <Col xs={12} md={6}>
                <div className="stats__item mt-4">
								<div className="vert-align">
									<div>
                                    <img src="https://www.docplanner.com/img/doctors.png"></img>
										<h3>92.5k active doctors</h3>
										<p>
                                        trust our solutions
										</p>
									</div>
								</div>
							</div>
                </Col>
            
             </Row>
            </Col>
          </Row>
       </Container>

    </div>)
}
export default Part2