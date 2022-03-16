import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ZadatakService {
  
  constructor(public http: HttpClient) { } 

  getAll() {
    return this.http.get(environment.API_URL+'/atributi-zadataka');
  }

  getOne(id: any) {
    return this.http.get(environment.API_URL+'/atributi-zadataka/one', { params: { id } });
  }

  /* getOneTodo({ id }: any){
    return this.http.get(`${environment.API_URL}/one`, { params: { id } });
  } */

  add(record: any) {
    return this.http.post(environment.API_URL+'/atributi-zadataka', record);
  }
}
