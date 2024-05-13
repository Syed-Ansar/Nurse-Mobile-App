import { create } from 'zustand'

import { NurseUserInfo } from '@/types'

interface UserState {
	nurse: NurseUserInfo | null
	setNurse: (data: NurseUserInfo) => void
}

export const useNurseStore = create<UserState>((set) => ({
	nurse: null,
	setNurse: (data) => set(() => ({ nurse: data })),
}))
