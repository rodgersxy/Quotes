import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';




@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  @Output() addQuote = new EventEmitter<Quote>();
  newQuote = new Quote(0, "", "", new Date(),0,0);




  submitQuote(xxx) {
    this.addQuote.emit(new Quote(xxx.value.id++,xxx.value.name,xxx.value.description,xxx.value.date,0,0));
    xxx.reset();
  }


  constructor() { }

  ngOnInit() {
  }

}
