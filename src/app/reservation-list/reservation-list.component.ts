import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../reservation.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css']
})
export class ReservationListComponent implements OnInit {

  subscri : Subscription;
  donnes:any[]=[];

  constructor(private serv:ReservationService) { }

  ngOnInit(): void {
    this.donnes = this.serv.getAllBlog();
   console.log(this.donnes);
  }

}
