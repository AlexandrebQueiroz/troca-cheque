import { Pipe, PipeTransform } from '@angular/core';
import { differenceInDays, startOfDay } from 'date-fns';
import { CheckSheet } from '../../interfaces/check-sheet.component';
import { addDays } from 'date-fns';

@Pipe({
  name: 'calculateProposal'
})
export class CalculateProposalPipe implements PipeTransform {

  transform(checkSheet: CheckSheet): CheckSheet {
    this.calcularDias(checkSheet);
    this.calcularJuros(checkSheet);

    return checkSheet;
  }

  calcularDias(checkSheet: CheckSheet){
    const startDate = startOfDay(checkSheet.currentDate);
    const endDate =
    addDays( addDays(startOfDay(checkSheet.dueDate), checkSheet.days), 1);
    checkSheet.totalDays = differenceInDays(endDate, startDate)
  }

  calcularJuros(checkSheet: CheckSheet){
    const taxaPorDia: number = checkSheet.fee/30;
    checkSheet.totalFee = (taxaPorDia * checkSheet.totalDays);

    checkSheet.payedByChange = ((checkSheet.value/100) * checkSheet.totalFee);
    checkSheet.toReceiver = checkSheet.value - checkSheet.payedByChange ;
  }

}
