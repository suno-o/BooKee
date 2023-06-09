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

export const getMonthDate = (dateStr: string) => {
  const date = new Date(dateStr);
  const m = date.getMonth()+1;
  const d = date.getDate();
  return `${m < 10 ? `0${m}`: m}/${d < 10 ? `0${d}`: d}`;
}

const monthShorthandNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

interface Result {
  labels: string[];
  labelValueMap: { [key: string]: { month: number; year: number } };
}

export const getLastNMonthLabelsAndMap = (n: number) => {
  const date = new Date();
  const result: Result = {
    labels: [],
    labelValueMap: {}
  };

  for (let i=0; i<n; i++) {
    const d = new Date(date.getFullYear(), date.getMonth() - i, 1);
    const month = d.getMonth();
    const year = d.getFullYear();

    result.labels.push(`${monthShorthandNames[month]} ${year}`);
    result.labelValueMap[`${monthShorthandNames[month]} ${year}`] = {
      month,
      year
    }
  }

  return result;
}

export const getCurrentMonthyear = () => {
  const d = new Date();
  return `${monthShorthandNames[d.getMonth()]} ${d.getFullYear()}`;
}

export const monthToMonthName = (index: number) => monthShorthandNames[index%12];