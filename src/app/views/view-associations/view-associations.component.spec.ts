import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAssociationsComponent } from './view-associations.component';

describe('ViewAssociationsComponent', () => {
  let component: ViewAssociationsComponent;
  let fixture: ComponentFixture<ViewAssociationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewAssociationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewAssociationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
