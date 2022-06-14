import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditEmpFormBuilderComponent } from './edit-emp-form-builder.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

describe('EditEmpFormBuilderComponent', () => {
  let component: EditEmpFormBuilderComponent;
  let fixture: ComponentFixture<EditEmpFormBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditEmpFormBuilderComponent ],
      imports:[ ReactiveFormsModule, FormsModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditEmpFormBuilderComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
  });

  // check if component is created 
  it("should create a component", () => {
    expect(component).toBeTruthy();
  });

  // Form Validity
  // Intial
  it("should be valid initially", () => {
    expect(component.empForm.valid).toBeTruthy();
  });

  // --- Field Validity ---
  // Name
  it("name should be valid by default", () => {
    let name = component.empForm.controls['name'];
    expect(name.valid).toBeTruthy();
  });

  it("name is required field", () => {
    let name = component.empForm.controls['name'];
    name.setValue(null);
    let errors = name.errors || {};
    expect(errors['required']).toBeTruthy();
  });

  it("name should be of minimum 4 characters", () => {
    let name = component.empForm.controls['name'];
    name.setValue("j");
    let errors = name.errors || {};
    expect(errors['minlength']).toBeTruthy();
  });

  it("name should be of maximum 20 characters", () => {
    let name = component.empForm.controls['name'];
    name.setValue("Lieutenant Jorge Hagins");
    let errors = name.errors || {};
    expect(errors['maxlength']).toBeTruthy();
  });

  // Salary
  it("salary should be valid by default", () => {
    let salary = component.empForm.controls['salary'];
    expect(salary.valid).toBeTruthy();
  });

  it("salary is required field", () => {
    let salary = component.empForm.controls['salary'];
    salary.setValue(null);
    let errors = salary.errors || {};
    expect(errors['required']).toBeTruthy();
  });

  // permanent
  it("permanent should be valid by default", () => {
    let permanent = component.empForm.controls['permanent'];
    expect(permanent.valid).toBeTruthy();
  });

  // department
  it("department should be valid by default", () => {
    let department = component.empForm.controls['department'];
    expect(department.valid).toBeTruthy();
  });

  // skills
  it("skills should be valid by default", () => {
    let skills = component.empForm.controls['skills'];
    expect(skills.valid).toBeTruthy();
  });

  // Form Validity
  it("form should be valid by default", ()=>{
    expect(component.empForm.valid).toBeTruthy();
  });

  it("form should be invalid if name is null", ()=>{
    component.empForm.controls['name'].setValue(null);
    expect(component.empForm.valid).toBeFalsy();
  });

  it("form should be invalid if name less than 4 chars", ()=>{
    component.empForm.controls['name'].setValue("j");
    expect(component.empForm.valid).toBeFalsy();
  });

  it("form should be invalid if name more than 20 chars", ()=>{
    component.empForm.controls['name'].setValue("Lieutenant Mercury Hagins");
    expect(component.empForm.valid).toBeFalsy();
  });

  it("form should be invalid if salary is null", ()=>{
    component.empForm.controls['salary'].setValue(null);
    expect(component.empForm.valid).toBeFalsy();
  });

});
