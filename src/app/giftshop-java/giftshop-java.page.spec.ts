import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GiftshopJavaPage } from './giftshop-java.page';

describe('GiftshopJavaPage', () => {
  let component: GiftshopJavaPage;
  let fixture: ComponentFixture<GiftshopJavaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiftshopJavaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GiftshopJavaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
