import { ReservationService } from './../reservation.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  constructor(private serv:ReservationService) { }
 
  ngOnInit(): void {
  }

  Insert(form:NgForm){
    console.log(form.value);
  }

}
