import { useRef, useEffect, useState, RefObject } from "react"

export const useOutsideClickAlert = (): [RefObject<HTMLDivElement>, boolean, () => void] => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [outsideClicked, setOutsideClicked] = useState(false);

  useEffect(() => {
    if (elementRef && elementRef.current) {
      /* Alert if outside of ref element is clicked */
      const handleClickOutside = (e: Event) => {
        if (elementRef.current && !elementRef.current.contains(e.target as Node)) {
          setOutsideClicked(true);
        }
      }
      
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [elementRef])

  /* reset outside clicked */
  const reset = () => setOutsideClicked(false);

  return [elementRef, outsideClicked, reset];
}