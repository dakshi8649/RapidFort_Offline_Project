# Rapidfort_task

File Upload System with Express.js and express-fileupload

Welcome to the documentation for the File Upload System project using Express.js and the `express-fileupload` middleware. This project involves creating a web server that allows users to upload files and provides information about the uploaded files using the Express.js framework and the `express-fileupload` middleware.

Introduction

The File Upload System project demonstrates the use of Express.js and the `express-fileupload` middleware to create a web server that handles file uploads and provides information about the uploaded files. This project aims to simplify the process of uploading files and accessing information about those files through a user-friendly API.

Getting Started
Prerequisites
Before you start, ensure you have the following software and tools installed on your machine:
- Node.js: The project requires Node.js to run the server.
- npm (Node Package Manager): This will be used to install project dependencies.
- Git: You'll need Git to clone the project repository.
Installation
1. Clone the repository:
   git clone https://github.com/your-username/file-upload-system.git
2. Navigate to the project directory:
   cd file-upload-system
3. Install the project dependencies:
   npm install
Running the Server
To start the server and make it ready to accept API requests, run the following command:
npm start
The server will start and listen on a specified port (default is 3000). You can configure the port in the `config.js` file.
API Definition and Clarity of REST
The File Upload System project adheres to the principles of Representational State Transfer (REST). REST is an architectural style for designing networked applications, particularly web services. It defines a set of constraints that encourage a client-server communication model.
HTTP Methods
The project uses two primary HTTP methods: GET and POST.
GET: This method is used to retrieve information from the server. In the context of this project, the GET method is used to request information about uploaded files.
POST: This method is used to send data to the server for processing. In this project, the POST method is used for uploading files to the server.

Adding UI to Web Server

Create a file `style.css` and add all styling into this file.

Setting up Docker

Step 1: Create a `Dockerfile` with all the necessary configurations.
Step 2: Download Docker Desktop if not installed on your system.
Step 3: Run the following commands to build the Docker image and then run it.
```
docker build -t rapidfort:v1 .
docker run -d -p 80:8000 rapidfort:v1
```

Conclusion

Congratulations! You've set up the File Upload System project using Express.js and the `express-fileupload` middleware. This project showcases how to handle file uploads and provide information about uploaded files through a user-friendly API. It's a valuable starting point for building more advanced file management systems or integrating file-related functionality into your applications.
