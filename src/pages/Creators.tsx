import React, { useState } from "react";
import { Button, Col, Container, Image, Navbar, Row } from "react-bootstrap";
import { RoutesDirections } from "../data/libraries/Routes";
import { useLocation, useNavigate } from "react-router-dom";
import { useUsers } from "../hooks/useUsers";
import Swal from "sweetalert2";

export const Creators = () => {
  //hook para la subida de archivos de los usuarios
  const { handlerUploadFile } = useUsers();
  //navigate es una función que permite navegar a una ruta específica
  const navigate = useNavigate();
  //isClicked es un estado para efecto de transición de los botones de accion
  const [isClicked, setIsClicked] = useState(false);
  //location es un hook que devuelve el objeto de la ubicación actual
  const location = useLocation();
  //isClassesRoute es un estado que verifica si la ruta actual es la de clases
  const isClassesRoute = location.pathname === RoutesDirections.CREATORS_ROUTE;

  // Estados para el archivo seleccionado y la respuesta de la subida
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  // Manejador para el click en el botón de administrador
  const handleAdminClick = () => {
    setIsClicked(true);
    setTimeout(() => {
      navigate(RoutesDirections.LOGIN_ROUTE); // Navega al login
    }, 150); // Ajusta el tiempo de espera para que coincida con la duración de la transición
  };

  // Manejador para la subida del archivo
  const handleUpload = async () => {
    try {
      Swal.fire({
        title: 'Cargando...',
        text: 'Por favor, espera mientras se carga el archivo.',
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        }
      });

      const data = await handlerUploadFile(selectedFile);

      Swal.close();
      Swal.fire('Archivo subido', 'El archivo se ha subido correctamente', 'success');

      // Navegar a la página de clases pasando el fileId en el estado
      navigate("/classes", { state: { fileId: data.fileId } });
    } catch (error) {
      Swal.close();
      Swal.fire('Error', error.message, 'error');
    }
  };

  // Manejador para el cambio de archivo
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    }
  };

  // Manejador para redirigir a la página principal
  const handleHomeRedirect = () => {
    if (isClassesRoute) {
      navigate(RoutesDirections.MAIN_ROUTE);
    }
  };

  // Manejador para redirigir a la página de creadores
  const handleClassesRedirect = () => {
    navigate(RoutesDirections.CLASSES_ROUTE);
  };

  //CONSTANTES DE TEXTO
  const videoSrc = "/src/assets/videos/teach.mp4";
  const CLASES_TEXT = "Clases";
  const ADMINISTRATOR_TEXT = "Administrador";
  const TITLE_TEXT = "TeachBridge";
  const COPYRIGHT_TEXT = " © 2024 Copyright: TeachBridge";
  const MY_COURSES_TEXT = "Carga de Videos Creadores";
  const HOME_TEXT = "Home";

  //RENDERIZADO DEL COMPONENTE PRINCIPAL
  return (
    <Container fluid className="p-0 ">
      <Row className="d-flex flex-column g-0 my-3 ">
        <Col>
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
                  className={`bg-nav-buttons text-secondary-1 p-large button-color my-2 fw-bold ${
                    isClicked ? "active" : ""
                  }`}
                  onClick={handleClassesRedirect}
                >
                  {CLASES_TEXT}
                </button>
                <button
                  className={`bg-nav-buttons text-secondary-1 p-large button-color my-2 fw-bold ${
                    isClicked ? "active" : ""
                  }`}
                  onClick={handleHomeRedirect}
                >
                  {isClassesRoute ? HOME_TEXT : ""}
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
      <Row className="d-flex g-0">
        <Col className="d-flex banner-creators-image min-vh-25 justify-content-center align-items-center">
          <span className="text-primary-5 fw-bold h1 ">{MY_COURSES_TEXT}</span>
        </Col>
      </Row>
      <Row className="d-flex g-0 bg-secondary-5 ">
        <Col lg={12} className=" d-flex justify-content-center my-4">
          <Col lg={7} className=" d-flex flex-column justify-content-center">
            <span className="text-secondary-2 h2 text-center">
              Seleccione el archivo a subir
            </span>

            <Col
              lg={12}
              className="d-flex justify-content-center   my-2 "
            >
              <Col lg={7}>
                <input
                  className="form-control form-control-lg "
                  id="formFileLg"
                  type="file"
                  onChange={handleFileChange}
                ></input>
              </Col>
            </Col>
          </Col>
        </Col>
        <Button
          className="bg-primary-1 border-0 text-primary-5 w-25 mx-auto"
          type="submit"
          onClick={handleUpload}
        >
         Enviar
        </Button>
      </Row>
      <Row className="g-0 pt-5 bg-secondary-5 footer p-0">
        <Col className="text-center p-0 ">
          <Col className="text-center text-white bg-secondary-2">
            <Col className="p-4 "></Col>

            <Col className="text-center bg-secondary-1">
              <span className="p-regular">{COPYRIGHT_TEXT}</span>
            </Col>
          </Col>
        </Col>
      </Row>
    </Container>
  );
};
