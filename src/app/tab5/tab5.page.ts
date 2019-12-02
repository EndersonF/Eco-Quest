import { Component } from '@angular/core';
import { ProviderService } from "../provider.service"

@Component({
  selector: 'app-tab5',
  templateUrl: 'tab5.page.html',
  styleUrls: ['tab5.page.scss']
})
export class Tab5Page {

  quests: any;

  constructor(public servidor:ProviderService) {
    this.getQuestsFromProvider()
  }

  getQuestsFromProvider(){
    this.servidor.getUser()
    .subscribe(
      data => this.quests = data,
      err => console.log(err)  
    )
  }
  

}
