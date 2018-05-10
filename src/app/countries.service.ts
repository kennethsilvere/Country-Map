import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class CountriesService {

  constructor(private http:Http) { }

  getCountriesList(){
    return this.http.get('https://opendata.socrata.com/resource/mnkm-8ram.json');
  }

  getCoordinates(country:string){
    return this.http.get('https://opendata.socrata.com/resource/mnkm-8ram.json?country='+country);
  }
}
