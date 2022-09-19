import { PipeModule } from './../../@library/pipe/pipe.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbAccordionModule, NbActionsModule, NbButtonModule, NbCardModule, NbCheckboxModule, NbDatepickerModule, NbInputModule } from '@nebular/theme';
import { ProposalRoutingModule } from './proposal-routing.module';
import { ProposalComponent } from './proposal.component';
import { NgxMaskModule } from 'ngx-mask';
import { ProposalDetailComponent } from './proposal-detail/proposal-detail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NbCardModule,
    NbInputModule,
    NbButtonModule,
    NbAccordionModule,
    ProposalRoutingModule,
    NbCheckboxModule,
    NbDatepickerModule,
    NgxMaskModule.forChild(),
    PipeModule,
    NbActionsModule,
  ],
  declarations: [
    ProposalComponent,
    ProposalDetailComponent
  ]
})
export class ProposalModule { }
