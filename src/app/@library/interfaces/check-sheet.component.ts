export interface CheckSheet {
  currentDate: Date,
  dueDate: Date,
  fee: number,
  totalFee: number,
  value: number,
  days?: number,

  totalDays?: number;
  payedByChange?: number;
  toReceiver?: number;
}

