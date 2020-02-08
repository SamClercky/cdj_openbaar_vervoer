import EventManager from "./event_manager";
import { SERIAL_BAUDRATE, SERIAL_PORT } from "./constants";

const SerialPort = require('serialport');
const Readline = require('@serialport/parser-readline');
const port = new SerialPort(SERIAL_PORT, { baudRate: SERIAL_BAUDRATE });
const parser = port.pipe(new Readline({ delimiter: '\n' }));

// Lezen van poort data
port.on("open", () => {
  console.log('Serial port open');
});

parser.on('data', (data: string) =>{
  console.log('[*] Got word from arduino:', data);
  EventManager.fireEvent({
    eventdata: {
      msg: data,
      type: "message"
    }
  });
});
