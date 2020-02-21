import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LaravelPage } from './laravel.page';

describe('LaravelPage', () => {
  let component: LaravelPage;
  let fixture: ComponentFixture<LaravelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaravelPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LaravelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
