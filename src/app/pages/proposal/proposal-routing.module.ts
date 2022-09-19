import { Input, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckSheet } from '../../@library/interfaces/check-sheet.component';
import { ProposalComponent } from './proposal.component';

const routes: Routes = [{
  path: '',
  component: ProposalComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProposalRoutingModule {

}
