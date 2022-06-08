import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './shared/in-memory-data.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes/heroes.component';
import { HeroDetailsComponent } from './heroes/hero-details/hero-details.component';
import { MessagesComponent } from './shared/messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroSearchComponent } from './heroes/hero-search/hero-search.component';
import { QuestsComponent } from './quests/quests/quests.component';
import { QuestDetailsComponent } from './quests/quest-details/quest-details.component';
import { HeroesListComponent } from './heroes/heroes-list/heroes-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailsComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent,
    QuestsComponent,
    QuestDetailsComponent,
    HeroesListComponent
  ],
  imports: [
    MatAutocompleteModule,
    MatFormFieldModule,
    BrowserModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),

    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
