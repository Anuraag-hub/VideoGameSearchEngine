import { Component, OnInit, OnDestroy } from '@angular/core';
import { Game, APIResponse } from 'src/app/models';
import { HttpService } from 'src/app/services/http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  public sort: string;
  public games: Array<Game>
  private routeSub: Subscription
  private gameSub: Subscription

  constructor(
    private http: HttpService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe((params: Params) => {
      if(params['game-search']){
        this.searchGames('sort', params['game-search']);
      }
      else{
        this.searchGames('sort');
      }
    })
  }

  searchGames(sort: string, search?: string): void{
    this.gameSub = this.http.getGameList(sort, search)
    .subscribe((gameList: APIResponse<Game>) => {
      this.games = gameList.results;
      console.log(gameList);
    })
  }

  openGameDetails(id: string): void{
    this.router.navigate(['details', id]);
  }

  ngOnDestroy(): void{
    if(this.gameSub){
      this.gameSub.unsubscribe();
    }
    if(this.routeSub){
      this.routeSub.unsubscribe();
    }
  }

}
