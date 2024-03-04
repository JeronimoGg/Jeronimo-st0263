# info de la materia: ST0263 Topicos de telematica
#
# Estudiante(s): Jeronimo Gonzalez Gonzalez, jgoonzalez7@eafit.edu.co
#
# Profesor: Edwin Montoya, emontoya@eafit.edu.co
#
# Reto 1 y 2 P2P - Comunicación entre procesos mediante API REST, RPC 
#
# 1. breve descripción de la actividad
Esta tarea consiste en crear y poner en marcha un sistema para compartir archivos basado en la tecnología peer-to-peer (P2P), que opera de forma distribuida y sin un centro fijo. Cada punto de este sistema alberga servicios autónomos que facilitan el intercambio de datos entre pares utilizando API REST y gRPC. Se sugiere adoptar una configuración P2P no estructurada, donde cada punto cuenta con su propia configuración, incluyendo detalles como dirección IP y puertos.

En este sistema, los nodos tienen la capacidad de localizar y distribuir archivos haciendo consultas sobre los datos disponibles en la red. La transferencia de archivos ocurre directamente entre los nodos que disponen del archivo, mientras que las consultas y la interacción general con la red se gestionan a través de otros nodos. Es crucial que estos servicios autónomos funcionen de manera concurrente para permitir una comunicación efectiva y simultánea entre nodos remotos.

## 1.1. Que aspectos cumplió o desarrolló de la actividad propuesta por el profesor (requerimientos funcionales y no funcionales)
Durante el desarrollo de este proyecto, se ha logrado con éxito establecer el servidor central utilizando Express, un framework popular de Node.js para servidores web. Esta implementación ha establecido una base robusta y segura para manejar la comunicación dentro de la red de nodos del sistema. Además, se han ejecutado pruebas exhaustivas en las solicitudes de la API usando Postman, lo que ha confirmado la efectividad y estabilidad de las interacciones entre los componentes del sistema. Finalmente, se ha efectuado la comunicación entre los peers y el servidor central con éxito, empleando Axios, una biblioteca HTTP basada en promesas, asegurando así una comunicación eficiente y fluida en la red peer-to-peer.

## 1.2. Que aspectos NO cumplió o desarrolló de la actividad propuesta por el profesor (requerimientos funcionales y no funcionales)
En este proyecto, ciertos objetivos no se alcanzaron plenamente. La implementación de la comunicación mediante gRPC y MOM no se realizó como se había planeado, lo que habría beneficiado la eficacia y expansión del sistema. Adicionalmente, el despliegue en AWS no se efectuó, una opción que habría ofrecido ventajas como el acceso remoto y una mejor escalabilidad en la nube. Por último, el proceso de dockerización no se llevó a cabo, lo que habría simplificado la implementación y gestión del programa en diversos entornos. Estos elementos son áreas clave para mejorar y reforzar la funcionalidad y solidez del sistema.

# 2. información general de diseño de alto nivel, arquitectura, patrones, mejores prácticas utilizadas.
El proyecto se diseñó con una arquitectura peer-to-peer (P2P), permitiendo que los nodos interactúen directamente sin un servidor central. Esta estructura favorece la escalabilidad y la resiliencia, con nodos funcionando como clientes y servidores. Se implementaron prácticas de API para la comunicación entre nodos, utilizando API REST para interfaces de comunicación, ofreciendo un método estándar y adaptable para el intercambio de datos. El uso de Postman para pruebas aseguró la confiabilidad y funcionalidad de estas interfaces.

# 3. Descripción del ambiente de desarrollo y técnico: lenguaje de programación, librerias, paquetes, etc, con sus numeros de versiones.
- Lenguaje de programación: Node.js
- Framework web: Express.js
- Librería para hacer peticiones HTTP: Axios
- Herramienta para realizar pruebas de API: Postman
## como se compila y ejecuta.
- Para compilar y ejecutar este proyecto, primero se debe asegurar que Node.js esté instalado en el sistema. Luego, los pasos serían los siguientes:
   - Instalación de dependencias: Abrir una terminal en el directorio del proyecto y ejecutar el siguiente comando para instalar las dependencias necesarias: ```npm install```
   - Ejecución del servidor: Iniciar el servidor central ejecutando el siguiente comando en la terminal: ```node Server.js```
   - Ejecución de los nodos/peers: Abrir una nueva terminal para cada nodo/peer y ejecutar el siguiente comando para cada uno: ```node Pcliente.js```
