import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../reservation.service';


@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css']
})
export class ReservationListComponent implements OnInit {

  subscri : Subscription;
  data:any[];

  constructor(private serv:ReservationService) { }

  ngOnInit(): void {
    this.subscri=this.serv.allResev.subscribe(
      (data:any)=>{
        this.data=data;
      }
    )
    this.serv.emitAllReserv();
  }



}
