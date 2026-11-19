import { Component } from '@angular/core';
import { testTypes, testingConcepts, testingTips } from './testing.data';

@Component({
  selector: 'app-testing',
  standalone: true,
  templateUrl: './testing.html',
  styleUrl: './testing.css'
})
export class TestingPage {
  testTypes = testTypes;
  testingConcepts = testingConcepts;
  testingTips = testingTips;
}
