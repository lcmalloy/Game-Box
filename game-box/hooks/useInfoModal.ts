import {  create } from 'zustand'

export interface ModalStoreInterface {
  videoGameId?: string;
  isOpen: boolean;
  openModal: (videoGameId: string) => void;
  closeModal: () => void;
}

const useInfoModal = create<ModalStoreInterface>((set) => ({
  videoGameId: undefined,
  isOpen: false,
  openModal: (videoGameId: string) => set({ isOpen: true, videoGameId }),
  closeModal: () => set({ isOpen: false, videoGameId: undefined}),
}));

export default useInfoModal;