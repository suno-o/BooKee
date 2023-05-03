import { useState, useRef, useEffect } from "react"
import { Select, Options, Option } from "./styles"
import { useOutsideClickAlert } from "@/hooks/useOutsideClickAlert"

interface Props {
  width?: number;
  label?: string;
  selected?: string;
  onChange: (selected: any) => void;
  listItems: string[]; // use label as a key for now
}

const DropDown = ({
  label,
  selected,
  onChange,
  listItems,
  ...rest
}: Props) => {
  const selectRef = useRef<HTMLDivElement>(null);
  const [outsideClicked, reset] = useOutsideClickAlert(selectRef);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    /* close option list view if outside is clicked */
    if (outsideClicked) {
      setOpen(false);
      reset();
    }
  }, [outsideClicked])

  return (
    <Select ref={selectRef} optionsVisible={open} onClick={() => setOpen(st => !st)} {...rest}>
      {selected ? selected : label}
      <Options visible={open} top={selectRef?.current?.clientHeight}>
        {listItems.map(item => (item !== selected) && (
          <Option key={item} onClick={() => onChange(item)}>{item}</Option>
        ))}
      </Options>
    </Select>
  )
}
export default DropDown;