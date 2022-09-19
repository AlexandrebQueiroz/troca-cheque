import { CalculateProposalPipe } from './../../@library/pipe/calculate-proposal/calculate-proposal.pipe';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CheckSheet } from '../../@library/interfaces/check-sheet.component';
import { ProposalLegend } from '../../@library/interfaces/proposal-legend.component';

@Component({
  selector: 'ngx-proposal',
  templateUrl: './proposal.component.html',
  styleUrls: ['./proposal.component.scss'],
})
export class ProposalComponent implements OnInit {

  public simplificado = true;
  public submmited = false;
  public expand = false;
  public form: FormGroup;
  public checkbook: CheckSheet[] = [];
  public legend : ProposalLegend = {};

  constructor(
    public fb: FormBuilder,
    private pipe: CalculateProposalPipe
  ) { }

  ngOnInit() {
    this.createForm();
  }

  public createForm() {

    this.form = this.fb.group({

      currentDate: new FormControl(
        new Date(), [
        Validators.required,
      ]),

      fee: new FormControl(
        5, [
        Validators.required,
      ]),

      dueDate: new FormControl(
        null, [
        Validators.required,
      ]),

      value: new FormControl(
        null, [
        Validators.required,
      ]),

      days: new FormControl(
        2, [
          Validators.required,
      ]),

    });
  }

  public onSubmit() {
    this.submmited = true;
    if(this.form.valid){
      this.checkbook.push(this.pipe.transform(this.form.value));
      this.updateLegend();
      this.submmited = false;
      this.dueDate.setValue(null);
      this.value.setValue(null);
    }
  }

  public onExpand(){
    this.expand = true;
  }

  public onCompact(){
    this.expand = false;
  }

  onCurrentDateChange(date: any){
    console.log(date);
  }

  updateLegend(){
    this.legend.total = this.checkbook.reduce(( accumulator: number, obj) => {
      return accumulator + Number(obj.value);
    }, 0);

    this.legend.days = this.checkbook.reduce((accumulator, obj) => {
      return accumulator + obj.totalDays;
    }, 0);

    if(this.checkbook.length){
      this.legend.days = this.legend.days/(this.checkbook.length)
    }

    this.legend.payed = this.checkbook.reduce((accumulator, obj) => {
      return accumulator + obj.payedByChange;
    }, 0);

    this.legend.toReceiver = this.checkbook.reduce((accumulator, obj) => {
      return accumulator + obj.toReceiver;
    }, 0);
  }

  public getStatus(field: AbstractControl): string {

    if(!this.submmited){
      return 'basic';
    }

    if (field.valid) {
      return 'success';
    }

    return 'danger';

 }


  public get currentDate() {
    return this.form.get('currentDate') ;
  }

  public get fee() {
    return this.form.get('fee');
  }

  public get dueDate() {
    return this.form.get('dueDate');
  }

  public get value() {
    return this.form.get('value');
  }

  public get days() {
    return this.form.get('days');
  }
}
