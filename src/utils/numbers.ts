export const formatCash = (num: number): string => {
  return '$' + new Intl.NumberFormat().format(num);
}