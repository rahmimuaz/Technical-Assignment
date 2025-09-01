'use client'

import React, { useEffect } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Badge } from '@/components/ui/badge'
import { useAppStore } from '@/store/useAppStore'
import { api } from '@/services/api'
import { Borrower, TabType } from '@/types'

const BorrowerPipeline: React.FC = () => {
  const {
    activeTab,
    borrowerPipeline,
    currentBorrowers,
    setActiveTab,
    setBorrowerPipeline,
    setCurrentBorrowers,
    setActiveBorrower
  } = useAppStore()

  useEffect(() => {
    const loadBorrowerPipeline = async () => {
      try {
        const pipeline = await api.getBorrowerPipeline()
        setBorrowerPipeline(pipeline)
      } catch (error) {
        console.error('Failed to load borrower pipeline:', error)
      }
    }

    loadBorrowerPipeline()
  }, [setBorrowerPipeline])

  useEffect(() => {
    setCurrentBorrowers(borrowerPipeline[activeTab] || [])
  }, [activeTab, borrowerPipeline, setCurrentBorrowers])

  const handleTabChange = (value: string) => {
    setActiveTab(value as TabType)
  }

  const handleBorrowerClick = async (borrower: Borrower) => {
    try {
      const borrowerDetail = await api.getBorrowerDetail(borrower.id)
      setActiveBorrower(borrowerDetail)
    } catch (error) {
      console.error('Failed to load borrower detail:', error)
    }
  }

  const getStatusVariant = (status: string) => {
    switch (status) {
      case 'New':
        return 'default'
      case 'In Review':
        return 'warning'
      case 'Approved':
        return 'success'
      case 'Renew':
        return 'info'
      default:
        return 'default'
    }
  }

  return (
    <Card className="h-full">
      <CardContent className="space-y-4 pt-6">
        <Tabs value={activeTab} onValueChange={handleTabChange}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="new">New</TabsTrigger>
            <TabsTrigger value="in_review">In Review</TabsTrigger>
            <TabsTrigger value="approved">Approved</TabsTrigger>
          </TabsList>
          
          <TabsContent value="new" className="space-y-2">
            {currentBorrowers.map((borrower) => (
              <div
                key={borrower.id}
                className="p-3 border border-border rounded-lg cursor-pointer hover:bg-accent transition-colors"
                onClick={() => handleBorrowerClick(borrower)}
              >
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium text-sm">{borrower.name}</h4>
                  <Badge variant={getStatusVariant(borrower.status)}>
                    {borrower.status}
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground mb-1">{borrower.loan_type}</p>
                <p className="text-sm font-semibold text-right">
                  ${borrower.amount.toLocaleString()}
                </p>
              </div>
            ))}
          </TabsContent>
          
          <TabsContent value="in_review" className="space-y-2">
            {currentBorrowers.map((borrower) => (
              <div
                key={borrower.id}
                className="p-3 border border-border rounded-lg cursor-pointer hover:bg-accent transition-colors"
                onClick={() => handleBorrowerClick(borrower)}
              >
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium text-sm">{borrower.name}</h4>
                  <Badge variant={getStatusVariant(borrower.status)}>
                    {borrower.status}
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground mb-1">{borrower.loan_type}</p>
                <p className="text-sm font-semibold text-right">
                  ${borrower.amount.toLocaleString()}
                </p>
              </div>
            ))}
          </TabsContent>
          
          <TabsContent value="approved" className="space-y-2">
            {currentBorrowers.map((borrower) => (
              <div
                key={borrower.id}
                className="p-3 border border-border rounded-lg cursor-pointer hover:bg-accent transition-colors"
                onClick={() => handleBorrowerClick(borrower)}
              >
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium text-sm">{borrower.name}</h4>
                  <Badge variant={getStatusVariant(borrower.status)}>
                    {borrower.status}
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground mb-1">{borrower.loan_type}</p>
                <p className="text-sm font-semibold text-right">
                  ${borrower.amount.toLocaleString()}
                </p>
              </div>
            ))}
          </TabsContent>
        </Tabs>

        <div className="pt-4 border-t border-border">
          <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3">
            F-SANATISED ACTIVE
          </h3>
          <RadioGroup defaultValue="option-1">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-1" id="option-1" />
              <label htmlFor="option-1" className="text-sm font-medium">
                Option 1
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-2" id="option-2" />
              <label htmlFor="option-2" className="text-sm font-medium">
                Option 2
              </label>
            </div>
          </RadioGroup>
        </div>
      </CardContent>
    </Card>
  )
}

export default BorrowerPipeline
