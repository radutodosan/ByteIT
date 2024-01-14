import { Component } from '@angular/core';
import {slideInUpOnEnterAnimation} from "angular-animations";

export interface TableHeaders {
  position: number;
  photo:string;
  name: string;
  level: string;
  exercisesSolved: number;
}
const TABLE_DATA: TableHeaders[] = [
  {position: 1, photo:"https://robohash.org/hehehe?bgset=bg1", name: 'vasile', level: "BEGINNER", exercisesSolved: 33},
  {position: 2, photo:"https://robohash.org/hehehe?bgset=bg1", name: 'ion', level: "BEGINNER", exercisesSolved: 31},
  {position: 3, photo:"https://robohash.org/hehehe?bgset=bg1", name: 'john_doe', level: "BEGINNER", exercisesSolved: 29},
  {position: 4, photo:"https://robohash.org/hehehe?bgset=bg1", name: 'gigi', level: "BEGINNER", exercisesSolved: 24},
  {position: 5, photo:"https://robohash.org/hehehe?bgset=bg1", name: 'ionela', level: "BEGINNER", exercisesSolved: 21},
  {position: 6, photo:"https://robohash.org/hehehe?bgset=bg1", name: 'marcel', level: "BEGINNER", exercisesSolved: 13},
  {position: 7, photo:"https://robohash.org/hehehe?bgset=bg1", name: 'viorel', level:"BEGINNER", exercisesSolved: 9},
  {position: 8, photo:"https://robohash.org/hehehe?bgset=bg1", name: 'petru', level: "BEGINNER", exercisesSolved: 6},
  {position: 9, photo:"https://robohash.org/hehehe?bgset=bg1", name: 'maria', level: "BEGINNER", exercisesSolved: 4},
  {position: 10, photo:"https://robohash.org/hehehe?bgset=bg1", name: 'florin', level: "BEGINNER", exercisesSolved: 3},
];
@Component({
  selector: 'app-leaderboard',
  animations:[
    slideInUpOnEnterAnimation({duration:650})
  ],
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent {
  displayedColumns: string[] = ['position', 'photo', 'name', 'level', 'exercisesSolved'];
  dataSource = TABLE_DATA;
}
