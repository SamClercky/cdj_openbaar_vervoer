export class Buffer<T> {
    private _maxlength = 0;
    private _buffer: T[] = [];
    private _activeReadPointer = 0;

    constructor(length = 0) {
        if (length < 0) throw new Error("Invalid argument");
        this._maxlength = length;
        this._buffer = [];
    }

    add(item: T) {
        this._buffer.push(item);
        if (this._buffer.length == this._maxlength+1) {
            this._buffer.shift();
        }
        this._updateReadAddition();
    }

    getNext(): T | null {
        if (this._updateReadPointer()) {
            return this._buffer[this._activeReadPointer-1];
        } else {
            return null;
        }
    }

    getAll(): T[] {
        return [...this._buffer];
    }

    getElementAtIndex(index: number): T {
        if (index >= this._maxlength) // check arguments
            throw new Error(
                "Invalid index, must be smaller than " + this._maxlength
            );
        return this._buffer[index];
    }

    private _updateReadAddition() {
        this._activeReadPointer = Math.max(0, this._activeReadPointer-1);
    }

    /**
     * Update _activeReadPointer if it is possible
     * @returns {boolean} Success or failure of opperation
     */
    private _updateReadPointer(): boolean {
        const temp = this._activeReadPointer + 1;
        if (temp == this._maxlength+1) {
            return false;
        } else {
            this._activeReadPointer = temp;
            return true;
        }
    }
}