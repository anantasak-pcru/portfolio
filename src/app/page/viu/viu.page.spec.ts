import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViuPage } from './viu.page';

describe('ViuPage', () => {
  let component: ViuPage;
  let fixture: ComponentFixture<ViuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
