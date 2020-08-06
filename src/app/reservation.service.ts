import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class ReservationService {
 
  allResev = new Subject<any[]>();

  Rese : any[]=[];

  constructor(private httpClient:HttpClient,private router:Router) { }

  insertAllBlog(){
    this.httpClient.put("https://angu-72743.firebaseio.com/",this.Rese)
    .subscribe(
      ()=>{
        console.log("INSERT SUCCESSFULLY");
      },
      (error)=>{
        console.log(error);
      }
    )
  }

  emitAllReserv(){
    this.allResev.next(this.Rese.slice());
  }

  addInArray(nom:string,prenom:string,date:string,nb:number,l:string){
    var reservation={
      nom:'',
      prenom:'',
      date:'',
      lieu:'',
      nb:0
    };
    reservation.nom=nom;
    reservation.prenom=prenom;
    reservation.date=date;
    reservation.nb=nb;
    reservation.lieu=l;

    this.Rese.push(reservation);
    this.emitAllReserv();
  }

 
}
