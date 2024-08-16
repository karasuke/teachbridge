import { Col, Container, Image, Row, Button, Navbar } from "react-bootstrap";

import "./landing.css";
import { RoutesDirections } from "../data/libraries/Routes";
import { useNavigate } from "react-router-dom";
import { ScreenSize, useScreenSize } from "../hooks/useScreenSize";
import React from "react";

export const LandingPage = () => {
  const navigate = useNavigate(); // Usa el hook useNavigate

  const handleAdminClick = () => {
    navigate(RoutesDirections.LOGIN_ROUTE); // Navega al login
  };

  /** Hook que contiene las dimensiones de la pantalla y maneja los componentes de acuerdo al resultado obtenido */
  const { width, maxLargeWidth }: ScreenSize = useScreenSize();
  /** Variable que define si es entorno mobile o desktop */
  const isMobile = width < maxLargeWidth;

  const TITLE_TEXT = "TeachBridge";
  const CLASES_TEXT = "Clases";
  const ADMINISTRATOR_TEXT = "Administrador";
  const INFO_CONTAINER_BUTTON_TEXT = "CONOCE MÁS";
  return (
    <Container fluid className="p-0">
      {isMobile ? (
        <>
        <Row className="d-flex g-0 ">
          <Col xs={12}>
            <Navbar className="navbar navbar-dark p-0 ">
              <Col className="navbar-bg">
                <Col className="d-flex flex-column my-3 ">
                  <Col className="d-flex justify-content-center">
                    <Image
                      src="/src/assets/images/logo.png"
                      alt="logo"
                      width="80"
                      height="50"
                      className="d-flex justify-content-center  "
                    />
                  </Col>
                  <Col className="d-flex justify-content-center">
                    <span className="h5 text-secondary-4">{TITLE_TEXT}</span>
                  </Col>
                </Col>

                <Col xs={12} className="d-flex justify-content-around px-5 my-4">

               
                <Button
                    className="button-color  "
                    variant="dark"
                    type="submit"
                  >
                    {CLASES_TEXT}
                  </Button>
             
                 
                  <Button
                    className="button-color  "
                    type="submit"
                    variant="dark"
                    onClick={handleAdminClick}
                  >
                    {ADMINISTRATOR_TEXT}
                  </Button>
                </Col>
              </Col>
            </Navbar>
          </Col>
        </Row>
        <Row className="g-0 my-5 ">
        <Col lg={6} className="mb-4 m-lg-0">
          <Col xs={10} lg={8} className="m-auto">
            <Image fluid src={"/src/assets/images/seccion1.jpg"} alt={``} />
          </Col>
        </Col>

        <Col lg={6} className="d-flex p-0">
          <Col lg={8} className="m-auto">
            <Col className="mb-2 text-center text-lg-start">
              <span className={`${isMobile ? "h5" : "h2"} text-primary-3 `}>
                {"Sobre Nosotros"}
              </span>
            </Col>

            <Col className="text-center text-lg-start">
              <span className="text-secondary-2">{"detalles"}</span>
            </Col>

            <Col className="mt-4 text-center text-lg-start">
              <Button className={`btn-secondary-text-small px-5`}>
                {INFO_CONTAINER_BUTTON_TEXT}
              </Button>
            </Col>
          </Col>
        </Col>
      </Row>
       <Row className="g-0 my-5 ">
        <Col lg={6} className="mb-4 m-lg-0">
          <Col xs={10} lg={8} className="m-auto">
            <Image fluid src={"/src/assets/images/seccion1.jpg"} alt={``} />
          </Col>
        </Col>

        <Col lg={6} className="d-flex p-0">
          <Col lg={8} className="m-auto">
            <Col className="mb-2 text-center text-lg-start">
              <span className={`${isMobile ? "h5" : "h2"} text-primary-3 `}>
                {"Sobre Nosotros"}
              </span>
            </Col>

            <Col className="text-center text-lg-start">
              <span className="text-secondary-2">{"detalles"}</span>
            </Col>

            <Col className="mt-4 text-center text-lg-start">
              <Button className={`btn-secondary-text-small px-5`}>
                {INFO_CONTAINER_BUTTON_TEXT}
              </Button>
            </Col>
          </Col>
        </Col>
      </Row>
      </>
        
      ) : (
        <>
        <Row className="d-flex g-0 ">
          <Col lg={12}>
            <Navbar className="navbar navbar-dark p-0 ">
              <Col className="d-flex align-items-start navbar-bg ">
                <Col className="px-5">
                  <a className="navbar-brand px-2" href="/">
                    <Image
                      src="/src/assets/images/logo.png"
                      alt="logo"
                      width="80"
                      height="50"
                      className="d-inline-block align-text-top "
                    />
                    <Col>
                      <span className="h5">{TITLE_TEXT}</span>
                    </Col>
                  </a>
                </Col>
                <Col className="d-flex justify-content-end px-5">
                  <Button
                    className="button-color mx-4 my-2 "
                    variant="dark"
                    type="submit"
                  >
                    {CLASES_TEXT}
                  </Button>
                  <Button
                    className="button-color my-2 "
                    type="submit"
                    variant="dark"
                    onClick={handleAdminClick}
                  >
                    {ADMINISTRATOR_TEXT}
                  </Button>
                </Col>
              </Col>
            </Navbar>
          </Col>
        </Row>
          <Row className="g-0 ">
          <Col lg={6} className="mb-4 m-lg-0">
            <Col xs={10} lg={12} className="d-flex justify-content-center">
              <Image fluid src={"/src/assets/images/seccion1.jpg"} alt={``} width={400}/>
            </Col>
          </Col>
  
          <Col lg={6} className="d-flex p-0">
            <Col lg={8} className="m-auto">
              <Col className="mb-2 text-center text-lg-start">
                <span className={`${isMobile ? "h5" : "h2"} text-primary-3 `}>
                  {"Sobre Nosotros"}
                </span>
              </Col>
  
              <Col className="text-center text-lg-start">
                <span className="text-secondary-2">{"detalles"}</span>
              </Col>
  
              <Col className="mt-4 text-center text-lg-start">
                <Button className={`btn-secondary-text-small px-5`}>
                  {INFO_CONTAINER_BUTTON_TEXT}
                </Button>
              </Col>
            </Col>
          </Col>
        </Row>
        <Row className="g-0 my-5 bg-primary-5">
       

        <Col lg={6} className="d-flex p-0 d-flex align-items-center">
          <Col lg={12} >
            <Col className="mb-2 text-center text-lg-center">
              <span className={`${isMobile ? "h5" : "h2"} text-primary-3 `}>
                {"Servicios"}
              </span>
            </Col>

            <Col className="text-center text-lg-center">
              <span className="text-secondary-2">{"detalles"}</span>
            </Col>

            <Col className="mt-4 text-center text-lg-center">
              <Button className={`btn-primary-text-small px-5`}>
                {INFO_CONTAINER_BUTTON_TEXT}
              </Button>
            </Col>
          </Col>
        </Col>
        <Col lg={6} className="mb-4 m-lg-0">
          <Col xs={10} lg={8} className="m-auto">
            <Image fluid src={"/src/assets/images/seccion2.png"} alt={``} width={400} />
          </Col>
        </Col>
      </Row>
        </>
      )}

    
    </Container>
  );
};
