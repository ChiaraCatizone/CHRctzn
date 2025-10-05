import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class App {
  protected readonly title = signal('chrctzn-app');
}