# Proyecto Callbacks and JSON

JSON es un formato ampliamente utilizado en JavaScript para almacenar y transferir datos. Su sintaxis sencilla y su integración directa con JavaScript lo hacen indispensable para el desarrollo web moderno. Los callbacks son una herramienta poderosa para manejar la asincronía en JavaScript. Aunque pueden llevar a problemas de legibilidad en casos complejos, entenderlos es esencial para trabajar con APIs, eventos y otras operaciones asincrónicas.
Objetivo

El objetivo es crear una pequeña aplicación de consola que permita realizar las siguientes tareas:
|Pasos|
|-|
|1. Consultar libros: Mostrar todos los libros almacenados en formato JSON.|
|2. Agregar libros: Permitir al usuario agregar un libro a la colección.|
|3. Actualizar la disponibilidad: Cambiar el estado de disponibilidad de un libro a 'prestado' o 'disponible'.|
|4. (Opcional) Simular un archivo JSON: Aunque no vas a leer/escribir realmente en un archivo, simularás la lectura y escritura de datos usando callbacks, como si interactuaras con un sistema de almacenamiento.|

## Gestión de una Biblioteca de Libros

Imagina que eres parte del equipo de desarrollo de una pequeña biblioteca local que ha decidido construir una aplicación para gestionar su inventario de libros. La biblioteca desea almacenar la información sobre los libros, como el título, autor, género y si está disponible o prestado. La biblioteca también quiere ofrecer la opción de consultar el inventario de libros, agregar nuevos libros, y actualizar la disponibilidad de los libros cuando son prestados o devueltos. Para hacer esto, utilizarás JSON para almacenar los datos de los libros y callbacks para manejar las tareas asincrónicas, como la lectura y escritura de los datos.
Instrucciones para resolver el problema:

| Incluir                                                                                                                                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1. Crear un objeto JSON: Empezarás con un objeto JSON que contenga una colección de libros. Cada libro tendrá las propiedades `titulo`, `autor`, `genero` y `disponible`.                                                         |
| 2. Simular una función para leer datos: Usarás un callback para simular la lectura de un archivo JSON. Esta función tomará el objeto JSON y lo devolverá con un pequeño retraso (simulando una operación de lectura asincrónica). |
| 3. Crear funciones para interactuar con el inventario: Necesitarás funciones que permitan agregar libros, actualizar su disponibilidad y consultar el inventario.                                                                 |
| 4.(Opcional) Simular escritura en JSON: Similar a la lectura, simula la escritura de datos en un archivo JSON usando un callback. Esto se hará cuando se agregue un nuevo libro o se actualice la disponibilidad de un libro.     |
| Puedes consultar un extracto de código para comenzar con la solución, se incluye un ejmplo de lo que se espera en la siguiente url: https://gist.github.com/heladio-devf-mx/b7f9cd1ffe11e2fd9a46cba6ef019ea1                      |

## Entregables

Para este proyecto se debe crear un repositorio nuevo y agregar los archivos necesarios que contenga la solución al problema planteado. Si tienes alguna duda de este ejercicio, no dudes en consultarla con tu sensei para que quede claro. También puedes solicitar una asesoría.

```
> Crea un nuevo repositorio en tu equipo local para solucionar el problema planteado.
> Crea uno o más 'commits' en tu repositorio con los archivos utilizados en la solución.
> Si quieres agrega otro(s) archivo(s) que tengas con ejemplos de la clase o con algún ejemplo que tú hayas intentado mucho mejor.
> Comparte la liga de Github de tu repositorio con la solución.
```
