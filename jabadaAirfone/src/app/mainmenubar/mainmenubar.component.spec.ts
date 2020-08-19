import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainmenubarComponent } from './mainmenubar.component';

describe('MainmenubarComponent', () => {
  let component: MainmenubarComponent;
  let fixture: ComponentFixture<MainmenubarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainmenubarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainmenubarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
