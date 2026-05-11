import { ChangeDetectionStrategy, Component } from '@angular/core';

import { getLabSection } from '../../data/lab-section-lookup';
import { CodeBlockComponent } from '../../shared/code-block/code-block.component';
import { DemoShellComponent } from '../../shared/demo-shell/demo-shell.component';

@Component({
  selector: 'app-background-migration',
  imports: [CodeBlockComponent, DemoShellComponent],
  templateUrl: './background-migration.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BackgroundMigrationComponent {
  protected readonly section = getLabSection('/background-migration');
  protected readonly startingPoint = `<div class="comparison-grid">
  <article class="background-demo old-background">
    <h3>CSS background slot</h3>
    <!-- TODO: Add a temporary CSS background-image during the exercise. -->
  </article>

  <article class="background-demo migrated-background">
    <h3>Image element slot</h3>
    <!-- TODO: Add the migrated image element here. -->
  </article>
</div>`;
}
