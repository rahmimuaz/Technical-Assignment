// cypress/e2e/dashboard.cy.ts

describe('Dashboard', () => {
  beforeEach(() => {
    cy.visit('/dashboard')
  })

  it('should display the main dashboard layout', () => {
    // Check header
    cy.get('h1').should('contain', 'DemoApp')
    cy.get('[data-testid="search-icon"]').should('be.visible')
    cy.get('[data-testid="help-icon"]').should('be.visible')
    cy.get('[data-testid="bell-icon"]').should('be.visible')

    // Check tabs
    cy.get('[role="tab"]').should('have.length', 3)
    cy.get('[role="tab"]').first().should('contain', 'New')
    cy.get('[role="tab"]').eq(1).should('contain', 'In Review')
    cy.get('[role="tab"]').last().should('contain', 'Approved')
  })

  it('should display borrower pipeline with tabs', () => {
    // Check that tabs are present
    cy.get('[role="tablist"]').should('be.visible')
    cy.get('[role="tab"]').should('have.length', 3)
    
    // Check tab content
    cy.get('[role="tabpanel"]').should('be.visible')
  })

  it('should allow switching between tabs', () => {
    // Click on "In Review" tab
    cy.get('[role="tab"]').eq(1).click()
    cy.get('[role="tab"]').eq(1).should('have.attr', 'data-state', 'active')
    
    // Click on "Approved" tab
    cy.get('[role="tab"]').last().click()
    cy.get('[role="tab"]').last().should('have.attr', 'data-state', 'active')
  })

  it('should display borrower cards in pipeline', () => {
    // Check that borrower cards are displayed
    cy.get('[role="tabpanel"]').within(() => {
      cy.get('.border').should('exist')
    })
  })

  it('should update borrower details when clicking on a borrower', () => {
    // Click on first borrower
    cy.get('[role="tabpanel"]').within(() => {
      cy.get('.border').first().click()
    })

    // Check that borrower details are displayed
    cy.get('h3').should('contain', 'Sarah Dunn')
    cy.get('h3').should('contain', 'Lisa Carter')
  })

  it('should display AI explainability section', () => {
    // Click on a borrower first
    cy.get('[role="tabpanel"]').within(() => {
      cy.get('.border').first().click()
    })

    // Check AI explainability accordion
    cy.get('[data-state="closed"]').first().click()
    cy.get('[data-state="open"]').should('exist')
  })

  it('should show action buttons for borrower', () => {
    // Click on a borrower first
    cy.get('[role="tabpanel"]').within(() => {
      cy.get('.border').first().click()
    })

    // Check action buttons
    cy.get('button').should('contain', 'Request Documents')
    cy.get('button').should('contain', 'Send to Valuer')
    cy.get('button').should('contain', 'Approve')
    cy.get('button').should('contain', 'Escalate to Credit Committee')
  })

  it('should log console messages when clicking action buttons', () => {
    // Click on a borrower first
    cy.get('[role="tabpanel"]').within(() => {
      cy.get('.border').first().click()
    })

    // Spy on console.log
    cy.window().then((win) => {
      cy.spy(win.console, 'log').as('consoleLog')
    })

    // Click action buttons and check console logs
    cy.get('button').contains('Request Documents').click()
    cy.get('@consoleLog').should('have.been.calledWith', 'Documents requested for:', 'Sarah Dunn')

    cy.get('button').contains('Send to Valuer').click()
    cy.get('@consoleLog').should('have.been.calledWith', 'Sent to valuer:', 'Sarah Dunn')

    cy.get('button').contains('Approve').click()
    cy.get('@consoleLog').should('have.been.calledWith', 'Loan approved for:', 'Sarah Dunn')
  })

  it('should display broker information', () => {
    // Check broker name
    cy.get('h3').should('contain', 'Robert Turner')
    
    // Check broker stats
    cy.get('div').should('contain', '16')
    cy.get('div').should('contain', '75%')
    cy.get('div').should('contain', '$7,660')
  })

  it('should display contact buttons for broker', () => {
    cy.get('button').should('contain', 'Call')
    cy.get('button').should('contain', 'Email')
    cy.get('button').should('contain', 'Chat')
  })

  it('should log contact actions when clicking broker contact buttons', () => {
    // Spy on console.log
    cy.window().then((win) => {
      cy.spy(win.console, 'log').as('consoleLog')
    })

    // Click contact buttons
    cy.get('button').contains('Call').click()
    cy.get('@consoleLog').should('have.been.calledWith', 'Contacting broker via call')

    cy.get('button').contains('Email').click()
    cy.get('@consoleLog').should('have.been.calledWith', 'Contacting broker via email')

    cy.get('button').contains('Chat').click()
    cy.get('@consoleLog').should('have.been.calledWith', 'Contacting broker via chat')
  })

  it('should display onboarding workflow', () => {
    cy.get('h3').should('contain', 'Onboarding Workflow')
    
    // Check workflow steps
    cy.get('div').should('contain', 'Deal Intake')
    cy.get('div').should('contain', 'IDV & Credit Check')
    cy.get('div').should('contain', 'Document Upload')
  })

  it('should display enhanced AI assistant toggle', () => {
    cy.get('h3').should('contain', 'AI Assistant')
    
    // Check for AI assistant elements
    cy.get('span').should('contain', 'E Ardsassist')
    cy.get('button[role="switch"]').should('exist')
    
    // Check for enhanced UI elements
    cy.get('.animate-pulse').should('exist') // Sparkles icon
    cy.get('svg').should('exist') // Bot icon
  })

  it('should toggle AI assistant with enhanced feedback', () => {
    // Spy on console.log
    cy.window().then((win) => {
      cy.spy(win.console, 'log').as('consoleLog')
    })

    // Check initial state (should be disabled by default)
    cy.get('button[role="switch"]').should('not.have.attr', 'data-state', 'on')
    
    // Toggle AI assistant on
    cy.get('button[role="switch"]').click()
    cy.get('@consoleLog').should('have.been.calledWith', 'AI Assistant enabled')
    
    // Check for enhanced UI feedback
    cy.get('.ring-2').should('exist') // Card ring effect
    cy.get('.bg-blue-50').should('exist') // Card background
    cy.get('span').should('contain', 'Active') // Active badge
    
    // Check for status information
    cy.get('span').should('contain', 'Ready to assist')
    cy.get('span').should('contain', '~2 seconds')
    cy.get('span').should('contain', 'Smart Analysis')
    
    // Check for quick action buttons
    cy.get('button').should('contain', 'Settings')
    cy.get('button').should('contain', 'Help')
    
    // Toggle AI assistant off
    cy.get('button[role="switch"]').click()
    cy.get('@consoleLog').should('have.been.calledWith', 'AI Assistant disabled')
    
    // Check that enhanced UI is hidden
    cy.get('.ring-2').should('not.exist')
    cy.get('span').should('not.contain', 'Active')
  })

  it('should log AI assistant actions', () => {
    // Spy on console.log
    cy.window().then((win) => {
      cy.spy(win.console, 'log').as('consoleLog')
    })

    // Toggle AI assistant on
    cy.get('button[role="switch"]').click()
    
    // Click AI assistant action buttons
    cy.get('button').contains('Settings').click()
    cy.get('@consoleLog').should('have.been.calledWith', 'AI Settings opened')
    
    cy.get('button').contains('Help').click()
    cy.get('@consoleLog').should('have.been.calledWith', 'AI Help opened')
  })

  it('should be responsive on mobile', () => {
    // Set mobile viewport
    cy.viewport(375, 667)
    
    // Check that layout changes to mobile
    cy.get('.lg\\:grid').should('not.be.visible')
    cy.get('.lg\\:hidden').should('be.visible')
    
    // Check that broker overview is collapsible on mobile
    cy.get('[data-state="closed"]').should('exist')
  })

  it('should display F-SANATISED ACTIVE radio section', () => {
    cy.get('h3').should('contain', 'F-SANATISED ACTIVE')
    cy.get('input[type="radio"]').should('have.length', 2)
    cy.get('label').should('contain', 'Option 1')
    cy.get('label').should('contain', 'Option 2')
  })
})