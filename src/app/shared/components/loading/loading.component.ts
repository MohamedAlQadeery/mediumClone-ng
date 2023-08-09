import { Component, Input } from '@angular/core';

@Component({
  selector: 'mc-loading',
  template: '<div style="color: red;">{{loadingMessage}}</div>',
  standalone: true,
})
export class LoadingComponent {
  @Input() loadingMessage: string = 'Loading...';
}
