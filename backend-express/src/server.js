import http from "http"

import { Server } from "socket.io"

import app from "./app.js"

import dotenv from "dotenv"

dotenv.config()


const server = http.createServer(app)

const io = new Server(server, {
    cors: {
        origin: "*"
    }
})


io.on("connection", (socket) => {

    console.log("User connected:", socket.id)

    socket.on("disconnect", () => {

        console.log("User disconnected")
    })
})


const PORT = process.env.PORT || 3000


server.listen(PORT, () => {

    console.log(
        `Express Server Running On Port ${PORT}`
    )
})