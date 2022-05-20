import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BackendComponent } from './backend/backend.component';
import { AdminComponent } from './backend/child-routes/admin/admin.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PlayersComponent } from './players/players.component';
import { TeamsComponent } from './teams/teams.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'players', component: PlayersComponent },
  { path: 'teams', component: TeamsComponent },
  {
    path: 'backend',
    component: BackendComponent,
    children: [{ path: 'child', component: AdminComponent }],
  },
  { path: '**', pathMatch: 'full', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
