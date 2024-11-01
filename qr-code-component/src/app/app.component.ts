import { Component } from '@angular/core';
import { QrCardComponent } from './components/qr-card/qr-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [QrCardComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
