import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { ContributePageComponent } from './contribute-page/contribute-page.component';
import { DestinationComponent } from './destination/destination.component';
import { InscriptionComponent } from './inscription/inscription.component';


const routes: Routes = [
  {path:'',component:ContributePageComponent,pathMatch:'full'},
  {path:"contribute",component:ContributePageComponent},
  {path:"destination",component:DestinationComponent},
  {path:'blog',component:BlogComponent},
  {path:'inscription',component:InscriptionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
