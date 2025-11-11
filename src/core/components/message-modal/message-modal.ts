import { Component, Input } from '@angular/core';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-message-modal',
  standalone: true,
  imports: [DialogModule],
  templateUrl: './message-modal.html',
  styleUrls: ['./message-modal.scss']
})
export class MessageModalComponent {

  @Input() visible = false;
  @Input() message = '';
}
