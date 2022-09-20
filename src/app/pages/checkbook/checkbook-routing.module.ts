import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckbookComponent } from './checkbook.component';

const routes: Routes = [{
  path: '',
  component: CheckbookComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckbookRoutingModule {

}
