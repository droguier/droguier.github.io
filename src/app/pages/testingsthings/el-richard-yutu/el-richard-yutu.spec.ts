import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElRichardYutu } from './el-richard-yutu';

describe('ElRichardYutu', () => {
  let component: ElRichardYutu;
  let fixture: ComponentFixture<ElRichardYutu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElRichardYutu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElRichardYutu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
