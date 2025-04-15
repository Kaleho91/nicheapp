import { useState } from 'react'
import './App.css'

// Define the type for the idea object
interface IdeaType {
  name: string;
  tagline: string;
  summary: string;
}

function App() {
  const [preferences, setPreferences] = useState({
    mrrPotential: 'Medium',
    techComplexity: 'Low-code',
    tamSize: 'Medium',
    marketType: 'B2C',
    monetizationDifficulty: 'Medium',
    timeToMarket: 'Medium',
    sector: ''
  });
  
  // Add the proper type to the idea state
  const [idea, setIdea] = useState<IdeaType | null>(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    try {
      // This would normally call your API
      setIdea({
        name: "IdeaApp",
        tagline: "Generate startup ideas with AI",
        summary: "An app that helps entrepreneurs generate viable startup ideas"
      });
    } catch (error) {
      console.error('Error generating idea:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Startup Idea Generator</h1>
      
      <div className="mb-4">
        <h2 className="text-xl mb-2">Preferences</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-1">MRR Potential</label>
            <select 
              className="w-full p-2 border rounded"
              value={preferences.mrrPotential}
              onChange={(e) => setPreferences({...preferences, mrrPotential: e.target.value})}
            >
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>
          </div>
          
          <div>
            <label className="block mb-1">Tech Complexity</label>
            <select 
              className="w-full p-2 border rounded"
              value={preferences.techComplexity}
              onChange={(e) => setPreferences({...preferences, techComplexity: e.target.value})}
            >
              <option>No-code</option>
              <option>Low-code</option>
              <option>Full-stack</option>
            </select>
          </div>
        </div>
      </div>
      
      <button 
        className="bg-black text-white px-4 py-2 rounded"
        onClick={handleGenerate}
        disabled={loading}
      >
        {loading ? 'Generating...' : 'Generate Idea'}
      </button>
      
      {idea && (
        <div className="mt-6 p-4 border rounded">
          <h2 className="text-xl font-bold">{idea.name}</h2>
          <p className="italic mb-2">{idea.tagline}</p>
          <p>{idea.summary}</p>
        </div>
      )}
    </div>
  )
}

export default App 