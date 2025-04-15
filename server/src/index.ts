import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import OpenAI from 'openai';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// OpenAI configuration
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

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

    // Example prompt for OpenAI
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
    const completion = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        { 
          role: "system", 
          content: "You are an expert startup idea generator that analyzes market trends and provides detailed business concepts."
        },
        { 
          role: "user", 
          content: prompt
        }
      ],
      max_tokens: 1000,
    });

    // Process the response and send it back
    const idea = completion.choices[0].message.content;
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

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 