export const prettifyDateDetailed = (dateStr: string) => {
  const date = new Date(dateStr);

  let h = date.getHours();
  let m = date.getMinutes();
  let tRef = h >= 12 ? 'PM' : 'AM';

  h %= 12; // 16:30 -> 4:30
  
  if (h == 0)
    h = 12; // 0:30am -> 12:30am

  return `${date.toDateString()} ${h}:${m < 10 ? `0${m}` : m}${tRef}`
}

export const prettifyDate = (dateStr: string) => {
  const date = new Date(dateStr);
  return date.toDateString();
}

export const prettifyDateConcise = (dateStr: string) => {
  const date = new Date(dateStr);

  const m = date.getMonth()+1;
  const d = date.getDate();
  const y = date.getFullYear();
  
  return `${m < 10 ? `0${m}`: m}/${d < 10 ? `0${d}`: d}/${date.getFullYear()}`;
}

const monthShorthandNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export const getLastNMonths = (n: number) => {
  const date = new Date();

  return Array.from({ length: n }, (_, i: number) => {
    const d = new Date(date.getFullYear(), date.getMonth() - i, 1);
    return `${monthShorthandNames[d.getMonth()]} ${d.getFullYear()}`;
  })
}

export const monthToMonthName = (index: number) => monthShorthandNames[index%12];