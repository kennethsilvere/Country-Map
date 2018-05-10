import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

import { AppComponent } from './app.component';
import { CountriesService } from './countries.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,  
    HttpModule,
    FormsModule,
    LeafletModule.forRoot()
  ],
  providers: [
    CountriesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
