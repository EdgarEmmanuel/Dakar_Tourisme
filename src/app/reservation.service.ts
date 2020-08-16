import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class ReservationService {
 
  allResev = new Subject<any[]>();

  Rese : any[]=[];

  constructor(private httpClient:HttpClient,private router:Router) { }

  insertAllBlog(data){
    this.httpClient.put("https://angu-72743.firebaseio.com/reservation.json",data)
    .subscribe(
      ()=>{
        console.log("INSERT SUCCESSFULLY");
      },
      (error)=>{
        console.log(error);
      }
    )
  }

  getAllBlog(){
    this.httpClient.get("https://angu-72743.firebaseio.com/reservation.json")
    .subscribe(
      (data)=>{
        this.Rese.push(data);
      },
    )
    return this.Rese;
  }

  emitAllReserv(){
    this.allResev.next(this.Rese.slice());
  }

  addInArray(nom:string,prenom:string,date:string,nb:number,l:string){
    var reservation={
      id:0,
      nom:'',
      prenom:'',
      date:'',
      lieu:'',
      nb:0
    };
    reservation.id=this.Rese.length;
    reservation.nom=nom;
    reservation.prenom=prenom;
    reservation.date=date;
    reservation.nb=nb;
    reservation.lieu=l;

    this.Rese.push(reservation);
    
    for(let data of this.Rese){
      this.insertAllBlog(data);
    }

    this.emitAllReserv();
  }

  getReservById(id:number){
    for(let reserv of this.Rese){
      if(reserv.id==id){
        return reserv;
      }
    }
  }

 
}
