import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabHardPage } from './tabHard.page';

describe('TabHardPage', () => {
  let component: TabHardPage;
  let fixture: ComponentFixture<TabHardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TabHardPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TabHardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
