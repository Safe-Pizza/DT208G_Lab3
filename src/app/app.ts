import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Mainfooter } from "./partials/mainfooter/mainfooter";
import { Mainheader } from "./partials/mainheader/mainheader";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Mainfooter, Mainheader],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('DT208G_Lab3');
}