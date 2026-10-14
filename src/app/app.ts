import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Variables } from './Components/variables/variables';
import { DataBinding } from './Components/data-binding/data-binding';

@Component({
  imports: [RouterOutlet, Variables, DataBinding],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Anguler22tutorial');
}
