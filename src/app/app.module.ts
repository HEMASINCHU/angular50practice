import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExpandingcardComponent } from './expandingcard/expandingcard.component';
import { ProgresstepComponent } from './progresstep/progresstep.component';
import { HiddensearchComponent } from './hiddensearch/hiddensearch.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ExpandingcardComponent,
    ProgresstepComponent,
    HiddensearchComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
