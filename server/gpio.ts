import { Gpio } from "pigpio";
import { vehicle_info, iVehicle } from "./vehicle_info";
import EventManager from "./event_manager";

const vehicle_config: 
    { // defintion from pigpio docs
        mode?: number | undefined;
        pullUpDown?: number | undefined;
        edge?: number | undefined;
        timeout?: number | undefined;
        alert?: boolean | undefined;
    } | undefined = {

    mode: Gpio.INPUT,
    pullUpDown: Gpio.PUD_DOWN,
    edge: Gpio.EITHER_EDGE
}

export default class GpioHelper {
    private static _gpio: Gpio[] = [];

    static init() {
        for (let v of vehicle_info) {
            const vehicleGPIO = new Gpio(v.pin, vehicle_config);
            vehicleGPIO.on("interrupt", this.vehicleInterupt(v))
            GpioHelper._gpio.push(vehicleGPIO);
        }
    }

    private vehicleInterupt(vehicle: iVehicle) {
        return ((level: number) => {
            if (level == 1) { // enkel 1 keer fire'en
                EventManager.fireEvent({
                    eventdata: {
                        msg: JSON.stringify({
                            vehicle: vehicle,
                        }),
                        type: "message"
                    }
                });
            }
        });
    }
}