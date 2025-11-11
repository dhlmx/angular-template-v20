import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CoreModule } from '../core/components/core.module';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CoreModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Angular Template v20 + PrimeNG + PrimeUix');
}
