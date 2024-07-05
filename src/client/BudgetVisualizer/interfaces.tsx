export interface Adjustment {
  
  expenses: Transaction[];
  income: Transaction[];
  totalExpenses: (expenses: Transaction[]) => number;
  totalIncome: (income: Transaction[]) => number;
  calculateTotal: (transactions: Transaction[]) => number;
  
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
    transactions : Adjustment
  
}


export interface IncomeProps {
  
  adjustments: Adjustment;
  setAdjustments: (adjustments: Adjustment) => void;
  incomeList: Transaction[];


}

export interface ExpensesProps {

  adjustments: Adjustment;
  setAdjustments: (adjustments: Adjustment) => void;
  expenseList: Transaction[];

}

export interface VisualSettingsProps {

  vDataState: GraphData
  setVDataState : (vDataState: GraphData) => void;

}

export interface CurrentBalanceProps {

  vDataState: GraphData;
  setVDataState: (vDataState: GraphData) => void;

}

export interface GraphProps {

  vDataState : GraphData;

}
