import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ListCompaniesComponent } from "./components/list-companies/list-companies.component";

const routes: Routes = [
  {
    path: '',
    component: ListCompaniesComponent
  }
]

@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class CompaniesRoutingModule { }
