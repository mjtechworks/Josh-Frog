import { Component, Input, OnInit } from '@angular/core';
import { DialogComponent } from '../../../shared/components/dialog/dialog.component';

@Component({
  selector: 'app-length',
  templateUrl: './length.component.html',
  styles: []
})
export class LengthComponent implements OnInit {
  lengths: number[] = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
    31,
    32,
    33,
    34,
    35,
    36,
    37,
    38,
    39,
    40,
    41,
    42,
    43,
    44,
    45,
    46,
    47,
    48
  ];

  @Input() parentRef: DialogComponent<LengthComponent>;
  @Input() callback: (length: number) => void;

  constructor() {}

  ngOnInit() {}

  pickLength(length: number) {
    if (this.callback) {
      this.callback(length);
    }
    this.parentRef.pressOK();
  }
}
