import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navigation } from './navigation/navigation';


export class AppComponent {}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,Navigation],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('chrctzn-app');
}