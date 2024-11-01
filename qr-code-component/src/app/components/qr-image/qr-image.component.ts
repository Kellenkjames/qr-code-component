import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-qr-image',
  standalone: true,
  imports: [],
  templateUrl: './qr-image.component.html',
  styleUrl: './qr-image.component.scss',
})
export class QrImageComponent {
  @Input() imageUrl!: string;
}
