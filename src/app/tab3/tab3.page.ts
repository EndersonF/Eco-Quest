import { Component } from '@angular/core';
import {Md5} from 'ts-md5/dist/md5'
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  public email = Md5.hashStr("enderson.frazao7@gmail.com");
  public icon = "http://www.gravatar.com/avatar.php?gravatar_id="+this.email;
  constructor() {}

}
