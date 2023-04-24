import { useEffect, useState, RefObject } from "react"

export const useOutsideClickAlert = (ref: RefObject<HTMLDivElement>): [boolean, () => void] => {
  const [outsideClicked, setOutsideClicked] = useState(false);

  useEffect(() => {
    if (ref && ref.current) {
      /* Alert if outside of ref element is clicked */
      const handleClickOutside = (e: Event) => {
        if (ref.current && !ref.current.contains(e.target as Node)) {
          setOutsideClicked(true);
        }
      }
      
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [ref])

  /* reset outside clicked */
  const reset = () => setOutsideClicked(false);

  return [outsideClicked, reset];
}