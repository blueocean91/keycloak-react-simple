# React (TypeScript) + Keycloak Starter

A simple, modern, and clean template for integrating Keycloak authentication into a React TypeScript application.
Keyclaok を連携させてユーザー認証を実現するためのサンプル・アプリケーション

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

