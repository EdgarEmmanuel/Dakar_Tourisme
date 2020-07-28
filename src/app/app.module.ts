import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContributePageComponent } from './contribute-page/contribute-page.component';
import { DestinationComponent } from './destination/destination.component';
import { BlogComponent } from './blog/blog.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { BlogService } from './blog.service';


@NgModule({
  declarations: [
    AppComponent,
    ContributePageComponent,
    DestinationComponent,
    BlogComponent,
    InscriptionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    BlogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
