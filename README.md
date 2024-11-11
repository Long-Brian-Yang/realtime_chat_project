## GoLang and ReactJS Chat Web Application

A web development project to create a simple chat room experience in the browser using React w/ GoLang.
The application can handle safe concurrent communication in Go with gorilla/websocket.

## Running Locally

Running the backend WebSocket server:

- cd into `/backend`
- `go run main.go`

Running the frontend ReactJS application:

- cd into `/frontend`
- install dependencies with `npm install`
- `npm start`

Navigate to `http://localhost:3000/`

## Features

- Real time web-based text chat
- Allows users to log into the chatroom with a username (user info stored in browser session data)
- Chat room members will be notified when a user connects/disconnects
- Scrollable chat feed with timestamps

![](Brian_chat_example.gif)

```
realtime_chat_project
├─ .gitignore
├─ LICENSE
├─ README.md
├─ backend
│  ├─ Dockerfile
│  ├─ go.mod
│  ├─ go.sum
│  ├─ main.go
│  └─ pkg
│     └─ websocket
│        ├─ client.go
│        ├─ pool.go
│        └─ websocket.go
├─ frontend
│  ├─ .gitignore
│  ├─ README.md
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ public
│  │  ├─ favicon.ico
│  │  ├─ index.html
│  └─ src
│     ├─ App.css
│     ├─ App.js
│     ├─ App.test.js
│     ├─ api
│     │  ├─ ChatSocket.js
│     │  └─ index.js
│     ├─ authorization
│     │  ├─ auth.js
│     │  └─ protected.route.js
│     ├─ components
│     │  ├─ Chat
│     │  │  ├─ ChatHistory
│     │  │  │  ├─ ChatHistory.jsx
│     │  │  │  ├─ ChatHistory.scss
│     │  │  │  └─ index.js
│     │  │  ├─ ChatInput
│     │  │  │  ├─ ChatInput.jsx
│     │  │  │  ├─ ChatInput.scss
│     │  │  │  └─ index.js
│     │  │  ├─ ChatPage
│     │  │  │  ├─ ChatPage.jsx
│     │  │  │  ├─ ChatPage.scss
│     │  │  │  └─ index.js
│     │  │  ├─ Message
│     │  │  │  ├─ Message.jsx
│     │  │  │  ├─ Message.scss
│     │  │  │  └─ index.js
│     │  │  └─ UserList
│     │  │     ├─ UserList.jsx
│     │  │     ├─ UserList.scss
│     │  │     └─ index.js
│     │  ├─ Header
│     │  │  ├─ Header.jsx
│     │  │  ├─ Header.scss
│     │  │  └─ index.js
│     │  └─ Login
│     │     ├─ LoginPage.jsx
│     │     ├─ LoginPage.scss
│     │     └─ index.js
│     ├─ index.css
│     ├─ index.js
│     ├─ logo.svg
│     ├─ serviceWorker.js
│     └─ setupTests.js
└─ yarn.lock

```
