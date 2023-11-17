This is a NextJs 13 App with Pages Router

## Getting Started

Setup with Node 16 and Nexts 13

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Set the package.json:

```
"scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "react": "^18",
    "react-dom": "^18",
    "next": "13.5.6"
  },
  "devDependencies": {
    "typescript": "^5",
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "autoprefixer": "^10",
    "postcss": "^8",
    "tailwindcss": "^3",
    "eslint": "^8",
    "eslint-config-next": "13.5.6"
  }
```

Set the Next Config File for both local and production deployment

```
const nextConfig = {
  reactStrictMode: true,
  output:"standalone",
  distDir: "out"
}
```

Second, test the build locally to confirm if the build file is out

- The size get reduced with the output: standalone in the next.config.js file

```bash
    npm run build
```

## Deployment

Tested deployment on Azure Static Web App

- Set the build output on Azure Portal to absolute path and out directory
- Using Github Actions CI/CD
