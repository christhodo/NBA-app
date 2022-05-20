import { Component, OnInit } from '@angular/core';
import { Player } from '../shared/player';
import { PlayersService } from '../shared/services/players.service';

const emptyPlayer: Player = {
  id: null,
  name: '',
  number: '',
  team: '',
  position: '',
};

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss'],
})
export class PlayersComponent implements OnInit {
  players = [];
  selectedPlayer = emptyPlayer;
  originalName = '';

  constructor(private playersService: PlayersService) {}

  ngOnInit(): void {
    this.fetchPlayers();
  }

  selectPlayer(player) {
    this.selectedPlayer = player;
  }

  fetchPlayers() {
    this.playersService
      .all()
      .subscribe((result: any) => (this.players = result));
  }

  savePlayer(player) {
    if (player.id) {
      this.updatePlayer(player);
    } else {
      this.createPlayer(player);
    }
  }

  createPlayer(player) {
    this.playersService
      .create(player)
      .subscribe((result) => this.fetchPlayers());
  }

  updatePlayer(player) {
    this.playersService
      .update(player)
      .subscribe((result) => this.fetchPlayers());
  }

  deletePlayer(playerId) {
    console.log('Delete Player', playerId);
  }

  reset() {
    this.selectPlayer({ ...emptyPlayer });
  }
}
