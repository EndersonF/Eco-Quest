import { Component } from '@angular/core';
import { ProviderService } from "../provider.service"

@Component({
  selector: 'app-tabNormal',
  templateUrl: 'tabNormal.page.html',
  styleUrls: ['tabNormal.page.scss']
})
export class TabNormalPage {

  quests: any;
  result: any;
  constructor(public servidor:ProviderService) {
    this.getQuestsFromProvider()
  }

  getQuestsFromProvider(){
    this.servidor.getQuests("Normal")
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
    this.servidor.postData(body,"Normal")
    .subscribe(
      data => this.result = data,
      err => console.log(err) 
    )
  }
}


