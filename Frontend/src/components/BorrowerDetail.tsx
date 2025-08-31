'use client'

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { useAppStore } from '@/store/useAppStore'
import { api } from '@/services/api'
import { AlertTriangle, Phone, Mail, MessageCircle } from 'lucide-react'

const BorrowerDetail: React.FC = () => {
  const { activeBorrower } = useAppStore()

  if (!activeBorrower) {
    return (
      <Card className="h-full">
        <CardContent className="flex items-center justify-center h-full">
          <p className="text-muted-foreground">Select a borrower to view details</p>
        </CardContent>
      </Card>
    )
  }

  const handleRequestDocuments = async () => {
    try {
      await api.requestDocuments(activeBorrower.id)
      console.log('Documents requested for:', activeBorrower.name)
    } catch (error) {
      console.error('Failed to request documents:', error)
    }
  }

  const handleSendToValuer = async () => {
    try {
      await api.sendToValuer(activeBorrower.id)
      console.log('Sent to valuer:', activeBorrower.name)
    } catch (error) {
      console.error('Failed to send to valuer:', error)
    }
  }

  const handleApprove = async () => {
    try {
      await api.approveLoan(activeBorrower.id)
      console.log('Loan approved for:', activeBorrower.name)
    } catch (error) {
      console.error('Failed to approve loan:', error)
    }
  }

  const handleEscalate = async () => {
    try {
      await api.escalateToCreditCommittee(activeBorrower.id)
      console.log('Escalated to credit committee:', activeBorrower.name)
    } catch (error) {
      console.error('Failed to escalate:', error)
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
      <CardHeader>
        <div className="flex justify-between items-start">
          <div className="space-y-2">
            <CardTitle className="text-xl font-bold">{activeBorrower.name}</CardTitle>
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <span className="flex items-center">
                <Mail className="h-4 w-4 mr-1" />
                {activeBorrower.email}
              </span>
              <span className="flex items-center">
                <Phone className="h-4 w-4 mr-1" />
                {activeBorrower.phone}
              </span>
            </div>
            <div className="text-lg font-semibold text-primary">
              ${activeBorrower.loan_amount.toLocaleString()}
            </div>
          </div>
          <Badge variant={getStatusVariant(activeBorrower.status)} className="text-sm">
            {activeBorrower.status}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* AI Explainability Section */}
        <Accordion type="single" collapsible>
          <AccordionItem value="ai-explainability">
            <AccordionTrigger className="text-left">
              AI Explainability
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-3">
                {activeBorrower.ai_flags.map((flag, index) => (
                  <div key={index} className="flex items-center space-x-2 p-3 bg-red-50 border border-red-200 rounded-md">
                    <AlertTriangle className="h-4 w-4 text-red-500 flex-shrink-0" />
                    <span className="text-sm text-red-700">{flag}</span>
                  </div>
                ))}
                {activeBorrower.ai_flags.length === 0 && (
                  <p className="text-sm text-muted-foreground">No AI flags detected</p>
                )}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" onClick={handleRequestDocuments} className="flex-1">
            Request Documents
          </Button>
          <Button variant="outline" onClick={handleSendToValuer} className="flex-1">
            Send to Valuer
          </Button>
          <Button onClick={handleApprove} className="flex-1">
            Approve
          </Button>
        </div>

        {/* Loan Summary */}
        <div className="space-y-4">
          <h3 className="font-semibold text-lg">Loan Summary</h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-muted-foreground">Employment</p>
              <p className="font-medium">{activeBorrower.employment}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Existing Loan</p>
              <p className="font-medium">${activeBorrower.existing_loan.toLocaleString()}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Credit Score</p>
              <p className="font-medium">{activeBorrower.credit_score}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Source of Funds</p>
              <p className="font-medium">{activeBorrower.source_of_funds}</p>
            </div>
          </div>
        </div>

        {/* Risk Signal */}
        {activeBorrower.risk_signal && activeBorrower.risk_signal !== "No risk signals detected" && (
          <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-md">
            <div className="flex items-start space-x-2">
              <AlertTriangle className="h-4 w-4 text-yellow-600 flex-shrink-0 mt-0.5" />
              <span className="text-sm text-yellow-800">{activeBorrower.risk_signal}</span>
            </div>
          </div>
        )}

        {/* Escalate Button */}
        <Button 
          className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3" 
          onClick={handleEscalate}
        >
          Escalate to Credit Committee
        </Button>
      </CardContent>
    </Card>
  )
}

export default BorrowerDetail
