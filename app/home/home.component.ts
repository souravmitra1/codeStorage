import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { SystemConfiguration } from '../Configuration/system.config';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent { 
  private cofigSettings : SystemConfiguration;
  constructor(
    private activatedRoute: ActivatedRoute, 
    private router: Router, 
    private titleService: Title
) { }

  ngOnInit() {
    this.cofigSettings = new SystemConfiguration();
    this.router.events.subscribe((events)=>{
      this.router
      .events
      .filter(event => event instanceof NavigationEnd)
      .map(() => {
        let child = this.activatedRoute.firstChild;
        while (child) {
          if (child.firstChild) {
            child = child.firstChild;
          } else if (child.snapshot.data && child.snapshot.data['title']) {
            return this.cofigSettings.siteName + ' - ' +child.snapshot.data['title'];
          } else {
            return null;
          }
        }
        return null;
      }).subscribe( (title: any) => {
         this.titleService.setTitle(title);
     });
    });
  }
}