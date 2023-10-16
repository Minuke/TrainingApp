import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { CardActorComponent } from "./components/card-actor/card-actor.component";
import { ListActorsComponent } from "./components/list-actors/list-actors.component";
import { ActorsRoutingModule } from "./actors-routing.module";
import { PipesModule } from "../pipes/pipes.module";
import { SharedModule } from "../shared/shared.module";
import { PrimeNgModule } from "../prime-ng/prime-ng.module";

@NgModule({
  declarations: [ListActorsComponent, CardActorComponent],
  exports: [ListActorsComponent, CardActorComponent],
  imports: [CommonModule, HttpClientModule, ActorsRoutingModule, SharedModule, PipesModule, PrimeNgModule]
})
export class ActorsModule { }
