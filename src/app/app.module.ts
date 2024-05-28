import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AcceuilComponent } from './components/acceuil/acceuil.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatMenuModule} from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatChipsModule} from '@angular/material/chips';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';
import {FormsModule , ReactiveFormsModule} from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatDividerModule} from '@angular/material/divider';
import { MAT_DATE_FORMATS, NativeDateAdapter, DateAdapter } from '@angular/material/core';
import { MAT_NATIVE_DATE_FORMATS } from '@angular/material/core';
import { LoginComponent } from './components/login/login.component';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { TravelsComponent } from './components/travels/travels.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ReservationComponent } from './components/reservation/reservation.component';
import { CreateTravelComponent } from './components/create-travel/create-travel.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { DialogReservationComponent } from './components/dialog-reservation/dialog-reservation.component';
import {MatSliderModule} from '@angular/material/slider';



@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    NavBarComponent,
    LoginComponent,
    InscriptionComponent,
    TravelsComponent,
    ReservationComponent,
    CreateTravelComponent,
    DialogReservationComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatCardModule, 
    MatFormFieldModule,
    MatSlideToggleModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatChipsModule,
    MatTabsModule,
    MatIconModule,
    HttpClientModule ,
    MatGridListModule,
    MatListModule,
    MatInputModule,
    FormsModule,
    MatPaginatorModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatButtonToggleModule,
    MatDividerModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatSliderModule
  ],
  providers: [
    { provide: MAT_DATE_FORMATS, useValue: MAT_NATIVE_DATE_FORMATS }, // Utilisez les formats de date natifs
    { provide: DateAdapter, useClass: NativeDateAdapter } 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
