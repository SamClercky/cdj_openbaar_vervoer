import { createStore, Action } from "redux";

export enum IOMsg {
    ASKLATEST = "asklatest",
    NEWDATA = "newdata"
}

export interface iMessage {
    msg: any,
    type: "error" | "message"
}

export interface ASKLATEST extends Action {
    type: IOMsg.ASKLATEST,
    msg: iMessage[]
}

export interface NEWDATA extends Action {
    type: IOMsg.NEWDATA,
    msg: iMessage
}

export interface TOGGLE_ALERT extends Action {
    type: "TOGGLE_ALERT"
}

export interface iState {
    messages: iMessage[],
    alert: boolean,
}

export const INITIAL_STATE: iState = {
    messages: [],
    alert: false,
}

export type AppActions = ASKLATEST | NEWDATA | TOGGLE_ALERT;

export const store = createStore((state: iState = INITIAL_STATE, action: AppActions) => {
    const result = Object.assign({}, state) as iState;
    switch (action.type) {
        case IOMsg.NEWDATA:
            if (action.msg.type === "message") {
                result.messages.unshift(action.msg);
            } else {
                console.error(action.msg.msg);
            }
            break;
        case IOMsg.ASKLATEST:
            result.messages = action.msg;
            break;
        case "TOGGLE_ALERT":
            result.alert = !result.alert;
            break;
    }
    return result
    // @ts-ignore
}, /* preloadedState, */ window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())