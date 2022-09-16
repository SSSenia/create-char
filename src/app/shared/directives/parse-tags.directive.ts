import { Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IStringWithTag } from '../interfaces/account';

@Directive({
  selector: '[appParseTags]'
})
export class ParseTagsDirective implements OnChanges {

  @Input('appParseTags') array: IStringWithTag[][] = [];

  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef,
    private translateService: TranslateService
  ) { }

  parseData() {
    const paragraphs = this.elementRef.nativeElement.children;
    for (var i = paragraphs.length; i--; ){
      paragraphs[i].remove()
  }

    for (const row of this.array) {
      const header = this.renderer.createElement('p')
      for (const column of row) {
        let content;

        if (column.strong) {
          content = this.renderer.createElement('strong')
          const text = this.renderer.createText(this.translateService.instant("NOTIFICATION."+column.text))
          this.renderer.appendChild(content, text)
        }
        else content = this.renderer.createText(this.translateService.instant("NOTIFICATION."+column.text))

        this.renderer.appendChild(header, content)
      }
      this.renderer.appendChild(this.elementRef.nativeElement, header);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.parseData();
  }

}
