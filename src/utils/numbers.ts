export const formatCash = (num: number): string => {
  const neg = num < 0;
  num = Math.abs(num);

  return (neg ? '-$' : '$' ) + new Intl.NumberFormat().format(num);
}