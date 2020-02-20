import { createStore, Action } from "redux"; 

export enum IOMsg {
    ASKLATEST = "asklatest",
    NEWDATA = "newdata"
}

export interface ASKLATEST extends Action {
    type: IOMsg.ASKLATEST,
    msg: iMessage[]
}

export interface NEWDATA extends Action {
    type: IOMsg.NEWDATA,
    msg: iMessage
}

export interface iMessage {
    msg: string,
    type: "error" | "message"
}

export interface iState {
    messages: iMessage[]
}

export const INITIAL_STATE: iState = {
    messages: [],
}

export type AppActions = ASKLATEST | NEWDATA;

export const store = createStore((state = INITIAL_STATE, action: AppActions) => {
    const result = Object.assign({}, state) as iState;
    switch (action.type) {
        case IOMsg.NEWDATA:
            if (action.msg.type == "message") {
                result.messages.push(action.msg);
            } else {
                console.error(action.msg.msg);
            }
            break;
        case IOMsg.ASKLATEST:
            result.messages = action.msg;
            break;
    }
    return result
})