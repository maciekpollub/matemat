import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OsmaComponent } from './osma.component';

describe('OsmaComponent', () => {
  let component: OsmaComponent;
  let fixture: ComponentFixture<OsmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OsmaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OsmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
