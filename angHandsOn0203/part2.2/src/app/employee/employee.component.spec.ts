import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeComponent } from './employee.component';

describe('EmployeeComponent', () => {
  let app: EmployeeComponent;
  let fixture: ComponentFixture<EmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        EmployeeComponent
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(EmployeeComponent);
    app = fixture.componentInstance;
  });

  // check employee component is created
  it('should create the app component - employee', () => {
    expect(app).toBeTruthy();
  });

  // check whether there is a title called employee information 
  it("should has a title 'employee information'", () => {
    expect(app.title).toEqual("employee information");
  });

  // check whether there is a name called sam
  it("should has a name 'sam'", () => {
    expect(app.name).toEqual("sam");
  });

  // check whether there is a salary of value 90000 
  it("should has a salary of value '90000'", () => {
    expect(app.salary).toEqual(90000);
  });

  // check whether there is a date of value 2021/05/20
  it("should has a date of value '2021/05/20'", () => {
    expect(app.joiningDate).toEqual(new Date("2021/05/20"));
  });
  
  // check whether the title is present in <h1> tag is 'Employee Information'
  it("should render title in h1 tag as employee information", () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h1').textContent).toEqual("Employee Information");
  });

  // check if the name is present in <h2> tag as 'SAM'
  it("should render name in h2 tag as sam", () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector("#name").textContent).toEqual("Name: SAM");
  });

  // check if the salary is present in <h2> tag as '₹90,000.00'
  it("should render salary in h2 tag as 90000", () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector("#salary").textContent).toEqual("Salary: ₹90,000.00");
  });

  // check if the joining date is present in <h2> tag as 2021/05'20
  it("should render joining date in h2 tag as 2021/05'20", () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector("#joiningDate").textContent).toEqual("Date Of Joining: Thursday, May 20, 2021");
  });

});
