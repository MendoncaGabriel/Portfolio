import { Component } from '@angular/core';
import { Navbar } from "../../components/navbar/navbar";
import { Hero } from "../../components/hero/hero";
import { AboutMe } from "../../components/about-me/about-me";
import { Skills } from "../../components/skills/skills";

@Component({
  selector: 'app-home',
  imports: [Navbar, Hero, AboutMe, Skills],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
