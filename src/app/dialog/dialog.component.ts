import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  message$: Object;
  showConfirmButton: Boolean;
  showCancelButton: Boolean;

  constructor() { }

  ngOnInit() {
    this.showConfirmButton = true;
    this.showCancelButton = true;
  }

}
