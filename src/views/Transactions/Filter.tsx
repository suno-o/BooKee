import { useAppSelector } from "@/state"
import { bankAndCategorySelector } from "@/state/transactions/selector"
import { TransactionType } from "@prisma/client"
import { Filters, TransactionTypeFilter } from "."
import styled, { css } from "styled-components"
import Card from "@/components/Card"
import DropDown from "@/components/DropDown"
import Button, { ButtonWrapper } from "@/components/Button"

const typeFilterData = [
  { label: 'all', value: '', theme: 'failure' },
  { label: 'earning', value: TransactionType.CASH_EARNING, theme: 'primary' },
  { label: 'spending', value: TransactionType.CASH_SPENDING, theme: 'secondary' },
  { label: 'credit', value: TransactionType.CREDIT_SPENDING, theme: 'warning' }
];

interface Props {
  filters: Filters;
  handleFilterChange: (key: string) => (value: TransactionTypeFilter) => void;
  resetCategoryFilter: () => void;
}

const Filter = ({
  filters,
  handleFilterChange,
  resetCategoryFilter
}: Props) => {
  const { banks, categories } = useAppSelector(bankAndCategorySelector);

  return (
    <Container>
      {/* transaction type: all, earning, spending, credit */}
      <TypeFilterWrapper>
        {typeFilterData.map((filter) => (
          <BtnWrapper key={filter.value} disabled={filter.value === filters.transactionType} onClick={() => handleFilterChange('transactionType')(filter.value)}>
            <FilterCard styles={{bgTheme: filter.theme, colorTheme: 'white'}}>
              <FilterHeader>{filter.label}</FilterHeader>
            </FilterCard>
          </BtnWrapper>
        ))}
      </TypeFilterWrapper>

      {/* category: bank and transaction category */}
      <CategoryFilterWrapper>
        <DropDown
          width={150}
          selected={filters.bank}
          onChange={handleFilterChange('bank')}
          label={'Bank'}
          listItems={banks}
        />
         <DropDown
          width={150}
          selected={filters.category}
          onChange={handleFilterChange('category')}
          label={'Category'}
          listItems={categories}
        />
        <Btn bgTheme='text_grey' onClick={resetCategoryFilter}>Reset</Btn>
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