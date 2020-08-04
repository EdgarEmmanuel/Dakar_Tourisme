import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  allResev = new Subject<any[]>();

  Rese : any[];

  constructor(private httpClient:HttpClient) { }

  insertAllBlog(){
    this.httpClient.put("https://angu-72743.firebaseio.com/",this.Rese)
    .subscribe(
      ()=>{
        console.log("INSERT SUCCESFYULLY");
      },
      (error)=>{
        console.log(error);
      }
    )
  }

  addInArray(nom:string,prenom:string,date:string,nbPersonnes:number){
    var reservation={
      nom:'',
      prenom:'',
      date:'',
      nb:0
    };
    reservation.nom=nom;
    reservation.prenom=prenom;
    reservation.date=date;
    reservation.nb=nbPersonnes;

    this.Rese.push(reservation);
    this.emitAllReserv();
  }

  emitAllReserv(){
    this.allResev.next(this.Rese.slice());
  }
}
