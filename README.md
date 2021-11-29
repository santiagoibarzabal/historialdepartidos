## Digital House - Comisión Turno Noche 22 - Pablo y Santi. 
### CRUD aplicado a resultados de partidos de deporte (de a 5 jugadores).  

La aplicación consiste en:

- Mostrar formulario de creación de Matches o Partidos. 
- Guardado de información de cada jugador en una tabla de posiciones en base a un partido. 
- Tabla de posiciones ordenada por diferencia de puntos. 
- Mostrar formulario de edición de datos de jugador. 
- Actualización de datos por jugador. 
- Borrado de datos por jugador.

El repositorio contiene la siguiente estructura

- app.js -> Archivo de entrada a la aplicación o entry point. 
- /data -> Base de datos de la aplicación en archivos JSON utilizados a modo didáctico. 
- /routes -> Carpeta con archivos enrutadores. 
- /views -> Carpeta que contiene las vistas de la aplicación en formato EJS. 
- /controllers -> Carpeta con archivos controladores para resolver las solicitudes HTTP recibidas desde las vistas, ya sea renderizando una vista EJS o ejecutando funciones de los servicios y redirigiendo una vez que las mismas finalizan. 
- /services -> Carpeta con funcionalidad relacionada a la lógica de "negocio" o propia de la aplicación.  
- /lib -> Carpeta con funcionalidades adicionales de utilidad para la aplicación. 

¡Muchas gracias! 