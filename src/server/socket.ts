import SocketIOClient from "socket.io-client";
import { IOMsg, iMessage, store } from "./redux";

export default class Socket {
    private endpoint: string = "";
    private socket: SocketIOClient.Socket;

    constructor(url?: string) {
        this.endpoint = (url) ? url : "localhost:8080";
        this.socket = SocketIOClient(this.endpoint);

        this.socket.on(IOMsg.NEWDATA, (msg: string) => {
            const data = JSON.parse(msg).msg as string;
            store.dispatch({msg: JSON.parse(data) as iMessage, type: IOMsg.NEWDATA});
        });
    }
}