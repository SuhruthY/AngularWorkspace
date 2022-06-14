import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qty-inc',
  templateUrl: './qty-inc.component.html',
  styleUrls: ['./qty-inc.component.css']
})
export class QtyIncComponent implements OnInit {
  buttonClicked=false;
  value=0;
  value2=0;

  constructor() { }

  ngOnInit(): void {
  }

}
