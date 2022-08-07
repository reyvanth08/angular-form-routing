import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './compoenents/first/first.component';
import { SecondComponent } from './compoenents/second/second.component';
import { PageNotFoundComponent } from './compoenents/page-not-found/page-not-found.component';
import { HomeComponentComponent } from './compoenents/home-component/home-component.component';
import { Child1ComponentComponent } from './compoenents/child1-component/child1-component.component';
import { Child2ComponentComponent } from './compoenents/child2-component/child2-component.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    PageNotFoundComponent,
    HomeComponentComponent,
    Child1ComponentComponent,
    Child2ComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
