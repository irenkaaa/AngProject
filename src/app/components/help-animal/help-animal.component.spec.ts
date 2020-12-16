import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpAnimalComponent } from './help-animal.component';

describe('HelpAnimalComponent', () => {
  let component: HelpAnimalComponent;
  let fixture: ComponentFixture<HelpAnimalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpAnimalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
