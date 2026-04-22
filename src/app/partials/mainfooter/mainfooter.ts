import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-mainfooter',
  imports: [DatePipe],
  templateUrl: './mainfooter.html',
  styleUrl: './mainfooter.scss',
})
export class Mainfooter {

  today: Date = new Date();
}
