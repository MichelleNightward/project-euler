import { Component } from '@angular/core';

@Component({
  selector: 'largest-prime-factor',
  templateUrl: 'largest-prime-factor.component.html',
  styleUrls: ['largest-prime-factor.component.css']
})
export class LargestPrimeFactorComponent {
  problemDescription = 'The prime factors of 13195 are 5, 7, 13 and 29. What is the largest prime factor of the number'+
    ' 600851475143?';
  solution: number;

  constructor() {
    this.solution = this.findLargestPrimeFactor(600851475143);
  }

  findLargestPrimeFactor(limit:number): number{
    let largest: number = limit;
    let div:number = limit;
    let odd:number = 3;
    while (div % 2 == 0) {
      largest = 2;
      div = div/2;
    }
    while (div != 1) {
      while (div % odd == 0) {
        largest = odd;
        div = div/odd;
      }
      odd = odd + 2;
    }
    // for (let i = 2; i< Math.round(limit/2); i++){
    //   if(limit%i == 0 && this.isPrime(i)){
    //     largest = i;
    //   }
    // }
    return largest;
  }


  isPrime(intToCheck:number):boolean{
    if (intToCheck == 1){
      return true;
    }
    if (intToCheck == 2){
      return false;
    }
    for (let i = 2; i < intToCheck; i++){
      if(intToCheck%i == 0){
        return false;
      }
    }
    return true;
  }
}
