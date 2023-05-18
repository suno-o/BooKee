import { useState, useEffect } from "react"
import { Select, OptionsWrapper, Options, Option } from "./styles"
import { useOutsideClickAlert } from "@/hooks/useOutsideClickAlert"

export interface CustomStyles {
  width?: string;
  align?: string;
  p?: string;
  maxHeight?: number;
}

export interface Option {
  label: string;
  value: string;
}

interface Props {
  label?: string;
  selected?: string;
  onChange: (selected: any) => void;
  options?: Option[];
  listItems?: string[];
  customStyles?: CustomStyles;
}

const DropDown = ({
  label,
  selected,
  onChange,
  options,
  listItems,
  customStyles,
}: Props) => {
  const [ref, outsideClicked, reset] = useOutsideClickAlert();
  const [open, setOpen] = useState(false);
  const selectedLabel = options !== undefined ? options.find(option => option.value === selected)?.label : selected;

  useEffect(() => {
    /* close option list view if outside is clicked */
    if (outsideClicked) {
      setOpen(false);
      reset();
    }
  }, [outsideClicked])

  return (
    <Select ref={ref} optionsVisible={open} onClick={() => setOpen(st => !st)} {...customStyles} >
      {selected ? selectedLabel : label}
      <OptionsWrapper visible={open} top={ref?.current?.clientHeight} maxHeight={customStyles?.maxHeight}>
        <Options maxHeight={customStyles?.maxHeight}>
          {options !== undefined && (
            options.map(({label, value}) => (value !== selected) && (
              <Option key={value} onClick={() => onChange(value)} {...customStyles} >{label}</Option>
            ))
          )}
          {options === undefined && listItems !== undefined && (
            listItems.map(item => (item !== selected) && (
              <Option key={item} onClick={() => onChange(item)} {...customStyles} >{item}</Option>
            ))
          )}
        </Options>
      </OptionsWrapper>
    </Select>
  )
}
export default DropDown;