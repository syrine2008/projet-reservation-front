import { Travel } from "./Travel";
import { User } from "./User";

export class Commentaire{
    id: number;
    travel: Travel;
    user: User;
    commentaire: string;
    date: Date;
    note: number;

    constructor(
        id: number,
        travel: Travel,
        user: User,
        commentaire: string,
        date: Date,
        note: number
    ) {
        this.id = id;
        this.travel = travel;
        this.user = user;
        this.commentaire = commentaire;
        this.date = date;
        this.note = note;
    }
}