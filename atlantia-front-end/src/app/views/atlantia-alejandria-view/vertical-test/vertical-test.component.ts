import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'vertical-test',
  templateUrl: './vertical-test.component.html',
  styleUrls: ['./vertical-test.component.scss']
})
export class VerticalTestComponent implements OnInit{
  @Input() numberInputs: number[] = [];

  @HostBinding('style.--number-inputs') inputsScss = this.numberInputs.length;

  ngOnInit(): void {
      this.inputsScss = this.numberInputs.length; 
  }
}
