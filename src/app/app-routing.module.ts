import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "./home.component";
import { AboutComponent } from './about.component';
import { ContactComponent } from "./contact.component";

  /*        TERM          */
  import { TermListComponent } from './term-list.component';
  import { TermDetailComponent } from './term-detail.component';
  import { TermCreateComponent } from './term-create.component';
  import { TermDefinitionComponent } from './term-definition.component';

  /*        OTHER     */     
  import { OtherCreateComponent } from './other-create.component';
  

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
 /*        TERM          */
    { path: 'terms', component: TermListComponent } , 
    { path: 'terms/detail/:id', component: TermDetailComponent },
    { path: 'terms/create', component: TermCreateComponent },
  { path: 'terms/definition/:id', component: TermDefinitionComponent },

/*        OTHER          */
{ path: 'others/create', component: OtherCreateComponent },


  // more routes are added here
 // { path: '', redirectTo: '/home', pathMatch: 'full' },

   

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
