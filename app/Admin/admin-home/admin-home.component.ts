import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
  public copyrightText :string = 'Copyright Code Storage © 2017-2018';
  constructor() { }

  ngOnInit() {
  }

}
