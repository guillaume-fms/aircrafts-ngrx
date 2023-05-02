import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticformComponent } from './authenticform.component';

describe('AuthenticformComponent', () => {
  let component: AuthenticformComponent;
  let fixture: ComponentFixture<AuthenticformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthenticformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthenticformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
