import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TeamsComponent } from './teams/teams.component';
import { PlayersComponent } from './players/players.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { BackendComponent } from './backend/backend.component';
import { AdminComponent } from './backend/child-routes/admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamsComponent,
    PlayersComponent,
    LoginComponent,
    PagenotfoundComponent,
    BackendComponent,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
