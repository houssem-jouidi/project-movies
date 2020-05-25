import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./view/home/home.component";

import { MoveDetailsComponent } from "./view/move-details/move-details.component";
import { NotfoundComponent } from "./view/notfound/notfound.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "home/:t", component: HomeComponent },
  { path: "", redirectTo: "/home", pathMatch: "full" },

  { path: "moviedetails/:i/:p", component: MoveDetailsComponent },
  { path: "**", component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
