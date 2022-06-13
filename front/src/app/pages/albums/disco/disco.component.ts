import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-disco',
  templateUrl: './disco.component.html',
  styleUrls: ['./disco.component.scss']
})
export class DiscoComponent implements OnInit {@Input() public disco!: any;
  constructor() { }

  ngOnInit(): void {
  }

}
