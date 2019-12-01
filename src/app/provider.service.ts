import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Http } from "@angular/http";
import { map } from "rxjs/operators";



@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  constructor(private http: Http) { }
  
  getQuests(){
    
    return this.http.get("http://localhost/lord/dados.php").pipe(map(res=>res.json()));

}




}


