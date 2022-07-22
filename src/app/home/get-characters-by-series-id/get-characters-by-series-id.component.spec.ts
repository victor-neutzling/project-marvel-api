import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCharactersBySeriesIdComponent } from './get-characters-by-series-id.component';

describe('GetCharactersBySeriesIdComponent', () => {
  let component: GetCharactersBySeriesIdComponent;
  let fixture: ComponentFixture<GetCharactersBySeriesIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetCharactersBySeriesIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetCharactersBySeriesIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
