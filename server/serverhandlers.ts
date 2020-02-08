import { MSG_BUFFER, iMessage } from "./constants";
import { Request } from "express";

/**
 * Handle last few elements request
 * @param amount Amount that was asked
 * @returns Success or null on fail
 */
export function handleLastElements(amount: number): iMessage[] | Error {
    try {
        MSG_BUFFER.getLastElements(amount);
        return MSG_BUFFER.getLastElements(amount);
    } catch(ex) {
        return new Error(`You can only ask for maximum ${MSG_BUFFER.BUFFER_SIZE} items`);

    }
}
