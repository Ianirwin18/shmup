import { Container, Row, Col } from "react-bootstrap";

import logo from '../assets/img/logoship.png';
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
          <div class="credit">
    <li><a href="https://frutuoso.carrd.co/#">Artist for Crew</a></li>
    <li>< a href="https://www.instagram.com/lolli__chi/">Link for AI Art</a></li>
</div>
      
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
