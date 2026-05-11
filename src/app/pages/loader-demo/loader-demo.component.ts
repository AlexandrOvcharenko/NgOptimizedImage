import { ChangeDetectionStrategy, Component } from '@angular/core';

import { getLabSection } from '../../data/lab-section-lookup';
import { CodeBlockComponent } from '../../shared/code-block/code-block.component';
import { DemoShellComponent } from '../../shared/demo-shell/demo-shell.component';

@Component({
  selector: 'app-loader-demo',
  imports: [CodeBlockComponent, DemoShellComponent],
  templateUrl: './loader-demo.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoaderDemoComponent {
  protected readonly section = getLabSection('/loader-demo');
  protected readonly checklist = [
    'Choose exactly one built-in loader first.',
    'Keep provider changes in a clearly named config file.',
    'Verify generated URLs in the Network panel.',
  ];
  protected readonly configSlot = `// src/app/image-loaders/image-loader.config.ts
// TODO: Add one built-in loader provider here when you are ready.`;
}
