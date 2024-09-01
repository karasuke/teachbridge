# Guía de Onboarding

## Frontend: React y JavaScript con VScode

### Configuración del Proyecto
El frontend de este proyecto está construido utilizando **VITE**, una herramienta de compilación que facilita la configuración rápida y eficiente del proyecto.

### Prerrequisitos
1. **Node.js**: Instala Node.js para utilizar npm y ejecutar comandos.
2. **VScode**: Abre la carpeta del proyecto en VScode.

### Ejecución del Proyecto
Para arrancar el proyecto en modo desarrollador, utiliza los siguientes comandos en la terminal:

```bash
npm install
npm run dev
Esto lanzará la página principal de login, donde podrás iniciar sesión con un usuario creado en la base de datos. Ten en cuenta que en este punto, el backend aún no está configurado, por lo que la administración de usuarios no será funcional.

Backend: SpringBoot API REST
Prerrequisitos
Extensiones de VScode:
Extension Pack for Java
SpringBoot Extension Pack
Iniciando el Backend
En VScode, utiliza la interfaz de SpringBoot para iniciar el backend. El proyecto utiliza JPA para la creación automática de la base de datos y JWT para la autenticación de usuarios y acceso a los endpoints.

Configuración
En application.properties, configura los datos de la base de datos para que JPA pueda crear las tablas automáticamente. Inicialmente, establece Hibernate en CREATE. Después de que las tablas se hayan creado, cambia esta configuración a UPDATE o NONE para evitar cambios adicionales en el esquema.

Configuración de la Base de Datos
Prerrequisitos
MySQL: Instala MySQL.
MySQL Workbench: (Opcional) Alternativamente, puedes usar la consola.
Configuración de la Base de Datos
Crea la base de datos según lo configurado en el backend.
Inicia la API REST de SpringBoot.
La API debería estar corriendo en el puerto 8080. Puedes usar Postman para probar los endpoints.
Verificación de la Base de Datos
Verifica la base de datos para asegurarte de que las tablas se hayan creado mediante JPA.

Configuración Inicial del Usuario
Crea el primer usuario manualmente con las siguientes credenciales. Asegúrate de que la contraseña esté encriptada usando bcrypt (por ejemplo, a través de bcrypt online):

id: 1 (auto-incrementable)
username: el nombre de usuario que prefieras
email: el correo electrónico que prefieras
password: $2y$10$iYnJ2VS9mG1cXthYjki1gu7QrQBm.5BzRPdb8upayYyf5dpPNJShy
Configuración de Roles
El backend tiene dos roles mapeados: ROLE_ADMIN y ROLE_USER. Estos deben ser creados para evitar errores. Asigna role_id = 1 al primer usuario.

Administración de Usuarios
Inicio de Sesión
Regresa a la página inicial de login e ingresa con las credenciales creadas.

Gestión de Usuarios
Una vez dentro, accederás al componente principal de administración de usuarios. Aquí podrás:

Crear Usuarios: Registrar nuevos usuarios como administradores o usuarios regulares.
Editar Usuarios: Actualizar la información de los usuarios.
Eliminar Usuarios: Eliminar usuarios del sistema.
Modal de Creación de Usuarios
El modal para crear un nuevo usuario incluye validación tanto en el front-end como en el back-end. Puedes elegir crear un usuario como administrador o usuario genérico. Para probar, crea un usuario genérico.

Listado de Usuarios
El usuario recién creado aparecerá en la lista de administración de usuarios, con notificaciones gestionadas por la librería SweetAlert.

Actualización de Usuarios
Haz clic en el botón de actualización para ver y modificar la información del usuario.

Perspectiva del Código Frontend
En el código frontend:

La capa de servicio maneja la respuesta de la llamada axios.
Las credenciales de usuario (username, password) se envían a través del endpoint correspondiente.
El hook useAuth procesa la respuesta autenticada del backend.
Librerías Utilizadas
SweetAlert: Para las notificaciones del sistema.
bcrypt: Para la encriptación de contraseñas.


Este `README.md` proporciona una guía completa para configurar y ejecutar tanto el frontend como el backend de tu proyecto, incluyendo la configuración de la base de datos y la creación inicial de usuarios.
