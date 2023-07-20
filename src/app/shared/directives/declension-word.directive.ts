import { Directive, ElementRef, inject, Input, OnChanges, Renderer2 } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Directive({ selector: '[appDeclensionRu]'})
export class DeclensionRuDirective implements OnChanges {
  @Input({ required: true })
  wordVariants: [string, string, string];

  @Input({ required: true })
  value: number;

  @Input()
  withValue = false;

  private readonly elementRef = inject(ElementRef);
  private readonly decimalPipe = inject(DecimalPipe);
  private readonly renderer = inject(Renderer2);

  ngOnChanges() {
    if (this.elementRef) {
      const [firstVariant, secondVariant, thirdVariant] = this.wordVariants;

      const text =
        this.value % 10 === 1 && this.value % 100 !== 11
          ? this.getResult(firstVariant)
          : this.value % 10 >= 2 &&
          this.value % 10 <= 4 &&
          (this.value % 100 < 10 || this.value % 100 >= 20)
            ? this.getResult(secondVariant)
            : this.getResult(thirdVariant);

      const spanText = this.renderer.createText(text);
      this.renderer.appendChild(this.elementRef.nativeElement, spanText);
    }
  }

  private getResult(variant: string): string {
    return this.withValue
      ? `${this.decimalPipe.transform(this.value)} ${variant}`
      : variant;
  }
}