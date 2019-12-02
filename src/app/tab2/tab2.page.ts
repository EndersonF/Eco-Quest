import { Component } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  urlTab4 = '/tabs/tab4';
  urlTab5 = '/tabs/tab5';
  urlTabMap = '/tabs/map';
  constructor(
    private router: Router
  ) {}

  telaRota(param){
    this.router.navigate([param]);
  }
}
