import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchQueryBuilderComponent } from './search-query-builder.component';

describe('SearchQueryBuilderComponent', () => {
  let component: SearchQueryBuilderComponent;
  let fixture: ComponentFixture<SearchQueryBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchQueryBuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchQueryBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
