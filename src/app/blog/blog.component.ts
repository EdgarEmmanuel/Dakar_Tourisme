import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor() { }

  blogs =[
    {"date":"17 JUILLET 202","country":"Dakar","author":"MOussa Diop"},
    {"date":"22 JUILLET 2020","country":"Casamance","author":"Abdou Niang"},
    {"date":"12 JUILLET 2020","country":"Gabon","author":"MOHAMMED GUEYE"},
  ]

  ngOnInit(): void {
  }

}
