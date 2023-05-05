import { useState } from "react"
import { getLastNMonthyearAndValue } from "@/utils/date"

export const useLastNMonthDropdown = (n: number) => {
  const lastNMonthLabelValueMap = getLastNMonthyearAndValue(n);
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