import { Col, Container, Image, Row, Button, Navbar } from "react-bootstrap";

import "./landing.css";
import { RoutesDirections } from "../data/libraries/Routes";
import { useNavigate } from "react-router-dom";

export const LandingPage = () => {
  const navigate = useNavigate(); // Usa el hook useNavigate

  const handleAdminClick = () => {
    navigate(RoutesDirections.LOGIN_ROUTE); // Navega al login
  };
  return (
    <Container fluid className="p-0">
      <Row className="g-0 ">
        <Col lg={12}>
          <Navbar className="navbar navbar-dark p-0 ">
            <Col className="d-flex align-items-start navbar-bg ">
              <Col className="px-5">
                <a className="navbar-brand px-2" href="#">
                  <Image
                    src="/src/assets/images/logo.png"
                    alt="logo"
                    width="80"
                    height="50"
                    className="d-inline-block align-text-top "
                  />
                <Col>
                <span className="h5">TeachBridge</span>
                </Col>
                  
                </a>
              </Col>
              <Col className="d-flex justify-content-end px-5">
                <Button
                  className="button-color mx-4 my-2 "
                  variant="dark"
                  type="submit"
                >
                  Clases
                </Button>
                <Button
                  className="button-color my-2 "
                  type="submit"
                  variant="dark"
                  onClick={handleAdminClick}
                >
                  Administrador
                </Button>
              </Col>
            </Col>
          </Navbar>
        </Col>
      </Row>
      <Row></Row>
    </Container>
  );
};
