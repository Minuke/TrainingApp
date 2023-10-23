import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ListActorsComponent } from "./list-actors/list-actors.component";

const routes: Routes = [
  {
    path: '',
    component: ListActorsComponent
  }
]

@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class ActorsRoutingModule { }
