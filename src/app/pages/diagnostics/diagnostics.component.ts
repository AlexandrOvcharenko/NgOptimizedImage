import { ChangeDetectionStrategy, Component } from '@angular/core';

import { getLabSection } from '../../data/lab-section-lookup';
import { CodeBlockComponent } from '../../shared/code-block/code-block.component';
import { DemoShellComponent } from '../../shared/demo-shell/demo-shell.component';

@Component({
  selector: 'app-diagnostics',
  imports: [CodeBlockComponent, DemoShellComponent],
  templateUrl: './diagnostics.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DiagnosticsComponent {
  protected readonly section = getLabSection('/diagnostics');
  protected readonly checklist = [
    'Create one warning case at a time.',
    'Copy the warning text into your notes before fixing it.',
    'Confirm the warning is gone after the fix.',
  ];
  protected readonly startingPoint = `<div class="diagnostic-stack">
  <article class="diagnostic-case">
    <h3>Case 1</h3>
    <!-- TODO: Add one intentionally broken example. -->
  </article>

  <article class="diagnostic-case">
    <h3>Case 2</h3>
    <!-- TODO: Add the fixed version for comparison. -->
  </article>
</div>`;
}
