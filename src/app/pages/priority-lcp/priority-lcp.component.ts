import { ChangeDetectionStrategy, Component } from '@angular/core';

import { getLabSection } from '../../data/lab-section-lookup';
import { CodeBlockComponent } from '../../shared/code-block/code-block.component';
import { DemoShellComponent } from '../../shared/demo-shell/demo-shell.component';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-priority-lcp',
  imports: [CodeBlockComponent, DemoShellComponent, NgOptimizedImage],
  templateUrl: './priority-lcp.component.html',
})
export class PriorityLcpComponent {
  protected readonly section = getLabSection('/priority-lcp');
  protected readonly checklist = [
    'Add one likely LCP image in the hero slot.',
    'Inspect fetch priority, loading behavior, and console warnings.',
    'Use Chrome Performance panel to confirm the LCP element.',
  ];
  protected readonly startingPoint = `<section class="hero-stage">
  <div>
    <p class="demo-kicker">Priority experiment</p>
    <h2>Hero image slot</h2>
  </div>

  <!-- TODO: Add your priority/LCP image example here. -->
</section>`;
}
