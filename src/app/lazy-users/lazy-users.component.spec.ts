import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyUsersComponent } from './lazy-users.component';

describe('LazyUsersComponent', () => {
  let component: LazyUsersComponent;
  let fixture: ComponentFixture<LazyUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LazyUsersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LazyUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
