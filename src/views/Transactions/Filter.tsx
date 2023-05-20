import { useBankAndCategory } from "@/state/transactions/hooks"
import { TransactionType } from "@prisma/client"
import { Filters, TransactionTypeFilter } from "."
import styled, { css } from "styled-components"
import Card from "@/components/Card"
import DropDown from "@/components/DropDown"
import Button from "@/components/Button"
import Skeleton from "@/components/Skeleton"

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

const longestLength = (strArr: string[]) => Math.max(...strArr.map(str => str.length), 8); // min 8

const Filter = ({
  filters,
  handleFilterChange,
  resetCategoryFilter
}: Props) => {
  const { banks, categories, transactionsLoaded } = useBankAndCategory();
  const longestBankChars = longestLength(banks);
  const longestCategoryChars = longestLength(categories);
  
  return (
    <Container>
      {/* transaction type: all, earning, spending, credit */}
      <TypeFilterWrapper>
        {typeFilterData.map((filter) => (
          <CardButton
            key={filter.value}
            bgTheme='none'
            inactive={filter.value === filters.transactionType}
            customStyles={{ width: 'auto', p: 0 }}
            onClick={() => handleFilterChange('transactionType')(filter.value)}
          >
            <FilterCard styles={{bgTheme: filter.theme, colorTheme: 'white'}}>
              <FilterHeader>{filter.label}</FilterHeader>
            </FilterCard>
          </CardButton>
        ))}
      </TypeFilterWrapper>

      {/* category: bank and transaction category */}
      <CategoryFilterWrapper>
        <DropDownWrapper longestLength={longestBankChars}>
          {transactionsLoaded ? (
            <DropDown
              selected={filters.bank}
              onChange={handleFilterChange('bank')}
              label={'Bank'}
              listItems={banks}
              customStyles={{ align: 'left', p: '8px 16px' }}
            />
          ) : (
            <Skeleton br={24} style={{ width: '100%', height: '100%' }} />
          )}
        </DropDownWrapper>

        <DropDownWrapper longestLength={longestCategoryChars}>
          {transactionsLoaded ? (
            <DropDown
              selected={filters.category}
              onChange={handleFilterChange('category')}
              label={'Category'}
              listItems={categories}
              customStyles={{ align: 'left', p: '8px 16px'  }}
            />
          ) : (
            <Skeleton br={24} style={{ width: '100%', height: '100%' }} />
          )}
        </DropDownWrapper>
        <Button bgTheme='text_grey' customStyles={{ width: 'auto', br: 24, p: 12 }} onClick={resetCategoryFilter}>Reset</Button>
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
  justify-content: flex-start;
  margin-bottom: 24px;
`

const CardButton = styled(Button)<{inactive?: boolean}>`
  position: relative;
  margin-right: 8px;
  transition: transform 300ms ease-in-out;

  &:hover {
    ${p => !p.inactive && `transform: translateY(-4px);`}
  }

  ${p => p.inactive && css`
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
  padding: 10px 18px;
  ${p => p.theme.mediaQueries.sm} { padding: 10px 26px; }
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
  flex-direction: column;
  gap: 8px;

  ${p => p.theme.mediaQueries.sm} {
    flex-direction: row;
    justify-content: center;
  }

  ${p => p.theme.mediaQueries.md} {
    justify-content: flex-end;
  }
`

const DropDownWrapper = styled.div<{longestLength: number}>`
  ${p => p.theme.mediaQueries.sm} {
    width: 100%;
  }

  ${p => p.theme.mediaQueries.md} {
    width: ${p => p.longestLength * 8 + 48}px;
  }
`