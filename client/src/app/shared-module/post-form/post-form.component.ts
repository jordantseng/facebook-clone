import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/interfaces/auth.model';
import { Post } from '../../interfaces/post.model';

import { mimeType } from '../../validators/mime-type.validator';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css'],
})
export class PostFormComponent implements OnInit, OnChanges {
  @Input() loggedInUser: User;
  @Input() initialFormValue = {
    title: '',
    content: '',
    image: '',
  };

  @Output() formSubmitted = new EventEmitter<Post>();

  form: FormGroup = this.fb.group({
    title: [this.initialFormValue.title, [Validators.required]],
    content: [this.initialFormValue.content, [Validators.required]],
    image: [null, null, [mimeType]],
  });

  imagePreview: string;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges) {
    for (const propName in changes) {
      if (changes.hasOwnProperty(propName)) {
        switch (propName) {
          case 'initialFormValue':
            return this.setFormValue();
        }
      }
    }
  }

  setFormValue() {
    this.form.patchValue({
      title: this.initialFormValue.title,
      content: this.initialFormValue.content,
      image: this.initialFormValue.image,
    });
    this.imagePreview = this.initialFormValue.image;
  }

  onUploadImage(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    const reader = new FileReader();

    if (file) {
      this.form.patchValue({ image: file });
      this.form.get('image').updateValueAndValidity();

      reader.onload = (e) => {
        this.imagePreview = e.target.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  onFormSubmit() {
    this.form.markAllAsTouched();

    if (this.form.invalid) {
      return;
    }

    const post: Post = this.form.value;

    this.formSubmitted.emit(post);
  }
}
