import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  initYear:number = 2023;
  initMouth:string = "Junho";
  githubUrl:string = "https://github.com/MendoncaGabriel";
  linkedinUrl:string = "https://www.linkedin.com/in/mendon%C3%A7agabriel";
}
