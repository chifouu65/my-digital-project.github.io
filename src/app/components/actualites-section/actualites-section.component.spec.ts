import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualitesSectionComponent } from './actualites-section.component';

describe('ActualitesSectionComponent', () => {
  let component: ActualitesSectionComponent;
  let fixture: ComponentFixture<ActualitesSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActualitesSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActualitesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
