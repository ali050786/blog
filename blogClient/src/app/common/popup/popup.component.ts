import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'blog-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {

  @Input() modelbox: any
  @Output() response = new EventEmitter<any>(); 

  constructor() { 

  }

  ngOnInit() {
  }

  calltoAction(data){
    this.response.emit(data)
  }
  

}
