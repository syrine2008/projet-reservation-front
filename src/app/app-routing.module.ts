import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './components/acceuil/acceuil.component';
import { Travel } from './Model/Travel';
import { TravelsComponent } from './components/travels/travels.component';
import { CreateTravelComponent } from './components/create-travel/create-travel.component';
import { ReservationComponent } from './components/reservation/reservation.component';

const routes: Routes = [
  {path:"",component:AcceuilComponent},
  {path:"acceuil",component:AcceuilComponent},
  {path:"newTravel",component:CreateTravelComponent},
  {path:"reservation",component:ReservationComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
