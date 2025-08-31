// cypress/e2e/dashboard.cy.ts

describe('Dashboard UI Functionality', () => {

    // Before each test, visit the dashboard page
    beforeEach(() => {
      // Make sure your development server is running on localhost:3000
      cy.visit('http://localhost:3000'); 
    });
  
    it('should update the center panel when a borrower is selected', () => {
      // 1. Find and click the first borrower card in the left panel.
      // Use a reliable selector like a data attribute (data-testid, data-cy, etc.)
      cy.get('[data-testid="borrower-card"]').first().click();
  
      // 2. Verify the center panel updates with the correct borrower's name.
      // Replace 'John Doe' with the name from your mock data.
      cy.get('[data-testid="borrower-name"]').should('contain.text', 'John Doe');
    });
  
//     it('should expand and collapse the AI Explainability section', () => {
//       // 1. Find and click the accordion header to expand it.
//       cy.get('[data-testid="ai-accordion-header"]').click();
  
//       // 2. Assert that the content is visible.
//       cy.get('[data-testid="ai-accordion-content"]').should('be.visible');
  
//       // 3. Click the header again to collapse it.
//       cy.get('[data-testid="ai-accordion-header"]').click();
  
//       // 4. Assert that the content is no longer visible.
//       cy.get('[data-testid="ai-accordion-content"]').should('not.be.visible');
//     });
  
//     it('should log a message when the "Escalate" button is clicked', () => {
//       // Create a spy on the window's console.log function.
//       cy.window().then((win) => {
//         cy.spy(win.console, 'log').as('consoleLog');
//       });
      
//       // 1. Find the 'Escalate' button and click it.
//       cy.get('button').contains('Escalate to Credit Committee').click();
      
//       // 2. Assert that the console.log function was called with the correct message.
//       cy.get('@consoleLog').should('have.been.calledWith', 'Escalate button was clicked!');
//     });
 });