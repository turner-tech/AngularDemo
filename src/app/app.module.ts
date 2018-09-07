import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SecondComponent } from './second/second.component';

import {RouterModule, Routes} from '@angular/router';
import { AboutComponent } from './about/about.component';

const routeList: Routes = [{path: '', component: SecondComponent },
  {path: 'home', component: AppComponent },
  {path: 'heroes', component: SecondComponent},
  {path: 'about', component: AboutComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    SecondComponent,
    AboutComponent
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
