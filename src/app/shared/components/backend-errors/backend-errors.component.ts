import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { BackendErrorsInterface } from '../../types/backendErrors.interface';

@Component({
  selector: 'mc-backend-errors',
  templateUrl: './backend-errors.component.html',
  styleUrls: ['./backend-errors.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class BackendErrorsMessagesComponent implements OnInit {
  @Input() backendErrors: BackendErrorsInterface = null!;
  errorsMessages: string[] = [];
  ngOnInit(): void {
    if (this.backendErrors == null) {
      return;
    }
    this.errorsMessages = Object.keys(this.backendErrors.errors!).map(
      (name: string) => {
        const messages = this.backendErrors
          .errors![name].join('/')
          .replace(/'/g, '');
        //return `${name} ${messages}`;
        return `${messages}`;
      }
    );
  }
}
