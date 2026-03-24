# Staybook

A full-stack hotel booking platform built with Node.js, React, and React Native.

![CI](https://github.com/YOUR_USERNAME/staybook/actions/workflows/ci.yml/badge.svg)

## Tech stack

- **API** — Node.js, Express, TypeScript, Prisma, PostgreSQL
- **Web** — React, TypeScript, Vite, React Query, Zustand
- **Mobile** — React Native, Expo, TypeScript
- **Infra** — Docker, Render, GitHub Actions

## Live demo

API: https://YOUR_RENDER_URL.onrender.com/health

## Running locally

\`\`\`bash

# Install dependencies

pnpm install

# Start the API

pnpm --filter @staybook/api dev
\`\`\`

## Project structure

\`\`\`
apps/
api/ # Node.js REST API
web/ # React web app
mobile/ # React Native app
packages/
types/ # Shared TypeScript types
ui/ # Shared UI components
\`\`\`
