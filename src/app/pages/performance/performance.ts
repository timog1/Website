import { Component } from '@angular/core';
import { performanceConcepts, optimizationTips, changeDetectionComparison } from './performance.data';

@Component({
  selector: 'app-performance',
  standalone: true,
  templateUrl: './performance.html',
  styleUrl: './performance.css'
})
export class PerformancePage {
  performanceConcepts = performanceConcepts;
  optimizationTips = optimizationTips;
  changeDetectionComparison = changeDetectionComparison;
}
