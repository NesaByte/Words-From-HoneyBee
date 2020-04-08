import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav.component';
import { NotFoundComponent } from './not-found.component';
import { HomeComponent } from './home.component';
import { AboutComponent } from './about.component';
import { ContactComponent } from './contact.component';

/*        TERM          */
import { TermListComponent } from './term-list.component';
import { TermDetailComponent } from './term-detail.component';
import { TermCreateComponent } from './term-create.component';
import { TermDefinitionComponent } from './term-definition.component';

import { OtherCreateComponent } from './other-create.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    NotFoundComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,

    /*        TERM          */
    TermListComponent,
    TermDetailComponent,
    TermCreateComponent,
    TermDefinitionComponent,

    OtherCreateComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
