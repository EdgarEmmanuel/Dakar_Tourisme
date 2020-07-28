import { BlogService } from './../blog.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  blogs : any[];

  constructor(private BlogServ:BlogService) { }


  ngOnInit(): void {
    this.blogs=this.BlogServ.blogs;
  }

}
