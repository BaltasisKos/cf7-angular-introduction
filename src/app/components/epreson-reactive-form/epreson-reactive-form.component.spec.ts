import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpresonReactiveFormComponent } from './epreson-reactive-form.component';

describe('EpresonReactiveFormComponent', () => {
  let component: EpresonReactiveFormComponent;
  let fixture: ComponentFixture<EpresonReactiveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EpresonReactiveFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EpresonReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
