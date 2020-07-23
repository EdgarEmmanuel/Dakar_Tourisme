import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor() { }

  date : String = "17 JUILLET 2020";

  country :String = "Dakar";

  author : String ="MOUSSA DIOP";

  ngOnInit(): void {
  }

}
