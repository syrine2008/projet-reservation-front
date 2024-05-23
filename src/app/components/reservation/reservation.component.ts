import { Component, OnInit } from '@angular/core';
import { Reservation } from 'src/app/Model/Reservation';
import { ReservationService } from 'src/app/Services/reservation.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  typeUser = localStorage.getItem('typeUser');
  userid = localStorage.getItem('userId');
  listDesReservations :Reservation[] =[] ;

  constructor(private reservationService: ReservationService) {
    if (this.userid) {
      this.reservationService.getReservationbyUserId(this.userid).subscribe(data => {
        this.listDesReservations =  data ; 
        console.log(data);
      })
    }

  }

  ngOnInit(): void {
  }

}
