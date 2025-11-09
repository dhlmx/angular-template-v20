import { Component } from '@angular/core';
import { PanelModule } from 'primeng/panel';

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [PanelModule],
  templateUrl: './page-not-found.html',
  styleUrls: ['./page-not-found.scss']
})
export class PageNotFoundComponent {
}
