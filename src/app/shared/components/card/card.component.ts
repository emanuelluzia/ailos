import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() isCpf: boolean = false;
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() label1: string = '';
  @Input() label2: string = '';
  @Input() label3: string = '';
  @Input() label4: string = '';


}
