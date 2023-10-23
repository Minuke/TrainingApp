import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";

import { CompaniesRoutingModule } from "./companies-routing.module";
import { StarRatingModule } from "angular-star-rating";
import { PrimeNgModule } from "src/app/prime-ng/prime-ng.module";
import { CardCompanyComponent } from "./card-company/card-company.component";
import { ListCompaniesComponent } from "./list-companies/list-companies.component";



@NgModule({
  declarations: [CardCompanyComponent, ListCompaniesComponent],
  exports: [CardCompanyComponent, ListCompaniesComponent,],
  imports: [CommonModule, HttpClientModule, CompaniesRoutingModule, StarRatingModule, PrimeNgModule]
})
export class CompaniesModule { }
