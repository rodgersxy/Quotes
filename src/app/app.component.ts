import { Component } from '@angular/core';
import {Quote} from './quote'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes = [
    new Quote(1, 'Bill Hill', 'Good music goes with good food', new Date(2019, 1, 1)),
    new Quote(2, 'Hadson Marani','Knowledge without wisdom is like water in the sand', new Date(2019, 1, 2)),
    new Quote(3, 'Pio Gama Pito','The sun never sets without fresh new', new Date(2019, 1, 3)),
    new Quote(4, 'Nelson Mandela','A good mother knows what children will eat', new Date(2019, 1, 3)),
    new Quote(4, 'Ken Rodgers','Let us always meet each other with a smile, for smile is the beginning of love',new Date(2019, 1, 4))
  ]
}
