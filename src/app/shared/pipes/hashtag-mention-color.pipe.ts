import { inject, Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

const DEFAULT_COLOR = '#1ca1f3';

@Pipe({ name: 'hashtagMentionColor' })
export class HashtagMentionColorizerPipe implements PipeTransform {
  private readonly sanitizer = inject(DomSanitizer);

  transform(text: string, color?: string): SafeHtml {
    const words = text.split(/\s+/);
    const mentions = words.filter((el) => el[0] === '#' || el[0] === '@');

    words.forEach((word, index) => {
      mentions.forEach((mention) => {
        if (word === mention || word === mention + '.') {
          words.splice(
            index,
            1,
            `<a style="color: ${color ? color : DEFAULT_COLOR}; pointer-events: all"
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">${word}</a>`
          );
        }
      });
    });

    return this.sanitizer.bypassSecurityTrustHtml(words.join(' '));
  }
}