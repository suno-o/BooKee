export const getTransactions = async (month: number, year: number) => {
  const res = await fetch('/api/transactions')
  const data = await res.json();
  return data.transactions;
} 