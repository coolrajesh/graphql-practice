import { Component, OnInit } from '@angular/core';
import { CountriesService} from '../countries.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  displayedColumns: string[] = [
    'name',
    'capital',
    'currency',
    'emoji',
    'phone',
    'continent',
  ];

  dataSource$ = this.countriesService.getCountries();

  constructor(private countriesService: CountriesService) { }

  ngOnInit(): void {
    console.log(JSON.stringify(this.dataSource$))
  }

}
