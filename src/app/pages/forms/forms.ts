import { Component } from '@angular/core';

@Component({
  selector: 'app-forms',
  imports: [],
  template: `
    <div class="space-y-12">
      <section>
        <h1 class="text-4xl font-bold text-gray-900 mb-4">Forms</h1>
        <p class="text-xl text-gray-600">
          Build robust forms in Angular using both Template-Driven and Reactive Forms approaches, with validation and dynamic controls.
        </p>
      </section>

      <!-- Two Approaches -->
      <section class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-4">Two Approaches to Forms</h2>
        <p class="text-gray-600 leading-relaxed mb-6">
          Angular provides two paradigms for handling forms. Choose the right one based on your use case:
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="border border-gray-200 rounded-xl p-6">
            <h3 class="text-lg font-semibold text-gray-900 mb-2">📝 Template-Driven Forms</h3>
            <p class="text-gray-500 text-sm leading-relaxed mb-3">
              Simple forms where the logic lives in the template. Uses directives like ngModel and template variables.
              Best for simple forms with basic validation.
            </p>
            <ul class="text-sm text-gray-500 space-y-1">
              <li>• Less boilerplate code</li>
              <li>• Easier to write for simple forms</li>
              <li>• Harder to test</li>
              <li>• Asynchronous validation</li>
            </ul>
          </div>
          <div class="border-2 border-red-200 rounded-xl p-6 bg-red-50">
            <h3 class="text-lg font-semibold text-gray-900 mb-2">⚡ Reactive Forms</h3>
            <p class="text-gray-500 text-sm leading-relaxed mb-3">
              Model-driven approach where form structure is defined in the component class.
              Best for complex forms with dynamic validation. <strong class="text-red-600">Recommended for most cases.</strong>
            </p>
            <ul class="text-sm text-gray-500 space-y-1">
              <li>• More explicit and testable</li>
              <li>• Better for complex forms</li>
              <li>• Synchronous validation</li>
              <li>• Dynamic form controls</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Template-Driven Forms -->
      <section class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-6">Template-Driven Forms</h2>
        <div class="bg-gray-900 rounded-lg p-4 font-mono text-sm text-green-400 overflow-x-auto">
          <pre>{{ templateDrivenExample }}</pre>
        </div>
      </section>

      <!-- Reactive Forms -->
      <section class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-6">Reactive Forms</h2>
        <div class="bg-gray-900 rounded-lg p-4 font-mono text-sm text-green-400 overflow-x-auto">
          <pre>{{ reactiveFormExample }}</pre>
        </div>
      </section>

      <!-- Form Validation -->
      <section class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-6">Form Validation</h2>
        <p class="text-gray-600 leading-relaxed mb-6">
          Angular provides built-in validators and supports custom validators for both approaches.
        </p>
        <div class="space-y-4">
          @for (validator of validators; track validator.name) {
            <div class="border border-gray-200 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center gap-2">
              <code class="text-red-600 font-semibold text-sm sm:w-48 flex-shrink-0">{{ validator.name }}</code>
              <p class="text-gray-500 text-sm">{{ validator.description }}</p>
            </div>
          }
        </div>
      </section>

      <!-- Custom Validators -->
      <section class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-6">Custom Validators</h2>
        <div class="bg-gray-900 rounded-lg p-4 font-mono text-sm text-green-400 overflow-x-auto">
          <pre>{{ customValidatorExample }}</pre>
        </div>
      </section>

      <!-- Dynamic Forms -->
      <section class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-6">Dynamic Forms with FormArray</h2>
        <p class="text-gray-600 leading-relaxed mb-4">
          FormArray lets you create forms with a dynamic number of controls — perfect for scenarios like
          adding multiple email addresses or form items.
        </p>
        <div class="bg-gray-900 rounded-lg p-4 font-mono text-sm text-green-400 overflow-x-auto">
          <pre>{{ formArrayExample }}</pre>
        </div>
      </section>

      <!-- Signals with Forms -->
      <section class="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-4">Forms with Signals (Angular 21+)</h2>
        <p class="text-gray-600 leading-relaxed mb-4">
          Angular 21 introduces model() signal for two-way binding, providing a modern alternative
          to ngModel with full signal reactivity.
        </p>
        <div class="bg-gray-900 rounded-lg p-6 font-mono text-sm text-green-400 overflow-x-auto">
          <pre>{{ signalsFormExample }}</pre>
        </div>
      </section>

      <!-- Best Practices -->
      <section class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-6">Best Practices</h2>
        <div class="space-y-3">
          @for (practice of bestPractices; track practice) {
            <div class="flex gap-3 bg-white rounded-xl p-4 shadow-sm">
              <div class="flex-shrink-0 text-green-600">✓</div>
              <p class="text-gray-600 text-sm">{{ practice }}</p>
            </div>
          }
        </div>
      </section>
    </div>
  `
})
export class FormsPage {
  templateDrivenExample = `import { Component } from '@angular/core';
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

  reactiveFormExample = `import { Component } from '@angular/core';
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

  validators = [
    { name: 'Validators.required', description: 'Field must have a non-empty value.' },
    { name: 'Validators.minLength(n)', description: 'String must be at least n characters long.' },
    { name: 'Validators.maxLength(n)', description: 'String must be at most n characters long.' },
    { name: 'Validators.email', description: 'Value must be a valid email format.' },
    { name: 'Validators.pattern(regex)', description: 'Value must match the given regular expression.' },
    { name: 'Validators.min(n)', description: 'Numeric value must be at least n.' },
    { name: 'Validators.max(n)', description: 'Numeric value must be at most n.' },
    { name: 'Validators.requiredTrue', description: 'Boolean field must be true (e.g., terms acceptance).' }
  ];

  customValidatorExample = `import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

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

  formArrayExample = `import { Component } from '@angular/core';
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

  signalsFormExample = `import { Component, model } from '@angular/core';

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

  bestPractices = [
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
}
