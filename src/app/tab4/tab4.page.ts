import { Component } from '@angular/core';
import { ProviderService } from "../provider.service"

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page {

  quests: any;

  constructor(public servidor:ProviderService) {
    this.getQuestsFromProvider()
  }

  getQuestsFromProvider(){
    this.servidor.getQuests()
    .subscribe(
      data => this.quests = data,
      err => console.log(err)  
    )
  }
  

}
