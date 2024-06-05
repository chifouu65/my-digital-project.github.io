import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociationsSectionComponent } from './associations-section.component';

describe('AssociationsSectionComponent', () => {
  let component: AssociationsSectionComponent;
  let fixture: ComponentFixture<AssociationsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssociationsSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AssociationsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
