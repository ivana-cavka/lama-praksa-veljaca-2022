import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn:'root'
})
export class AtributiPismenaService{
    constructor(public http:HttpClient){
    }
    getAll(){
        console.log("Service:");
        console.log(this.http.get(environment.API_URl));
        return this.http.get(environment.API_URl);
    }
}