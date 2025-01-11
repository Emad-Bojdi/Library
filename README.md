# React + Vite Book App

This project is a simple yet effective web application built using React and Vite, designed to showcase a collection of books. The application allows users to view a list of books, search for specific titles, and maintain a list of favorite books.

## Table of Contents

- [Project Structure](#project-structure)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Conclusion](#conclusion)

## Project Structure

The project is organized into several key files and directories:

- **Configuration Files**:
  - `.eslintrc.cjs`: Configuration for ESLint, ensuring code quality and consistency.
  - `vite.config.js`: Configuration file for Vite, which is a build tool that provides a fast development environment.

- **Source Files**:
  - `src/main.jsx`: The entry point of the application where React is initialized.
  - `src/App.jsx`: The main application component that renders the book list and other components.
  - `src/components/`: Contains reusable components such as `BookCard`, `Books`, and `Search`.
  - `src/constants/mockData.js`: Contains mock data for the books, including details like title, author, language, and image.

- **Styles**:
  - `src/global.css`: Global styles applied to the application.
  - `src/components/*.css`: Component-specific styles for better organization and modularity.

- **Public Assets**:
  - `public/vite.svg`: An SVG logo used in the application.

## Features

1. **Book Display**: The application displays a list of books with details such as title, author, language, and number of pages. Each book is represented by a `BookCard` component.

2. **Search Functionality**: Users can search for books by title using a search bar. The search is case-insensitive and updates the displayed list in real-time.

3. **Favorites Management**: Users can like or unlike books, which updates a favorites list. The favorites are displayed in a separate section, allowing users to easily access their preferred books.

4. **Responsive Design**: The application is designed to be responsive, ensuring a good user experience across different devices.

5. **ESLint Integration**: The project includes ESLint for linting JavaScript and JSX code, helping maintain code quality and consistency.

## Technologies Used

- **React**: A JavaScript library for building user interfaces, allowing for the creation of reusable UI components.
- **Vite**: A modern build tool that provides a fast development environment with hot module replacement (HMR).
- **React Icons**: A library for including icons in React applications, enhancing the UI with visual elements.

## Getting Started

To run the project locally, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd <project-directory>
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Start the Development Server**:
   ```bash
   npm run dev
   ```

4. **Open in Browser**: Navigate to `http://localhost:3000` (or the specified port) to view the application.

## Conclusion

This React + Vite Book App serves as a foundational project for understanding how to build a modern web application with React. It demonstrates essential concepts such as component-based architecture, state management, and user interaction, making it a great starting point for further exploration and development in React.

