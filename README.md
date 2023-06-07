# Aplicación Lista de Tareas -Task List App
Se trata de una aplicación realizada con React y Vite, conectada a Firebase, que permite la gestión de tareas a través de una lista actualizable desde su **Dashboard**. Tiene un estilo sencillo y sobrio, fácilmente customizable y escalable gracias a la modularización del código.
## Implementación de la App
La interfaz de la Aplicación cuenta con una vista de **Login**, que permite a los usuarios acceder a su propio dashboard de Lista de Tareas y una vista de **Registro** de usuarios.

Una vez logueado el usuario, puede acceder al **Dashboard**, que contiene la Lista de Tareas y permite actualizarla en tiempo real, con funciones de tachado de tareas completadas, y eliminación de tareas que el usuario no necesite visualizar en la interfaz.

## Conexión con Firebase
Para la configuración de Firebase se utilizaron variables de entorno, utilizando las configuraciones que Vite proporciona por defecto. Igualmente, se utilizaron las validaciones de autenticación que Firebase proporciona durante su registro y login. Cuenta con una conexión a Realtime Database para almacenar el texto de las tareas.