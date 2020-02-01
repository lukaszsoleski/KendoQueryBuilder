import { Component, OnInit, Input, ViewEncapsulation, OnChanges, ViewChild, AfterViewInit } from '@angular/core';
import { FormControl, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-search-query-builder',
  templateUrl: './search-query-builder.component.html',
  styleUrls: ['./search-query-builder.component.scss'],
})
export class SearchQueryBuilderComponent implements OnInit {

  @Input() query;


  @Input() config;
  @Input() conditions;

  @Input() disabled = false;

  @Input() allowCollapse = true;
  @Input() allowRuleset = true;

  constructor() {
  }
  ngOnInit() {
  }
  print(event, rule){
    console.log('event: ', event);
    console.log('rule: ', rule);
  }
}
