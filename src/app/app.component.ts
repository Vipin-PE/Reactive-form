import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Reactive-Form';

  bookForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.bookForm = this.fb.group({
      bookName: ['', Validators.required],
      author: ['', Validators.required],
      publication: ['', Validators.required],
      price: ['', Validators.required],
      genre: ['', Validators.required],
      publishedDate: ['', Validators.required],
      country: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.bookForm.valid) {
      console.log(this.bookForm.value);
    } else {
      this.markFormGroupTouched(this.bookForm);
    }
  }

  markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();

      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }
}
