import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaCardBodyComponent } from './media-card-body.component';

describe('MediaCardBodyComponent', () => {
  let component: MediaCardBodyComponent;
  let fixture: ComponentFixture<MediaCardBodyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MediaCardBodyComponent]
    });
    fixture = TestBed.createComponent(MediaCardBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
