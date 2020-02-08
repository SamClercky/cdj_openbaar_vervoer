export interface iVehicle {
    type: "bus" | "trein",
    pin: number,
    name: string
}

export const vehicle_info: iVehicle[] = [
    {
        type: "bus",
        pin: 10,
        name: "bus1"
    }
];