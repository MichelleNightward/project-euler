import {Injectable} from "@angular/core";
/**
 * Created by michellenightward on 11/7/17.
 */
@Injectable()
export class SolutionsService {

  findEvenFibonacciNumbers(limit:number): number{
    let sum: number = 0;
    let next: number = 0;
    for(let i =0; next < limit; i++) {
      next = this.fibonacciRecursive(i);
      if (this.isEven(next)){
        sum+=next;
      }
    }
    return sum;
  }

  fibonacciRecursive(limit:number){
    if(limit <= 2){
      return limit;
    }
    return this.fibonacciRecursive(limit-2) + this.fibonacciRecursive(limit-1);
  }

  isEven(intToCheck:number):boolean{
    return intToCheck%2 == 0;
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
