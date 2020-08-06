import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DestiModelService {

   desti = new Subject<any[]>();

  private allDest : any[]=[
    {
      lieu : "Ile de Goree",
      price: 127
    },
    {
      lieu : "Lac Rose",
      price: 147
    },
    {
      lieu : "Parc",
      price: 27
    },
    {
      lieu : "Sine Saloum",
      price: 200
    },
  ]

  constructor() { }

  emitDesti(){
    this.desti.next(this.allDest.slice());
  }


  findPriceByName(name:string){
    for(let d of this.allDest){
      if(d.lieu == name){
        return d;
      }
    }
  }


}
