import { ChangeDetectionStrategy, Component } from '@angular/core';

import { getLabSection } from '../../data/lab-section-lookup';
import { CodeBlockComponent } from '../../shared/code-block/code-block.component';
import { DemoShellComponent } from '../../shared/demo-shell/demo-shell.component';

@Component({
  selector: 'app-responsive-images',
  imports: [CodeBlockComponent, DemoShellComponent],
  templateUrl: './responsive-images.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResponsiveImagesComponent {
  protected readonly section = getLabSection('/responsive-images');
  protected readonly checklist = [
    'Add one fixed-size candidate and one responsive candidate.',
    'Resize the viewport and observe selected image candidates.',
    'Check whether your sizes value matches the CSS layout.',
  ];
  protected readonly startingPoint = `<div class="responsive-layout">
  <main class="wide-column">
    <!-- TODO: Add a responsive image for the wide column. -->
  </main>

  <aside class="narrow-column">
    <!-- TODO: Add a smaller responsive image for the sidebar. -->
  </aside>
</div>`;
}
