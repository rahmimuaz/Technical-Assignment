import { create } from 'zustand'
import { Borrower, BorrowerDetail, BrokerInfo, OnboardingWorkflow, TabType, BorrowerPipeline } from '@/types'

interface AppState {
  activeTab: TabType
  activeBorrower: BorrowerDetail | null
  borrowerPipeline: BorrowerPipeline
  currentBorrowers: Borrower[]
  brokerInfo: BrokerInfo | null
  onboardingWorkflow: OnboardingWorkflow | null
  aiAssistantEnabled: boolean
  setActiveTab: (tab: TabType) => void
  setActiveBorrower: (borrower: BorrowerDetail | null) => void
  setBorrowerPipeline: (pipeline: BorrowerPipeline) => void
  setCurrentBorrowers: (borrowers: Borrower[]) => void
  setBrokerInfo: (broker: BrokerInfo | null) => void
  setOnboardingWorkflow: (workflow: OnboardingWorkflow | null) => void
  toggleAiAssistant: () => void
}

export const useAppStore = create<AppState>((set) => ({
  activeTab: 'new',
  activeBorrower: null,
  borrowerPipeline: { new: [], in_review: [], approved: [] },
  currentBorrowers: [],
  brokerInfo: null,
  onboardingWorkflow: null,
  aiAssistantEnabled: false,
  setActiveTab: (tab) => set({ activeTab: tab }),
  setActiveBorrower: (borrower) => set({ activeBorrower: borrower }),
  setBorrowerPipeline: (pipeline) => set({ borrowerPipeline: pipeline }),
  setCurrentBorrowers: (borrowers) => set({ currentBorrowers: borrowers }),
  setBrokerInfo: (broker) => set({ brokerInfo: broker }),
  setOnboardingWorkflow: (workflow) => set({ onboardingWorkflow: workflow }),
  toggleAiAssistant: () => set((state) => ({ aiAssistantEnabled: !state.aiAssistantEnabled })),
}))
