import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YutuPlayerComponent } from './yutu-player.component';

describe('YutuPlayerComponent', () => {
  let component: YutuPlayerComponent;
  let fixture: ComponentFixture<YutuPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YutuPlayerComponent],
    //  declarations: [ YutuPlayerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YutuPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
