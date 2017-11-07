import { Component } from '@angular/core';

@Component({
  selector: 'multiples-of-3-and-5',
  templateUrl: 'multiples-of-3-and-5.component.html',
  styleUrls: ['multiples-of-3-and-5.component.css']
})
export class MultiplesOf3And5Component {
  problemDescription = 'If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.'+
    ' The sum of these multiples is 23. Find the sum of all the multiples of 3 or 5 below 1000.';
  solution: number;

  constructor() {
    this.solution = this.findMultiples(1000);
  }

  findMultiples(limit:number): number{
    let sum: number = 0;
    for(let i = 0; i < limit; ++i) {
      if (i%3 == 0 || i%5 == 0){
        sum+=i;
      }
    }
    return sum;
  }
}
