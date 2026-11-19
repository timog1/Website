export interface Validator {
  name: string;
  description: string;
}

export const templateDrivenExample = `import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup-form',
  standalone: true,
  imports: [FormsModule],
  template: \`
    <form #form="ngForm" (ngSubmit)="onSubmit(form)">
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          ngModel
          required
          #name="ngModel"
        />
        @if (name.invalid && name.touched) {
          <span class="error">Name is required</span>
        }
      </div>

      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          ngModel
          required
          email
        />
      </div>

      <button type="submit" [disabled]="form.invalid">
        Sign Up
      </button>
    </form>
  \`
})
export class SignupFormComponent {
  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log('Form value:', form.value);
    }
  }
}`;

export const reactiveFormExample = `import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: \`
    <form [formGroup]="profileForm" (ngSubmit)="onSubmit()">
      <div>
        <label>Name:</label>
        <input
          type="text"
          formControlName="name"
          [class.error]="name?.invalid && name?.touched"
        />
        @if (name?.errors?.['required'] && name?.touched) {
          <span class="error">Name is required</span>
        }
      </div>

      <div>
        <label>Email:</label>
        <input
          type="email"
          formControlName="email"
          [class.error]="email?.invalid && email?.touched"
        />
        @if (email?.errors?.['email']) {
          <span class="error">Invalid email</span>
        }
      </div>

      <div formGroupName="address">
        <label>City:</label>
        <input formControlName="city" />
      </div>

      <button type="submit" [disabled]="profileForm.invalid">
        Save Profile
      </button>
    </form>
  \`
})
export class ProfileFormComponent {
  profileForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.profileForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      address: this.fb.group({
        city: [''],
        country: ['']
      })
    });
  }

  // Shortcut access to controls
  get name() { return this.profileForm.get('name'); }
  get email() { return this.profileForm.get('email'); }

  onSubmit() {
    if (this.profileForm.valid) {
      console.log('Form value:', this.profileForm.value);
    }
  }
}`;

export const validators: Validator[] = [
  { name: 'Validators.required', description: 'Field must have a non-empty value.' },
  { name: 'Validators.minLength(n)', description: 'String must be at least n characters long.' },
  { name: 'Validators.maxLength(n)', description: 'String must be at most n characters long.' },
  { name: 'Validators.email', description: 'Value must be a valid email format.' },
  { name: 'Validators.pattern(regex)', description: 'Value must match the given regular expression.' },
  { name: 'Validators.min(n)', description: 'Numeric value must be at least n.' },
  { name: 'Validators.max(n)', description: 'Numeric value must be at most n.' },
  { name: 'Validators.requiredTrue', description: 'Boolean field must be true (e.g., terms acceptance).' }
];

export const customValidatorExample = `import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

// Custom validator: password must contain a number
export function mustContainNumber(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const hasNumber = /\\d/.test(control.value);
    return hasNumber ? null : { mustContainNumber: true };
  };
}

// Custom validator: passwords must match
export function passwordsMatch(controlName: string, checkControlName: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const formGroup = control.parent as FormGroup;
    const password = formGroup.get(controlName)?.value;
    const confirmPassword = formGroup.get(checkControlName)?.value;

    return password === confirmPassword
      ? null
      : { passwordsMismatch: true };
  };
}

// Usage in a form group
this.loginForm = this.fb.group({
  password: ['', [Validators.required, mustContainNumber()]],
  confirmPassword: ['', Validators.required],
}, { validators: passwordsMatch('password', 'confirmPassword') });`;

export const formArrayExample = `import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-invite-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: \`
    <form [formGroup]="inviteForm" (ngSubmit)="onSubmit()">
      <div formArrayName="emails" class="space-y-2">
        @for (email of emails.controls; track $index) {
          <div class="flex gap-2">
            <input
              [formControlName]="\$index"
              type="email"
              placeholder="Enter email"
            />
            <button type="button" (click)="removeEmail(\$index)">
              Remove
            </button>
          </div>
        }
      </div>

      <button type="button" (click)="addEmail()">
        + Add Email
      </button>
      <button type="submit" [disabled]="inviteForm.invalid">
        Send Invites
      </button>
    </form>
  \`
})
export class InviteFormComponent {
  inviteForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.inviteForm = this.fb.group({
      emails: this.fb.array([
        this.fb.control('', [Validators.required, Validators.email])
      ])
    });
  }

  get emails() {
    return this.inviteForm.get('emails') as FormArray;
  }

  addEmail() {
    this.emails.push(
      this.fb.control('', [Validators.required, Validators.email])
    );
  }

  removeEmail(index: number) {
    this.emails.removeAt(index);
  }

  onSubmit() {
    if (this.inviteForm.valid) {
      const emails = this.emails.value.filter(e => e);
      console.log('Inviting:', emails);
    }
  }
}`;

export const signalsFormExample = `import { Component, model } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  standalone: true,
  template: \`
    <form (ngSubmit)="onSubmit()">
      <label>
        Name:
        <input [()]="name" required />
      </label>

      <label>
        Email:
        <input [()]="email" type="email" required />
      </label>

      <p>Name: {{ name() }}</p>
      <p>Email: {{ email() }}</p>

      <button type="submit">Submit</button>
    </form>
  \`
})
export class SimpleFormComponent {
  // Two-way binding signal
  name = model.required<string>();
  email = model<string>('');

  onSubmit() {
    console.log('Name:', this.name());
    console.log('Email:', this.email());
  }
}`;

export const bestPractices = [
  'Prefer Reactive Forms for complex forms — they are more testable and maintainable.',
  'Use Template-Driven Forms for simple forms like search boxes or login forms.',
  'Always show validation errors only after the user has interacted with the field (touched/dirty).',
  'Use the FormBuilder service to reduce boilerplate when creating form groups.',
  'Create custom validators for business logic that built-in validators can\'t handle.',
  'Use FormArray for dynamic lists of form controls.',
  'Disable the submit button when the form is invalid to prevent bad data submission.',
  'Use patchValue() to update specific fields and setValue() to replace the entire form value.',
  'Consider using model() signal (Angular 21+) for simple two-way binding scenarios.'
];
