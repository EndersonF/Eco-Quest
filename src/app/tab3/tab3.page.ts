import { Component } from '@angular/core';
import {Md5} from 'ts-md5/dist/md5'
import { ProviderService } from '../provider.service';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
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
