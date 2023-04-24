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
  total: 200,
  cashEarning: 2600,
  cashSpending: -1500,
  creditSpending: -900,
  transactions: [
    {
      id: 1,
      type: 'cash',
      amount: -100,
      description: 'Long description long description long description long description long description',
      date: '2023-04-20 20:00:00.550000-04',
      category_id: 1,
      category_name: 'Grocery',
      bank_id: 1,
      bank_name: 'TD'
    },
    {
      id: 2,
      type: 'credit',
      amount: -200,
      description: 'Costco',
      date: '2023-04-17 20:00:00.550000-04',
      category_id: 1,
      category_name: 'Grocery',
      bank_id: 1,
      bank_name: 'TD'
    },
    {
      id: 3,
      type: 'credit',
      amount: -300,
      description: 'Costco',
      date: '2023-04-15 20:00:00.550000-04',
      category_id: 1,
      category_name: 'Grocery',
      bank_id: 1,
      bank_name: 'TD'
    },
    {
      id: 4,
      type: 'cash',
      amount: -400,
      description: 'Costco',
      date: '2023-04-11 20:00:00.550000-04',
      category_id: 1,
      category_name: 'Grocery',
      bank_id: 1,
      bank_name: 'TD'
    },
    {
      id: 5,
      type: 'cash',
      amount: -500,
      description: 'Walmart',
      date: '2023-04-10 20:00:00.550000-04',
      category_id: 1,
      category_name: 'Grocery',
      bank_id: 1,
      bank_name: 'TD'
    },
    {
      id: 6,
      type: 'credit',
      amount: -200,
      description: 'Desk',
      date: '2023-04-09 20:00:00.550000-04',
      category_id: 3,
      category_name: 'Amazon',
      bank_id: 2,
      bank_name: 'CIBC',
    },
    {
      id: 7,
      type: 'cash',
      amount: 300,
      description: 'Pay cheque',
      date: '2023-04-07 20:00:00.550000-04',
      category_id: 2,
      category_name: 'Part-time Job',
      bank_id: 3,
      bank_name: 'BMO',
    },
    {
      id: 8,
      type: 'cash',
      amount: -500,
      description: 'Walmart',
      date: '2023-04-06 20:00:00.550000-04',
      category_id: 1,
      category_name: 'Grocery',
      bank_id: 1,
      bank_name: 'TD'
    },
    {
      id: 9,
      type: 'credit',
      amount: -200,
      description: 'Chair',
      date: '2023-04-05 20:00:00.550000-04',
      category_id: 3,
      category_name: 'Amazon',
      bank_id: 2,
      bank_name: 'CIBC',
    },
    {
      id: 10,
      type: 'cash',
      amount: 300,
      description: 'Pay cheque',
      date: '2023-04-04 20:00:00.550000-04',
      category_id: 2,
      category_name: 'Part-time Job',
      bank_id: 3,
      bank_name: 'BMO',
    },
    {
      id: 11,
      type: 'cash',
      amount: 500,
      description: 'Sold monitor',
      date: '2023-04-04 20:00:00.550000-04',
      category_id: 3,
      category_name: 'Kijiji',
      bank_id: 1,
      bank_name: 'TD'
    },
    {
      id: 12,
      type: 'cash',
      amount: 500,
      description: 'Sold bed',
      date: '2023-04-03 20:00:00.550000-04',
      category_id: 3,
      category_name: 'Kijiji',
      bank_id: 2,
      bank_name: 'CIBC'
    },
    {
      id: 13,
      type: 'cash',
      amount: 500,
      description: 'Sold TV',
      date: '2023-04-01 20:00:00.550000-04',
      category_id: 3,
      category_name: 'Kijiji',
      bank_id: 4,
      bank_name: 'RBC'
    },
    {
      id: 14,
      type: 'cash',
      amount: 500,
      description: 'Sold computer',
      date: '2023-04-01 20:00:00.550000-04',
      category_id: 3,
      category_name: 'Kijiji',
      bank_id: 5,
      bank_name: 'Scotia'
    },
  ]
}