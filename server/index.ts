// initiating peripherals
import GpioHelper from "./gpio";

require("./serial");
GpioHelper.init();

import express from "express";
import path, { parse } from "path";
import bodyparser from "body-parser";
import EventManager, { EventData } from "./event_manager";
import { SERVER_PORT, iMessage, IOMsg } from "./constants";
import { createServer } from "http";
import { Socket } from "socket.io";
import { handleLastElements } from "./serverhandlers";

const app = express();
const http = createServer(app);
const io = require("socket.io")(http);

// Static handeling
app.use("/", express.static(path.join(__dirname, "..", "build")));
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());

// Redirect to static handeling
app.get("/pages/*", (req, res) => {
    console.log(`SPA redirect van ${req.url} naar /build/index.html`);
    res.sendFile(path.join(__dirname, "..", "build", "index.html"))
});

// Dynamic handeling
app.get("/newdata/:amount/", (req, res) => {
    const result = handleLastElements(parseInt(req.params.amount))
    if (result instanceof Error) {
        res.status(404);
        res.send(result.message);
    } else {
        res.json(result);
    }
});

// Websocket connections
io.on("connection", (socket: Socket) => {
    console.info("[*] New user connected to WS");

    // handle msg'es from clients
    socket.on(IOMsg.ASKLATEST, async (msg: string) => {
        console.info("[*] User just asked for latest items");
        
        const result = handleLastElements(parseInt(msg));

        if (result instanceof Error) {
            socket.emit(IOMsg.ASKLATEST, JSON.stringify({
                type: "error",
                msg: result.message
            } as iMessage))
        } else {
            socket.emit(IOMsg.ASKLATEST, JSON.stringify({
                type: "message",
                msg: JSON.stringify(result)
            } as iMessage));
        }
    });

    // handle new data
    const eventListener = (data: EventData) => {
        socket.emit(IOMsg.NEWDATA, JSON.stringify(data.eventdata));
    }
    EventManager.addListener(eventListener);

    socket.on("disconnect", () => {
        // clean all resources to prevent memory leaks
        EventManager.removeListener(eventListener);
        // @ts-ignore
        socket = undefined;
    })
})

http.listen(SERVER_PORT, () => console.log(`De website is aan het luisteren op poort ${SERVER_PORT}`));