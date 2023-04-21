export const prettifyDate = (dateStr: string) => {
  const date = new Date(dateStr);

  let h = date.getHours();
  let m = date.getMinutes();
  let tRef = h >= 12 ? 'PM' : 'AM';

  h %= 12; // 16:30 -> 4:30
  
  if (h == 0)
    h = 12; // 0:30am -> 12:30am

  return `${date.toDateString()} ${h}:${m < 10 ? `0${m}` : m}${tRef}`
}