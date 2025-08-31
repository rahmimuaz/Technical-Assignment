# DemoApp - Frontend Developer Task

A modern React application built with Next.js, TypeScript, and Tailwind CSS for managing borrower pipelines and loan processing workflows.

## 🚀 Features

- **3-Column Responsive Layout**: Desktop grid layout that stacks on mobile
- **Borrower Pipeline Management**: Tabs for New, In Review, and Approved borrowers
- **AI Explainability**: Expandable section showing AI flags and risk signals
- **Broker Overview**: Statistics and contact information
- **Onboarding Workflow**: Step-by-step process tracking
- **Interactive Actions**: Request documents, send to valuer, approve loans, escalate
- **Modern UI Components**: Built with ShadCN UI and Tailwind CSS

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS + ShadCN UI
- **State Management**: Zustand
- **Icons**: Lucide React
- **Form Handling**: React Hook Form + Zod (ready for future use)
- **UI Components**: Radix UI primitives

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd demo-app
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Project Structure

```
src/
├── app/                    # Next.js app router
│   ├── dashboard/         # Main dashboard page
│   ├── globals.css        # Global styles
│   └── page.tsx           # Home page (redirects to dashboard)
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── BorrowerPipeline.tsx
│   ├── BorrowerDetail.tsx
│   └── BrokerOverview.tsx
├── lib/                  # Utility functions
│   └── utils.ts
├── services/             # API services
│   └── api.ts
├── store/                # State management
│   └── useAppStore.ts
└── types/                # TypeScript type definitions
    └── index.ts
```

## 🎯 Key Components

### BorrowerPipeline (Left Panel)
- Tabs for different borrower statuses
- Borrower cards with name, loan type, amount, and status
- F-SANATISED ACTIVE radio group
- Header with app name and action icons

### BorrowerDetail (Center Panel)
- Borrower information header
- AI Explainability accordion with warning flags
- Action buttons (Request Documents, Send to Valuer, Approve)
- Loan summary with key metrics
- Risk signal warnings
- Escalate to Credit Committee button

### BrokerOverview (Right Panel)
- Broker statistics (deals, approval rate, pending amount)
- Contact buttons (Call, Email, Chat)
- Onboarding workflow steps
- AI Assistant toggle

## 🔧 API Integration

The application uses mock API endpoints that simulate real backend responses:

- `GET /api/borrowers/pipeline` - Get borrower pipeline data
- `GET /api/borrowers/{id}` - Get borrower details
- `POST /api/borrowers/{id}/request-documents` - Request documents
- `POST /api/borrowers/{id}/send-valuer` - Send to valuer
- `POST /api/borrowers/{id}/approve` - Approve loan
- `POST /api/borrowers/{id}/escalate` - Escalate to credit committee
- `GET /api/broker/{id}` - Get broker information
- `GET /api/onboarding/workflow` - Get onboarding workflow

## 📱 Responsive Design

- **Desktop**: 3-column grid layout
- **Mobile**: Single column stacked layout
- **Tablet**: Responsive breakpoints for optimal viewing

## 🎨 UI/UX Features

- **Consistent Spacing**: Using Tailwind's spacing scale
- **Status Indicators**: Color-coded badges for different statuses
- **Interactive Elements**: Hover states and transitions
- **Loading States**: Proper loading indicators
- **Error Handling**: Graceful error states

## 🧪 Testing

The application is ready for testing with:
- **E2E Testing**: Can be tested with Playwright or Cypress
- **Component Testing**: React Testing Library ready
- **API Testing**: Mock endpoints for testing

## 🚀 Deployment

The application can be deployed to:
- **Vercel**: Optimized for Next.js
- **Netlify**: Static site generation
- **AWS Amplify**: Full-stack deployment

## 📝 Future Enhancements

- [ ] Add authentication and role-based access
- [ ] Implement real API integration
- [ ] Add form validation with React Hook Form + Zod
- [ ] Add unit and integration tests
- [ ] Implement real-time updates
- [ ] Add dark mode support
- [ ] Add accessibility improvements

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.
