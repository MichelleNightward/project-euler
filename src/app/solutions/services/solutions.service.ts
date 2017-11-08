import {Injectable} from "@angular/core";
import {BinaryTree} from "../models/binary-tree";
/**
 * Created by michellenightward on 11/7/17.
 */
@Injectable()
export class SolutionsService {

  // TODO: possibly find a better way to break up this soon to be large file

  /**
   * Finds even Fibonacci numbers given a limit to calculate to.
   *
   * @param limit
   */
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

  /**
   * Finds next fibonacci number in a sequence given the current number.
   *
   * @param currentFib
   */
  fibonacciRecursive(currentFib:number){
    if(currentFib <= 2){
      return currentFib;
    }
    return this.fibonacciRecursive(currentFib-2) + this.fibonacciRecursive(currentFib-1);
  }

  /**
   * Checks whether number is even
   *
   * @param intToCheck
   */
  isEven(intToCheck:number):boolean{
    return intToCheck%2 == 0;
  }

  /**
   * Finds the largest prime factor to a given number.
   *
   * There are several ways to do this, and this originally used isPrime() to solve
   * but it's unsustainable on a vast level. Feeding the function 4000000 needs to not
   * tax the system so this has been refactored to accommodate large numbers.
   *
   * @param intToCheck
   */
  findLargestPrimeFactor(intToCheck:number): number{
    let largest: number = intToCheck;
    let div:number = intToCheck;
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

  /**
   * Checks if provided number is a prime number. This method is currently unused.
   *
   * @param intToCheck
   */
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

  /**
   * Finds the sum of all multiples of 3 and 5 below the provided number.
   *
   * @param limit
   */
  findSumOf3And5Multiples(limit:number): number{
    let sum: number = 0;
    for(let i = 0; i < limit; ++i) {
      if (i%3 == 0 || i%5 == 0){
        sum+=i;
      }
    }
    return sum;
  }

  /**
   * A sime FizzBuzz game, creates a string that represents all numbers below the provided number replacing multiples
   * of 3 with the word Fizz, multiples of 5 with the word Buzz, and multiples of both 3 and 5 with FizzBuzz.
   *
   * @param limit
   */
  fizzBuzz(limit:number):string{
    let fizzBuzzResult:string ="";
    for (let i=1; i <= limit; i++){
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

  /**
   * Finds the lowest common ancestor shared between to numbers given a binary tree.
   *
   * @param root
   * @param val1
   * @param val2
   */
  findBTLowestCommonAncestor(root: BinaryTree, val1: number, val2: number): BinaryTree{
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
