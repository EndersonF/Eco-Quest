import { Injectable } from '@angular/core';
import { HttpClientModule  } from '@angular/common/http';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  constructor(public http:HttpClientModule) { 

  }
  getQuests(){
    
  }
}
