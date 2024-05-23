import { Component, OnInit } from '@angular/core';
import { TravelService } from 'src/app/Services/travel.service';
import { UserConnexion } from '../../functions/connexion';



@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css'],

})
export class AcceuilComponent implements OnInit {
id : string = '';
  connexion = UserConnexion() ;
  constructor(private travelService: TravelService) {
   

  console.log("heareeeee")
  }

  ngOnInit(): void {
    console.log(UserConnexion())
    this.id = localStorage.getItem('id') ?? '';

  }

  ngAfterViewInit(){
    console.log(UserConnexion())
  }
  
}

