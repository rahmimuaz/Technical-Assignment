'use client'

import React, { useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Toggle } from '@/components/ui/toggle'
import { useAppStore } from '@/store/useAppStore'
import { api } from '@/services/api'
import { Phone, Mail, MessageCircle, CheckCircle, Clock } from 'lucide-react'

const BrokerOverview: React.FC = () => {
  const {
    brokerInfo,
    onboardingWorkflow,
    aiAssistantEnabled,
    setBrokerInfo,
    setOnboardingWorkflow,
    toggleAiAssistant
  } = useAppStore()

  useEffect(() => {
    const loadBrokerData = async () => {
      try {
        const [broker, workflow] = await Promise.all([
          api.getBrokerInfo(),
          api.getOnboardingWorkflow()
        ])
        setBrokerInfo(broker)
        setOnboardingWorkflow(workflow)
      } catch (error) {
        console.error('Failed to load broker data:', error)
      }
    }

    loadBrokerData()
  }, [setBrokerInfo, setOnboardingWorkflow])

  const handleContact = (method: string) => {
    console.log(`Contacting broker via ${method}`)
    // In a real app, this would open email client, phone dialer, or chat interface
  }

  if (!brokerInfo || !onboardingWorkflow) {
    return (
      <Card className="h-full">
        <CardContent className="flex items-center justify-center h-full">
          <p className="text-muted-foreground">Loading broker information...</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-4">
      {/* Broker Info Card */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold">{brokerInfo.name}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">{brokerInfo.deals}</div>
              <div className="text-xs text-muted-foreground">Deals</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">{brokerInfo.approval_rate}</div>
              <div className="text-xs text-muted-foreground">Approval Rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">${brokerInfo.pending.toLocaleString()}</div>
              <div className="text-xs text-muted-foreground">Pending</div>
            </div>
          </div>

          <div className="flex space-x-2">
            <Button 
              variant="outline" 
              size="sm" 
              className="flex-1"
              onClick={() => handleContact('call')}
            >
              <Phone className="h-4 w-4 mr-1" />
              Call
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              className="flex-1"
              onClick={() => handleContact('email')}
            >
              <Mail className="h-4 w-4 mr-1" />
              Email
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              className="flex-1"
              onClick={() => handleContact('chat')}
            >
              <MessageCircle className="h-4 w-4 mr-1" />
              Chat
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Onboarding Workflow Card */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Onboarding Workflow</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {onboardingWorkflow.steps.map((step, index) => {
              const isCompleted = index < 3 // First 3 steps are completed
              const isCurrent = index === 3 // 4th step is current
              
              return (
                <div key={index} className="flex items-center space-x-3">
                  <div className={`flex-shrink-0 w-6 h-6 rounded-full text-xs font-semibold flex items-center justify-center ${
                    isCompleted 
                      ? 'bg-green-100 text-green-600' 
                      : isCurrent 
                        ? 'bg-blue-100 text-blue-600'
                        : 'bg-gray-100 text-gray-400'
                  }`}>
                    {isCompleted ? (
                      <CheckCircle className="h-4 w-4" />
                    ) : isCurrent ? (
                      <Clock className="h-4 w-4" />
                    ) : (
                      index + 1
                    )}
                  </div>
                  <span className={`text-sm ${
                    isCompleted 
                      ? 'text-green-700 font-medium' 
                      : isCurrent 
                        ? 'text-blue-700 font-medium'
                        : 'text-gray-500'
                  }`}>
                    {step}
                  </span>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>

      {/* AI Assistant Card */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold">AI Assistant</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <span className="text-sm text-foreground">E Ardsassist</span>
            <Toggle
              pressed={aiAssistantEnabled}
              onPressedChange={toggleAiAssistant}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default BrokerOverview
