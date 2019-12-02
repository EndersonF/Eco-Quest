import { Component } from '@angular/core';
import { ProviderService } from "../provider.service"

@Component({
  selector: 'app-tabHard',
  templateUrl: 'tabHard.page.html',
  styleUrls: ['tabHard.page.scss']
})
export class TabHardPage {

  quests: any;
  result: any;
  constructor(public servidor:ProviderService) {
    this.getQuestsFromProvider()
  }

  getQuestsFromProvider(){
    this.servidor.getQuests("Hard")
    .subscribe(
      data => this.quests = data,
      err => console.log(err)  
    )
  }
  incrementNivel(param){
    let body = {
      action: 'increment',
      quest: param,
      xp:  1
  };
    this.servidor.postData(body,"ui")
    .subscribe(
      data => this.result = data,
      err => console.log(err) 
    )
  }
}


