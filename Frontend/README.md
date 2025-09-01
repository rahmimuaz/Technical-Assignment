# DemoApp - Frontend Developer Task

A modern React application for managing borrower pipelines and loan processing workflows, built with Next.js, TypeScript, Tailwind CSS, and ShadCN UI components.

## 🚀 Features Implemented

### ✅ Core Requirements Met

- **3-Column Responsive Layout**: Desktop grid layout with mobile-first responsive design
- **Header**: "DemoApp" title with search, help, and notification icons
- **Borrower Pipeline (Left Panel)**:
  - Tabs for "New", "In Review", "Approved" statuses
  - Borrower cards with name, loan type, amount, and status badges
  - Interactive borrower selection
  - F-SANATISED ACTIVE radio section
- **Borrower Details (Center Panel)**:
  - Borrower header with name, email, phone, loan amount, and status badge
  - AI Explainability accordion with warning flags
  - Action buttons (Request Documents, Send to Valuer, Approve)
  - Loan summary with employment, existing loan, credit score, source of funds
  - Risk signal warnings with icons
  - Prominent "Escalate to Credit Committee" button
- **Broker Overview (Right Panel)**:
  - Broker information with stats (deals, approval rate, pending amount)
  - Functional contact buttons (Call, Email, Chat)
  - Onboarding workflow with completion markers
  - AI Assistant toggle

### 🎨 Design & UX

- **Modern UI**: Clean, professional design using ShadCN UI components
- **Color-coded Status Badges**: Visual indicators for different loan statuses
- **Interactive Elements**: Hover effects, transitions, and proper feedback
- **Mobile Responsive**: Collapsible broker overview on mobile devices
- **Accessibility**: Proper ARIA labels and keyboard navigation

### 🧪 Testing

- **Cypress E2E Tests**: Comprehensive test suite covering all major functionality
- **Console Logging**: Action buttons log appropriate messages for testing
- **Test Coverage**: Borrower selection, tab switching, accordion interactions, button clicks

## 🛠️ Technical Stack

- **Framework**: Next.js 15.5.2 with React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3.4.0
- **UI Components**: ShadCN UI
- **State Management**: Zustand
- **Icons**: Lucide React
- **Testing**: Cypress
- **Forms**: React Hook Form + Zod (available)

## 📦 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd demo-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🧪 Running Tests

### Cypress Tests

1. **Open Cypress Test Runner**
   ```bash
   npm run cypress:open
   ```

2. **Run Tests Headlessly**
   ```bash
   npm run cypress:run
   ```

3. **Run Tests with Dev Server**
   ```bash
   npm run test:e2e
   ```

## 📱 Responsive Design

- **Desktop**: 3-column grid layout
- **Mobile**: Stacked layout with collapsible broker overview
- **Tablet**: Responsive grid that adapts to screen size

## 🎯 Key Features

### Borrower Pipeline
- Real-time tab switching between loan statuses
- Interactive borrower cards with hover effects
- Status badges with appropriate colors
- Radio group for F-SANATISED ACTIVE options

### Borrower Details
- Comprehensive borrower information display
- Expandable AI explainability section
- Action buttons with console logging
- Risk signal warnings with visual indicators
- Prominent escalation button

### Broker Overview
- Broker statistics with visual hierarchy
- Functional contact buttons with logging
- Workflow progress with completion markers
- AI assistant toggle functionality

## 🔧 Development

### Project Structure
```
src/
├── app/                 # Next.js app router
│   ├── dashboard/       # Main dashboard page
│   ├── globals.css      # Global styles
│   └── layout.tsx       # Root layout
├── components/          # React components
│   ├── ui/             # ShadCN UI components
│   ├── BorrowerPipeline.tsx
│   ├── BorrowerDetail.tsx
│   └── BrokerOverview.tsx
├── services/           # API services
├── store/              # Zustand state management
└── types/              # TypeScript type definitions
```

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run cypress:open` - Open Cypress test runner
- `npm run cypress:run` - Run Cypress tests headlessly
- `npm run test:e2e` - Run tests with dev server

## 🎨 Design System

The application uses a comprehensive design system with:
- **Color Palette**: CSS custom properties for consistent theming
- **Typography**: Consistent font sizes and weights
- **Spacing**: Tailwind's spacing scale
- **Components**: Reusable UI components from ShadCN
- **Icons**: Lucide React icon library

## 📊 Mock Data

The application includes realistic mock data for:
- Borrower pipeline with different statuses
- Detailed borrower information
- Broker statistics and workflow
- AI flags and risk signals

## 🚀 Performance

- **Optimized Build**: Next.js with Turbopack
- **Efficient Rendering**: React 19 with optimized components
- **Fast Loading**: Tailwind CSS with purged unused styles
- **Responsive Images**: Next.js image optimization

## 🔒 Security

- **Type Safety**: Full TypeScript implementation
- **Input Validation**: Zod schema validation (available)
- **XSS Protection**: React's built-in XSS protection
- **Secure Headers**: Next.js security headers

## 📈 Future Enhancements

- Authentication and role-based access control
- Real API integration
- Advanced filtering and search
- Data visualization and charts
- Real-time updates with WebSocket
- Offline support with service workers

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.
