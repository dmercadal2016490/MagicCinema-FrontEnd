export class Reservacion{

    constructor(
        public fecha: string,
        public numeroTarjeta:number,
        public precio: number,
        public asiento: []
    ){}
}