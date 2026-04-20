import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-mainheader',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './mainheader.html',
  styleUrl: './mainheader.scss',
})
export class Mainheader {}
