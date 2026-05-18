import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { getLabSection } from '../../data/lab-section-lookup';
import { customLoaderProviders } from '../../image-loaders/custom-image-loader';
import { DemoShellComponent } from '../../shared/demo-shell/demo-shell.component';

@Component({
  selector: 'app-custom-loader',
  imports: [DemoShellComponent, NgOptimizedImage],
  templateUrl: './custom-loader.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: customLoaderProviders,
})
export class CustomLoaderComponent {
  protected readonly section = getLabSection('/custom-loader');
  protected readonly monoParams = { mono: true };
  protected readonly checklist = [
    'Keep `customImageLoader` in `custom-image-loader.ts`.',
    'Scope `IMAGE_LOADER` with `providers` on this component.',
    'Inspect `src` / `srcset`: grayscale column should include `sat=-100`.',
  ];
}
