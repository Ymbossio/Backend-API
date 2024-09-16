# API DE PRODUCTOS Y TRANSACCIONES

Esta es una api de productos y transacciones consiste en que un cliente ingresa al sitio web https://frontend-react-app.netlify.app/ <br>
y desde allí elige el producto que desea comprar las tecnolgias utilizadas son  Nodejs, Express, TypeScript, Sequalize y una pasarela de pago.

Este proyecto emplea el patrón de diseño hexagonal para estructurar su arquitectura, de modo que las funciones empresariales estén claramente diferenciadas de las tecnologías externas.
El patrón de diseño hexagonal favorece la modularidad y la facilidad de mantenimiento del código al centrarse en el núcleo del problema y desvincularlo de componentes externos como bases de datos o interfaces de usuario.

<ul>
  <li>El usuario selecciona uno o más productos que desee comprar en el sitio web</li>
  <li>Una vez que el usuario tenga sus productos listo, procede al pago del producto</li>
  <li>El usuario presiona el boton de pagar Se le abré un modal dentro de la misma página web para proceder a ingresar
  los datos de su tarjeta e información personal.</li>
</ul>

# CARACTERISTICAS
<ul>
  <li>Manejo seguro y eficiente de los métodos de pago y transacciones de Wompi.</li>
  <li>Selección de articulos de alta calidad</li>
  <li>Experiencia de usuario y sistema responsive.</li>
</ul>

# Configuración
 <ul>
   <li> Tener una cuenta creada en la pasarela de pago </li>
   <li> Conocimientos en las tecnologias de Nodejs</li>
   <li> Tener un sitio web desplegado para la integraccion</li>
 </ul>

 # Variables de Entornos

 <ul>
   <li>PORT_SERVER = puerto_de_la_aplicacion</li>
   <li>EVENT_INTEGRATION = evento_de_integracion</li>
   <li>NODE_DATABASE = nombre_base_de_datos</li>
   <li>NODE_PORT= puerto_database</li>
   <li>NODE_USER= user_database</li>
   <li>NODE_HOST= host_database</li>
   <li>NODE_PASSWORD= clave_database</li>
   <li>NODE_DIALECT= moto_database</li>
   <li>NODE_ENV=entorno_prod_o_des</li>
 </ul>
 
# Acceso a la API

<ul>
  <li>Url: https://backend-api-7c8l.onrender.com </li>
</ul>


# Tests
Los test de la api fueron realizados con Jest
para probarlos.
<ul>
  <li> npm test</li>
</ul>


## Autor
Yovanis Manuel Bossio Lambraño










