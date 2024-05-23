import { User } from './../../Model/User';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import { TYPEUSER } from '../../Model/enums/typeUser' ; 
import * as moment from 'moment';
import { UserService } from 'src/app/Services/user.service';
@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  myForm: FormGroup;
  typeUserOptions = Object.values(TYPEUSER);
  constructor(private fb: FormBuilder , public dialogRef: MatDialogRef<InscriptionComponent> , private userService : UserService) {
    this.myForm = this.fb.group({
      id: ['', ],
      name: ['', Validators.required],
      type: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      tel: ['', Validators.required],
      date: [this.formatDate(moment (new Date()))],
      login: ['', Validators.required],
      mdp: ['', Validators.required]
    });
  }
  formatDate(date: moment.Moment | undefined): string | undefined {
    return date ? date.format('YYYY-MM-DD') : undefined;
  }
  onSubmit() {
    


    if (this.myForm.valid) {
      let user : User = this.myForm.value ;
      this.userService.createUser(user).subscribe(data =>{
        console.log(data) ;
      })
  
    this.dialogRef.close() ; 
    } else {
      
    }
  }
  ngOnInit(): void {
  }

}
