import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  date:String;
  country:String;
  author:String;

  BLOGS = new Subject<any[]>();

  constructor() { }

  emitAllBLogs(){
    this.BLOGS.next(this.blogs.slice());
  }

  private blogs =[
    {date:"17 JUILLET 202",country:"Dakar",author:"MOussa Diop"},
    {date:"22 JUILLET 2020",country:"Casamance",author:"Abdou Niang"},
    {date:"12 JUILLET 2020",country:"Gabon",author:"MOHAMMED GUEYE"},
  ]
}
