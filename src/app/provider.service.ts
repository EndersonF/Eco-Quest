import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Http } from "@angular/http";
import { map } from "rxjs/operators";
import { HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  constructor(private http: Http) { }
  
  getUser(){
    
    return this.http.get("http://localhost/lord/dados.php","").pipe(map(res=>res.json()));

}
  getQuests(parametro){

    return this.http.get("http://localhost/lord/dados"+parametro+".php").pipe(map(res=>res.json()));
    
}

postData(body, file:any) {
  return this.http.post("http://localhost/lord/increment.php",body).pipe(map(res=>res));

  }
}

