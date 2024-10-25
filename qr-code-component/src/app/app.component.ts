import { Component } from '@angular/core';
import { QrCodeComponent } from './components/qr-code/qr-code.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [QrCodeComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
