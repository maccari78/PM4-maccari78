<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

<p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
<p align="center">

# ecommerce-maccari78
This is my backend ecommerce application, created with NestJS and TypeScript and connected to a PostgreSQL database using TypeORM. It has category, products and users seeders for data preloading in DB, it uses Jason Web Token for user authentication, it has UUID implemented for greater security in all its IDs, Open API Swagger for documentation, Multer, Cloudinary and buffer-to-stream for uploading images from the cloud. The only ones who can assign roles are the "superAdmin" so they are also the only ones who see the list of users with their assigned roles, the complete list of orders can only be seen by the "superadmin and the admin", the "user" only see the purchase orders that correspond to each user and also implement a "stock control" that depends on the status of the order (processing, shipped, delivered, canceled) and docker-compose for the containerization of the app and the database.




