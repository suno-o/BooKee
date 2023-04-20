import {
  AccountData,
  MonthlyTransactions
} from "./mockTypes"

export const accountData: AccountData = {
  total: 50123.32,
  balances: [
    {
      bankName: 'TD',
      balance: 10123.32,
    },
    {
      bankName: 'CIBC',
      balance: 10000,
    },
    {
      bankName: 'BMO',
      balance: 10000,
    },
    {
      bankName: 'RBC',
      balance: 10000,
    },
    {
      bankName: 'Scotia',
      balance: 10000,
    },
  ]
}

export const yearlyBalanceData = [
  {
    month: 'May',
    balance: 0,
  },
  {
    month: 'Jun',
    balance: 0,
  },
  {
    month: 'Jul',
    balance: 0,
  },
  {
    month: 'Aug',
    balance: 0,
  },
  {
    month: 'Sep',
    balance: 30123.32,
  },
  {
    month: 'Oct',
    balance: 38123.32,
  },
  {
    month: 'Nov',
    balance: 48123.32,
  },
  {
    month: 'Dec',
    balance: 50123.32,
  },
  {
    month: 'Jan',
    balance: 30123.32,
  },
  {
    month: 'Feb',
    balance: 38123.32,
  },
  {
    month: 'Mar',
    balance: 48123.32,
  },
  {
    month: 'Apr',
    balance: 50123.32,
  }
];

export const aprilTransactionData: MonthlyTransactions = {
  total: -1500,
  cashEarning: 0,
  cashSpending: -1000,
  creditSpending: -500,
  transactions: [
    {
      id: 1,
      type: 'cash',
      amount: -100,
      date: '',
      category_id: 1,
      category_name: 'Category 1',
      bank_id: 1,
      bank_name: 'TD'
    },
    {
      id: 2,
      type: 'credit',
      amount: -200,
      date: '',
      category_id: 1,
      category_name: 'Category 1',
      bank_id: 1,
      bank_name: 'TD'
    },
    {
      id: 3,
      type: 'credit',
      amount: -300,
      date: '',
      category_id: 1,
      category_name: 'Category 1',
      bank_id: 1,
      bank_name: 'TD'
    },
    {
      id: 4,
      type: 'cash',
      amount: -400,
      date: '',
      category_id: 1,
      category_name: 'Category 1',
      bank_id: 1,
      bank_name: 'TD'
    },
    {
      id: 5,
      type: 'cash',
      amount: -500,
      date: '',
      category_id: 1,
      category_name: 'Category 1',
      bank_id: 1,
      bank_name: 'TD'
    },
    {
      id: 6,
      type: 'credit',
      amount: -200,
      date: '',
      category_id: 3,
      category_name: 'Category 3',
      bank_id: 2,
      bank_name: 'CIBC',
    },
    {
      id: 7,
      type: 'cash',
      amount: 300,
      date: '',
      category_id: 2,
      category_name: 'Category 2',
      bank_id: 3,
      bank_name: 'BMO',
    },
    {
      id: 5,
      type: 'cash',
      amount: -500,
      date: '',
      category_id: 1,
      category_name: 'Category 1',
      bank_id: 1,
      bank_name: 'TD'
    },
    {
      id: 6,
      type: 'credit',
      amount: -200,
      date: '',
      category_id: 3,
      category_name: 'Category 3',
      bank_id: 2,
      bank_name: 'CIBC',
    },
    {
      id: 7,
      type: 'cash',
      amount: 300,
      date: '',
      category_id: 2,
      category_name: 'Category 2',
      bank_id: 3,
      bank_name: 'BMO',
    },
    {
      id: 8,
      type: 'cash',
      amount: 500,
      date: '',
      category_id: 1,
      category_name: 'Category 1',
      bank_id: 1,
      bank_name: 'TD'
    },
    {
      id: 9,
      type: 'cash',
      amount: 500,
      date: '',
      category_id: 1,
      category_name: 'Category 1',
      bank_id: 2,
      bank_name: 'CIBC'
    },
    {
      id: 10,
      type: 'cash',
      amount: 500,
      date: '',
      category_id: 1,
      category_name: 'Category 1',
      bank_id: 4,
      bank_name: 'RBC'
    },
    {
      id: 11,
      type: 'cash',
      amount: 500,
      date: '',
      category_id: 1,
      category_name: 'Category 1',
      bank_id: 5,
      bank_name: 'Scotia'
    },
  ]
}