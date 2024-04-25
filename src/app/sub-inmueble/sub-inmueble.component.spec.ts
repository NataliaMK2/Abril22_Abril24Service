import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubInmuebleComponent } from './sub-inmueble.component';

describe('SubInmuebleComponent', () => {
  let component: SubInmuebleComponent;
  let fixture: ComponentFixture<SubInmuebleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubInmuebleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubInmuebleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
