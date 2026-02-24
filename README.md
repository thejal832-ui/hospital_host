<!-- # React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
``` -->



# 🏥 Hospital Token Management System

A modern Hospital Token Management System built using **React + TypeScript + Vite**.  
This application helps hospitals manage patient registration and token generation in a simple and efficient way.

---

## 🚀 Technologies Used

- ⚛️ React
- 🟦 TypeScript
- ⚡ Vite
- 🎨 CSS

---

## 📌 Project Features

- Patient Registration Form
- Token Generation System
- Professional UI Design
- Navigation (Home, About, Contact, All Doctors)
- Responsive Layout
- Background Image Support
- Clean Component Structure

---

## 📁 Project Structure


---

## 📂 File Explanation

### 🔹 `main.tsx`
- Entry point of the application.
- Connects React app to `index.html`.

### 🔹 `App.tsx`
- Main root component.
- Handles routing and page navigation.

### 🔹 `Navbar.tsx`
- Contains navigation links (Home, About, Contact, All Doctors).

### 🔹 `Home.tsx`
- Displays homepage with hospital image and registration form.

### 🔹 `RegisterForm.tsx`
- Used to register patient details.
- Generates token number.

### 🔹 `TokenDisplay.tsx`
- Shows generated token number.

### 🔹 `About.tsx`
- Displays hospital information.

### 🔹 `Contact.tsx`
- Displays hospital contact details.

### 🔹 `AllDoctors.tsx`
- Shows list of doctors.

### 🔹 `App.css`
- Styling for main layout.

### 🔹 `index.css`
- Global styles.

### 🔹 `assets/`
- Contains images (hospital background, logos, etc.)

---

## ▶️ How to Run the Project

### 1️⃣ Install Node.js
Download and install Node.js from:
https://nodejs.org/

Check installation:


Open the link in your browser.

---

## 🛠 How to Use the System

1. Open the homepage.
2. Fill patient details in the registration form.
3. Click submit.
4. System generates a token number.
5. Token will be displayed on screen.

---

## 🎨 Customization Guide

### Change Background Image:
Go to:


---

### Add New Page:
1. Create new file inside `src/pages/`
2. Add route in `App.tsx`
3. Add link in `Navbar.tsx`

---

## 📦 Build for Production

---

## 👨‍💻 Developer

Developed by: **Your Name**  
Project: Hospital Token Management System  
Year: 2026

---

## 📄 License

This project is for educational purposes.