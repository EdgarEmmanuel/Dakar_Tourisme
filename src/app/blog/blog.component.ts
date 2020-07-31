import { BlogService } from './../blog.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit,OnDestroy {

  blogs : any[];

  sub : Subscription;

  constructor(private BlogServ:BlogService) { }


  ngOnInit(): void {
    this.sub = this.BlogServ.BLOGS.subscribe((data:any)=>{
      this.blogs=data;
    })
    this.BlogServ.emitAllBLogs();
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

}
