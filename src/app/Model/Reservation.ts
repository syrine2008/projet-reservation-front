import { Travel } from "./Travel";
import { User } from "./User";
export class Reservation{
      id : number;
	  user: User ;
	  travel:Travel;
	  dateDebut: Date ;
      dateFin: Date ;

      constructor(id: number, user: User, travel: Travel, dateDebut: Date, dateFin :Date) {
        this.id = id;
        this.user = user;
        this.travel = travel;
        this.dateDebut = dateDebut;
        this.dateFin = dateFin ; 
      }





}



