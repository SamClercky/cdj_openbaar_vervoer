import {} from "socket.io";

// @ts-ignore
export const SOCKET = io();

export function sendSocket() {
    console.log(SOCKET);
}