import { Component } from '@angular/core';
import { routingBasics, guardTypes, resolverExamples, routeConfigurations } from './routing.data';

@Component({
  selector: 'app-routing',
  standalone: true,
  templateUrl: './routing.html',
  styleUrl: './routing.css'
})
export class RoutingPage {
  routingBasics = routingBasics;
  guardTypes = guardTypes;
  resolverExamples = resolverExamples;
  routeConfigurations = routeConfigurations;
}
