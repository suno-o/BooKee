import { useState, useEffect } from "react"
import { Select, Options, Option } from "./styles"
import { useOutsideClickAlert } from "@/hooks/useOutsideClickAlert"

export interface CustomStyles {
  width?: string;
  align?: string;
  p?: string;
}

interface Props {
  label?: string;
  selected?: string;
  onChange: (selected: any) => void;
  listItems: string[]; // use label as a key for now
  customStyles?: CustomStyles;
}

const DropDown = ({
  label,
  selected,
  onChange,
  listItems,
  customStyles,
}: Props) => {
  const [ref, outsideClicked, reset] = useOutsideClickAlert();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    /* close option list view if outside is clicked */
    if (outsideClicked) {
      setOpen(false);
      reset();
    }
  }, [outsideClicked])

  return (
    <Select ref={ref} optionsVisible={open} onClick={() => setOpen(st => !st)} {...customStyles} >
      {selected ? selected : label}
      <Options visible={open} top={ref?.current?.clientHeight}>
        {listItems.map(item => (item !== selected) && (
          <Option key={item} onClick={() => onChange(item)} {...customStyles} >{item}</Option>
        ))}
      </Options>
    </Select>
  )
}
export default DropDown;