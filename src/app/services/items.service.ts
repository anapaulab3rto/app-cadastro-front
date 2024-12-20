import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  private apiUrl = 'http://localhost:3000/items';

  constructor(private http: HttpClient) {}

  getItems(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  addItem(item: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, item);
  }
}
