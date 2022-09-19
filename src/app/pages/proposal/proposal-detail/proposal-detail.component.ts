import { Component, Input, OnInit } from '@angular/core';
import { CheckSheet } from '../../../@library/interfaces/check-sheet.component';
import { ProposalLegend } from '../../../@library/interfaces/proposal-legend.component';

@Component({
  selector: 'ngx-proposal-detail',
  templateUrl: './proposal-detail.component.html',
  styleUrls: ['./proposal-detail.component.scss'],
})
export class ProposalDetailComponent implements OnInit {

  @Input()
  public simplificado = true;

  @Input()
  public checkbook: CheckSheet[];

  @Input()
  public legend : ProposalLegend = {};

  constructor() { }

  ngOnInit(): void {
  }

}
