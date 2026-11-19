import { Component } from '@angular/core';
import { builtInPipes, customPipeConcepts, pipeTips } from './pipes.data';

@Component({
  selector: 'app-pipes',
  standalone: true,
  templateUrl: './pipes.html',
  styleUrl: './pipes.css'
})
export class PipesPage {
  builtInPipes = builtInPipes;
  customPipeConcepts = customPipeConcepts;
  pipeTips = pipeTips;
}
