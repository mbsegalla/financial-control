import type { StateCreator } from 'zustand'
import { create } from 'zustand'

interface UserInfo {
  userId: string
  fullName: string
  isLogged: boolean
}

interface UserState {
  userId: string | null
  fullName: string | null
  isLogged: boolean
  setUserInfo: (userInfo: UserInfo) => void
}

const createUserStore: StateCreator<UserState> = (set) => {
  const storedUserInfo = localStorage.getItem('userInfo')
  const initialState: UserState = storedUserInfo ? JSON.parse(storedUserInfo) : { userId: null, fullName: null, isLogged: false }

  return {
    ...initialState,
    setUserInfo: (newUserInfo: UserInfo) => {
      set(newUserInfo)
      localStorage.setItem('userInfo', JSON.stringify(newUserInfo))
    },
  }
}

export const useUserStore = create(createUserStore)
