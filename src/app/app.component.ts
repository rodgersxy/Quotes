import { Component } from '@angular/core';
import {Quote} from './quote'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes = [
    new Quote(1, 'Good music goes with good food'),
    new Quote(2, 'Knowledge without wisdom is like water in the sand'),
    new Quote(3, 'The sun never sets without fresh new'),
    new Quote(4, 'A good mother knows what children will eat'),
    new Quote(4, 'Let us always meet each other with a smile, for smile is the beginning of love')
  ]
}
