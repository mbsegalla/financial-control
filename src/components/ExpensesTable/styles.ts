import { styled } from 'styled-components'

export const Table = styled.table`
  min-width: 1400px;
  border-collapse: collapse;
`

export const TableHead = styled.thead`
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: ${({ theme }) => theme.palette.white};

  & th {
    padding: 5px 0px;
  }
`

export const TableCell = styled.th`
  width: 200px;
`

export const TableBody = styled.tbody`
  & td {
    text-align: center;
    padding: 10px;
  }
`

export const TabelRow = styled.tr``
