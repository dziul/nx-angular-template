import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lcw-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Output()  dispatch = new EventEmitter<any>()

  constructor() { }

  ngOnInit() {
    
  }

  onClick(event:any){
    this.dispatch.emit(event)
  }

}
