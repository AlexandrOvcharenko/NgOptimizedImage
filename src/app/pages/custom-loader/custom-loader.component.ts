import { ChangeDetectionStrategy, Component } from '@angular/core';

import { getLabSection } from '../../data/lab-section-lookup';
import { CodeBlockComponent } from '../../shared/code-block/code-block.component';
import { DemoShellComponent } from '../../shared/demo-shell/demo-shell.component';

@Component({
  selector: 'app-custom-loader',
  imports: [CodeBlockComponent, DemoShellComponent],
  templateUrl: './custom-loader.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomLoaderComponent {
  protected readonly section = getLabSection('/custom-loader');
  protected readonly checklist = [
    'Add the loader function in the dedicated custom loader file.',
    'Log or inspect the generated request URLs.',
    'Try one loaderParams-driven behavior after the basic loader works.',
  ];
  protected readonly loaderSlot = `// src/app/image-loaders/custom-image-loader.ts
// TODO: Add your custom loader function here.`;
}
