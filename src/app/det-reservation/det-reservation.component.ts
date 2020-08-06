import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReservationService } from '../reservation.service';


@Component({
  selector: 'app-det-reservation',
  templateUrl: './det-reservation.component.html',
  styleUrls: ['./det-reservation.component.css']
})
export class DetReservationComponent implements OnInit {

  date:string;
  lieu:string;
  nombres:string;
  constructor(private AcRoute:ActivatedRoute,private serv:ReservationService) { }

  ngOnInit(): void {
    const id =this.AcRoute.snapshot.params[("id")];
    this.date = this.serv.getReservById(id).date;
    this.nombres = this.serv.getReservById(id).nb;
    this.lieu = this.serv.getReservById(id).lieu;
  }

}
