import { Component } from '@angular/core';
import { Navbar } from "../../components/navbar/navbar";
import { Hero } from "../../components/hero/hero";
import { AboutMe } from "../../components/about-me/about-me";

@Component({
  selector: 'app-home',
  imports: [Navbar, Hero, AboutMe],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
