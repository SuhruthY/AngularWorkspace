import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QtyIncComponent } from './qty-inc.component';

import { FormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';

describe('QtyIncComponent', () => {
  let component: QtyIncComponent;
  let fixture: ComponentFixture<QtyIncComponent>;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QtyIncComponent ],
      imports:[FormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QtyIncComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
  });

  // Check  qty-inc component is created
  it("should create a component 'Quantity Increment'", () => {
    expect(component).toBeTruthy();
  });

  // check click button displays the message 
  it("'Click me' button should displays the message 'Click me button clicked!'", () => {
    let clickMeButton = debugElement.nativeElement.querySelector('#clickMe');
    clickMeButton.click();
    fixture.detectChanges();
    expect(debugElement.nativeElement.querySelector('#simpleClick').textContent).toEqual("Click me button clicked!");
  });

  // check add button increments the value 
  it("'Add' button should incremnet the value in the textbox", () => {    
    let addButton = debugElement.nativeElement.querySelector('#add');
    addButton.click();
    fixture.detectChanges();
    expect(debugElement.nativeElement.querySelector('#incValue').value).toEqual("1");
  });

  // check + button inc value and - button dec value
  it("'plus' button should increment and '-' button should decrement the value in the textbox", () => { 
    let plusButton = debugElement.nativeElement.querySelector('#plus');
    plusButton.click();
    fixture.detectChanges();
    expect(debugElement.nativeElement.querySelector('#quantity').value).toEqual("1");
    
    let minusButton = debugElement.nativeElement.querySelector('#minus');
    minusButton.click();
    fixture.detectChanges();
    expect(debugElement.nativeElement.querySelector('#quantity').value).toEqual("0");
  });
  
});
