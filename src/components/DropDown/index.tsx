import { useState, useRef, useEffect } from "react"
import { Select, Options, Option } from "./styles"
import { useOutsideClickAlert } from "@/hooks/useOutsideClickAlert"

interface Props {
  width?: number;
  listItems: string[]; // use label as a key for now
}

const DropDown = ({
  listItems,
  ...rest
}: Props) => {
  const selectRef = useRef<HTMLDivElement>(null);
  const [outsideClicked, reset] = useOutsideClickAlert(selectRef);
  const [selected, setSelected] = useState(listItems[0]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    /* close option list view if outside is clicked */
    if (outsideClicked) {
      setOpen(false);
      reset();
    }
  }, [outsideClicked])

  return (
    <>
      <Select ref={selectRef} optionsVisible={open} onClick={() => setOpen(st => !st)} {...rest}>
        {selected}
        <Options visible={open} top={selectRef?.current?.clientHeight}>
          {listItems.map(item => (item !== selected) && (
            <Option key={item} onClick={() => setSelected(item)}>{item}</Option>
          ))}
        </Options>
      </Select>
    </>
  )
}
export default DropDown;