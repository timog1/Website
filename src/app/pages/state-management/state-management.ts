import { Component } from '@angular/core';
import { signalConcepts, statePatterns, ngrxConcepts, comparisonTable } from './state-management.data';

@Component({
  selector: 'app-state-management',
  standalone: true,
  templateUrl: './state-management.html',
  styleUrl: './state-management.css'
})
export class StateManagementPage {
  signalConcepts = signalConcepts;
  statePatterns = statePatterns;
  ngrxConcepts = ngrxConcepts;
  comparisonTable = comparisonTable;
}
