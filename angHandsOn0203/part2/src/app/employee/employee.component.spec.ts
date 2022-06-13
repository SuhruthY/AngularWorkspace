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

  // check whether there is a title called Employee Information 
  it("should has a title 'Employee Information'", () => {
    expect(app.title).toEqual("Employee Information");
  });

  // check whether the title is present in <h1> tag 
  it('should render title in h1 tag', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain("Employee Information");
  });

  // check if the DisplayId() is defined
  it('DisplayId should be defined', () => {
    expect(app.DisplayId).toBeTruthy();
  });
  
  // check if the DisplayName() is defined
  it('DisplayName should be defined', () => {
    expect(app.DisplayName).toBeTruthy();
  });

  // check if the DisplaySalary() is defined
  it('DisplaySalay should be defined', () => {
    expect(app.DisplaySalary).toBeTruthy();
  });

  // check if the DisplayPermanentOrNot() is defined
  it('DisplayPermanentOrNot should be defined', () => {
    expect(app.DisplayPermanentOrNot).toBeTruthy();
  });

  // check if the employee id >=1000
  it('DisplayId method should return 4digit id>=1000', () => {
    expect(app.DisplayId()).toBeGreaterThanOrEqual(1000);
  });

  // check if the employee name returned is NOT blank
  it('DisplayName method should not return blank', () => {
    expect(app.DisplayName()).toBeTruthy();
  });

  // check if the salary returned is >=3000
  it('DisplaySalary method should return salary>=3000', () => {
    expect(app.DisplaySalary()).toBeGreaterThanOrEqual(3000);
  });

  // check if the id is present in <h2> tag
  it('should render id in h2 tag', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.getElementsByTagName("h2")[0].textContent).toContain("1001");
  });

  // check if the name is present in <h2> tag
  it('should render name in h2 tag', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.getElementsByTagName("h2")[1].textContent).toContain("John");
  });

  // check if the salary is present in <h2> tag
  it('should render salary in h2 tag', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.getElementsByTagName("h2")[2].textContent).toContain("10000");
  });

  // check if the permanent is present in <h2> tag
  it('should render permanent in h2 tag', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.getElementsByTagName("h2")[3].textContent).toContain("true");
  });

});
