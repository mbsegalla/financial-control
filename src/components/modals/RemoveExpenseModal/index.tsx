import { MdClose } from 'react-icons/md'

import { CloseButtonBase, ModalContainer, Title, Wrapper } from './styles'

interface RemoveExpenseModalProps {
  open: boolean
  deleteExpense: () => void
  setOpenDeleteExpenseModal: (open: boolean) => void
}

const RemoveExpenseModal = ({ open, setOpenDeleteExpenseModal, deleteExpense }: RemoveExpenseModalProps) => {
  const handleCloseModal = () => {
    setOpenDeleteExpenseModal(false)
  }

  return (
    open && (
      <ModalContainer>
        <Wrapper>
          <CloseButtonBase>
            <MdClose size={22} onClick={handleCloseModal} />
          </CloseButtonBase>
          <Title>Tem certeza que deseja excluir essa despesa?</Title>
          <div>
            <button type="button" onClick={deleteExpense}>
              Sim
            </button>
            <button type="button" onClick={handleCloseModal}>
              Não
            </button>
          </div>
        </Wrapper>
      </ModalContainer>
    )
  )
}

export default RemoveExpenseModal
