import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

type Ratio = '1x1' | '4x3' | '16x9' | '21x9';
type Fit = 'cover' | 'contain' | 'fill';

@Component({
  selector: 'app-image-card',
  imports: [CommonModule,RouterLink],
  templateUrl: './image-card.html',
  styleUrl: './image-card.css'
})
export class ImageCard {
  @Input() src!: string;
  @Input() alt = '';
  @Input() title?: string;
  @Input() subtitle?: string;
  @Input() caption?: string;
  @Input() badge?: string;

  /** Link behavior */
  @Input() href?: string;           // If set, the card is clickable
  @Input() external = true;         // If false, uses routerLink instead of href

  /** Presentation */
  @Input() ratio: Ratio = '16x9';   // 1x1 | 4x3 | 16x9 | 21x9
  @Input() fit: Fit = 'cover';      // cover | contain | fill
  @Input() rounded: '' | 'rounded' | 'rounded-3' | 'rounded-4' = 'rounded-3';
  @Input() loading: 'lazy' | 'eager' = 'lazy';

  /** Responsive images (optional) */
  @Input() srcset?: string;
  @Input() sizes?: string;

  isLoaded = false;
  isError = false;

  onLoad() { this.isLoaded = true; }
  onError() { this.isError = true; }

  get ratioClass() {
    switch (this.ratio) {
      case '1x1': return 'ratio ratio-1x1';
      case '4x3': return 'ratio ratio-4x3';
      case '21x9': return 'ratio ratio-21x9';
      default:    return 'ratio ratio-16x9';
    }
  }

  get objectFitClass() {
    return {
      'object-fit-cover': this.fit === 'cover',
      'object-fit-contain': this.fit === 'contain',
      'object-fit-fill': this.fit === 'fill',
    };
  }
}
