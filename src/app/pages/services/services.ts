import { Component } from '@angular/core';
import {
  basicService, useService, providerLevels,
  httpClientExample, injectExample, bestPractices
} from './services.data';

@Component({
  selector: 'app-services',
  templateUrl: './services.html',
  styleUrl: './services.css'
})
export class ServicesPage {
  basicService = basicService;
  useService = useService;
  providerLevels = providerLevels;
  httpClientExample = httpClientExample;
  injectExample = injectExample;
  bestPractices = bestPractices;
}
