import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardDirectiveDirective } from './card-directive.directive';
import {borderDirective1} from './border.directive'
import {hideCard} from './hide.directive'
import { showCard } from './show.directive';

@NgModule({
  declarations: [
    AppComponent,
    CardDirectiveDirective,
    borderDirective1,
    hideCard,
    showCard
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
