console.log('loading index.js');

let ws = new WebSocket('ws://localhost:3000');

ws.addEventListener('open', event => {
    console.log('open connection');
});

ws.addEventListener('close', event => {
    console.log('close connection');
});

ws.addEventListener('message', event => {
    console.log(`Client received: ${event}`)
});