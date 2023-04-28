import { SetStateAction, useState, Dispatch } from "react"
import styled, { css } from "styled-components"
import Card from "@/components/Card"
import DropDown from "@/components/DropDown"
import Button, { ButtonWrapper } from "@/components/Button"

const typeFilterData = [
  { value: 'all', theme: 'failure' },
  { value: 'earning', theme: 'primary' },
  { value: 'spending', theme: 'secondary' },
  { value: 'credit', theme: 'warning' }
];

const Filter = () => {
  const [typeFilter, setTypeFilter] = useState('all');
  const [bankFilter, setBankFilter] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');

  const handleChangeCreator = (callback: Dispatch<SetStateAction<string>>) => (item: string) => () => {
    callback(item);
  }

  const resetCategoryFilters = () => {
    setBankFilter('');
    setCategoryFilter('');
  }

  return (
    <Container>
      {/* transaction type: all, earning, spending, credit */}
      <TypeFilterWrapper>
        {typeFilterData.map((filter) => (
          <BtnWrapper key={filter.value} disabled={filter.value === typeFilter} onClick={() => setTypeFilter(filter.value)}>
            <FilterCard styles={{bgTheme: filter.theme, colorTheme:'white'}}>
              <FilterHeader>{filter.value}</FilterHeader>
            </FilterCard>
          </BtnWrapper>
        ))}
      </TypeFilterWrapper>

      {/* category: bank and transaction category */}
      <CategoryFilterWrapper>
        <DropDown
          width={150}
          selected={bankFilter}
          onChange={handleChangeCreator(setBankFilter)}
          label={'Bank'}
          listItems={['TD', 'CIBC', 'BMO', 'RBC', 'Scotia', 'Tangerine']}
        />
         <DropDown
          width={150}
          selected={categoryFilter}
          onChange={handleChangeCreator(setCategoryFilter)}
          label={'Category'}
          listItems={['Grocery', 'Kijiji', 'Part-time Job']}
        />
        <Btn bgTheme='text_grey' onClick={resetCategoryFilters}>Reset</Btn>
      </CategoryFilterWrapper>
    </Container>
  );
}

export default Filter;

/* styles */
const Container = styled.div`
`

const TypeFilterWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 24px;

  ${p => p.theme.mediaQueries.md} {
    justify-content: flex-start;
  }
`

const BtnWrapper = styled(ButtonWrapper)<{disabled?: boolean}>`
  position: relative;
  margin-right: 8px;
  transition: transform 300ms ease-in-out;

  &:hover {
    ${p => !p.disabled && `transform: translateY(-4px);`}
  }

  ${p => p.disabled && css`
    &::after {
      content: '';
      position: absolute;
      left: 8px;
      right: 8px;
      bottom: -8px;
      border-radius: 3px;
      height: 4px;
      background-color: ${p.theme.colors.text_grey_lighter};
    }
  `}
`

const FilterCard = styled(Card)`
  padding: 8px 24px;
  ${p => p.theme.mediaQueries.sm} { padding: 10px 28px; }
  ${p => p.theme.mediaQueries.md} { padding: 12px 32px; }
`

const FilterHeader = styled(Card.Header)`
  font-size: 0.8rem;
  text-transform: capitalize;

  ${p => p.theme.mediaQueries.sm} {
    font-size: 1rem;
  }
`

const CategoryFilterWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;

  ${p => p.theme.mediaQueries.md} {
    justify-content: flex-end;
  }
`

const Btn = styled(Button)`
  width: auto;
  border-radius: 24px;
  padding: 4px 12px;
  font-weight: normal;
`