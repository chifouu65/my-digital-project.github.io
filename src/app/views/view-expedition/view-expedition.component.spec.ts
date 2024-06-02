import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewExpeditionComponent } from './view-expedition.component';

describe('ViewExpeditionComponent', () => {
  let component: ViewExpeditionComponent;
  let fixture: ComponentFixture<ViewExpeditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewExpeditionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewExpeditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
