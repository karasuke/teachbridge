import React, { useState } from "react";
import { Col, Container, Image, Row, Button, Navbar } from "react-bootstrap";
import "./landing.css";
import { RoutesDirections } from "../data/libraries/Routes";
import { useNavigate } from "react-router-dom";
import { ScreenSize, useScreenSize } from "../hooks/useScreenSize";

export const LandingPage = () => {
  const navigate = useNavigate(); // Usa el hook useNavigate

  const handleAdminClick = () => {
    setIsClicked(true);
    setTimeout(() => {
      navigate(RoutesDirections.LOGIN_ROUTE); // Navega al login
    }, 150); 
  };

  const handleRedirectClasses = () => {
    setIsClicked(true);
    setTimeout(() => {
      navigate(RoutesDirections.CLASSES_ROUTE); // Navega al login
    }, 150); 
  }


  /** Hook que contiene las dimensiones de la pantalla y maneja los componentes de acuerdo al resultado obtenido */
  const { width, maxLargeWidth }: ScreenSize = useScreenSize();
  /** Variable que define si es entorno mobile o desktop */
  const isMobile = width < maxLargeWidth;

  const TITLE_TEXT = "TeachBridge";
  const CLASES_TEXT = "Clases";
  const CREATOR_TEXT = "Creadores";
  const ADMINISTRATOR_TEXT = "Administrador";
  const INFO_CONTAINER_BUTTON_TEXT = "¡Comienza a aprender!";
  const QUALITY_EDUCATION_TEXT = "Educación de calidad a un clic.";
  const ABOUT_US_TEXT = "Sobre Nosotros";
  const QUALITY_DETAILS_TEXT =
    "¿Quieres aprender de forma divertida y efectiva? ¡Explora nuestros cursos gratis y descubre nuestro contenido educativo personalizado para alcanzar tus metas educativas!";
  const ONLINE_EDUCATION_TEXT = "La educación en línea, más cerca de ti.";
  const ABOUT_US_DETAILS_TEXT =
    "Experimenta una forma de aprendizaje personalizada y accesible desde cualquier lugar. ¡Descubre cómo nuestros videos pueden facilitar la educación en casa!";
  const SERVICE_TITLE_TEXT = "Nuestro Servicio";
  const SERVICE_SUBTITLE_TEXT = "Aprendizaje a tu medida";
  const SERVICE_DETAILS_TEXT =
    "¿Quieres aprender de forma divertida y efectiva? ¡Explora nuestros cursos gratis y descubre nuestro contenido educativo personalizado para alcanzar tus metas educativas!";
  const COPYRIGHT_TEXT = " © 2024 Copyright: TeachBridge";
  const [isClicked, setIsClicked] = useState(false);
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
                      className={`button-color ${isClicked ? 'active' : ''} `}
                      variant="dark"
                      type="submit"
                      onClick={handleRedirectClasses}
                    >
                      {CLASES_TEXT}
                    </Button>
                    

                    <Button
                      className={`button-color ${isClicked ? 'active' : ''} `}
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
                    {ABOUT_US_TEXT}
                  </span>
                </Col>

                <Col className="text-center text-lg-start">
                  <span className="text-secondary-2">{"detalles"}</span>
                </Col>

                <Col className="mt-4 text-center text-lg-start">
                  <Button className={`bg-primary-1 px-5 `}>
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
                    {ABOUT_US_TEXT}
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
          <Row className="d-flex g-0 my-3 header  ">
            <Col lg={12}>
              <Navbar className="navbar navbar-dark p-0  ">
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
                        <span className="text-secondary-2 h5">{TITLE_TEXT}</span>
                      </Col>
                    </a>
                  </Col>
                  <Col className="d-flex justify-content-end px-5 ">
                    <button
                      className="bg-nav-buttons text-secondary-1  p-large button-color my-2 fw-bold "
                      type="submit"
                      onClick={handleRedirectClasses}
                    >
                      {CLASES_TEXT}
                    </button>
                    <button
                      className={`bg-nav-buttons text-secondary-1  p-large button-color my-2 fw-bold ${isClicked ? 'active' : ''}`}
                      type="submit"
                    >
                      {CREATOR_TEXT}
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

          <Row className="g-0 my-5 py-5  ">
            <Col
              lg={6}
              className="d-flex justify-content-center align-items-center "
            >
              <Col lg={7}>
                <Col className="text-start mb-3 ">
                  <span className={`${isMobile ? "h5" : "h1"} text-primary-1 `}>
                    {QUALITY_EDUCATION_TEXT}
                  </span>
                </Col>

                <Col className="text-start ">
                  <span className="text-secondary-2 h5 ">
                    {QUALITY_DETAILS_TEXT}
                  </span>
                </Col>
                <Col className="mt-4 text-center text-lg-start">
                  <Button
                    className={`bg-secondary-2  shadow border-0 rounded rounded-3 px-2 button-hover-effect`}
                  >
                   <span >{INFO_CONTAINER_BUTTON_TEXT}</span> 
                  </Button>
                </Col>
              </Col>
            </Col>
            <Col lg={6} className="mb-4 m-lg-0">
              <Col xs={10} lg={8} className="m-auto">
                <Image
                  fluid
                  src={"/src/assets/images/1img.png"}
                  alt={``}
                  width={400}
                />
              </Col>
            </Col>
          </Row>
          <Row className="g-0  mt-5 ">
            <Col lg={6} className="mb-4 m-lg-0">
              <Col xs={10} lg={8} className="m-auto">
                <Image
                  fluid
                  src={"/src/assets/images/2img.png"}
                  alt={``}
                  width={320}
                />
              </Col>
            </Col>
            <Col
              lg={6}
              className="d-flex justify-content-center align-items-center "
            >
              <Col lg={12}>
                <Col lg={6}>
                  <Col className="text-start mb-3 ">
                    <span
                      className={`${isMobile ? "h5" : "h1"} text-primary-1 `}
                    >
                      {ABOUT_US_TEXT}
                    </span>
                  </Col>
                  <Col className="mb-2">
                    <span className="p-large fw-bold ">
                      {ONLINE_EDUCATION_TEXT}
                    </span>
                  </Col>

                  <Col className="text-start ">
                    <span className="text-secondary-2 h5 ">
                      {ABOUT_US_DETAILS_TEXT}
                    </span>
                  </Col>
                </Col>
              </Col>
            </Col>
          </Row>
          <Row className="g-0   ">
            <Col
              lg={6}
              className="d-flex justify-content-center align-items-center "
            >
              <Col lg={7}>
                <Col className="text-start mb-3 ">
                  <span className={`${isMobile ? "h5" : "h1"} text-primary-1 `}>
                    {SERVICE_TITLE_TEXT}
                  </span>
                </Col>
                <Col>
                  <span className="p-large fw-bold">
                    {SERVICE_SUBTITLE_TEXT}
                  </span>
                </Col>

                <Col className="text-start ">
                  <span className="text-secondary-2 h5 ">
                    {SERVICE_DETAILS_TEXT}
                  </span>
                </Col>
              </Col>
            </Col>
            <Col lg={6} className="mb-4 m-lg-0">
              <Col xs={10} lg={8} className="m-auto">
                <Image
                  fluid
                  src={"/src/assets/images/3img.png"}
                  alt={``}
                  width={400}
                />
              </Col>
            </Col>
          </Row>

          <Row className="g-0 pt-5 my-5">
            <Col className="text-center p-0 footer">
              <Col className="text-center text-white bg-secondary-2">
                <Col className="p-4 "></Col>

                <Col className="text-center p-3 bg-secondary-1">
                  <span className="p-regular">{COPYRIGHT_TEXT}</span>
                </Col>
              </Col>
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
};
