import { useState } from "react"
import { getLastNMonths } from "@/utils/date"

export const useLastNMonthDropdown = (n: number) => {
  const lastNMonthLabelValueMap = getLastNMonths(n);
  const labels = Object.keys(lastNMonthLabelValueMap);
  const currentMonthLabel = labels[0];
  
  const [selectedMonthLabel, setSelectedMonthLabel] = useState(currentMonthLabel);

  const getLabelValue = (label: string) => lastNMonthLabelValueMap[label];
  
  return {
    selectedMonthLabel,
    setSelectedMonthLabel,
    labels,
    getLabelValue,
  }
}