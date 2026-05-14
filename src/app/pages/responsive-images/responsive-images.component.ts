import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { getLabSection } from '../../data/lab-section-lookup';
import { CodeBlockComponent } from '../../shared/code-block/code-block.component';
import { DemoShellComponent } from '../../shared/demo-shell/demo-shell.component';

@Component({
  selector: 'app-responsive-images',
  imports: [CodeBlockComponent, DemoShellComponent, NgOptimizedImage],
  templateUrl: './responsive-images.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResponsiveImagesComponent {
  protected readonly section = getLabSection('/responsive-images');
  protected readonly checklist = [
    'Inspect the generated sizes and srcset attributes in Elements.',
    'Resize the viewport and compare rendered image sizes.',
    'Check whether your sizes value matches the CSS layout.',
  ];
  protected readonly exampleCode = `<div class="responsive-layout">
  <main class="wide-column">
    <img
      ngSrc="/coffee.jpg"
      width="4889"
      height="3728"
      sizes="(max-width: 900px) 100vw, 60vw"
      alt="Coffee beans"
    />
  </main>

  <aside class="narrow-column">
    <img
      ngSrc="/coffee.jpg"
      width="4889"
      height="3728"
      sizes="(max-width: 900px) 100vw, 30vw"
      alt="Coffee beans"
    />
  </aside>
</div>`;
}
