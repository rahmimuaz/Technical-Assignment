'use client'

import React from 'react'
import BorrowerPipeline from '@/components/BorrowerPipeline'
import BorrowerDetail from '@/components/BorrowerDetail'
import BrokerOverview from '@/components/BrokerOverview'
import { Search, HelpCircle, Bell } from 'lucide-react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

const DashboardPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-foreground">LoanTracker AI</h1>
            <div className="flex items-center space-x-4">
              <Search data-testid="search-icon" className="h-5 w-5 text-muted-foreground cursor-pointer hover:text-foreground transition-colors" />
              <HelpCircle data-testid="help-icon" className="h-5 w-5 text-muted-foreground cursor-pointer hover:text-foreground transition-colors" />
              <Bell data-testid="bell-icon" className="h-5 w-5 text-muted-foreground cursor-pointer hover:text-foreground transition-colors" />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto p-4">
        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-6">
          {/* Left Panel - Borrower Pipeline */}
          <div className="lg:col-span-1">
            <BorrowerPipeline />
          </div>
          
          {/* Center Panel - Borrower Details */}
          <div className="lg:col-span-1">
            <BorrowerDetail />
          </div>
          
          {/* Right Panel - Broker Overview */}
          <div className="lg:col-span-1">
            <BrokerOverview />
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden space-y-4">
          {/* Borrower Pipeline - Always visible on mobile */}
          <div>
            <BorrowerPipeline />
          </div>
          
          {/* Borrower Details - Always visible on mobile */}
          <div>
            <BorrowerDetail />
          </div>
          
          {/* Broker Overview - Collapsible on mobile */}
          <Accordion type="single" collapsible>
            <AccordionItem value="broker-overview" className="border rounded-lg">
              <AccordionTrigger className="px-4 py-3 text-left">
                <span className="font-semibold">Broker Overview</span>
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4">
                <BrokerOverview />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </main>
    </div>
  )
}

export default DashboardPage
