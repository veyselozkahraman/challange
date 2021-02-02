# Take-Home Challenge
This project is a web app for displaying list of products with search by title feature.

## Description
With this app, you can see the list of all products with the substring search feature. Search feature is not case sensitive, you can search for any substring in product titles.

## Technologies Used

For the client part of the project, tech stack contains VueJS and Vuetify.
For the server part of the project, ExpressJS is used.

In general, Docker is used to containerize client and server parts. 

## Installation and Setup

Port used for the server-side is 8081 and for the client-side is 8080. Please make sure that there are no processes working on these ports.

* **With Docker**
  * Requirements: Docker Desktop
  * Since docker is used for containerization, you can use docker for building the project.

  * Clone the project
  * Download Docker desktop if you have not via [this link](https://docs.docker.com/get-docker/)
  * Run Docker Desktop
  * From the root directory of the project;
    * Run app with command `docker-compose up --build`
    * Go to <http://localhost:8080>




* **Without Docker**
  * Requirements: Node, npm

  * Clone the project
  * From the root directory of the project;
    * Go to server folder with command `cd server`
    * Install dependencies with command `npm install`
    * Run server-side with command `node server.js`

  * From the root directory of the project;
    * Go to client folder with command `cd client`
    * Install dependencies with command `npm install`
    * Run client-side with command `npm run serve`
    * Go to <http://localhost:8080>