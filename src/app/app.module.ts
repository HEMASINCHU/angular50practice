import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExpandingcardComponent } from './expandingcard/expandingcard.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ExpandingcardComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
