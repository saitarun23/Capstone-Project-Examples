export class Orders {
    constructor(
        public oid:number,
        public amount:number,
        public emailid?:string,
        public orderdate?:Date,
        public status:'pending' | 'shipped' | 'delivered' | 'cancelled' = 'pending'
    ){

    }
}