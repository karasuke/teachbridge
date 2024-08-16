import { Col, Container, Image, Row, Button, Navbar } from "react-bootstrap";

import "./landing.css";
import { RoutesDirections } from "../data/libraries/Routes";
import { useNavigate } from "react-router-dom";
import { ScreenSize, useScreenSize } from "../hooks/useScreenSize";
import React from "react";
import { MDBFooter, MDBContainer, MDBIcon, MDBBtn } from "mdb-react-ui-kit";

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
  const INFO_CONTAINER_BUTTON_TEXT = "¡Comienza a aprender!";
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

                  <Col
                    xs={12}
                    className="d-flex justify-content-around px-5 my-4"
                  >
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
          <Row className="g-0  ">
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
          <Row className="g-0  ">
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
          <Row className="d-flex g-0 my-3">
            <Col lg={12}>
              <Navbar className="navbar navbar-dark p-0 ">
                <Col className="d-flex align-items-start  ">
                  <Col className="px-5">
                    <a className="navbar-brand px-2" href="/">
                      <Image
                        src="/src/assets/images/logo.png"
                        alt="logo"
                        width="80"
                        height="70"
                        className="d-inline-block align-text-top "
                      />
                      <Col>
                        <span className="h5">{TITLE_TEXT}</span>
                      </Col>
                    </a>
                  </Col>
                  <Col className="d-flex justify-content-end px-5 ">
                    <button
                      className="bg-nav-buttons text-secondary-1  p-large button-color my-2 fw-bold "
                      type="submit"
                    >
                      {CLASES_TEXT}
                    </button>
                    <button
                      className="bg-nav-buttons text-secondary-1 p-large button-color my-2 fw-bold "
                      type="submit"
                      onClick={handleAdminClick}
                    >
                      {ADMINISTRATOR_TEXT}
                    </button>
                  </Col>
                </Col>
              </Navbar>
            </Col>
          </Row>

          <Row className="g-0  ">
            <Col
              lg={6}
              className="d-flex p-0 justify-content-end align-items-center "
            >
              <Col lg={10}>
                <Col className="mb-2 text-center text-lg-start">
                  <span className={`${isMobile ? "h5" : "h1"} text-primary-1 `}>
                    {"Educación de calidad a un clic."}
                  </span>
                </Col>

                <Col className="text-center text-lg-start pb-4">
                  <span className="text-secondary-2 h5 ">
                    {
                      "¿Quieres aprender de forma divertida y efectiva? ¡Explora nuestros cursos gratis y descubre nuestro contenido educativo personalizado para alcanzar tus metas educativas!"
                    }
                  </span>
                </Col>

                <Col className="mt-4 text-center text-lg-start">
                  <Button
                    className={`bg-secondary-2 border-0 rounded rounded-3 px-2`}
                  >
                    {INFO_CONTAINER_BUTTON_TEXT}
                  </Button>
                </Col>
              </Col>
            </Col>
            <Col lg={6} className="mb-4 m-lg-0">
              <Col xs={10} lg={8} className="m-auto">
                <Image
                  fluid
                  src={"/src/assets/images/img3.png"}
                  alt={``}
                  width={400}
                />
              </Col>
            </Col>
          </Row>
          <Row className="g-0 mb-5 pb-5 ">
            <Col
              lg={6}
              className="d-flex p-0 justify-content-end align-items-center "
            >
              <Col lg={11}>
                <Col className="mb-2 px-5 mx-4">
                  <span className={`${isMobile ? "h5" : "h1"} text-primary-1 `}>
                    {"Sobre Nosotros"}
                  </span>
                </Col>
                <Col className="mb-5 px-5 mx-4">
                  <span className="text-secondary-1 fw-bold h3">
                    La educación en línea, más cerca de ti.
                  </span>
                </Col>

                <Col className=" bg-tiktok  rounded rounded-4 p-5 mx-5">
                  <span className="text-primary-5 h5  ">
                    {
                      "Experimenta una forma de aprendizaje personalizada y accesible desde cualquier lugar. ¡Descubre cómo nuestros videos pueden facilitar la educación en casa!"
                    }
                  </span>
                </Col>
              </Col>
            </Col>
            <Col lg={6} className="mb-4 m-lg-0">
              <Col xs={10} lg={8} className="m-auto">
                <Image
                  fluid
                  src={"/src/assets/images/img2.png"}
                  alt={``}
                  width={400}
                />
              </Col>
            </Col>
          </Row>
          <Row className="g-0 mb-5 pb-5 ">
            <Col
              lg={12}
              className="d-flex p-0 px-5 mx-4 justify-content-start align-items-center "
            >
              <Col lg={10}>
                <Col className="mb-2 px-5 mx-4">
                  <span className={`${isMobile ? "h5" : "h1"} text-primary-1 `}>
                    {"Nuestro Servicio"}
                  </span>
                </Col>
                <Col className="mb-5 px-5 mx-4" style={{ position: "relative" }}>
                  <span className="text-secondary-1 fw-bold h3">
                    Aprendizaje a tu medida
                  </span>
                </Col>
                <Col
                  className="bg-tiktok rounded rounded-4 p-5 mx-5 d-flex flex-row align-items-center"
                  
                >
                  <Col lg={7} className="text-primary-5 h5">
                    {
                      "Nuestros videos educativos ofrecen una experiencia de aprendizaje personalizada y flexible. Cada niño podrá avanzar a su propio ritmo, accediendo a las lecciones cuantas veces estime necesario."
                    }
                  </Col>
                  <Col className="d-flex justify-content-end">
                    <Image
                      fluid
                      src={"/src/assets/images/image2.png"}
                      alt={``}
                      className="absolute-image"
                    />
                  </Col>
                </Col>
              </Col>
            </Col>
          </Row>
          <Row className="g-0 pt-5 my-5">
            <Col className="text-center p-0 footer">
              <Col className="text-center text-white bg-secondary-2">
                <Col className="p-4 "></Col>

                <Col className="text-center p-3 bg-secondary-1">
                  <span className="p-regular">
                    © 2024 Copyright: TeachBridge
                  </span>
                </Col>
              </Col>
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
};
