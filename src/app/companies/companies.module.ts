import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { CardCompanyComponent } from "./components/card-company/card-company.component";
import { ListCompaniesComponent } from "./components/list-companies/list-companies.component";
import { CompaniesRoutingModule } from "./companies-routing.module";
import { StarRatingModule } from "angular-star-rating";
import { PrimeNgModule } from "../prime-ng/prime-ng.module";


@NgModule({
  declarations: [CardCompanyComponent, ListCompaniesComponent],
  exports: [CardCompanyComponent, ListCompaniesComponent,],
  imports: [CommonModule, HttpClientModule, CompaniesRoutingModule, StarRatingModule, PrimeNgModule]
})
export class CompaniesModule { }
