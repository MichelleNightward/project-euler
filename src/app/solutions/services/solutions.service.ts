import {Injectable} from "@angular/core";
import {BinaryTree} from "../models/binary-tree";
/**
 * Created by michellenightward on 11/7/17.
 */
@Injectable()
export class SolutionsService {

  // TODO: possibly find a better way to break up this soon to be large file

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

  fizzBuzz(int:number):string{
    let fizzBuzzResult:string ="";
    for (let i=1; i <= int; i++){
      if (i%3 == 0 && i%5 == 0){
        fizzBuzzResult += "FizzBuzz ";
      } else if (i%3 == 0){
        fizzBuzzResult += "Fizz ";
      } else if (i%5 == 0){
        fizzBuzzResult += "Buzz ";
      } else {
        fizzBuzzResult += i.toString() + " ";
      }
    }
    return fizzBuzzResult;
  }

  findBTLowestCommonAncestor(root: BinaryTree, val1: number, val2: number){
    if (!root) {
      return null;
    }
    if (root.value == val1 || root.value == val2) {
      return root;
    }

    let left = this.findBTLowestCommonAncestor(root.left, val1, val2);
    let right = this.findBTLowestCommonAncestor(root.right, val1, val2);

    if (left && right) {
      return root;
    }

    if(left){
      return left;
    } else {
      return right;
    }

  }

}
