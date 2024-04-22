import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { onlyAllowA } from './only-a.validator';
import { anotherOnlyAllowA } from './another-only-a.validator';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  wrongOnlyA: FormControl;
  correctOnlyA: FormControl;
  onlyB: FormControl;

  ngOnInit() {
    this.wrongOnlyA = new FormControl('B',[onlyAllowA]);
    this.correctOnlyA = new FormControl('B',[onlyAllowA()]);
    this.onlyB = new FormControl('B',[anotherOnlyAllowA]);
  }
}
