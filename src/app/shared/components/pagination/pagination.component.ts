import { Component, Input, OnInit } from '@angular/core';
import { UtilsService } from '../feed/services/utils.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'mc-pagination',
  templateUrl: './pagination.component.html',
  standalone: true,
  imports: [CommonModule, RouterLink],
})
export class PaginationComponent implements OnInit {
  @Input() pageNumber: number = 1;
  @Input() pageSize: number = 10;
  @Input() totalCount: number = 0;
  @Input() baseUrl: string = '';
  @Input() totalPages: number = 1;

  pages: number[] = [];

  constructor(private _util: UtilsService) {}
  ngOnInit(): void {
    this.pages = this._util.range(1, this.totalPages + 1);
  }
}
