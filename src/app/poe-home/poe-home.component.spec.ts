import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoeHomeComponent } from './poe-home.component';

describe('PoeHomeComponent', () => {
  let component: PoeHomeComponent;
  let fixture: ComponentFixture<PoeHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PoeHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PoeHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
