import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtworkDetailsPageComponent } from './artwork-details-page.component';

describe('ArtworkDetailsPageComponent', () => {
  let component: ArtworkDetailsPageComponent;
  let fixture: ComponentFixture<ArtworkDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArtworkDetailsPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArtworkDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
