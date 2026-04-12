import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { IToast } from '../../data/types/toast'

@Component({
  selector: 'app-toast',
  imports: [],
  templateUrl: './toast.html',
  styleUrl: './toast.css',
})
export class Toast implements OnChanges {
  @Input() props!: IToast;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['props'] && changes['props'].currentValue.isVisible) {
      if (this.props.duration > 0) {
        setTimeout(() => {
          this.props.isVisible = false;
        }, this.props.duration);
      }
    }
  }
}
