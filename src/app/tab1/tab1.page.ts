import { Component } from '@angular/core';
import {Md5} from 'ts-md5/dist/md5'

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  public email = Md5.hashStr("diego.ab712@gmail.com");
  public icon = "http://www.gravatar.com/avatar.php?gravatar_id="+this.email;
  constructor() {}

}
