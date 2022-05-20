import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss'],
})
export class TeamsComponent implements OnInit {
  Teams = [
    { name: 'Dallas Mavericks' },
    { name: 'Golden State Warriors' },
    { name: 'Miami Heat' },
    { name: 'Boston Celtics' },
    { name: 'Phoenix Suns' },
    { name: 'Utah Jazz' },
  ];

  selectedTeam = '';

  selectTeam(team) {
    this.selectedTeam = team;
  }

  constructor() {}

  ngOnInit(): void {}
}
