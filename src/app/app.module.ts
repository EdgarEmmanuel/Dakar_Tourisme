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
import { FormsModule } from '@angular/forms';
import { DestiModelService } from './desti-model.service';
import { DetReservationComponent } from './det-reservation/det-reservation.component';
import { OneReservComponent } from './one-reserv/one-reserv.component';



@NgModule({
  declarations: [
    AppComponent,
    ContributePageComponent,
    DestinationComponent,
    BlogComponent,
    InscriptionComponent,
    ReservationListComponent,
    DetReservationComponent,
    OneReservComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    BlogService,
    DestiModelService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
