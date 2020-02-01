import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QueryBuilderService {
  constructor() {}

  public getQueryConfig$() {
    const x = {
      defaultQuery: {
        condition: 'and',
        rules: [
          { field: 'age', operator: '<=', entity: 'physical' },
          {
            field: 'birthday',
            operator: '=',
            value: new Date(),
            entity: 'nonphysical'
          },
          {
            condition: 'or',
            rules: [
              { field: 'gender', operator: '=', entity: 'physical' },
              { field: 'occupation', operator: 'in', entity: 'nonphysical' },
              { field: 'school', operator: 'is null', entity: 'nonphysical' },
              { field: 'notes', operator: '=', entity: 'nonphysical' }
            ]
          }
        ]
      },
      conditions: [
        {
          value: 'or',
          name: '&'
        },
        {
          value: 'and',
          name: '||'
        }
      ],
      config: {
        entities: {
          physical: { name: 'Physical Attributes' },
          nonphysical: { name: 'Nonphysical Attributes' }
        },
        fields: {
          age: { name: 'Age', type: 'number', entity: 'physical' },
          gender: {
            name: 'Gender',
            entity: 'physical',
            type: 'category',
            options: [
              { name: 'Male', value: 'm' },
              { name: 'Female', value: 'f' }
            ]
          },
          name: { name: 'Name', type: 'string', entity: 'nonphysical' },
          notes: {
            name: 'Notes',
            type: 'textarea',
            operators: ['=', '!='],
            entity: 'nonphysical'
          },
          educated: {
            name: 'College Degree?',
            type: 'boolean',
            entity: 'nonphysical'
          },
          birthday: {
            name: 'Birthday',
            type: 'date',
            operators: ['=', '<=', '>'],
            defaultValue: () => new Date(),
            entity: 'nonphysical'
          },
          school: {
            name: 'School',
            type: 'string',
            nullable: true,
            entity: 'nonphysical'
          },
          occupation: {
            name: 'Occupation',
            entity: 'nonphysical',
            type: 'category',
            options: [
              { name: 'Student', value: 'student' },
              { name: 'Teacher', value: 'teacher' },
              { name: 'Unemployed', value: 'unemployed' },
              { name: 'Scientist', value: 'scientist' }
            ]
          }
        }
      }
    };
    return of(x).pipe(delay(50));
  }
}
