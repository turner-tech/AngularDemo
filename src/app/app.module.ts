import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SecondComponent } from './second/second.component';

import {RouterModule, Routes} from '@angular/router';

const routeList: Routes = [{path: '', component: SecondComponent },
  {path: 'home', component: AppComponent },
  {path: 'heroes', component: SecondComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    SecondComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routeList)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