-  Una vez que el servidor y los peers estén en funcionamiento, se pueden realizar peticiones a través de Postman. Abra Postman y realice las solicitudes HTTP según la API definida en el servidor y los endpoints disponibles en los peers.
## detalles del desarrollo.
- Implementación de la Comunicación entre Nodos
  - Arquitectura P2P: Se estableció una arquitectura peer-to-peer (P2P) para la comunicación entre nodos, permitiendo la interacción directa entre pares sin necesidad de un servidor centralizado.
  - Express.js para el Servidor Central: Se desarrolló un servidor central utilizando Express.js, aprovechando su capacidad para manejar rutas, middleware y solicitudes HTTP.
  - Comunicación entre Nodos: Axios se utilizó para facilitar la comunicación entre los nodos del sistema. Esta biblioteca proporcionó una forma sencilla de realizar solicitudes HTTP tanto desde el servidor central como entre los nodos pares.
- Pruebas de la API con Postman
  - Pruebas de Funcionalidad: Se realizaron pruebas exhaustivas de la API utilizando Postman para garantizar su correcto funcionamiento. Se probaron diferentes endpoints y escenarios de uso para validar la funcionalidad del sistema.
  - Validación de Peticiones HTTP: Postman permitió enviar y recibir solicitudes HTTP, lo que facilitó la validación de la comunicación entre los nodos y la correcta interpretación de las respuestas.
## detalles técnicos
- Gestión de Dependencias y Versiones
  - npm: Se utilizó npm para gestionar las dependencias del proyecto. Las versiones de las bibliotecas y paquetes utilizados se especificaron en el archivo ```package.json```
- Configuración del Servidor Central
  - Express Middleware: Se configuraron middlewares de Express para manejar la lógica de las solicitudes HTTP entrantes, como el enrutamiento, la validación de datos y la gestión de errores.
  - Endpoints de API: Se definieron endpoints de API RESTful para permitir a los nodos realizar consultas y compartir información sobre los archivos disponibles en la red.
- Comunicación entre Nodos
  - Axios: La comunicación entre los nodos se realizó utilizando Axios, una biblioteca HTTP basada en promesas que facilita la realización de solicitudes HTTP tanto desde el servidor central como entre los nodos pares.
  - Protocolos de Comunicación: Se implementaron protocolos de comunicación estándar para garantizar la interoperabilidad entre los nodos, lo que facilitó la integración y la expansión del sistema en el futuro.
- Pruebas de Integración
  - Postman Collection: Se creó una colección de Postman que contiene todas las solicitudes necesarias para probar la funcionalidad del sistema, lo que facilitó la realización de pruebas de integración y la validación del comportamiento esperado de la API.
  - Ambientes de Prueba: Se configuraron ambientes de Postman para separar las pruebas realizadas en entornos de desarrollo, pruebas y producción, lo que permitió realizar pruebas de extremo a extremo en diferentes etapas del ciclo de vida del software.

## opcionalmente - si quiere mostrar resultados o pantallazos 
![image](https://github.com/JeronimoGg/Jeronimo-st0263/assets/88728646/fcce7169-0263-4992-b843-60de5a3c9d93)
![image](https://github.com/JeronimoGg/Jeronimo-st0263/assets/88728646/1a5d2810-490d-401b-9e2a-ab08194938d3)
![image](https://github.com/JeronimoGg/Jeronimo-st0263/assets/88728646/92296e4b-d4b7-457e-89eb-42405818cb66)


# 4. Descripción del ambiente de EJECUCIÓN (en producción) lenguaje de programación, librerias, paquetes, etc, con sus numeros de versiones.
- Lenguaje de Programación y Entorno de Ejecución
  - Node.js: La aplicación se ejecuta en un entorno de Node.js en producción. Se utiliza Node.js debido a su eficiencia y escalabilidad para aplicaciones basadas en JavaScript.
- Framework y Librerías
  - Express.js: El servidor web en producción sigue utilizando Express.js como su framework principal. Express.js proporciona una manera sencilla y flexible de manejar rutas, middleware y solicitudes HTTP.
  - Axios: La biblioteca Axios sigue siendo utilizada para realizar solicitudes HTTP entre los nodos en el entorno de producción. Se utiliza para facilitar la comunicación entre los distintos componentes del sistema.
- Gestión de Dependencias y Versiones
  - npm: La gestión de dependencias se realiza a través de npm, al igual que en el entorno de desarrollo. Se especifican las versiones exactas de las dependencias en el archivo ```package.json``` para garantizar la consistencia en el entorno de producción.

# referencias:
## [sitio1-url ](https://grpc.io/docs/languages/node/quickstart/)
## [sitio2-url](https://grpc.io/docs/languages/node/basics/)
## [sitio3-url](https://chat.openai.com/auth/login)
