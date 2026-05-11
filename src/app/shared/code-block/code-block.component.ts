import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-code-block',
  templateUrl: './code-block.component.html',
  styleUrl: './code-block.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CodeBlockComponent {
  readonly label = input.required<string>();
  readonly code = input.required<string>();
}
