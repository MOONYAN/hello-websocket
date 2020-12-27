console.log('loading index.js');

let ws = new WebSocket('ws://localhost:3000');

ws.onopen = () => {
    console.log('open connection');
}

ws.onclose = () => {
    console.log('close connection');
}

ws.onmessage = event => {
    console.log(`Client received: ${event}`)
}