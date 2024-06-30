import { WebSocketServer } from "ws";
import express from 'express';
import http from 'http';

const app = express();
const sockPort = 3000;

const server = http.createServer(app);
const wss = new WebSocketServer({ server });

wss.on('connection', (ws) => {
    console.log('Client connected.');

    ws.on('close', () => {
        console.log('Client disconnected.');
    });
    console.log(wss.clients.size);
});

server.listen(sockPort, () => {
    console.log(`Web socket is listening on port ${sockPort}`);
});