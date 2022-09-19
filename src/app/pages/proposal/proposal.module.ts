import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbAccordionModule, NbButtonModule, NbCardModule, NbCheckboxModule, NbDatepickerModule, NbInputModule } from '@nebular/theme';
import { NgxMaskModule } from 'ngx-mask';
import { PipeModule } from './../../@library/pipe/pipe.module';
import { ProposalDetailComponent } from './proposal-detail/proposal-detail.component';
import { ProposalRoutingModule } from './proposal-routing.module';
import { ProposalComponent } from './proposal.component';

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
    PipeModule,
    NgxMaskModule.forChild(),
  ],
  declarations: [
    ProposalComponent,
    ProposalDetailComponent
  ]
})
export class ProposalModule { }
