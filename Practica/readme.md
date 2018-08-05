#Práctica: Creación de página web para currículum (CV)
 
##Consideraciones previas
 
- No se permite el uso de librerías y frameworks externos como Bootstrap, jQuery
- Se deberá crear una o más hojas de estilo CSS para aplicar el diseño deseado a nuestra web.
- Se deberá crear archivos JavaScript para definir las interacciones definidas en nuestra página web.

Estas condiciones son IMPRESCINDIBLES para la valoración de la práctica.
 
##Condiciones de compatibilidad:
 
La página web tiene que ser visible correctamente tanto en Google Chrome, como en Firefox y en EDGE.
 
##Detalles de implementación:
 
Se deberá crear una estructura web con contenido semántico mediante las etiquetas de HTML 5.

Dentro de la web encontraremos un mínimo de 3 temáticas diferentes:
- Portada: donde pondremos una imagen de foto con texto (deberá ocupar el viewport de la pantalla}
- Quien soy: donde se mostrará información de interés y una foto nuestra.
- Estudios: sección donde aparecerán nuestros diferentes estudios o cursos realizados.
- Experiencia: donde se contará la experiencia laboral con la que contamos.
- Sobre mí: Sección donde mostraremos algunos de nuestros intereses o aficiones con un pequeño video (máximo 10 Mb).
- Contacto: donde se mostrará los datos de contacto


También se deberá implementar un menú para poder navegar por las diferentes secciones, en el que se vea reflejado el scroll  en la barra lateral. 
Al mismo tiempo, se implementará un "smooth scroll" para realizar la navegación.

Desde el punto de vista del CSS, se incluirán las Media Queries necesarias para conseguir un diseño responsivo, en el que no falte el repliegue del menú y su aparición al hacer clic en el icono adecuado. Se deberá implementar alguna animacion CSS sin utilizar librerías externas.

Se puede usar cualquier regla de estilo CSS3 que cumpla con las condiciones de compatibilidad de la aplicación.

En la zona de formulario, se deberá implementar mínimo:
- Un campo de nombre requerido.
- Un campo de email y validarlo correctamente.
- Un campo se selección ("como me has conocido"), que tenga varias opciones y una de ellas se "Otros";
  si seleccionamos esta opción nos debe aparecer un campo dinámicamente de tipo texto para rellenar libremente.
- Un número de contacto, validando que el número es correcto
- Un campo de textarea, con un máximo de 150 palabras (no caracteres).
- Un botón de envío.

Opcionalmente, se podrá implementar una sección para el uso de peticiones AJAX (por ejemplo una zona de gestión de tareas como veremos en el curso).
