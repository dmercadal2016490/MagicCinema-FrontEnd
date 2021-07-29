export class Pelicula{

    constructor(
        public _id: string,
        public name:string,
        public sinopsis:string,
        public clasificacion:string,
        public categoria:string,
        public estado:string,
        public fechaEstreno:string,
        public image:string,
        public asientos: []
    ){}
}