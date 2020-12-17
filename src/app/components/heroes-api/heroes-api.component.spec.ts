import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesApiComponent } from './heroes-api.component';

describe('HeroesApiComponent', () => {
  let component: HeroesApiComponent;
  let fixture: ComponentFixture<HeroesApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroesApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
