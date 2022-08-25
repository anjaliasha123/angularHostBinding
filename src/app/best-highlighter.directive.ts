import { Directive, HostBinding, HostListener } from "@angular/core";
@Directive({
  selector: "[best-highlight]"
})
export class BestHighlighterDirective {
  @HostBinding("style.background-color") backgroundColor: string =
    "transparent";

  @HostListener("mouseenter") mouseover(eventData: Event) {
    this.backgroundColor = "yellow";
  }
  @HostListener("mouseleave") mouseleave(eventData: Event) {
    this.backgroundColor = "transparent";
  }
}
