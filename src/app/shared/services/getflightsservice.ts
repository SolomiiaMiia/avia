import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GetFlightsService {

  url = "https://api.iev.aero/api/flights/";

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(this.url +
      `${new Date().getDay()}.${new Date().getMonth()}.${new Date().getFullYear()}`)
      .pipe(map((data: any) => data.body));
  }
}
