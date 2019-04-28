import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quote = [
    new Quote(1, 'Bill Hill','Good music goes with good food'),
    new Quote(2, 'Hadson Marani','Knowledge without wisdom is like water in the sand'),
    new Quote(3, 'Pio Gama Pinto', 'The sun never sets without fresh new'),
    new Quote(4, 'Nelson Mandela','A good mother knows what children will eat'),
    new Quote(4, 'Ken Rodgers','Let us always meet each other with a smile, for smile is the beginning of love')
  ]



  toogleDetails(index){
    this.quote[index].showDescription=!this.quote[index].showDescription;
  }

  completeQuote(isComplete,index){
    if (isComplete){
      this.quote.splice(index,1);
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
