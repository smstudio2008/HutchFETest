import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserArgumentsComponent } from './user-arguments.component';

describe('UserArgumentsComponent', () => {
  let component: UserArgumentsComponent;
  let fixture: ComponentFixture<UserArgumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserArgumentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserArgumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
