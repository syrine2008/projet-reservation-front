import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Reservation } from 'src/app/Model/Reservation';
import { ReservationService } from 'src/app/Services/reservation.service';

@Component({
  selector: 'app-dialog-reservation',
  templateUrl: './dialog-reservation.component.html',
  styleUrls: ['./dialog-reservation.component.css']
})
export class DialogReservationComponent implements OnInit {
  myForm: FormGroup;
  constructor(private reservationService: ReservationService, private fb: FormBuilder, public dialogRef: MatDialogRef<DialogReservationComponent>, public dialog: MatDialog) {
    this.myForm = this.fb.group({
      dateDebut: ['', Validators.required],
      dateFin: ['', Validators.required],
      travel: [JSON.parse(localStorage.getItem("travel") || '{}')],
      user: [JSON.parse(localStorage.getItem("user") || '{}')]
    });
  }

  ngOnInit(): void {
  }
  onSubmit() {
    console.log(this.myForm.value);
    this.reservationService.createResercvation(this.myForm.value).subscribe(data =>{
      this.close(); 
    })

  }
  close() {
    localStorage.removeItem('travel');
    this.dialogRef.close();
  }


}
