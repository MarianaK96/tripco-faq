# Tripco Tech Assesment

## How to set up project

1. Install dependencies:

   ```bash
   pnpm install
   ```

2. Start the development server:

   ```bash
   pnpm dev
   ```

3. View Storybook components:
   ```bash
   pnpm storybook
   ```

## Features

- **All functionality required** - Adding FAQs, deleting queries, optional five second delay, sorting
- **Responsiveness** - Works on mobile, tablet and desktop
- **Storybook** for documentation of UI components

## Best Practices

- **Husky for commit linting** - Ensures code quality
- **esLint for catching errors** - Sets standard for code quality
- **Centralized state management** - Using Zustand for state
- **Follow conventional commit messages** - Standardized commit format for better tracking
- **Atomic Design** principles - Component hierarchy organized as:
  - **Atoms**: Basic building blocks (buttons, inputs)
  - **Molecules**: Simple groups of atoms (modal, delay checkbox)
  - **Organisms**: Complex UI components (form section, faq section)
  - **Templates**: Page-level layout structures
  - **Pages**: Specific instances of templates
- **Accessibility** - ARIA labels and semantic HTML

## Tech Stack

- **React 19** with TypeScript
- **Vite** for build tooling
- **Tailwind CSS** for styling
- **Zustand** for state management
- **Storybook** for component documentation
- **Husky** and **lint-staged** for git hooks
