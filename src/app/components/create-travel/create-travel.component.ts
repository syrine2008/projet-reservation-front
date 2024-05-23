import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedServiceService } from 'src/app/Services/shared-service.service';
import { TravelService } from 'src/app/Services/travel.service';
import { UserConnexion } from 'src/app/functions/connexion';

@Component({
  selector: 'app-create-travel',
  templateUrl: './create-travel.component.html',
  styleUrls: ['./create-travel.component.css']
})
export class CreateTravelComponent implements OnInit {
  btnCreate : Boolean = false ; 
  id : string = '';

  travelForm: FormGroup;
  countries: string[] = [];
  

  typesTravels = ['Hébergement' ,'Vols', 'Activité' ];
  constructor(private fb: FormBuilder, private sharedServiceService : SharedServiceService,
    private travelService : TravelService , private router: Router
  ) { 

    this.travelForm = this.fb.group({
      id: ['', ],
      name: ['', Validators.required],
      description: ['', Validators.required],
      departure: ['', Validators.required],
      destination: ['', Validators.required],
      ville: ['', Validators.required],
      type: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
      nbPlace: ['', [Validators.required, Validators.min(1), Validators.max(10)]],
      disponibility: ['', Validators.required],
      commentaire: [''],
      urlImage: ['', Validators.required],
      owner: [JSON.parse(localStorage.getItem("user") || '{}')],
      
    });
   
    this.sharedServiceService.getcoutries().subscribe((data: any) => {
      this.countries = data.map((country: any) => country.name.common).sort();
      
    });

    let u = localStorage.getItem('userId')
    if(u){
      this.id = u;
    }
    console.log(this.id);
    
  }

  ngOnInit(): void {
    console.log(UserConnexion())
    


    
  }

  onSubmit() {

    console.log(this.travelForm)
    console.log(this.travelForm.valid)
   
    if (this.travelForm.valid) {

      this.travelService.createTravel(this.travelForm.value).subscribe(data =>{
       
        console.log(data) ; 
        this.btnCreatefn() ; 
        this.router.navigate(['/newTravel']);

      })
    }
  }
  btnCreatefn() {
this.btnCreate = !this.btnCreate ; 
return this.btnCreate ;
  }


}
