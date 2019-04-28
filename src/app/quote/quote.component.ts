import { Component, OnInit} from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quote = [
    new Quote(1, 'Bill Hill','Good music goes with good food', new Date(2018, 1, 1),0,0),
    new Quote(2, 'Hadson Marani','Knowledge without wisdom is like water in the sand',new Date(2018, 1, 2),0,0),
    new Quote(3, 'Pio Gama Pinto', 'The sun never sets without fresh new', new Date(2018, 1, 3),0,0),
    new Quote(4, 'Nelson Mandela','A good mother knows what children will eat', new Date(2018, 1, 4),0,0),
    new Quote(4, 'Ken Rodgers','Let us always meet each other with a smile, for smile is the beginning of love', new Date(2018, 1, 4),0,0)
  ]

  upVote(i){
    this.quote[i].upVote +=1;
  }
  downVote(i){
    this.quote[i].downVote -=1;
  }
  addNewQuote(quote) {
    let quoteLength = this.quote.length;
    quote.id = quoteLength + 1;
    quote.completeDate = new Date()
    this.quote.push(quote)
  }



  toogleDetails(index){
    this.quote[index].showDescription=!this.quote[index].showDescription;
  }
  deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quote[index].name}`)
      if (toDelete){
        this.quote.splice(index, 1)
      }
    }
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
