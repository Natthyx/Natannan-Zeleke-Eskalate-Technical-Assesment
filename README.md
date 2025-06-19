# Natannan-Zeleke-Eskalate-Technical-Assesment
# 🍔 FoodWagen - Food Delivery Management System

A modern, responsive food delivery management application built with Next.js, TypeScript, and Tailwind CSS. This application allows users to browse, search, add, edit, and delete food items with a beautiful, user-friendly interface.

## 🚀 Features

### Core Functionality
- **Browse Food Items**: View a grid of featured meals with images, ratings, and restaurant information
- **Search Functionality**: Real-time search for food items by name
- **CRUD Operations**: Complete Create, Read, Update, Delete functionality for food items
- **Responsive Design**: Fully responsive design that works on desktop, tablet, and mobile devices

### User Interface
- **Modern Design**: Clean, modern interface matching the provided Figma design
- **Interactive Modals**: Beautiful modals for adding, editing, and deleting food items
- **Success Notifications**: User-friendly success messages and error handling
- **Loading States**: Smooth loading animations and skeleton screens
- **Empty States**: Meaningful messages when no data is available

### Technical Features
- **API Integration**: Full integration with MockAPI for data persistence
- **Form Validation**: Comprehensive client-side validation with error messages
- **TypeScript**: Full type safety throughout the application
- **Component Architecture**: Reusable, well-structured React components
- **Accessibility**: Semantic HTML and proper ARIA attributes

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **API**: MockAPI (REST endpoints)
- **State Management**: React Hooks (useState, useEffect)
- **Form Handling**: Native React forms with validation

## 📋 Prerequisites

Before running this project, make sure you have:

- Node.js 18+ installed
- npm or yarn package manager
- Modern web browser

## 🚀 Getting Started

### 1. Clone the Repository

\`\`\`bash
git clone <https://github.com/your-username/eskalate-food](https://github.com/Natthyx/Natannan-Zeleke-Eskalate-Technical-Assesment/>
cd eskalate-food
\`\`\`

### 2. Install Dependencies

\`\`\`bash
npm install
# or
yarn install
\`\`\`

### 3. Run the Development Server

\`\`\`bash
npm run dev
# or
yarn dev
\`\`\`

### 4. Open in Browser

Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## 🔗 API Endpoints

The application uses MockAPI with the following endpoints:

- **Base URL**: \`https://6852821e0594059b23cdd834.mockapi.io\`
- **Get All Foods**: \`GET /Food\`
- **Create Food**: \`POST /Food\`
- **Update Food**: \`PUT /Food/[id]\`
- **Delete Food**: \`DELETE /Food/[id]\`
- **Search Foods**: \`GET /Food?name=[searchParam]\`

### API Response Format

\`\`\`json
{
  "id": "1",
  "name": "Bow Lasagna",
  "avatar": "https://res.cloudinary.com/demujlqup/image/upload/v1750239103/lasagna_bowl_vbu108.png",
  "rating": "4",
  "open": true,
  "logo": "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/62.jpg",
  "createdAt": "2025-06-17T09:48:51.459Z"
}
\`\`\`

## 📁 Project Structure

\`\`\`
foodwagen/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/                 # shadcn/ui components
│   ├── add-food-modal.tsx
│   ├── delete-food-modal.tsx
│   ├── edit-food-modal.tsx
│   ├── featured-meals.tsx
│   ├── food-card.tsx
│   ├── footer.tsx
│   ├── header.tsx
│   ├── hero-section.tsx
│   └── success-modal.tsx
├── lib/
│   ├── food-service.ts     # API service functions
│   └── utils.ts           # Utility functions
├── hooks/
│   └── use-toast.ts       # Toast notification hook
├── public/
│   └── hero-food.png      # Hero section image
└── README.md
\`\`\`

## 🎨 Component Overview

### Core Components

- **Header**: Navigation bar with logo and "Add Meal" button
- **HeroSection**: Main banner with search functionality
- **FeaturedMeals**: Grid display of food items with loading states
- **FoodCard**: Individual food item card with actions
- **Footer**: Site footer with links and newsletter signup

### Modal Components

- **AddFoodModal**: Form for creating new food items
- **EditFoodModal**: Form for updating existing food items
- **DeleteFoodModal**: Confirmation dialog for deleting items
- **SuccessModal**: Success notification with auto-close

## 🔧 Key Features Implementation

### Form Validation

All forms include comprehensive validation:

- **Required Fields**: Food name, rating, image URL, restaurant name, logo URL
- **Data Types**: Rating must be a number between 0-5
- **Error Messages**: User-friendly error messages with specific field targeting
- **Real-time Validation**: Validation occurs on form submission

### Error Handling

- **API Errors**: Graceful handling of network and server errors
- **User Feedback**: Toast notifications for success and error states
- **Fallback States**: Local search fallback if API search fails
- **Loading States**: Visual feedback during API operations

### Responsive Design

- **Mobile First**: Designed for mobile devices first
- **Breakpoints**: Responsive grid layouts for different screen sizes
- **Touch Friendly**: Large touch targets for mobile interaction
- **Flexible Layouts**: Components adapt to different screen sizes

## 🎯 Usage Guide

### Adding a New Food Item

1. Click the "Add Meal" button in the header
2. Fill out the form with food details:
   - Food name
   - Rating (0-5)
   - Food image URL
   - Restaurant name
   - Restaurant logo URL
   - Restaurant status (Open/Closed)
3. Click "Add" to save the item
4. Success message will appear confirming the addition

### Searching for Food

1. Use the search bar in the hero section
2. Type the name of the food you're looking for
3. Results will appear automatically
4. Clear the search to view all items

### Editing Food Items

1. Click the three-dot menu on any food card
2. Select "Edit Food"
3. Modify the desired fields in the form
4. Click "Save" to update the item

### Deleting Food Items

1. Click the three-dot menu on any food card
2. Select "Delete Food"
3. Confirm the deletion in the modal
4. The item will be permanently removed

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with default settings
4. Your app will be live at \`https://natannan-zeleke-eskalate-technical.vercel.app/`

### Other Platforms

The application can be deployed to any platform that supports Next.js:

- Netlify
- Railway
- Heroku
- AWS Amplify

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (\`git checkout -b feature/amazing-feature\`)
3. Commit your changes (\`git commit -m 'Add amazing feature'\`)
4. Push to the branch (\`git push origin feature/amazing-feature\`)
5. Open a Pull Request

## 📝 Code Standards

- **TypeScript**: All components are fully typed
- **ESLint**: Code follows ESLint configuration
- **Prettier**: Code is formatted with Prettier
- **Component Naming**: PascalCase for components, kebab-case for files
- **Accessibility**: ARIA labels and semantic HTML

## 🐛 Known Issues

- Search functionality depends on API endpoint behavior
- Image loading errors are handled with placeholder images
- Form validation is client-side only

## 🔮 Future Enhancements

- [ ] User authentication and authorization
- [ ] Shopping cart functionality
- [ ] Order management system
- [ ] Real-time notifications
- [ ] Image upload functionality
- [ ] Advanced filtering and sorting
- [ ] Pagination for large datasets
- [ ] Offline support with service workers

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Author

Built as part of the A2SV Eskalate Technical Assessment.

## 🙏 Acknowledgments

- Design inspiration from the provided Figma mockups
- MockAPI for providing the backend service
- shadcn/ui for the beautiful component library
- Tailwind CSS for the utility-first styling approach

---

**Happy Coding! 🚀**
