import { Component } from '@angular/core';
import { ProviderService } from "../provider.service"

@Component({
  selector: 'app-tabEasy',
  templateUrl: 'tabEasy.page.html',
  styleUrls: ['tabEasy.page.scss']
})
export class TabEasyPage {

  quests: any;

  constructor(public servidor:ProviderService) {
    this.getQuestsFromProvider()
  }

  getQuestsFromProvider(){
    this.servidor.getQuests("Easy")
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
  this.servidor.postData(body, 'dados.php')
  }
}
  


