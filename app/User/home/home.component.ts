import { Component, OnInit } from '@angular/core';

@Component({ 
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit { 
  public copyrightText :string = 'Copyright Code Storage © 2017-2018';
  constructor() { }

  ngOnInit() {
  }
}
