import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HighlighterDirective } from "./highlighter.directive";
import { BetterHighlightDirective } from "./better-highlight.directive";
import { BestHighlighterDirective } from "./best-highlighter.directive";

@NgModule({
  declarations: [
    AppComponent,
    HighlighterDirective,
    BetterHighlightDirective,
    BestHighlighterDirective
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
