import { Buffer } from "./utils/buffer";

export interface EventData {
    msg: string
}

export type EventListener = (msg: EventData) => void;

export default class EventManager {
    private static readonly _buffer: Buffer<any> = new Buffer(10);
    private static _listeners: EventListener[] = [];

    static addListener(listener: EventListener) {
        this._listeners.push(listener);
    }

    static fireEvent(msg: EventData) {
        this._listeners.forEach(l => {
            l(msg);
        })
    }
}