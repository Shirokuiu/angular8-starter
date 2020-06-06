import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared';
import { CoreModule } from './core';

@NgModule({
  imports: [BrowserModule, AppRoutingModule, CoreModule, SharedModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
