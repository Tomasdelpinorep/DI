import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleListComponentComponent } from './people-list-component.component';

describe('PeopleListComponentComponent', () => {
  let component: PeopleListComponentComponent;
  let fixture: ComponentFixture<PeopleListComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PeopleListComponentComponent]
    });
    fixture = TestBed.createComponent(PeopleListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
