## API retroshop - Realizado por Miguel Dario Garcia Quintas, Juan Gabriel Callejo Vidal, Luis Manuel Dominguez Brito, Marta Diéguez González Y Daniel Vázquez González.

API retroshop es una API para una plataforma de compra-venta en la que los usuarios tendrán la posibilidad de registrarse para poder publicar y/o vender productos.

La base de datos cuentas con tres 

A continuación están las instrucciones para ejecutar la API.

## Base de datos

Tras abrir el proyecto en Virtual Studio Code. Ejecuta: npm i, para instalar todas las dependencias requeridas. 
Crea un archivo .env con el archivo .env.example de referencia.

1. Introducimos npm run initDB en la terminal para crear la Base de Datos. El código se ejecuta y acontinuación crea una base de datos con una tabla "users"

A su vez se genera otra tabla "reservation"

Y finalmente se genera la tabla "products".

En caso de que quieras resetear la base de datos, hemos creado un script dentro del package.json llamado "resetDb" el cual te ejecuta un reseteo de la base de datos.

Para ejecutar este script debes escribir: npm run resetDb en la terminal

## Creación API con Express

Esta API creada con express contiene los siguientes endpoints:

Por users:

- POST /register

  Permite generar un usuario nuevo en la Base de Datos, y le envía un correo de verificación 
  al correo inscrito en la DB

  Se requiere para el registro:
   
   1. name
   2. email
   3. hashedPassword
   4. verificationCode

- POST /verify

  Verifica el registro de la cuenta de la Base de Datos, empleamos el código del email 
  que nos llegó tras el registro para verificar

  Se requiere para la verificación:
   
   1. email
   2. verificationCode
   
- POST /login

  Permite el acceso al usuario a su cuenta

  Se requiere para el login:
   
   1. email
   2. password

- PUT /profile

  Nos permite hacer modificaciones en los diferentes campos de nuestro usuario

  Se requiere para actualizar:
   
   1. email
   2. password
   3. biography

///////////////////////////////////////////////////////////

Por productos:

- GET /products

   Responde al listado de productos permitiendo a un usuario anónimo/registrado acceder a ellos

- GET /products/user/:userId

  Permite ver los productos de un usuario

- POST /products/search
 
  Permite al usuario buscar productos

- POST /products/create

  Permite al usuario crear productos 

- PUT /products/:productid

  Permite al usuario modificar su producto 

- DELETE /products/:id

  Permite al usuario eliminar su producto 

/////////////////////////////////////////////////////////////////

Por reservation:

- POST /reservation

 Genera un petición de compra a un vendedor por id de producto

- POST /reservation-update

 Cambia el status de "pendiente" a "en proceso"

- PATCH /products/purchaseConfirmation

Confirmación de compra: el vendedor envía fecha y lugar de encuentro para la venta, el status cambia de "en proceso" a "finalizada"

//////////////////////////////////////////////////////////////////




