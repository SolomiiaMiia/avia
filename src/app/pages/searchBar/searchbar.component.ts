import { HttpClient } from '@angular/common/http';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {
  searchControl = new FormControl('');
  @Output() emitM = new EventEmitter<boolean>()


  constructor() { }

  ngOnInit(): void {
    // this.searchControl.valueChanges.subscribe(value => console.log(value))
  }


}