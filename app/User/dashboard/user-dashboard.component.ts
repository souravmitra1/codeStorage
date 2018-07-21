import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router,  ParamMap } from '@angular/router';
@Component({
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit { 
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => console.log(params)); // Object {}
  }

  ngOnInit() { 
  }
}