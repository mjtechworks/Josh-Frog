import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weight',
  templateUrl: './weight.component.html',
  styles: []
})
export class WeightComponent implements OnInit {
  ounces: number[] = [1, 2, 3, 4, 5, 6, 8, 10, 12, 14];
  pounds: number[] = [
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
    48,
    49,
    50
  ];

  callback: (weight: number) => void;

  constructor() {}

  ngOnInit() {}

  pickWeight(weight: number) {
    if (this.callback) {
      this.callback(weight);
    }
  }
}
