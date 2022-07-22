import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetComicComponent } from './get-comic.component';

describe('GetComicComponent', () => {
  let component: GetComicComponent;
  let fixture: ComponentFixture<GetComicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetComicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetComicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
