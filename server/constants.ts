import { Buffer } from "./utils/buffer";

require("./includeenv");

// Global interfaces
export interface iMessage {
    msg: string,
    type: "error" | "message"
}

export enum IOMsg {
    ASKLATEST = "asklatest",
    NEWDATA = "newdata"
}

// Global constants
export const BUFFER_CAPACITY = parseInt(process.env.server_buffer as string);
export const SERVER_PORT = parseInt(process.env.PORT as string);
export const SERIAL_PORT = process.env.serial_port as unknown as number;
export const SERIAL_BAUDRATE = parseInt(process.env.baudrate as string);

export const MSG_BUFFER = new Buffer<iMessage>(BUFFER_CAPACITY); 