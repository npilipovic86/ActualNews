import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Vest } from 'app/model/vest';
import { Kategorija } from 'app/model/kategorija';

@Component({
  selector: 'app-edit-save',
  templateUrl: './edit-save.component.html',
  styleUrls: ['./edit-save.component.css']
})
export class EditSaveComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.vest = {
      category: null,
      name: '',
      about: '',
      content: ''

    }
  }


  @Input()
  vest: Vest;

  @Output()
  addComponentEmitter: EventEmitter<Vest> = new EventEmitter();

  @Input()
  kategorije: Kategorija[];

  add() {
    this.addComponentEmitter.next(this.vest);
    this.vest = {
      category: null,
      name: '',
      about: '',
      content: ''

    }
  }

  reset() {
    this.vest = {
      category: null,
      name: '',
      about: '',
      content: ''
    }
  }

  byId(kategorija1: Kategorija, kategorija2: Kategorija) {
    if (kategorija1 && kategorija2) {
      return kategorija1.id === kategorija2.id;
    }
  }
}
