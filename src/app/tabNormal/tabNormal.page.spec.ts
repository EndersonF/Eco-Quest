import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabNormalPage } from './tabNormal.page';

describe('TabNormalPage', () => {
  let component: TabNormalPage;
  let fixture: ComponentFixture<TabNormalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TabNormalPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TabNormalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
