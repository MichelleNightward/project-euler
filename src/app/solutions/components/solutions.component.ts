import { Component } from '@angular/core';
import {SolutionsService} from "../services/solutions.service";
import {BinaryTree} from "../models/binary-tree";

@Component({
  selector: 'solutions',
  templateUrl: 'solutions.component.html',
  styleUrls: ['solutions.component.css']
})
export class SolutionsComponent {
  public problemCollection = [];
  public sideProblemCollection = [];

  private binaryTreeRoot1: BinaryTree = new BinaryTree(1);

  constructor(solutionsService: SolutionsService) {
    this.binaryTreeRoot1.left = new BinaryTree(2);
    this.binaryTreeRoot1.right = new BinaryTree(3);
    this.binaryTreeRoot1.left.left = new BinaryTree(4);
    this.binaryTreeRoot1.left.right = new BinaryTree(5);
    this.binaryTreeRoot1.right.left = new BinaryTree(6);

    console.log(solutionsService.findBTLowestCommonAncestor(this.binaryTreeRoot1, 2,3));

    this.problemCollection = [
    {"problemId": 1,
      "problemText": 'If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.'+
        ' The sum of these multiples is 23. Find the sum of all the multiples of 3 or 5 below 1000.',
      "solution": solutionsService.findMultiples(1000)},
    {"problemId": 2,
      "problemText": 'Each new term in the Fibonacci sequence is generated by adding the previous two terms. ' +
        'By starting with 1 and 2, the first 10 terms will be: 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ... By considering the ' +
        'terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.',
      "solution": solutionsService.findEvenFibonacciNumbers(4000000)},
    {"problemId": 3,
      "problemText": 'The prime factors of 13195 are 5, 7, 13 and 29. What is the largest prime factor of the number'+
        ' 600851475143?',
      "solution": solutionsService.findLargestPrimeFactor(600851475143)}
    ];
    this.sideProblemCollection = [
      {"problemId": 1,
        "problemText": 'Fizz buzz is a group word game for children to teach them about division. Players take turns'+
        ' to count incrementally, replacing any number divisible by three with the word “fizz”, any number '+
        'divisible by five with the word “buzz”, and or each number divisible by three and by five the computer'+
        ' will display the word “fizz-buzz”. Display results through 20.',
        "solution": solutionsService.fizzBuzz(20)},
      {"problemId": 2,
        "problemText": 'Given a binary tree (not a binary search tree) and two values say n1 and n2, write a program'+
        ' to find the least common ancestor.',
        "solution": solutionsService.findBTLowestCommonAncestor(this.binaryTreeRoot1, 4,5).value || "No common ancestor found."},
      {"problemId": 3,
        "problemText": 'Write a JavaScript program to sort a list of elements using Pancake sort.',
        "solution": "incomplete"}
    ];
  }
}
