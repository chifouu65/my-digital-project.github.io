import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartenairesAndSponsorsSectionComponent } from './partenaires-and-sponsors-section.component';

describe('PartenairesAndSponsorsSectionComponent', () => {
  let component: PartenairesAndSponsorsSectionComponent;
  let fixture: ComponentFixture<PartenairesAndSponsorsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartenairesAndSponsorsSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PartenairesAndSponsorsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
