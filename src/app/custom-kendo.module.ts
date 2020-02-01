import { NgModule } from '@angular/core';

import { DateInputsModule, CalendarModule } from '@progress/kendo-angular-dateinputs';
import { IntlModule } from '@progress/kendo-angular-intl';
import { NotificationModule } from '@progress/kendo-angular-notification';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { PopupModule } from '@progress/kendo-angular-popup';

@NgModule({
  declarations: [],
  imports: [
    LayoutModule,
    DialogsModule,
    ButtonsModule,
    InputsModule,
    DateInputsModule,
    IntlModule,
    CalendarModule,
    NotificationModule,
    DropDownsModule,
    TooltipModule,
    PopupModule,
  ],
  exports: [
    LayoutModule,
    DialogsModule,
    ButtonsModule,
    InputsModule,
    DateInputsModule,
    IntlModule,
    CalendarModule,
    NotificationModule,
    DropDownsModule,
    TooltipModule,
    PopupModule
  ]
})
export class CustomKendoModule { }
