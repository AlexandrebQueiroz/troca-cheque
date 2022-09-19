import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculateProposalPipe } from './calculate-proposal/calculate-proposal.pipe';

@NgModule({
  imports: [
  ],

  declarations: [
    CalculateProposalPipe
  ],

  exports:[
    CalculateProposalPipe
  ],

  providers:[
    CalculateProposalPipe
  ]

})
export class PipeModule { }
