import { Component , NgModule, NgZone, OnInit, ElementRef, ViewChild } from '@angular/core'; 
import { MapsAPILoader } from '@agm/core';
import { } from 'googlemaps';
import { FormControl } from '@angular/forms';
@Component({
  templateUrl: './transport-service.component.html',
  styleUrls: ['./transport-service.component.css']
})
 
@NgModule({ 
  imports: [ 
  ]
})
export class TransportServiceComponent implements OnInit{
  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone
  ) {}  
  
  @ViewChild("search")
  public searchElementRef: ElementRef;
  public searchControl: FormControl;
  
  lat: Number = 24.799448;
  lng: Number = 120.979021;
  zoom: Number = 14;
 
  public dir = undefined;


  ngOnInit() {
    this.searchControl = new FormControl();
    this.setCurrentPosition();


    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ["address"]
      });
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();

          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          //set latitude, longitude and zoom
          // this.lat = place.geometry.location.lat();
          // this.lng = place.geometry.location.lng();
          // this.zoom = 12; 
          // this.dir.waypoints.push({
          //  location : new google.maps.LatLng(place.geometry.location.lat(), place.geometry.location.lng())
          //});

        });
      });
    });
  }

  private setCurrentPosition() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        this.zoom = 14;
      });
    }
  }
 
 
  getDirection() {
    this.dir = 
      {
        origin: { lat: 22.5771949, lng: 88.42939769999998 },
        destination: { lat: 22.624117, lng: 88.39472279999995},   
        travelMode:  'DRIVING',
        transitOptions: undefined,
        drivingOptions:  undefined,
        waypoints:  [{location : new google.maps.LatLng(22.597844288668025, 88.40357246957751)}],
        optimizeWaypoints: true,
        provideRouteAlternatives:  true,
        avoidHighways: false,
        avoidTolls:   false,
        renderOptions: null,
        visible:   true,
        panel:  undefined,
        markerOptions: { draggable : true },
        draggable:true
      }
    } 
  }
 