export interface Adjustment {

  [key:string]: string[];

}

export interface Transaction {

  day: string;
  amount: number;
  expense: string;

}

export interface GraphData {

    currentBalance : number;
    currentView : string;
    viewPeriod : number;
    baseLine : number;
    goalBalance : number;
    adjustments : Adjustment[];

}


export interface IncomeProps {

  adjustments: Adjustment[];
  setAdjustments: (adjustments: Adjustment[]) => void;
  incomeList: Transaction[];
  setIncL: (incomeList: Transaction[]) => void;


}

export interface ExpensesProps {

  adjustments: Adjustment[];
  setAdjustments: (adjustments: Adjustment[]) => void;
  expenseList: Transaction[];
  setExL: (incomeList: Transaction[]) => void;

}

export interface VisualSettingsProps {

  currentView: string;
  setV: (currentView: string) => void;
  viewPeriod: number;
  setVPer: (viewPeriod: number) => void;
  baseLine: number;
  setBLine: (baseLine: number) => void;
  goalBalance: number;
  setGoal: (goalBalance: number) => void;

}

export interface CurrentBalanceProps {

  currentBalance: number;
  setCB: (currentBalance: number) => void;

}

export interface GraphProps {

  vDataState : GraphData;

}
