import { Component } from '@angular/core';
import { Response } from '@angular/http';

import * as L from 'leaflet';
import * as esri from 'esri-leaflet';

import { CountriesService } from './countries.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private countriesService: CountriesService) {}

  map: any;
  esriLayer: any;
  countriesList = [];
  optionSelected = null;

  ngOnInit() {
      this.countriesService.getCountriesList().subscribe(
          (data: Response) => {
              let tempList = [];
              for (let item of data.json()) {
                  tempList.push(item.country);
              }
              this.countriesList = tempList;
          }
      );
      this.map = L.map('map', {
          maxZoom: 18,
          minZoom: 0
      }).setView([30, 0], 2);

      this.esriLayer = esri.basemapLayer('Streets');
      this.map.addLayer(this.esriLayer);
  }


  selectCountry() {
      this.countriesService.getCoordinates(this.optionSelected).subscribe(
          (data: Response) => {
              data = data.json();
              console.log(data);
              let lat = data[0].latitude_average;
              let lng = data[0].longitude_average;

              this.map.setView(L.latLng(lat, lng), 6);
              var popup = L.popup()
                  .setLatLng(L.latLng(lat, lng))
                  .setContent(this.optionSelected)
                  .openOn(this.map);
          }
      );
  }

  onOptionsSelected(country) {
    console.log(country);
    this.selectCountry();
  }

  zoomIn() {
      this.map.zoomIn(2);
  }

  zoomOut() {
      this.map.zoomOut(2);
  }
}