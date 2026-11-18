import { Component } from '@angular/core';
import {
  benefits, ssrSteps, hydrationStrategies,
  comparisonRows, setupSteps, bestPractices, pitfalls
} from './hydration.data';

@Component({
  selector: 'app-hydration',
  templateUrl: './hydration.html',
  styleUrl: './hydration.css'
})
export class HydrationPage {
  benefits = benefits;
  ssrSteps = ssrSteps;
  hydrationStrategies = hydrationStrategies;
  comparisonRows = comparisonRows;
  setupSteps = setupSteps;
  bestPractices = bestPractices;
  pitfalls = pitfalls;
}
