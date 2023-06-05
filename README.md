# Aplicación Lista de Tareas -Task List App
Se trata de una aplicación realizada con React y Vite, conectada a Firebase, que permite la gestión de tareas a través de una lista actualizable desde la consola.
## Implementación de la App
La interfaz de la Aplicación cuenta con una vista de **Login**, que permite a los usuarios acceder a su propio dashboard de Lista de Tareas. Por obvias razones, para loguearse, inicialmente se procede con el **Registro** del usuario, el cual cuenta con las validaciones tanto de los elementos html, como las de Firebase.

Una vez logueado el usuario, puede acceder al **Dashboard** que contiene la Lista de Tareas y permite actualizarla en tiempo real, con funciones de tachado de tareas completadas, y eliminación de tareas que el usuario no necesite visualizar en la interfaz.