import { Component } from '@angular/core';
import {
  templateDrivenExample, reactiveFormExample, validators,
  customValidatorExample, formArrayExample, signalsFormExample, bestPractices
} from './forms.data';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.html',
  styleUrl: './forms.css'
})
export class FormsPage {
  templateDrivenExample = templateDrivenExample;
  reactiveFormExample = reactiveFormExample;
  validators = validators;
  customValidatorExample = customValidatorExample;
  formArrayExample = formArrayExample;
  signalsFormExample = signalsFormExample;
  bestPractices = bestPractices;
}
