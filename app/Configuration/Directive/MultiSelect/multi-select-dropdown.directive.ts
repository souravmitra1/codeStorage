import { Directive, ElementRef, HostListener, Input, Renderer  } from '@angular/core';
import { NgModel } from '@angular/forms';

@Directive({
  selector: `[multi-select-dropdown]`,
  providers: [NgModel]
})
export class MultiSelectDropdownDirective {  
  @Input('multi-select-dropdown') highlightColor: string=`Hello Tag(s)`;
  constructor(element: ElementRef, renderer: Renderer,private ngModel: NgModel) {
    var d= this.highlightColor;
 }
  ngOnInit() {
    let that = this;
    this.fnOnModelValueChange(that);
  }

  private fnOnModelValueChange(that: this) {
    that.ngModel.valueChanges.subscribe(function (value) {
      console.log(value);
    });
  }
}