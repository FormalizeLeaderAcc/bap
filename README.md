# Bursary Application Portal (BAP)

A production-ready React application built with Vite, featuring routing, animations, and SCSS styling.

## Features

- React with functional components
- Vite for fast development and building
- React Router DOM v6+ for client-side routing
- Framer Motion for smooth animations
- SCSS for advanced styling

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project directory.
2. Install dependencies:

   ```bash
   npm install
   ```

### Development

To start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

### Building for Production

To build the application for production:

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

## Project Structure

- `src/App.tsx` - Main application component with routing and animations
- `src/main.tsx` - Application entry point
- `src/index.scss` - Global styles
- `src/App.scss` - Component-specific styles
- `package.json` - Dependencies and scripts
- `vite.config.ts` - Vite configuration
- `tsconfig.json` - TypeScript configuration

## Technologies Used

- **React**: UI library
- **Vite**: Build tool
- **React Router DOM**: Routing
- **Framer Motion**: Animations
- **SCSS**: Styling
- **TypeScript**: Type safety

## Troubleshooting

- If you encounter build errors, ensure all dependencies are installed with `npm install`.
- For SCSS issues, check that the `sass` package is installed.
- If animations don't work, verify `framer-motion` is properly imported.

## License

This project is licensed under the MIT License.