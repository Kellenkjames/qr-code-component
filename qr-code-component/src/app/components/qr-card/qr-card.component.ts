import { Component } from '@angular/core';

@Component({
  selector: 'app-qr-card',
  standalone: true,
  imports: [],
  templateUrl: './qr-card.component.html',
  styleUrls: ['./qr-card.component.scss'],
})
export class QrCardComponent {
  qrCodeImage: string = 'assets/image-qr-code.png';
  title: string = 'Improve your front-end skills by building projects';
  description: string =
    'Scan the QR code to visit Frontend Mentor and take your coding skills to the next level.';
}
