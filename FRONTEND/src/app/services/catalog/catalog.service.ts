import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '@core/model/product';
import { environment } from '@environments';
import { find, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CatalogService {
  constructor(private http: HttpClient) {}

  getCatalogue(): Observable<Product[]> {
    return this.http.get<Product[]>(environment.catalogUrl);
  }
}
