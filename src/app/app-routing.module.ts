import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ContributePageComponent } from './contribute-page/contribute-page.component';
import { DestinationComponent } from './destination/destination.component';



const routes: Routes = [
  {path:'',component:ContributePageComponent,pathMatch:'full'},
  {path:"contribute",component:ContributePageComponent},
  {path:"destination",component:DestinationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
