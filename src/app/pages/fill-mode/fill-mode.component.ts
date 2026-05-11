import { ChangeDetectionStrategy, Component } from '@angular/core';

import { getLabSection } from '../../data/lab-section-lookup';
import { CodeBlockComponent } from '../../shared/code-block/code-block.component';
import { DemoShellComponent } from '../../shared/demo-shell/demo-shell.component';

@Component({
  selector: 'app-fill-mode',
  imports: [CodeBlockComponent, DemoShellComponent],
  templateUrl: './fill-mode.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FillModeComponent {
  protected readonly section = getLabSection('/fill-mode');
  protected readonly startingPoint = `<div class="fill-frame cover-frame">
  <!-- TODO: Add a fill-mode image and try object-fit: cover. -->
</div>

<div class="fill-frame contain-frame">
  <!-- TODO: Add a fill-mode image and try object-fit: contain. -->
</div>`;
}
