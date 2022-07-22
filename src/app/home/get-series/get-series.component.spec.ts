import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetSeriesComponent } from './get-series.component';

describe('GetSeriesComponent', () => {
  let component: GetSeriesComponent;
  let fixture: ComponentFixture<GetSeriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetSeriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
