import { useEffect, useRef } from 'react'
import { MdClose } from 'react-icons/md'

import ExpenseRegisterForm from '../../ExpenseRegisterForm'

import { CloseButtonBase, ModalContainer, Title, Wrapper } from './styles'

interface ExpenseRegisterModalProps {
  open: boolean
  setOpenModal: (open: boolean) => void
}

const ExpenseRegisterModal = ({ open, setOpenModal }: ExpenseRegisterModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null)

  const handleCloseModal = () => {
    setOpenModal(false)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        handleCloseModal()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    open && (
      <ModalContainer>
        <Wrapper ref={modalRef}>
          <CloseButtonBase>
            <MdClose size={22} onClick={handleCloseModal} />
          </CloseButtonBase>
          <Title>Registre sua despesa</Title>

          <ExpenseRegisterForm setOpenModal={setOpenModal} />
        </Wrapper>
      </ModalContainer>
    )
  )
}

export default ExpenseRegisterModal
