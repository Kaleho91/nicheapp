// Serverless function for Vercel deployment
const express = require('express');
const cors = require('cors');
const { Configuration, OpenAIApi } = require('openai');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// OpenAI configuration
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

// Generate ideas endpoint
app.post('/api/generate', async (req, res) => {
  try {
    const { 
      mrrPotential, 
      techComplexity, 
      tamSize, 
      marketType, 
      monetizationDifficulty,
      timeToMarket,
      sector 
    } = req.body;

    // Example prompt for OpenAI - you'll need to customize this
    const prompt = `Generate an app idea with:
      - MRR Potential: ${mrrPotential || 'Medium'}
      - Tech Complexity: ${techComplexity || 'Low-code'}
      - TAM Size: ${tamSize || 'Medium'}
      - Market: ${marketType || 'B2C'}
      - Monetization Difficulty: ${monetizationDifficulty || 'Medium'}
      - Time to Market: ${timeToMarket || 'Medium'}
      ${sector ? `- Sector: ${sector}` : ''}
      
      Include a name, tagline, problem, solution, revenue potential, MVP features, tech stack, market validation tactics, and similar startups.`;

    // Call OpenAI API
    const completion = await openai.createCompletion({
      model: "gpt-4o",
      prompt: prompt,
      max_tokens: 1000,
    });

    // Process the response and send it back
    const idea = completion.data.choices[0].text.trim();
    res.json({ idea });
  } catch (error) {
    console.error('Error generating idea:', error);
    res.status(500).json({ error: 'Failed to generate idea' });
  }
});

// History endpoint
app.get('/api/history', (req, res) => {
  // Placeholder - implement your history logic here
  res.json([]);
});

// Favorites endpoints
app.post('/api/favorites', (req, res) => {
  // Placeholder - implement your favorites saving logic here
  res.json({ success: true });
});

app.get('/api/favorites', (req, res) => {
  // Placeholder - implement your favorites retrieval logic here
  res.json([]);
});

app.delete('/api/favorites/:id', (req, res) => {
  // Placeholder - implement your favorites deletion logic here
  res.json({ success: true });
});

// Variations endpoint
app.post('/api/variations', async (req, res) => {
  // Placeholder - implement your variations logic here
  res.json([]);
});

// For direct use with Express
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

// For Vercel serverless functions
module.exports = app; 