export class User{

    constructor(
        public _id: string,
        public name:string,
        public lastname:string,
        public username:string,
        public email:string,
        public password:string,
        public image:string,
        public role:string,
        public reservaciones: [],
        public factura:[]
    ){}
}