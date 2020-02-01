import { QueryBuilderService } from './query-builder.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'KendoQueryBuilder';

  isDisabled = false;
  searchOptions: any;

  constructor(private advSearchService: QueryBuilderService) {}

  ngOnInit(): void {
    this.advSearchService.getQueryConfig$().subscribe(x => this.searchOptions = x);
  }
}
