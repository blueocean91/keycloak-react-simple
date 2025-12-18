# React (TypeScript) + Keycloak Starter

A simple, modern, and clean template for integrating Keycloak authentication into a React TypeScript application.

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later)
- A running [Keycloak](https://www.keycloak.org/) instance

## Keycloak Client Configuration

Before running the application, ensure your Keycloak client is configured correctly in the **Admin Console**.

### Client Settings
- **Client ID**: `my-react-app` (must match `src/App.tsx`)
- **Client authentication**: `Off` (for Public Clients)
- **Authorization**: `Off`
- **Authentication flow**: Standard flow enabled

### Access Settings (CRITICAL)
To avoid CORS and redirect issues, set the following in the **Access settings** section:

| Field | Value | Reason |
| :--- | :--- | :--- |
| **Root URL** | `http://localhost:5173` | Base dev URL |
| **Valid redirect URIs** | `http://localhost:5173/` | **Exact** match for browser redirection |
| **Web origins** | `http://localhost:5173` | **CORS** permission (no trailing slash) |
| **Admin URL** | `http://localhost:5173` | Management URL |

*Note: For local development, using `http://localhost:5173/*` for Redirect URIs is also recommended.*

## Getting Started

### 1. Configure Environment Variables
Create a `.env` file in the root directory and add your Keycloak settings:

```env
VITE_KEYCLOAK_URL=https://keycloak-your-instance.run.app/
VITE_KEYCLOAK_REALM=your-realm
VITE_KEYCLOAK_CLIENT_ID=your-client-id
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
The app will be available at `http://localhost:5173`.

## Features
- **Modern UI**: Clean, card-based design with Slate/Indigo palette.
- **PKCE Support**: Enhanced security using Proof Key for Code Exchange (S256).
- **Component Based**: Clean separation between state management and views.
- **Dark Mode Support**: Automatically adapts to system settings.
    tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

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
```
