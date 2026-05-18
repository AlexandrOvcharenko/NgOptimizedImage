import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

import { getLabSection } from '../../data/lab-section-lookup';
import { DemoShellComponent } from '../../shared/demo-shell/demo-shell.component';

@Component({
  selector: 'app-loader-demo',
  imports: [DemoShellComponent, NgOptimizedImage],
  templateUrl: './loader-demo.component.html',
})
export class LoaderDemoComponent {
  protected readonly section = getLabSection('/loader-demo');
  protected readonly checklist = [
    'Choose exactly one built-in loader first.',
    'Keep provider changes in a clearly named config file.',
    'Verify generated URLs in the Network panel.',
  ];
}
