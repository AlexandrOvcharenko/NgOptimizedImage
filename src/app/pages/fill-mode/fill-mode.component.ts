import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { getLabSection } from '../../data/lab-section-lookup';
import { CodeBlockComponent } from '../../shared/code-block/code-block.component';
import { DemoShellComponent } from '../../shared/demo-shell/demo-shell.component';

@Component({
  selector: 'app-fill-mode',
  imports: [CodeBlockComponent, DemoShellComponent, NgOptimizedImage],
  templateUrl: './fill-mode.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FillModeComponent {
  protected readonly section = getLabSection('/fill-mode');
  protected readonly checklist = [
    'Inspect the image elements and confirm they do not use width or height attributes.',
    'Confirm the parent frame has position: relative and a stable aspect ratio.',
    'Compare object-fit: cover with object-fit: contain.',
  ];
  protected readonly exampleCode = `<div class="fill-frame cover-frame">
  <img class="fill-image cover-image" ngSrc="/coffee.jpg" fill alt="Coffee beans" />
</div>

<div class="fill-frame contain-frame">
  <img class="fill-image contain-image" ngSrc="/coffee.jpg" fill alt="Coffee beans" />
</div>`;
}
