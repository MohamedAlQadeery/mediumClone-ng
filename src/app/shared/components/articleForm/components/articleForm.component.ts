import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { ArticleFormValuesInterface } from '../types/articleFormValues.interface';
import { BackendErrorsInterface } from 'src/app/shared/types/backendErrors.interface';
import { TagResponseInterface } from '../../popular-tags/types/popularTagResponse.interface';
import { Observable } from 'rxjs';
import { TagService } from '../../popular-tags/services/tag.service';
import { FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BackendErrorsMessagesComponent } from '../../backend-errors/backend-errors.component';

@Component({
  selector: 'mc-article-form',
  templateUrl: './articleForm.component.html',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, BackendErrorsMessagesComponent],
})
export class ArticleFormComponenet implements OnInit {
  @Input() initialValues?: ArticleFormValuesInterface;
  @Input() isSubmitting: boolean = false;
  @Input() errorsMessages: BackendErrorsInterface | null = null;

  @Output() articleSubmit = new EventEmitter<ArticleFormValuesInterface>();

  constructor(private tagService: TagService, private fb: FormBuilder) {}
  ngOnInit(): void {
    this.initForm();
  }
  tags$ = this.tagService.getPopularTags();
  form = this.fb.nonNullable.group({
    title: '',
    body: '',
    tags: new FormControl(['']),
  });

  initForm() {
    // if (!this.initialValues) {
    //   throw new Error('Inputs are not provided');
    // }

    if (this.initialValues) {
      this.form.patchValue({
        title: this.initialValues.title,
        body: this.initialValues.body,
        tags: this.initialValues.selectedTags,
      });
    }
  }

  onSubmit() {
    const formValues = this.form.getRawValue();
    const articleFormValues: ArticleFormValuesInterface = {
      ...formValues,
      selectedTags: formValues.tags!,
    };

    this.articleSubmit?.emit(articleFormValues);
  }
}
