# TP VirtualDreams

## Ejecución de los ejercicios:
### Ejercicio 4:
1. Abrir una terminal e ir a la ruta del archivo mostrarPersonas.js

2. Instalar los módulos necesarios por npm:

        npm install request-promise

3. Ejecutar el script:

        node mostrarPersonas.js

### Ejercicio 5:
1. Abrir una terminal e ir a la ruta del archivo servidorNode.js

2. Instalar los modulos necesarios por npm:

        npm install express
        npm install request
        npm install body-parser

3. Iniciar el servidor:

        node servidorNode.js

4. Generar requests POST mediante algun otro script o programa (Postman por ejemplo)

5. Observar el codigo de la respuesta.

### Ejercicio 6:
1. Repetir los pasos del ejercicio 5 hasta iniciar el servidor.

2. Abrir el archivo crearPersonas.html en algun navegador.

3. Rellenar los campos y apretar enviar.

4. Observar el codigo de la respuesta.

## Ejercicio 2:
Las siguientes preguntas están orientadas a la comprensión del protocolo HTTP. Son agnósticas al lenguaje de programación, la idea es comprender los conceptos del estándar:

1.	**¿Qué es un servidor HTTP?**
Un servidor HTTP es un software que se comunica con un cliente mediante el protocolo HTTP, se encarga de procesar sus pedidos y entregar o generar las respuestas en forma de contenidos web.

2.	**¿Qué son los verbos HTTP? Mencionar los más conocidos**
Los verbos HTTP son métodos que indican que acción se desea que se realice sobre un determinado recurso. Los mas conocidos son GET, HEAD y POST.

3.	**¿Qué es un request y un response en una comunicación HTTP? ¿Qué son los headers?**
Un request es una operación que un cliente quiere que se realice en el servidor. Un response es la respuesta del servidor a un request. Los headers son una parte del mensaje HTTP que describen el mensaje y contienen varios parámetros.

4.	**¿Qué es un queryString? (En el contexto de una url)**
Un query string es una parte de la URL que asigna valores a determinados parámetros.

5.	**¿Qué es el responseCode? ¿Qué significado tiene los posibles valores devueltos?**
El response code es un código de tres dígitos que indica si el request se completo exitosamente. Los posibles valores devueltos son:
•	1xx (Información): Reportan cómo se procesan los requests.
•	2xx (Éxito): Indican que el request fue aceptado para procesarse.
•	3xx (Redirección): Indican que se necesitan tomar mas medidas para completar la request.
•	4xx (Error de cliente): Reportan errores del lado del cliente.
•	5xx (Error de servidor): Reportan errores del lado del servidor

6.	**¿Cómo se envía data en un Get y cómo en un POST?**
En un GET la data se envia en la URL mediante un query string. En un POST la data se envía en el cuerpo del mensaje del request

7.	**¿Qué verbo http utiliza el navegador cuando accedemos a una página?**
Al acceder a una página el navegador utiliza el verbo GET.

8.	**Explicar brevemente qué son las estructuras de datos JSON y XML dando ejemplo de estructuras posibles.**
JSON o JavaScript Object Notation es un formato de texto para guardar e intercambiar datos estructurados. Es un formato fácil de escribir y de parsear. Se construye mediante 2 tipos de estructuras: Una coleccion de pares key:value, ejemplo: { "nombre": "Ramiro" } o un set de valores ordenados (arreglo o lista), ejemplo: { "personas": [ { "nombre": "Ramiro" }, { "nombre": "Ramiro2" } ] }.
XML o eXtensible Markup Language tambien es un formato de texto para guardar e intercambiar datos estructurados. Un documento XML consiste en tags, que es un string, y elementos que es el bloque principal de XMl y contiene texto, tags, otros elementos y atributos. Ejemplo de XML:

        <?xml version="1.0" encoding="UTF-8"?>
          <autor>
          <nombre>Ramiro</nombre>
          </autor>

9.	**Explicar brevemente el estándar SOAP**
SOAP o Simple Object Access Protocol es un protocolo que especifica el intercambio de informacion estructurada en la implementación de servicios web utilizando XML. Su propósito es proveer extensibilidad, neutralidad, verbosidad e independencia

10.	**Explicar brevemente el estándar REST Full**
REST  o Representational State Transfer es una forma de interaccion entre clientes y servidores en la internet. Es un conjunto de restricciones a considerar al crear aplicaciones y servicios web. Un servicio desarrollado a partir de las reglas o principios REST se le llama RESTful.

11.	**¿Qué son los headers en un request? ¿Para qué se utiliza el key Content-type en un header?**
Los headers en un request son parametros que se envían en un request HTTP al servidor para proporcionar información sobre la transacción en curso. El content-type se utiliza para especificar el tipo de medio del contenido en el body de una request POST o PUT. Por ejemplo: Content-Type: text/html.

