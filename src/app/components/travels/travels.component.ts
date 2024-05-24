import { Travel } from './../../Model/Travel';
import { Component, Input, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { COLUMN } from 'src/app/Model/enums/column-filter-name';
import { TYPE } from '../../Model/enums/types';
import { TravelService } from 'src/app/Services/travel.service';
import { FormControl } from '@angular/forms';
import { NativeDateAdapter } from '@angular/material/core';
import { ThemePalette } from '@angular/material/core';
import { FilterObject } from '../../Model/FilterObject';
import * as moment from 'moment';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserConnexion } from '../../functions/connexion';
import { LoginComponent } from '../login/login.component';
import { DialogReservationComponent } from '../dialog-reservation/dialog-reservation.component';


export interface ChipColor {
  name: string;
  color: ThemePalette;
}

@Component({
  selector: 'app-travels',
  templateUrl: './travels.component.html',
  styleUrls: ['./travels.component.css']
})
export class TravelsComponent implements OnInit {
  @Input() id: string | undefined;
  travels: Travel[] = [];
  travelsinit: Travel[] = [];
  destinations = new FormControl('');
  nbPersonnes = new FormControl(0);
  destinationsList: string[] = [];
  selectedType: string = 'hebergement';
  page: number = 1; // Page actuelle
  pageSize: number = 5; // Nombre d'éléments par page
  availableColors: ChipColor[] = [
    { name: 'Hébergement', color: 'primary' },
    { name: 'Vols', color: 'primary' },
    { name: 'Activité', color: 'primary' },

  ];
  nombres: number[] = Array.from({ length: 10 }, (_, i) => i + 1);
  filterList: FilterObject[] = [];
  dateDebut: Date | undefined;
  dateFin: Date | undefined;
  btnSearch: boolean = true;
  nameUser: string | null = "";
  typeUser: string | null = "";
  connected: boolean = false;
  AffichageAvecFilter: boolean = false;
  panelOpenState = false;
  showComments: boolean[] = [];



  constructor(private travelService: TravelService, public dialog: MatDialog, private router: Router) {
    this.showComments = new Array(this.travels.length).fill(false);


  }

  ngOnInit(): void {

    //console.log(this.id);
    if (this.id != undefined && localStorage.getItem("typeUser") == "entrepreneur") {

      let user: string | null = localStorage.getItem("user");
      if (user) {
        this.travelService.getTravelsByOwner(JSON.parse(user)).subscribe(data => {
          //console.log("OWNER +++ >  ", data)
          this.travels = data;
          this.AffichageAvecFilter = false ;
        })
      }

    } else {
      this.travelService.getTravels().subscribe(data => {
        this.travelsinit = data;

        this.travels = data //.filter(travel => travel.type === TYPE[TYPE.Hébergement])
        this.AffichageAvecFilter = true ;
      })

    }

    this.travelService.getDestinations().subscribe(data => {
      this.destinationsList = data;
    })


  }

  onPageChange(event: any) {
    this.page = event.pageIndex + 1; // Met à jour la page actuelle lorsque l'utilisateur change de page
  }
  getStarArray(note: number): number[] {
    if(note > 0){
    
      return Array(Math.floor(note/5)).fill(0).map((_, index) => index);
    }else{
      return [] ; 
    }
  
  }
  getStarColor(): string {
    return 'star-yellow';
  }
  getsetNbPersonnes() {

    return 10;
  }
  getNbPersonnes() {
    //console.log(this.nbPersonnes.value)

    let exist = this.filterList.findIndex(element => { return element.column == COLUMN[COLUMN.nb_place] })
    if (exist !== -1) {
      this.filterList[exist].value = this.nbPersonnes.value?.toString();
    } else {
      let filterObj: FilterObject = {
        column: COLUMN[COLUMN.nb_place],
        value: this.nbPersonnes.value?.toString()
      };

      this.filterList.push(filterObj);


      //console.log(this.filterList)
    }
  }
  gettypeValue(value: any) {
    this.selectedType = value
    //console.log(value)
    this.travels = this.travelsinit.filter(travel => travel.type === value)
    this.filterList = [];
    this.destinations.reset();
    this.nbPersonnes.reset();
    this.dateDebut = new Date('');
    this.dateFin = new Date('');

    let exist = this.filterList.findIndex(element => { return element.column == COLUMN[COLUMN.type] })
    //console.log(exist)
    if (exist !== -1) {
      this.filterList[exist].value = this.selectedType;

      //console.log(this.filterList)
    } else {

      let filterObj: FilterObject = {
        column: COLUMN[COLUMN.type],
        value: this.selectedType
      };

      this.filterList.push(filterObj);


      //console.log(this.filterList)
    }

  }
  getDestination() {
    //console.log(this.destinations.value)

    let exist = this.filterList.findIndex(element => { return element.column == COLUMN[COLUMN.destination] })
    //console.log(exist)
    if (exist != -1) {

      this.filterList[exist].value = this.destinations.value;

    } else {
      let filterObj: FilterObject = {
        column: COLUMN[COLUMN.destination],
        value: this.destinations.value
      };

      this.filterList.push(filterObj);


      //console.log(this.filterList)
    }

  }
  formatDate(date: moment.Moment | undefined): string | undefined {
    return date ? date.format('YYYY-MM-DD') : undefined;
  }
  getDates() {

    //console.log(" date debut ", this.formatDate(moment(this.dateDebut)))
    //console.log('date fin', this.formatDate(moment(this.dateFin)))
    let exist = this.filterList.findIndex(element => { return element.column == COLUMN[COLUMN.start_date] })
    if (exist !== -1) {
      this.filterList[exist].value = this.formatDate(moment(this.dateDebut));
    } else {
      let filterObj: FilterObject = {
        column: COLUMN[COLUMN.start_date],
        value: this.formatDate(moment(this.dateDebut))
      };

      this.filterList.push(filterObj);
      //console.log(this.filterList)
    }



    exist = this.filterList.findIndex(element => { return element.column == COLUMN[COLUMN.end_date] })
    if (exist !== -1) {
      this.filterList[exist].value = this.formatDate(moment(this.dateFin));
    } else {
      let filterObj: FilterObject = {
        column: COLUMN[COLUMN.end_date],
        value: this.formatDate(moment(this.dateFin))
      };

      this.filterList.push(filterObj);


      //console.log(this.filterList)
    }

  }
  activateBtnSearch(): boolean {
    if (this.selectedType != '') {
      this.btnSearch = false;
      //console.log(this.btnSearch)
      return true;
    } else {
      return false;
    }
  }

  createFilter() {


    //console.log(this.filterList)
    this.travelService.getFiltredTravel(this.filterList).subscribe(data => {
      this.travels = data;
      //console.log(data)
    })
  }



  goToReservation(value : any ) {
    //console.log(UserConnexion())

    if (UserConnexion()) {

      localStorage.setItem('travel' , JSON.stringify(value))
      const dialogRef = this.dialog.open(DialogReservationComponent);
     // this.router.navigate(['/reservation']);
    } else {
      const dialogRef = this.dialog.open(LoginComponent);
      dialogRef.afterClosed().subscribe(result => {
        if (UserConnexion()) {
          this.nameUser = localStorage.getItem("userName");
          this.typeUser = localStorage.getItem("typeUser");
          this.router.navigate(['/acceuil']);
          this.connected = UserConnexion();
        }

      })
    }

  }
  //deleteReservationById
deleteTravel(id : any){
  this.travelService.deleteReservationById(id).subscribe(data =>{
    window.location.reload();
  
  })
}

  toggleComments(index: number): void {
    this.showComments[index] = !this.showComments[index];
  }
}
