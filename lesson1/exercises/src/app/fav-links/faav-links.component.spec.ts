import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaavLinksComponent } from './faav-links.component';

describe('FaavLinksComponent', () => {
  let component: FaavLinksComponent;
  let fixture: ComponentFixture<FaavLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaavLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaavLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
