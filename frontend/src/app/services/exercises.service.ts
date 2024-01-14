
import { Injectable } from '@angular/core';
import {Exercise} from "../entities/exercise";


@Injectable({
  providedIn: 'root'
})
export class ExercisesService {


  constructor() { }


  exercisesList:Exercise[]=[
    {id:1, title:"Introduction: Exercise 1" , description:"Print 'Hello, World!'", course_id:1},
    {id:2, title:"Introduction: Exercise 2" , description:"Solve 3 + 5 and print the result.", course_id:1},
    {id:3, title:"Introduction: Exercise 3" , description:"Create a list containing: 3, 5, 2 and 7.\n Do the sum of the numbers and print the result.", course_id:2},
    {id:4, title:"Introduction: Exercise 4" , description:"Create a list of 10 integers and sort it ascending.", course_id:3},
    {id:5, title:"Introduction: Exercise 5" , description:"Create a list of 10 integers and sort it descending.", course_id:3},
  ]
}

