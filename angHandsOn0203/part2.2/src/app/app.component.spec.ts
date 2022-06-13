import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';

xdescribe('AppComponent', () => {
  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent, EmployeeComponent
      ],
    }).compileComponents();
  });

  beforeEach(()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
  });

  // Check app is created 
  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  // check whether there is a title 
  it("should has a title", () => {
    expect(app.title).toEqual("Hands-On-02-03");
  });
  
});
