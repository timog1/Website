import { Component } from '@angular/core';
import {
  directiveTypes, structuralDirectives, modernControlFlow,
  attributeDirectives, customAttributeExample, customStructuralExample, bestPractices
} from './directives.data';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.html',
  styleUrl: './directives.css'
})
export class DirectivesPage {
  directiveTypes = directiveTypes;
  structuralDirectives = structuralDirectives;
  modernControlFlow = modernControlFlow;
  attributeDirectives = attributeDirectives;
  customAttributeExample = customAttributeExample;
  customStructuralExample = customStructuralExample;
  bestPractices = bestPractices;
}
