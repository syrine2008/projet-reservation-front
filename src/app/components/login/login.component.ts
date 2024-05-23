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
import { InscriptionComponent } from '../inscription/inscription.component';
import { UserService } from 'src/app/Services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myForm: FormGroup;
  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<LoginComponent>, public dialog: MatDialog,
    private userService: UserService, private router: Router
    
  ) {
    this.myForm = this.fb.group({
      login: ['', Validators.required],
      mdp: ['', Validators.required]
    });
  }

  onSubmit() {
    // Soumettre le formulaire
    if (this.myForm.valid) {
      console.log(this.myForm.value.login);
      this.userService.getConnexion(this.myForm.value.login, this.myForm.value.mdp).subscribe(data => {
        console.log(data);
        if (data) {
          localStorage.setItem('userName',data.name)
          localStorage.setItem('userId',data.id)
          localStorage.setItem('typeUser',data.type)
          this.dialogRef.close();
          localStorage.setItem('user',JSON.stringify(data) ); 
          this.router.navigate(['/acceuil']);
        } else {
         
          const dialoginscription = this.dialog.open(InscriptionComponent);
        }
      })
    
    } else {
    
    }
  }
  ngOnInit(): void {
  }

  open(): void {
    const dialoginscription = this.dialog.open(InscriptionComponent);
  }

}
