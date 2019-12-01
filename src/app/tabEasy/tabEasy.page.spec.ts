import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabEasyPage } from './tabEasy.page';

describe('TabEasyPage', () => {
  let component: TabEasyPage;
  let fixture: ComponentFixture<TabEasyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TabEasyPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TabEasyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
