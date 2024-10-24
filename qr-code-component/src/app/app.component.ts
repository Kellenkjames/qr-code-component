import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { QrCodeComponent } from './components/qr-code/qr-code.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, QrCodeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'qr-code-component';
}
