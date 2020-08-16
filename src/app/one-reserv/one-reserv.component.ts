import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-one-reserv',
  templateUrl: './one-reserv.component.html',
  styleUrls: ['./one-reserv.component.css']
})
export class OneReservComponent implements OnInit {

  @Input() data;
  id:number;

  constructor() { }

  ngOnInit(): void {
    this.id=this.data.id;
  }

}
