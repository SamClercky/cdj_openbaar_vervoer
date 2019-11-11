export class Buffer<T> {
    private _maxlength = 0;
    private _buffer: T[] = [];
    private _activeWritePointer = 0;
    private _activeReadPointer = 0;

    constructor(length = 0) {
        if (length < 0) throw Error("Invalid argument");
        this._maxlength = length;
        this._buffer = new Array(length);
    }

    add(item: T) {
        const pointer = this.nextWritePointer();
        this._buffer[pointer] = item;
    }

    getNext(): T {
        const value = this._buffer[this._activeReadPointer];
        this.nextReadPointer();

        return value;
    }

    private nextWritePointer(): number {
        this._activeWritePointer++;

        if (this._activeWritePointer == this._maxlength) {
            this._activeWritePointer = 0;
        }

        // Fail safe
        if (this.isPointerCollision()) this.nextReadPointer();

        return this._activeWritePointer;
    }
    
    private nextReadPointer(): number {
        this._activeReadPointer++;

        if (this._activeReadPointer == this._maxlength) {
            this._activeReadPointer = 0;
        }

        // Fail safe
        if (this.isPointerCollision()) this.nextWritePointer();

        return this._activeReadPointer;
    }

    private isPointerCollision(): boolean {
        return this._activeReadPointer == this._activeWritePointer;
    }
}