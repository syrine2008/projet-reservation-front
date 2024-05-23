export class User {
    id: number;
    name: string;
    type: string;
    email: string;
    tel: string;
    date: Date;

    constructor(
        id: number,
        name: string,
        type: string,
        email: string,
        tel: string,
        date: Date
    ) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.email = email;
        this.tel = tel;
        this.date = date;
    }
}