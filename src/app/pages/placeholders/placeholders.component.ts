import { ChangeDetectionStrategy, Component } from '@angular/core';

import { getLabSection } from '../../data/lab-section-lookup';
import { CodeBlockComponent } from '../../shared/code-block/code-block.component';
import { DemoShellComponent } from '../../shared/demo-shell/demo-shell.component';

@Component({
  selector: 'app-placeholders',
  imports: [CodeBlockComponent, DemoShellComponent],
  templateUrl: './placeholders.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlaceholdersComponent {
  protected readonly section = getLabSection('/placeholders');
  protected readonly startingPoint = `<div class="comparison-grid three-up">
  <article class="comparison-cell">
    <h3>Generated placeholder</h3>
    <!-- TODO: Add generated placeholder example. -->
  </article>

  <article class="comparison-cell">
    <h3>Data URL placeholder</h3>
    <!-- TODO: Add small data URL placeholder example. -->
  </article>

  <article class="comparison-cell">
    <h3>No blur</h3>
    <!-- TODO: Add non-blurred placeholder example. -->
  </article>
</div>`;
}
