import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContributePageComponent } from './contribute-page/contribute-page.component';
import { DestinationComponent } from './destination/destination.component';
import { BlogComponent } from './blog/blog.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { BlogService } from './blog.service';
import { ReservationListComponent } from './reservation-list/reservation-list.component';



@NgModule({
  declarations: [
    AppComponent,
    ContributePageComponent,
    DestinationComponent,
    BlogComponent,
    InscriptionComponent,
    ReservationListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    BlogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
