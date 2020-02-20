import { Buffer } from "./buffer";

test("Invalid buffer arguments must throw", () => {
    expect(() => new Buffer<number>(-1)).toThrow();
});

test("Add a element to a buffer", () => {
    const buffer = new Buffer<number>(5);
    buffer.add(1);
    buffer.add(2);
    buffer.add(3);

    expect(buffer.getAll()).toStrictEqual([
        1,
        2,
        3,
    ]);
});

test("Add a element to a buffer (with overflow)", () => {
    const buffer = new Buffer<number>(2);
    buffer.add(1);
    buffer.add(2);
    buffer.add(3);

    expect(buffer.getAll()).toStrictEqual([
        2,
        3,
    ]);
});

test("getLastElement (with overflow)", () => {
    const buffer = new Buffer<number>(5);
    buffer.add(1);
    buffer.add(2);
    buffer.add(3);
    buffer.add(4);
    buffer.add(5);

    expect(buffer.getLastElements(2)).toStrictEqual([
        4, 5
    ]);
});

test("getLastElement (with not anouth elements)", () => {
    const buffer = new Buffer<number>(5);
    buffer.add(1);
    buffer.add(2);
    buffer.add(3);

    expect(buffer.getLastElements(2)).toStrictEqual([
        2, 3
    ]);
});

test("getLastElement (with overflow)", () => {
    const buffer = new Buffer<number>(5);
    buffer.add(1);
    buffer.add(2);
    buffer.add(3);
    buffer.add(4);
    buffer.add(5);

    expect(() => buffer.getLastElements(10)).toThrow(Error);
});

test("getNext should give next element to be read", () => {
    const buffer = new Buffer<number>(3);
    buffer.add(1);
    buffer.add(2);
    buffer.add(3);

    expect(buffer.getNext()).toBe(1);
    expect(buffer.getNext()).toBe(2);
    expect(buffer.getNext()).toBe(3);
});

test("getNext should give next element to be read (with overflow)", () => {
    const buffer = new Buffer<number>(2);
    buffer.add(1);
    buffer.add(2);
    buffer.add(3);

    expect(buffer.getNext()).toBe(2);
    expect(buffer.getNext()).toBe(3);
    expect(buffer.getNext()).toBe(null);
});

test("getNext with overflow read and overflow write", () => {
    const buffer = new Buffer<number>(2);
    buffer.add(1);
    buffer.add(2);
    buffer.add(3);

    expect(buffer.getNext()).toBe(2);

    buffer.add(4);
    // brengt weer stapje verder door overflow
    expect(buffer.getNext()).toBe(3);
});

test("getElementAtIndex with index 0", () => {
    const buffer = new Buffer<number>(3);
    buffer.add(1);
    buffer.add(2);
    buffer.add(3);

    expect(buffer.getElementAtIndex(0)).toBe(1);
});

test("getElementAtIndex (with overflow)", () => {
    const buffer = new Buffer<number>(3);
    buffer.add(1);
    buffer.add(2);
    buffer.add(3);

    buffer.getNext();
    expect(buffer.getElementAtIndex(2)).toBe(3);
});

test("getElementAtIndex (with overflow index)", () => {
    const buffer = new Buffer<number>(3);

    expect(() => buffer.getElementAtIndex(3)).toThrow();
});