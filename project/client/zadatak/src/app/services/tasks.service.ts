import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})

export class TasksService {

  constructor(public http:HttpClient) { }

  getAll(){
    console.log("Service:");
    console.log(this.http.get(environment.API_URL));
    return this.http.get(environment.API_URL);
  }
}