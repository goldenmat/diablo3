import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';

@Component({
  selector: 'app-barbarian',
  templateUrl: './barbarian.component.html',
  styleUrls: ['./barbarian.component.css']
})
export class BarbarianComponent implements OnInit {

  @ViewChild(MatAccordion) accordion!: MatAccordion;

  constructor() { }

  ngOnInit(): void {
  }

}
