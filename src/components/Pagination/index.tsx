import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md'

import { Container, PaginationButton, PaginationButtonNumber } from './styles'

interface PaginationProps {
  quantityOfPages: number
  previousButtonDisabled: boolean
  nextButtonDisabled: boolean
  buttonNumberActive: (pageNumber: number) => boolean
  handlePreviousPage: () => void
  handlePageChange: (pageNumber: number) => void
  handleNextPage: () => void
}

const Pagination = ({
  quantityOfPages,
  previousButtonDisabled,
  nextButtonDisabled,
  buttonNumberActive,
  handlePreviousPage,
  handlePageChange,
  handleNextPage,
}: PaginationProps) => {
  return (
    <Container>
      <PaginationButton onClick={handlePreviousPage} disabled={previousButtonDisabled}>
        <MdArrowBackIos /> Anterior
      </PaginationButton>
      {Array.from(Array(quantityOfPages).keys()).map((page) => (
        <PaginationButtonNumber key={page} active={buttonNumberActive(page + 1)} onClick={() => handlePageChange(page + 1)}>
          {page + 1}
        </PaginationButtonNumber>
      ))}
      <PaginationButton onClick={handleNextPage} disabled={nextButtonDisabled}>
        Próximo <MdArrowForwardIos />
      </PaginationButton>
    </Container>
  )
}

export default Pagination
