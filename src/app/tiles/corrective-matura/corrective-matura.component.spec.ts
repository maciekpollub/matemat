import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrectiveMaturaComponent } from './corrective-matura.component';

describe('CorrectiveMaturaComponent', () => {
  let component: CorrectiveMaturaComponent;
  let fixture: ComponentFixture<CorrectiveMaturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorrectiveMaturaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorrectiveMaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
