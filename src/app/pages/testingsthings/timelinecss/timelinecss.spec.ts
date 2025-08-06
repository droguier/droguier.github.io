import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Timelinecss } from './timelinecss';

describe('Timelinecss', () => {
  let component: Timelinecss;
  let fixture: ComponentFixture<Timelinecss>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Timelinecss]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Timelinecss);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
