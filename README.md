# Ideas App

A full-stack TypeScript/React/Express application that generates app ideas using OpenAI GPT-4o API.

## Features

- MRR potential configuration (Low/Medium/High)
- Tech complexity settings (No-code/Low-code/Full-stack)
- Market size targeting
- B2B/B2C/Hybrid market selection
- Monetization difficulty settings
- Time-to-market estimation
- Optional sector/industry focus

## Deployment to Vercel

This app is configured for deployment on Vercel with GitHub integration.

### Prerequisites

1. A GitHub account
2. A Vercel account
3. OpenAI API key

### Deployment Steps

1. **Push your code to GitHub**:
   ```
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/your-username/ideas-app.git
   git push -u origin main
   ```

2. **Connect to Vercel**:
   - Go to [Vercel](https://vercel.com/) and sign in
   - Click "Add New..." and select "Project"
   - Select your GitHub repository
   - Vercel will automatically detect the project settings

3. **Configure Environment Variables**:
   - Add `OPENAI_API_KEY` with your OpenAI API key

4. **Deploy**:
   - Click "Deploy"
   - Vercel will build and deploy your application

5. **Access Your App**:
   - Once deployment is complete, click the provided URL to access your app

## Local Development

1. Install dependencies:
   ```
   npm install
   ```

2. Create a `.env` file in the root directory with:
   ```
   OPENAI_API_KEY=your_api_key_here
   ```

3. Start the development server:
   ```
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

## Project Structure

- `/client`: React frontend
- `/server`: Express backend
- `/api`: Serverless functions for Vercel deployment 