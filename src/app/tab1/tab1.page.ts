import { Component } from '@angular/core';
import { ProviderService } from "../provider.service"

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  users: any;
  icon = "http://www.gravatar.com/avatar.php?gravatar_id=";
  
  constructor(public servidor:ProviderService) {
    this.getUserFromProvider()
  }

  getUserFromProvider(){
    this.servidor.getUser()
    .subscribe(
      data => this.users = data,
      err => console.log(err) 
    )

}
  

}
