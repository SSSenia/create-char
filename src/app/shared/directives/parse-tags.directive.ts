import { Directive, ElementRef, Input, OnChanges, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { IStringWithTag } from '../interfaces/account';

@Directive({
  selector: '[appParseTags]'
})
export class ParseTagsDirective implements OnInit, OnChanges, OnDestroy {

  subscribtionToLangChange!: Subscription;

  @Input('appParseTags') array: IStringWithTag[][] = [];

  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef,
    private translateService: TranslateService
  ) { }

  clearElement() {
    const paragraphs = this.elementRef.nativeElement.children;
    for (var i = paragraphs.length; i--;) {
      paragraphs[i].remove();
    }
  }

  parseElement() {
    this.clearElement();

    for (const row of this.array) {
      const header = this.renderer.createElement('p');
      for (const column of row) {
        let content;

        if (column.strong) {
          content = this.renderer.createElement('strong')
          const text = this.renderer.createText(this.translateService.instant("NOTIFICATION." + column.text));
          this.renderer.appendChild(content, text);
        }
        else content = this.renderer.createText(this.translateService.instant("NOTIFICATION." + column.text));

        this.renderer.appendChild(header, content);
      }
      this.renderer.appendChild(this.elementRef.nativeElement, header);
    }
  }

  ngOnInit(): void {
    this.subscribtionToLangChange = this.translateService.onLangChange
      .subscribe(() => this.parseElement())
  }

  ngOnChanges(): void {
    this.parseElement();
  }

  ngOnDestroy(): void {
    this.subscribtionToLangChange.unsubscribe();
  }
}
