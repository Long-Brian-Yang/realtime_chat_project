# GoLang and ReactJS Chat Web Application

## Table of Contents

- [GoLang and ReactJS Chat Web Application](#golang-and-reactjs-chat-web-application)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Features](#features)
  - [Technologies Used](#technologies-used)
    - [Frontend](#frontend)
    - [Backend](#backend)
    - [Other Tools](#other-tools)
  - [Getting Started](#getting-started)
    - [Running the Application](#running-the-application)
  - [Project Structure](#project-structure)
  - [Acknowledgements](#acknowledgements)

## Introduction

Welcome to the **GoLang and ReactJS Chat Web Application**! This project is a real-time chat application that enables users to communicate seamlessly in a web-based chat room. Built with a robust backend powered by GoLang and a dynamic frontend using ReactJS, the application ensures efficient and safe concurrent communication using `gorilla/websocket`.

## Features

- **Real-Time Text Chat:** Instant messaging capabilities ensure conversations happen in real-time without noticeable delays.
- **User Authentication:** Users can log into the chatroom with a unique username. User information is securely stored in the browser’s session data.
- **Connection Notifications:** Members are notified when a user connects or disconnects, fostering a sense of community.
- **Scrollable Chat Feed:** Easily navigate through past messages with a scrollable chat history, complete with timestamps for each message.
- **Responsive Design:** The frontend is designed to be responsive, ensuring a seamless experience across various devices and screen sizes.

## Technologies Used

### Frontend

- **ReactJS:** A JavaScript library for building user interfaces.
- **SCSS:** A preprocessor scripting language that is interpreted or compiled into CSS.
- **WebSockets:** Enables real-time, full-duplex communication between the client and server.

### Backend

- **GoLang:** A statically typed, compiled programming language designed for scalability and performance.
- **Gorilla/WebSocket:** A Go implementation of the WebSocket protocol, facilitating real-time communication.

### Other Tools

- **Docker:** For containerizing the backend server.
- **NPM/Yarn:** Package managers for managing frontend dependencies.
- **GitHub Actions:** For continuous integration and deployment workflows.

## Getting Started

1. **Setup Backend**

   Navigate to the `backend` directory and install dependencies.

   ```bash
   cd backend
   go mod download
   ```

2. **Setup Frontend**

   Open a new terminal window/tab, navigate to the `frontend` directory, and install dependencies.

   ```bash
   cd frontend
   npm install

   # or

   yarn install
   ```

### Running the Application

1. **Start the Backend Server**

   In the `backend` directory, run:

   ```bash
   go run main.go
   ```

   The backend server will start on [http://localhost:8080](http://localhost:8080).

2. **Start the Frontend Application**

   In the `frontend` directory, run:

   ```bash
   npm start

   # or

   yarn start
   ```

   The frontend application will start on [http://localhost:3000](http://localhost:3000).

3. **Access the Application**

   Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to start using the chat application.

## Project Structure

realtime_chat_project  
├── .gitignore  
├── LICENSE  
├── README.md  
├── backend  
│ ├── Dockerfile  
│ ├── go.mod  
│ ├── go.sum  
│ ├── main.go  
│ └── pkg  
│ └── websocket  
│ ├── client.go  
│ ├── pool.go  
│ └── websocket.go  
├── frontend  
│ ├── .gitignore  
│ ├── README.md  
│ ├── package-lock.json  
│ ├── package.json  
│ ├── public  
│ │ ├── favicon.ico  
│ │ └── index.html  
│ └── src  
│ ├── App.css  
│ ├── App.js  
│ ├── App.test.js  
│ ├── api  
│ │ ├── ChatSocket.js  
│ │ └── index.js  
│ ├── authorization  
│ │ ├── auth.js  
│ │ └── protected.route.js  
│ ├── components  
│ │ ├── Chat  
│ │ │ ├── ChatHistory  
│ │ │ │ ├── ChatHistory.jsx  
│ │ │ │ ├── ChatHistory.scss  
│ │ │ │ └── index.js  
│ │ │ ├── ChatInput  
│ │ │ │ ├── ChatInput.jsx  
│ │ │ │ ├── ChatInput.scss  
│ │ │ │ └── index.js  
│ │ │ ├── ChatPage  
│ │ │ │ ├── ChatPage.jsx  
│ │ │ │ ├── ChatPage.scss  
│ │ │ │ └── index.js  
│ │ │ ├── Message  
│ │ │ │ ├── Message.jsx  
│ │ │ │ ├── Message.scss  
│ │ │ │ └── index.js  
│ │ │ └── UserList  
│ │ │ ├── UserList.jsx  
│ │ │ ├── UserList.scss  
│ │ │ └── index.js  
│ │ ├── Header  
│ │ │ ├── Header.jsx  
│ │ │ ├── Header.scss  
│ │ │ └── index.js  
│ │ └── Login  
│ │ ├── LoginPage.jsx  
│ │ ├── LoginPage.scss  
│ │ └── index.js  
│ ├── index.css  
│ ├── index.js  
│ ├── logo.svg  
│ ├── serviceWorker.js  
│ └── setupTests.js  
└── yarn.lock

## Acknowledgements

- [Gorilla WebSocket](https://github.com/gorilla/websocket) - For providing a robust WebSocket implementation in Go.
- [ReactJS](https://reactjs.org/) - For the powerful and flexible frontend framework.
- [Create React App](https://create-react-app.dev/) - For the development environment setup.
- [Docker](https://www.docker.com/) - For containerizing the backend application.

---

_Happy Coding!_

---
