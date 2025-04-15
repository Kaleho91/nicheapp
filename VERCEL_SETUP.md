# Vercel Deployment Guide

## Setting Up in Vercel

1. Go to https://vercel.com/new
2. Import your GitHub repository (nicheapp)
3. Configure the project:
   - Framework Preset: should auto-detect
   - Root Directory: leave empty (use the default)
   - Build and Output Settings: leave at default
4. Add your environment variables (see below)
5. Click "Deploy"

## Adding Environment Variables to Vercel

When deploying to Vercel, you'll need to add your OpenAI API key as an environment variable:

1. Sign in to your Vercel account
2. Select your project (nicheapp)
3. Click on "Settings" tab
4. Select "Environment Variables" from the left sidebar
5. Add a new variable:
   - Name: `OPENAI_API_KEY`
   - Value: [your OpenAI API key]
6. Select all environments (Production, Preview, and Development)
7. Click "Save"

Your OpenAI API key is stored locally in your .env file. For security reasons, never commit API keys to your repository.

Once deployed, Vercel will provide you with a URL to access your app. 