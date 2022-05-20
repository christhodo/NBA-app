import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'NBA-app';
  links = [
    { path: '/login', icon: 'vpn_key', title: 'Login' },
    { path: '/players', icon: 'view_list', title: 'Players' },
    { path: '/teams', icon: 'view_list', title: 'Teams' },
  ];
  backend = [{ path: '/backend/child', icon: 'face', title: 'Backend' }];
}
