import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { LabSection } from '../../data/lab-section.model';

@Component({
  selector: 'app-demo-shell',
  templateUrl: './demo-shell.component.html',
  styleUrl: './demo-shell.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoShellComponent {
  readonly section = input.required<LabSection>();
  readonly checklist = input<readonly string[]>([
    'Add the missing NgOptimizedImage-specific template code.',
    'Run the app in development mode and inspect the console.',
    'Use Elements, Network, and Performance panels to verify behavior.',
  ]);
}
