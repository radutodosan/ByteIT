import { Component } from '@angular/core';
import {slideInUpOnEnterAnimation} from "angular-animations";
import {ExercisesService} from "../services/exercises.service";
import {Exercise} from "../entities/exercise";


@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.css'],
  animations:[
    slideInUpOnEnterAnimation({duration:650})


  ],
})
export class ExercisesComponent {
  exercisesList:Exercise[] = [];
  constructor(private exercisesService:ExercisesService) {
    this.exercisesList = exercisesService.exercisesList;
  }


  ngOnInit(){
  }
}

