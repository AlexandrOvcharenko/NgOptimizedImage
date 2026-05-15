import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

import { getLabSection } from '../../data/lab-section-lookup';
import { CodeBlockComponent } from '../../shared/code-block/code-block.component';
import { DemoShellComponent } from '../../shared/demo-shell/demo-shell.component';

@Component({
  selector: 'app-dimensions',
  imports: [CodeBlockComponent, DemoShellComponent, NgOptimizedImage],
  templateUrl: './dimensions.component.html',
})
export class DimensionsComponent {
  protected readonly section = getLabSection('/dimensions');
  protected readonly checklist = [
    'Inspect both rendered images in the Elements panel.',
    'Compare the width and height attributes with the natural image size.',
    'Open Console and find the warning produced by the intentional mismatch.',
  ];
  protected readonly exampleCode = `<div class="comparison-grid">
  <article class="comparison-cell">
    <h3>Correct dimensions</h3>
    <img ngSrc="/coffee.jpg" width="4889" height="3728" alt="Coffee beans" />
  </article>

  <article class="comparison-cell">
    <h3>Intentional mismatch</h3>
    <img ngSrc="/coffee.jpg" width="4889" height="1200" alt="Coffee beans" />
  </article>
</div>`;
}
