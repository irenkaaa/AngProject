import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Animal } from 'src/app/core/models/Animal';

@Component({
  selector: 'app-single-animal',
  templateUrl: './single-animal.component.html',
  styleUrls: ['./single-animal.component.css']
})
export class SingleAnimalComponent implements OnInit {
  @Input("animal")
  animal: Animal;

  @Output()
  clickButtonEmitter: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  clickButton(){
    this.clickButtonEmitter.emit(this.animal._id);
  }

}

