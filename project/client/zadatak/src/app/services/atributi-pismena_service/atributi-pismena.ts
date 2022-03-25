import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn:'root'
})
export class AtributiPismenaService{
    constructor(public http:HttpClient){ }
    getAll(){ return this.http.get(environment.API_URL+'/atributi-pismena'); }

    getOne(id: any) { return this.http.get(environment.API_URL+'/atributi-pismena/one', { params: { id } }); }

    add(record: any) { return this.http.post(environment.API_URL+'/atributi-pismena', record); }

    edit(record: any) { return this.http.put(environment.API_URL+'/atributi-pismena/', record); }

    delete(id: any) { return this.http.delete(environment.API_URL+'/atributi-pismena/', { params: { id } }); }
}