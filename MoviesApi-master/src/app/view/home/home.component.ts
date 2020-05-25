import { Component, OnInit } from "@angular/core";
import { MoviesService } from "src/app/services/movies.service";
import { Title } from "@angular/platform-browser";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  term: string;
  moviesContainer: any[] = [];
  page = 1;
  prefex: string = "https://image.tmdb.org/t/p/w500";
  constructor(private _Movies: MoviesService, private _Title: Title) {
    _Title.setTitle("Movies");
  }

  ngOnInit() {
    this._Movies.getMovies(this.page).subscribe((data) => {
      this.moviesContainer = data.results;
    });
  }
  pager(x) {
    this._Movies
      .getMovies(x)
      .subscribe((data) => (this.moviesContainer = data.results));
    window.scroll(0, 0);
  }
}
