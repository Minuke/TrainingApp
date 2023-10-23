import { Component } from '@angular/core';
import { Company } from 'src/app/interfaces/company.interface';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-list-companies',
  templateUrl: './list-companies.component.html',
  styleUrls: ['./list-companies.component.scss']
})
export class ListCompaniesComponent {
  public companies:Company[] = [];
  public isLoading:boolean = true;
  constructor(private moviesService:MoviesService) {}

  ngOnInit(): void {
    this.moviesService.getCompanies().subscribe((data) => {
      this.companies = data;
      this.isLoading = false;
    });
  }
}
