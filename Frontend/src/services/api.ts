import { Borrower, BorrowerDetail, BrokerInfo, OnboardingWorkflow, BorrowerPipeline } from '@/types'

// Mock data based on the sample response
const mockBorrowerPipeline: BorrowerPipeline = {
  new: [
    {
      id: "1",
      name: "Sarah Dunn",
      loan_type: "Home Loan",
      amount: 300000,
      status: "Renew"
    },
    {
      id: "3",
      name: "Lisa Carter",
      loan_type: "Home Loan",
      amount: 450000,
      status: "New"
    }
  ],
  in_review: [
    {
      id: "2",
      name: "Alan Matthews",
      loan_type: "Personal Loan",
      amount: 20000,
      status: "In Review"
    }
  ],
  approved: []
}

const mockBorrowerDetails: Record<string, BorrowerDetail> = {
  "1": {
    id: "1",
    name: "Sarah Dunn",
    email: "sarah.dunn@example.com",
    phone: "(355)123-4557",
    loan_amount: 300000,
    status: "In Review",
    employment: "At Tech Company",
    income: 120000,
    existing_loan: 240000,
    credit_score: 720,
    source_of_funds: "Declared",
    risk_signal: "Missing Source of Funds declaration",
    ai_flags: [
      "Income Inconsistent with Bank statements",
      "High Debt-to-Income Ratio detected"
    ]
  },
  "2": {
    id: "2",
    name: "Alan Matthews",
    email: "alan.matthews@example.com",
    phone: "(355)123-4558",
    loan_amount: 20000,
    status: "In Review",
    employment: "Self Employed",
    income: 80000,
    existing_loan: 150000,
    credit_score: 680,
    source_of_funds: "Declared",
    risk_signal: "High debt-to-income ratio",
    ai_flags: [
      "High Debt-to-Income Ratio detected"
    ]
  },
  "3": {
    id: "3",
    name: "Lisa Carter",
    email: "lisa.carter@example.com",
    phone: "(355)123-4559",
    loan_amount: 450000,
    status: "New",
    employment: "At Finance Company",
    income: 150000,
    existing_loan: 0,
    credit_score: 780,
    source_of_funds: "Declared",
    risk_signal: "No risk signals detected",
    ai_flags: []
  }
}

const mockBrokerInfo: BrokerInfo = {
  name: "Robert Turner",
  deals: 16,
  approval_rate: "75%",
  pending: 7660
}

const mockOnboardingWorkflow: OnboardingWorkflow = {
  steps: [
    "Deal Intake",
    "IDV & Credit Check",
    "Document Upload",
    "AI Validation",
    "Credit Committee",
    "Approval & Docs",
    "Funder Syndication"
  ]
}

export const api = {
  // Get borrower pipeline
  getBorrowerPipeline: async (): Promise<BorrowerPipeline> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500))
    return mockBorrowerPipeline
  },

  // Get borrower detail
  getBorrowerDetail: async (id: string): Promise<BorrowerDetail> => {
    await new Promise(resolve => setTimeout(resolve, 300))
    const borrower = mockBorrowerDetails[id]
    if (!borrower) {
      throw new Error('Borrower not found')
    }
    return borrower
  },

  // Request documents
  requestDocuments: async (id: string): Promise<{ success: boolean; message: string }> => {
    await new Promise(resolve => setTimeout(resolve, 200))
    console.log(`Documents requested for borrower ${id}`)
    return { success: true, message: "Documents requested." }
  },

  // Send to valuer
  sendToValuer: async (id: string): Promise<{ success: boolean; message: string }> => {
    await new Promise(resolve => setTimeout(resolve, 200))
    console.log(`Borrower ${id} sent to valuer`)
    return { success: true, message: "Valuer notified." }
  },

  // Approve loan
  approveLoan: async (id: string): Promise<{ success: boolean; message: string }> => {
    await new Promise(resolve => setTimeout(resolve, 200))
    console.log(`Loan approved for borrower ${id}`)
    return { success: true, message: "Loan approved." }
  },

  // Escalate to credit committee
  escalateToCreditCommittee: async (id: string): Promise<{ success: boolean; message: string }> => {
    await new Promise(resolve => setTimeout(resolve, 200))
    console.log(`Borrower ${id} escalated to credit committee`)
    return { success: true, message: "Escalated to Credit Committee." }
  },

  // Get broker info
  getBrokerInfo: async (): Promise<BrokerInfo> => {
    await new Promise(resolve => setTimeout(resolve, 300))
    return mockBrokerInfo
  },

  // Get onboarding workflow
  getOnboardingWorkflow: async (): Promise<OnboardingWorkflow> => {
    await new Promise(resolve => setTimeout(resolve, 200))
    return mockOnboardingWorkflow
  }
}
