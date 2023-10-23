import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";

import { ActorsRoutingModule } from "./actors-routing.module";
import { PipesModule } from "src/app/pipes/pipes.module";
import { PrimeNgModule } from "src/app/prime-ng/prime-ng.module";
import { CardActorComponent } from "./card-actor/card-actor.component";
import { ListActorsComponent } from "./list-actors/list-actors.component";
import { SharedModule } from "src/app/shared/shared.module";


@NgModule({
  declarations: [ListActorsComponent, CardActorComponent],
  exports: [ListActorsComponent, CardActorComponent],
  imports: [CommonModule, HttpClientModule, ActorsRoutingModule, SharedModule, PipesModule, PrimeNgModule]
})
export class ActorsModule { }
