import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

import { getLabSection } from '../../data/lab-section-lookup';
import { DemoShellComponent } from '../../shared/demo-shell/demo-shell.component';

@Component({
  selector: 'app-background-migration',
  imports: [DemoShellComponent, NgOptimizedImage],
  templateUrl: './background-migration.component.html',
  styleUrl: './background-migration.component.css',
})
export class BackgroundMigrationComponent {
  protected readonly section = getLabSection('/background-migration');
  protected readonly checklist = [
    'Compare cover cropping between CSS background and NgOptimizedImage fill.',
    'Inspect Network: note how the CSS panel requests one URL vs responsive srcset.',
    'Decide alt text if the image is content vs decorative.',
  ];
}
