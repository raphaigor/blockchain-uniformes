import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SiteComponent } from './site/site.component';
import { LayoutComponent } from './layout/layout.component';
import { LoteComponent } from './uniformes/lote/lote.component';
import { UniformeComponent } from './uniformes/uniforme/uniforme.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    SiteComponent,
    LoteComponent,
    UniformeComponent
  ],
  imports: [
    AppRoutingModule,
    FormsModule,
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    SimpleNotificationsModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
