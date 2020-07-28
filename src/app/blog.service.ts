import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  date:String;
  country:String;
  author:String;

  constructor() { }

  blogs =[
    {date:"17 JUILLET 202",country:"Dakar",author:"MOussa Diop"},
    {date:"22 JUILLET 2020",country:"Casamance",author:"Abdou Niang"},
    {date:"12 JUILLET 2020",country:"Gabon",author:"MOHAMMED GUEYE"},
  ]
}
