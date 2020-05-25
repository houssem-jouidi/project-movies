import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./view/home/home.component";

import { MoveDetailsComponent } from "./view/move-details/move-details.component";
import { NavbarComponent } from "./view/navbar/navbar.component";
import { FooterComponent } from "./view/footer/footer.component";
import { NotfoundComponent } from "./view/notfound/notfound.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { SlicePipe } from "./pips/slice.pipe";
import { SearchPipe } from "./pips/search.pipe";
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,

    MoveDetailsComponent,
    NavbarComponent,
    FooterComponent,
    NotfoundComponent,
    SlicePipe,
    SearchPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
