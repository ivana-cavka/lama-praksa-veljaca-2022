import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AtributiPredmetaServiceService {

  constructor(public http: HttpClient) { } 

  getAll() {
    return this.http.get(environment.API_URL+'/atributi-predmeta');
  }

  getOne(id: any) {
    return this.http.get(environment.API_URL+'/atributi-predmeta/one', {params:id});
  }
}
