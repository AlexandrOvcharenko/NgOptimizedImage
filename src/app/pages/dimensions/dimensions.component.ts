import { ChangeDetectionStrategy, Component } from '@angular/core';

import { getLabSection } from '../../data/lab-section-lookup';
import { CodeBlockComponent } from '../../shared/code-block/code-block.component';
import { DemoShellComponent } from '../../shared/demo-shell/demo-shell.component';

@Component({
  selector: 'app-dimensions',
  imports: [CodeBlockComponent, DemoShellComponent],
  templateUrl: './dimensions.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DimensionsComponent {
  protected readonly section = getLabSection('/dimensions');
  protected readonly startingPoint = `<div class="comparison-grid">
  <article class="comparison-cell">
    <h3>Correct dimensions</h3>
    <!-- TODO: Add a correct dimensions example. -->
  </article>

  <article class="comparison-cell">
    <h3>Intentional mismatch</h3>
    <!-- TODO: Add a controlled warning example. -->
  </article>
</div>`;
}
