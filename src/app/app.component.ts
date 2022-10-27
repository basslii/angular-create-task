import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-component',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(
      private fb: FormBuilder,
  ) {}

  ngOnInit() {
  }

  public addMoreForm: FormGroup = this.fb.group({
    title: new FormControl(''),
    type: new FormControl(''),
    descripition: new FormControl(''),
    itemRows: new FormArray([this.initItemRows()])
  });
  
  get formArr() {
    return this.addMoreForm.get('itemRows') as FormArray;
  }

  initItemRows() {
    return this.fb.group({
    timeRange:new FormControl(''),
    learn:new FormControl(''),
    descripition:new FormControl(''),
    suggestion:new FormControl(''),
    });
  }

  addNewRow() {
    this.formArr.push(this.initItemRows());
  }

  deleteRow(index: number) {
    this.formArr.removeAt(index);
  }
}
