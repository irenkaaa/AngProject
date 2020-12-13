import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoundAnimalComponent } from './adopt-animal.component';

describe('FoundAnimalComponent', () => {
  let component: FoundAnimalComponent;
  let fixture: ComponentFixture<FoundAnimalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoundAnimalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoundAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
