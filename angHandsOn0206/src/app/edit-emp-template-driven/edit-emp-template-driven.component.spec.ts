import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { EditEmpTemplateDrivenComponent } from './edit-emp-template-driven.component';

describe('EditEmpTemplateDrivenComponent', () => {
  let component: EditEmpTemplateDrivenComponent;
  let fixture: ComponentFixture<EditEmpTemplateDrivenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditEmpTemplateDrivenComponent ],
      imports:[FormsModule],
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditEmpTemplateDrivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
