import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ZadatakService {

  constructor(public http: HttpClient) { } 

  getAllAssignments() {
    return this.http.get(environment.API_URL+'/atributi-zadataka');
  }

  getAssignment(id: any) {
    return this.http.get(environment.API_URL+'/atributi-zadataka/one', {params:id});
  }
}
