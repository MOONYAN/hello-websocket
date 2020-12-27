const express = require('express');

const SocketServer = require('ws').Server;

const PORT = 3000;

const server = express().listen(PORT, () => console.log(`Listening on ${PORT}`));

const wss = new SocketServer({ server });

wss.on('connection', ws => {
    console.log('Client connected');

    ws.on('message', data => {
        console.log(`server received: ${data}`);
        ws.send(data);

        wss.clients.forEach(client => {
            client.send(`Brocast: ${data}`);
        });
    })

    ws.on('close', () => {
        clearInterval(sendNowTime);
        console.log('Close connected');
    })

    const sendNowTime = setInterval(() => {
        ws.send(String(new Date()));
    }, 1000);
});