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
import { useLocation, useNavigate } from "react-router-dom";
import { useUsers } from "../hooks/useUsers";
import { IComment, ISaveComments } from "../interfaces/IComment";

export const Classes = () => {
  //navigate es una función que permite navegar a una ruta específica
  const navigate = useNavigate();
  //isClicked es un estado para efecto de transición de los botones de accion
  const [isClicked, setIsClicked] = useState(false);

  //comments es un estado que almacena los comentarios
  const [comments, setComments] = useState<IComment[]>([]);

  //handlerGetComments y handlerAddComment son funciones que permiten obtener y agregar comentarios
  const { handlerGetComments, handlerAddComment, handleGetVideos } = useUsers();

  //userForm es un estado que almacena el nombre y comentario del usuario
  const [userForm, setUserForm] = useState<ISaveComments>({
    userName: "",
    userComment: "",
  });

  const [videos, setVideos] = useState<any[]>([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const videosData = await handleGetVideos();
      setVideos(videosData);
    };

    fetchVideos();
  }, []);

 

  const fileId = videos[videos.length - 1]?.fileId;



  //handleAdminClick es una función que permite navegar a la ruta de administrador
  const handleAdminClick = () => {
    setIsClicked(true);
    setTimeout(() => {
      navigate(RoutesDirections.LOGIN_ROUTE); // Navega al login
    }, 150); // Ajusta el tiempo de espera para que coincida con la duración de la transición
  };

  //onInputChange es una función que permite actualizar el estado userForm
  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setUserForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  //handleFormSubmit es una función que permite enviar el formulario
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // Desestructurar userForm para obtener los valores directamente
    const { userName, userComment } = userForm;

    // Llamar a handlerAddComment con los valores desestructurados
    await handlerAddComment(userName, userComment);

    // Limpiar el formulario después de enviar los datos
    setUserForm({
      userName: "",
      userComment: "",
    });

    // Volver a cargar los comentarios después de enviar los datos
    const commentsData = await handlerGetComments();
    setComments(commentsData);
  };

  const location = useLocation();
  const isClassesRoute = location.pathname === RoutesDirections.CLASSES_ROUTE;

  const handleHomeRedirect = () => {
    if (isClassesRoute) {
      navigate(RoutesDirections.MAIN_ROUTE);
    }
  };

  const handleCreatorsRedirect = () => {
    navigate(RoutesDirections.CREATORS_ROUTE);
  };

  //actualiza los comentarios al cargar la página por primera vez
  useEffect(() => {
    const fetchComments = async () => {
      const commentsData = await handlerGetComments();
      setComments(commentsData);
    };

    fetchComments();
  }, []);

  const formatDate = (dateString) => {
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    };
    const date = new Date(dateString);
    return date
      .toLocaleString("es-ES", options as Intl.DateTimeFormatOptions)
      .replace(",", " - ");
  };

  //CONSTANTES DE TEXTO
  const videoSrc = "/src/assets/videos/teach.mp4";
  const CLASES_TEXT = "Clases";
  const CREATOR_TEXT = "Creadores";
  const ADMINISTRATOR_TEXT = "Administrador";
  const TITLE_TEXT = "TeachBridge";
  const COPYRIGHT_TEXT = " © 2024 Copyright: TeachBridge";
  const SUBTITLE_VIDEO =
    "El video comienza con una introducción breve sobre la misión del proyecto: crear un entorno digital accesible y personalizado donde los maestros puedan diseñar lecciones interactivas y gestionar el progreso de los estudiantes en tiempo real. A continuación, mostramos la interfaz de usuario intuitiva de EduPlay, destacando la facilidad con la que los educadores pueden crear contenido educativo a través de herramientas integradas como grabaciones de lecciones y rutas de estudio personalizadas.";
  const MY_COURSES_TEXT = "Mis Cursos";
  const HOME_TEXT = "Home";
  const VIDEO_TITLE_TEXT = "Introducción al proyecto";
  const FORM_NAME_TEXT = "Nombre";
  const FORM_COMMENT_TEXT = "Comentario";
  const SEND_COMMENT_TEXT = "Enviar comentario";
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
                  onClick={handleHomeRedirect}
                >
                  {isClassesRoute ? HOME_TEXT : CLASES_TEXT}
                </button>
                <button
                  className="bg-nav-buttons text-secondary-1  p-large button-color my-2 fw-bold "
                  type="submit"
                  onClick={handleCreatorsRedirect}
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
          <span className="text-primary-5 fw-bold h1 ">{MY_COURSES_TEXT}</span>
        </Col>
      </Row>
      <Row className="d-flex g-0 bg-secondary-5 ">
        <Col lg={12} className=" d-flex justify-content-center my-4">
          <Col lg={7}>
            <Col className="card mb-5">
              <Col className="card-header text-primary-3 h2  text-center">
                {VIDEO_TITLE_TEXT}
              </Col>
              <Col className="card-body">
                <iframe
                  id="video-iframe"
                  src={`https://drive.google.com/file/d/${fileId}/preview`}
                  width="1083"
                  height="480"
                  title="Video Preview"
                >
                  Tu navegador no soporta la reproducción de video.
                </iframe>
              </Col>
              <div className="card-footer text-muted">{SUBTITLE_VIDEO}</div>
            </Col>
            <Col className="border px-4 py-4 bg-primary-5 rounded">
              <Form onSubmit={handleFormSubmit}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label className="text-secondary-2">
                    {FORM_NAME_TEXT}
                  </Form.Label>
                  <Form.Control
                    className="text-secondary-2"
                    type="text"
                    name="userName"
                    placeholder="Ingrese su nombre"
                    value={userForm.userName}
                    onChange={onInputChange}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label className="text-secondary-2">
                    {FORM_COMMENT_TEXT}
                  </Form.Label>
                  <Form.Control
                    className="text-secondary-2"
                    as="textarea"
                    name="userComment"
                    rows={3}
                    placeholder="Ingrese comentario"
                    value={userForm.userComment}
                    onChange={onInputChange}
                  />
                </Form.Group>
                <Button
                  className="bg-primary-1 border-0 text-primary-5"
                  type="submit"
                >
                  {SEND_COMMENT_TEXT}
                </Button>
              </Form>
            </Col>
            <Col>
              <Col className="valoracion ">
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

            <Col className="d-flex flex-column ">
              {comments.map((comment) => (
                <Col
                  key={comment.id}
                  className="border rounded px-4 py-4 bg-primary-5 my-2"
                >
                  <Col className="d-flex ">
                    <p className="text-secondary-1 fw-bold pe-4">
                      {comment.userName}
                    </p>
                    <p className="text-secondary-2">
                      {formatDate(comment.userDate)}
                    </p>
                  </Col>

                  <p className="text-primary-3 ">{comment.userComment}</p>
                </Col>
              ))}
            </Col>
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
