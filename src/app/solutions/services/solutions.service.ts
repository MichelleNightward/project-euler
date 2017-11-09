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
  findEvenFibonacciNumbers(limit:number): number {
    let sum: number = 0;
    let next: number = 0;
    for (let i =0; next < limit; i++) {
      next = this.fibonacciRecursive(i);
      if (this.isEven(next)) {
        sum+=next;
      }
    }
    return sum;
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
  findLargestPrimeFactor(intToCheck:number): number {
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
   * Finds the sum of all multiples of 3 and 5 below the provided number.
   *
   * @param limit
   */
  findSumOf3And5Multiples(limit:number): number {
    let sum: number = 0;
    for (let i = 0; i < limit; ++i) {
      if (i%3 == 0 || i%5 == 0) {
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
  fizzBuzz(limit:number): string {
    let fizzBuzzResult:string ="";
    for (let i=1; i <= limit; i++) {
      if (i%3 == 0 && i%5 == 0){
        fizzBuzzResult += "FizzBuzz ";
      } else if (i%3 == 0) {
        fizzBuzzResult += "Fizz ";
      } else if (i%5 == 0) {
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
  findBTLowestCommonAncestor(root: BinaryTree, val1: number, val2: number): BinaryTree {
    // If root is undefined return null.
    if (!root) {
      return null;
    }
    // If root's value is equal to val1 or val2, return root.
    if (root.value == val1 || root.value == val2) {
      return root;
    }
    // Recursively walk through left and right nodes to  check their status with provided values
    let left = this.findBTLowestCommonAncestor(root.left, val1, val2);
    let right = this.findBTLowestCommonAncestor(root.right, val1, val2);
    // if both left and right have values returned through executing findBTLowestCommonAncestor, return root.
    if (left && right) {
      return root;
    }
    // Else, return left if left is defined, as last resort return right regardless of whether it's defined.
    if(left) {
      return left;
    } else {
      return right;
    }
  }

  /**
   * Sorts a given array in pancake style, flipping portions of the array until it is in ascending order
   *
   * @param arrayToSort
   */
  pancakeSort(arrayToSort: Array<number>): Array<number> {
    for (var i = arrayToSort.length - 1; i >= 1; i--) {
      // find the index of the largest number not yet sorted
      let largestUnsortedIndex = 0;
      let largestUnsortedVal = arrayToSort[0];
      for(let j = 1; j <= i; j++){
        if (arrayToSort[j] > largestUnsortedVal) {
          largestUnsortedVal = arrayToSort[j];
          largestUnsortedIndex = j;
        }
      }
      if (largestUnsortedIndex == i) {
        // number is already sorted
        continue;
      }
      // flip arr max element to index 0
      let pancakeGroup;
      if (largestUnsortedIndex>0) {
        pancakeGroup = arrayToSort.slice(0,largestUnsortedIndex+1).reverse();
        for (let j=0; j <= largestUnsortedIndex; j++) {
          arrayToSort[j] = pancakeGroup[j];
        }
      }
      // then flip the max element to its place
      pancakeGroup = arrayToSort.slice(0,i+1).reverse();
      for (let j=0; j <= i; j++) {
        arrayToSort[j] = pancakeGroup[j];
      }
    }
    return arrayToSort
  }

  /**
   * given a number of digits, find the largest palindrome possible by adding two numbers with provided digits.
   *
   * @param numOfDigits
   */
  findLargestPalindromeProduct(numOfDigits: number): number {
    let maxNumber: number = this.generateHighestNumberWithGivenDigits(numOfDigits);
    let largestPalindrome = 0;
    for (let i=maxNumber; i >= 0; i--) {
      for (let j=maxNumber; j >= 0; j--) {
        if (i*j > largestPalindrome && this.isPalindrome(i*j)) {
          largestPalindrome = i*j;
        }
      }
    }
    return largestPalindrome;
  }

  /**
   * given a number of digits, find the largest number with that amount of digits.
   *
   * @param numOfDigits
   */
  generateHighestNumberWithGivenDigits(numOfDigits: number): number {
    let maxNumberString: string = "1";
    for (let i=0; i<numOfDigits; i++) {
      maxNumberString += "0";
    }
    return parseInt(maxNumberString) - 1;
  }

  /**
   * given a number, find smallest number that is divisible by provided number and all numbers smaller than it.
   * TODO: optimize this, its not the most efficient way to do this I dont think.
   *
   * @param rangeLimit
   */
  findSmallestNumberDivisibleByRange(rangeLimit: number): number {
    for (let i = rangeLimit; i <= Number.MAX_VALUE; i++) {
      for (let j=2; j <= rangeLimit; j++) {
        if (i%j != 0){
          break;
        }
        if (j == rangeLimit && i%j == 0) {
          return i;
        }
      }
    }
  }

  /**
  * Private methods
  */

  /**
   * Finds next fibonacci number in a sequence given the current number.
   *
   * @param currentFib
   */
  private fibonacciRecursive(currentFib:number): number {
    if (currentFib <= 2) {
      return currentFib;
    }
    return this.fibonacciRecursive(currentFib-2) + this.fibonacciRecursive(currentFib-1);
  }

  /**
   * Checks whether number is even
   *
   * @param intToCheck
   */
  private isEven(intToCheck:number): boolean {
    return intToCheck%2 == 0;
  }

  /**
   * Checks if provided number is a prime number. This method is currently unused. Could be implemented more efficiently.
   *
   * @param intToCheck
   */
  private isPrime(intToCheck:number): boolean {
    for (let i = 1; i < intToCheck; i++) {
      if(intToCheck%i == 0) {
        return false;
      }
    }
    return true;
  }

  /**
   * given a number, check if it's a palindrome.
   *
   * @param intToCheck
   */
  private isPalindrome(intToCheck: number): boolean {
    let intAsString: string = String(intToCheck);
    return (intAsString == intAsString.split("").reverse().join(""));
  }
}
