import { ChangeDetectionStrategy, Component } from '@angular/core';

import { getLabSection } from '../../data/lab-section-lookup';
import { CodeBlockComponent } from '../../shared/code-block/code-block.component';
import { DemoShellComponent } from '../../shared/demo-shell/demo-shell.component';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-basic-ng-src',
  imports: [CodeBlockComponent, DemoShellComponent, NgOptimizedImage],
  templateUrl: './basic-ng-src.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicNgSrcComponent {
  protected readonly section = getLabSection('/basic-ng-src');
  protected readonly startingPoint = `<div class="image-stage">
  <!-- TODO: Add the minimal optimized image example here. -->
</div>`;
}
