import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/interfaces/interfaces';
import { GameService } from 'src/app/services/game.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-goty',
  templateUrl: './goty.component.html',
  styleUrls: ['./goty.component.scss']
})
export class GotyComponent implements OnInit {

  public games:Game[] = [];

  constructor( private gameService:GameService ) {}
  ngOnInit(): void {
    this.gameService.getNominees().subscribe({
      next: (games) => {
        console.log(games);
        this.games = games; 
      }
    })
  }

  voteGame(game:Game) {
    this.gameService.voteGame(game.id).subscribe({
      next: (resp:any) => {
        if ( resp.ok ) {
          Swal.fire('Thanks!', resp.message, 'success');
        } else {
          Swal.fire('Oops!', resp.message, 'error');
        }
      }
    })
  }
  

}
