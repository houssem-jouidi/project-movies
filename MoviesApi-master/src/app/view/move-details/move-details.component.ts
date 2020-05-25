import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { MoviesService } from "src/app/services/movies.service";
import { Title } from "@angular/platform-browser";

@Component({
  selector: "app-move-details",
  templateUrl: "./move-details.component.html",
  styleUrls: ["./move-details.component.scss"],
})
export class MoveDetailsComponent implements OnInit {
  page;
  index;
  container;
  prefex: string = "https://image.tmdb.org/t/p/w500";
  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _Movies: MoviesService,
    private _Title: Title
  ) {
    _Title.setTitle("Details");
  }

  ngOnInit() {
    this._ActivatedRoute.params.subscribe((data) => {
      this.page = data["p"];
      this.index = data["i"];
    });
    this._Movies.getMovies(this.page).subscribe((data) => {
      for (let i = 0; i < data.results.length; i++) {
        if (data.results[i].id == this.index) {
          this.container = data.results[i];
        }
      }
    });
  }
}
