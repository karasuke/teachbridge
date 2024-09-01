import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  Image,
  Navbar,
  Row,
} from "react-bootstrap";
import { RoutesDirections } from "../data/libraries/Routes";
import { useNavigate } from "react-router-dom";
import { useUsers } from "../hooks/useUsers";
import { IComment } from "../interfaces/IComment";


export const Classes = ()  => {
  const navigate = useNavigate(); // Usa el hook useNavigate

  const handleAdminClick = () => {
    setIsClicked(true);
    setTimeout(() => {
      navigate(RoutesDirections.LOGIN_ROUTE); // Navega al login
    }, 150); // Ajusta el tiempo de espera para que coincida con la duración de la transición
  };
  const [isClicked, setIsClicked] = useState(false);
  const { handlerGetComments } = useUsers()

 
  
  const [comments, setComments] = useState<IComment[]>([]);
  
  useEffect(() => {
    const fetchComments = async () => {
      const commentsData = await handlerGetComments();
      setComments(commentsData); // Actualiza el estado con los comentarios recibidos
    };

    fetchComments();
  }, []);
  
  
  const videoSrc = "/src/assets/videos/teach.mp4";
  const CLASES_TEXT = "Clases";
  const CREATOR_TEXT = "Creadores";
  const ADMINISTRATOR_TEXT = "Administrador";
  const TITLE_TEXT = "TeachBridge";
  const COPYRIGHT_TEXT = " © 2024 Copyright: TeachBridge";
  const SUBTITLE_VIDEO = "El video comienza con una introducción breve sobre la misión del proyecto: crear un entorno digital accesible y personalizado donde los maestros puedan diseñar lecciones interactivas y gestionar el progreso de los estudiantes en tiempo real. A continuación, mostramos la interfaz de usuario intuitiva de EduPlay, destacando la facilidad con la que los educadores pueden crear contenido educativo a través de herramientas integradas como grabaciones de lecciones y rutas de estudio personalizadas.";
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
                  className={`bg-nav-buttons text-secondary-1 border-0 p-large button-color my-2 fw-bold ${isClicked ? 'active' : ''}`}
                
                  
                >
                  {CLASES_TEXT}
                </button>
                <button
                  className="bg-nav-buttons text-secondary-1  p-large button-color my-2 fw-bold "
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
      <Row className="d-flex g-0">
        <Col className="d-flex banner-classes-image min-vh-25 justify-content-center align-items-center">
          <span className="text-primary-5 fw-bold h1 ">Mis Cursos</span>
        </Col>
      </Row>
      <Row className="d-flex g-0 bg-secondary-5">
        <Col lg={12} className=" d-flex justify-content-center my-4">
          <Col lg={7} className="">
            <Col className="card mb-5">
              <Col className="card-header text-primary-3 h2  text-center">Introducción al proyecto</Col>
              <Col className="card-body">
                
                <video width="1000" height="500" controls>
                  <source src={videoSrc} type="video/mp4" />
                </video>
              </Col>
              <div className="card-footer text-muted">{SUBTITLE_VIDEO}</div>
            </Col>
            <Col className="border px-4 py-4 bg-primary-5">
            
            <Form className="">
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label className="text-secondary-2">Nombre</Form.Label>
                <Form.Control
                  className="text-secondary-2"
                  type="name"
                  placeholder="Ingrese su nombre"
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label className="text-secondary-2">Comentario</Form.Label>
                <Form.Control
                  className="text-secondary-2"
                  as="textarea"
                  rows={3}
                  placeholder="Ingrese comentario"
                />
              </Form.Group>
              <Button
                className="bg-primary-1 border-0 text-primary-5"
                type="submit"
              >
                Enviar comentario
              </Button>
            </Form>
            </Col>
            <Col>
              <Col className="valoracion " >
                <input id="radio1" type="radio" name="estrellas" value="5" />
                <label htmlFor="radio1">★</label>
                <input id="radio2" type="radio" name="estrellas" value="4" />
                <label htmlFor="radio2">★</label>
                <input id="radio3" type="radio" name="estrellas" value="3" />
                <label htmlFor="radio3">★</label>
                <input id="radio4" type="radio" name="estrellas" value="2" />
                <label htmlFor="radio4">★</label>
                <input id="radio5" type="radio" name="estrellas" value="1" />
                <label htmlFor="radio5">★</label>
              </Col>
            </Col>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
        {comments.map((comment) => (
          <div key={comment.id} style={{ marginBottom: '10px' }}>
            <p><strong>{comment.userName}</strong></p>
            <p>{comment.userComment}</p>
            <p><small>{comment.userDate}</small></p>
          </div>
        ))}
      </div>
          </Col>
        </Col>
      </Row>
      <Row className="g-0 pt-5 bg-secondary-5 ">
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
