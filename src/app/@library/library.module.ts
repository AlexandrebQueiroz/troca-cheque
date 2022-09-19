import { NgModule } from '@angular/core';
import { StatusDirective } from './status.directive';
import { CalculateProposalPipe } from './pipe/calculate-proposal.pipe';

@NgModule({
  imports: [
  ],
  declarations: [
    StatusDirective,
    CalculateProposalPipe
  ],
  exports:[
    StatusDirective
  ]
})
export class LibraryModule { }
