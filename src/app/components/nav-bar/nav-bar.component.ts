import { Component, OnInit } from '@angular/core';
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
import { LoginComponent } from '../login/login.component';
import { Router } from '@angular/router';
import { UserConnexion } from '../../functions/connexion';
import {TYPEUSER} from '../../Model/enums/typeUser'; 
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  nameUser: string | null = "";
  connected: boolean = false;
  typeUser: string | null = "";
  entrepruneur = Object.values(TYPEUSER)[0];
  client = Object.values(TYPEUSER)[1];

  constructor(public dialog: MatDialog, private router: Router) {
    this.connected = UserConnexion()
  }

  ngOnInit(): void {
  }
  open(): void {
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
  deconnexion() {
    localStorage.clear();
    this.nameUser = '';
    this.router.navigate(['/']);
    this.typeUser = "" ; 
  }
}
