import { Component } from '@angular/core';
import { QrContentComponent } from '../qr-content/qr-content.component';
import { QrImageComponent } from '../qr-image/qr-image.component';

@Component({
  selector: 'app-qr-card',
  standalone: true,
  imports: [QrImageComponent, QrContentComponent],
  templateUrl: './qr-card.component.html',
  styleUrls: ['./qr-card.component.scss'],
})
export class QrCardComponent {
  imageUrl: string = 'assets/image-qr-code.png';
  title: string = 'Improve your front-end skills by building projects';
  description: string =
    'Scan the QR code to visit Frontend Mentor and take your coding skills to the next level.';
}
