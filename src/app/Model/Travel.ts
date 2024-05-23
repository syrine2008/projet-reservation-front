import { Commentaire } from "./Commentaire";
import { User } from "./User";

export class Travel {
    id: number;
    name: string;
    description: string;
    departure: string;
    destination: string;
    ville: string;
    type: string;
    startDate: Date;
    endDate: Date;
    price: number;
    nbPlace: number;
    disponibility: string;
    note: number;

    urlImage: string;
    owner:User;
    commentaires : Commentaire[] ; 

    constructor(
        id: number,
        name: string,
        description: string,
        departure: string,
        destination: string,
        ville: string,
        type: string,
        startDate: Date,
        endDate: Date,
        price: number,
        nbPlace: number,
        disponibility: string,
        urlImage: string,
        note : number , 
        owner: User,
        commentaires : Commentaire[]
    ) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.departure = departure;
        this.destination = destination;
        this.ville = ville;
        this.type = type;
        this.startDate = startDate;
        this.endDate = endDate;
        this.price = price;
        this.nbPlace = nbPlace;
        this.disponibility = disponibility;
        this.note = note;
        this.commentaires = commentaires;
        this.urlImage = urlImage;
        this.owner = owner;
    }
}