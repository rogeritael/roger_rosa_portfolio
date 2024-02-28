import { create } from 'zustand'

type DevTypeProps = 'Front End' | 'Back End' | 'Full Stack' | 'Automação'

export interface dataStoreProps {
    devType: DevTypeProps;
    setDevType: (type: DevTypeProps) => void;
}

export const useDataStore = create<dataStoreProps>(set => ({
    devType: 'Full Stack',
    setDevType: (devType: DevTypeProps) => set({ devType })
}))