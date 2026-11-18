import { Component } from '@angular/core';
import {
  componentExample, standaloneExample, inputExample, outputExample,
  lifecycleHooks, templateSyntax, signalsExample, signalTypes
} from './components-page.data';

@Component({
  selector: 'app-components-page',
  templateUrl: './components-page.html',
  styleUrl: './components-page.css'
})
export class ComponentsPage {
  componentExample = componentExample;
  standaloneExample = standaloneExample;
  inputExample = inputExample;
  outputExample = outputExample;
  lifecycleHooks = lifecycleHooks;
  templateSyntax = templateSyntax;
  signalsExample = signalsExample;
  signalTypes = signalTypes;
}
