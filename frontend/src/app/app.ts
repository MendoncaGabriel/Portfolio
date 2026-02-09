import { Component, OnInit, signal } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: '<router-outlet />'
})
export class App implements OnInit {
  constructor(private title: Title) {}

  ngOnInit() {
    this.title.setTitle('Gabriel Andrade - Desenvolvedor Full Stack');
  }

}
