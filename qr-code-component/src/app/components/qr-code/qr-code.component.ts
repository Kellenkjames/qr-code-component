import { Component } from '@angular/core';

@Component({
  selector: 'app-qr-code',
  standalone: true,
  imports: [],
  templateUrl: './qr-code.component.html',
  styleUrls: ['./qr-code.component.scss'],
})
export class QrCodeComponent {
  qrCodeImage: string = 'assets/image-qr-code.png';
  title: string = 'Improve your front-end skills by building projects';
  description: string =
    'Scan the QR code to visit Frontend Mentor and take your coding skills to the next level.';
}
