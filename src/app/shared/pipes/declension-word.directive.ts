import { Directive, ElementRef, inject, Input, OnChanges } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Directive({ selector: '[appDeclensionRu]'})
export class DeclensionRuDirective implements OnChanges {
  @Input()
  wordVariants: string[] = [];

  @Input()
  value: number;

  @Input()
  withValue = false;

  private readonly el = inject(ElementRef);
  private readonly decimalPipe = inject(DecimalPipe);

  ngOnChanges() {
    if (this.el) {
      this.el.nativeElement.innerHTML =
        this.value % 10 === 1 && this.value % 100 !== 11
          ? this.getResult(this.wordVariants[0])
          : this.value % 10 >= 2 &&
          this.value % 10 <= 4 &&
          (this.value % 100 < 10 || this.value % 100 >= 20)
            ? this.getResult(this.wordVariants[1])
            : this.getResult(this.wordVariants[2]);
    }
  }

  private getResult(variant: string): string {
    return this.withValue
      ? `${this.decimalPipe.transform(this.value)} ${variant}`
      : variant;
  }
}