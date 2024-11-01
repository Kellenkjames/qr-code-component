import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-qr-content',
  standalone: true,
  imports: [],
  templateUrl: './qr-content.component.html',
  styleUrl: './qr-content.component.scss',
})
export class QrContentComponent {
  @Input() title!: string;
  @Input() description!: string;
}
