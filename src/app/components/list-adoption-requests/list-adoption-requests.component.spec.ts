import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAdoptionRequestsComponent } from './list-adoption-requests.component';

describe('ListAdoptionRequestsComponent', () => {
  let component: ListAdoptionRequestsComponent;
  let fixture: ComponentFixture<ListAdoptionRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAdoptionRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAdoptionRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
