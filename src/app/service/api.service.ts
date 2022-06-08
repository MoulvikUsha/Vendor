import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient, private route: Router) { }

  getItem() {
    return this.http.get<{
      error: Boolean,
      message: string,
      response: any
    }>(`${environment.baseUrl}/products/getItem`).pipe(map((data: any) => {
      return data;
    }))
  }

  addItem(data: any) {
    return this.http.post<{
      error: Boolean,
      message: string,
      response: any
    }>(`${environment.baseUrl}/products/addItem`, data)
  }

}
