import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleItemComponentComponent } from './people-item-component.component';

describe('PeopleItemComponentComponent', () => {
  let component: PeopleItemComponentComponent;
  let fixture: ComponentFixture<PeopleItemComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PeopleItemComponentComponent]
    });
    fixture = TestBed.createComponent(PeopleItemComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
