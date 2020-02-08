import { iMessage } from "./constants";

export interface EventData {
    eventdata: iMessage
}

export type EventListener = (data: EventData) => void;

/**
 * Helper voor het rondsturen van berichten
 */
export default class EventManager {
    private static _listeners: EventListener[] = [];

    /**
     * Voeg een listener toe aan de globale berichten pijplijn
     * @param listener 
     */
    static addListener(listener: EventListener) {
        this._listeners.push(listener);
    }

    /**
     * Verwijder een listener toe aan de globale berichten pijplijn
     * @param listener Callback die aangeroepen wordt bij ieder bericht
     */
    static removeListener(listener: EventListener) {
        this._listeners = this._listeners.filter(item => item != listener);
    }

    /**
     * Vuur een bericht af naar de buitenwereld
     * @param msg Te sturen bericht
     */
    static fireEvent(msg: EventData) {
        this._listeners.forEach(l => {
            l(msg);
        })
    }
}