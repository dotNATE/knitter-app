import express from "express";
import mongoose from "mongoose";

const server = async () => {
    const app = express();

    app.get('/', (req, res) => res.send('hello'));

    app.listen({port: 4200}, () => {
        console.log('Server Running');
    })
}

server();