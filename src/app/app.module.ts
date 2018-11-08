import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import { ParqueaderoComponent } from './parqueadero/parqueadero.component';
import { ParqueaderoService } from './parqueadero/parqueadero.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ParqueaderoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    ParqueaderoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
