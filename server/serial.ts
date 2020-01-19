import EventManager from "./event_manager";

const serial_port = process.env.serial_port as string;
const serial_baudRate = parseInt(process.env.baudrate as string);

const SerialPort = require('serialport');
const Readline = require('@serialport/parser-readline');
const port = new SerialPort(serial_port, { baudRate: serial_baudRate });
const parser = port.pipe(new Readline({ delimiter: '\n' }));
// Read the port data
port.on("open", () => {
  console.log('serial port open');
});
parser.on('data', (data: string) =>{
  console.log('got word from arduino:', data);
  EventManager.fireEvent({
    msg: data
  });
});
