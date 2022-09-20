import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbAccordionModule, NbButtonModule, NbCardModule, NbCheckboxModule, NbDatepickerModule, NbIconModule, NbInputModule } from '@nebular/theme';
import { NgxMaskModule } from 'ngx-mask';
import { PipeModule } from '../../@library/pipe/pipe.module';
import { CheckbookRoutingModule } from './checkbook-routing.module';
import { CheckbookComponent } from './checkbook.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NbCardModule,
    NbInputModule,
    NbButtonModule,
    NbAccordionModule,
    CheckbookRoutingModule,
    NbCheckboxModule,
    NbDatepickerModule,
    PipeModule,
    NbIconModule,
    NgxMaskModule.forChild(),
  ],
  declarations: [
    CheckbookComponent,
  ]
})
export class CheckbookModule { }
