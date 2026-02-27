import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { AppComponent } from './app.component';
import { Home } from './pages/home/home.component';
import { ExemploComponente } from './_components/exemplo-componente/exemplo-componente';

@NgModule({
  declarations: [
    AppComponent,
    Home,
    ExemploComponente
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
