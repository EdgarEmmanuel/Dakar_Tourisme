import { Subscription } from 'rxjs';
import { ReservationService } from './../reservation.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DestiModelService } from '../desti-model.service';


@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  message : string='';
  allDesti : Subscription;

  DESTINATIONS : any[];

  constructor(private serv:ReservationService,private destServ:DestiModelService) { }
 
  ngOnInit(): void {
    this.allDesti= this.destServ.desti.subscribe(
      (donnees:any)=>{
        this.DESTINATIONS=donnees;
      },
      (error)=>{
        alert("error on fetching data :"+error);
      }
    )

    this.destServ.emitDesti();
  }

  Insert(form:NgForm){
    const name = form.value["name"];
    const prenom = form.value["prenom"];
    const date = form.value["date"].toString();
    const number = form.value["total"];
    const lieu = form.value["lieu"];

    //console.log(form.value["lieu"]);
    this.serv.addInArray(name,prenom,date,number,lieu);


    form.resetForm();


  }

}
