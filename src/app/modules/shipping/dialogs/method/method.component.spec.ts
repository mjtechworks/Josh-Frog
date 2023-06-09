import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MethodComponent } from './method.component';

describe('MethodComponent', () => {
  let component: MethodComponent;
  let fixture: ComponentFixture<MethodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MethodComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
