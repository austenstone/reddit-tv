import { Pipe, PipeTransform, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'safeHtml'
})
export class SafeHtmlPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) { }

  transform(html) {
    html = this.toHTML(html);
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  toHTML(input): any {
    return new DOMParser().parseFromString(input, 'text/html').documentElement.textContent;
  }
}

@Pipe({
  name: 'safeUrl'
})
export class SafeUrlPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) { }

  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
