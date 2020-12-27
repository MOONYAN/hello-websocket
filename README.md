# Hello Websocket

As a demo project for practicing websocket.

## Launch websocket server

```
node server.js
```

## Launch client

- open ./client/index.html in browser

## Skill

- server
    - [express](https://expressjs.com/) version 4.17.1
    - [ws](https://github.com/websockets/ws) version 7.4.1
- client
    - [WebSocket](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket)

## Event

- server
    - on **connection**
    - on **message**
    - on **close**

- client
    - on **open**
    - on **message**
    - on **close**

## Messaging

- server
```
ws.send(<message>:string)
```
```
wws.clients.forEach(client=>client.send(<message>:string))
```

- client
```
ws.send(<message>:string)
```

## Result

![](demo/client-messaging.gif)