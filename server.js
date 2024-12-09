// server.js
import express from 'express';
import cors from 'cors';
import { supabase } from './src/api/supabaseClient.js';

const app = express();
const PORT = process.env.PORT || 5000;

// Tillåt specifikt Netlify-domänen att komma åt din backend
app.use(cors({
  origin: ['https://nostradamage.netlify.app', 'http://localhost:5173', 'http://localhost:5000'],
  methods: ['GET', 'POST'], 
}));
app.use(express.json());

// Dummy-rutt för att hämta data från Supabase
app.get('/api/hello-world', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('DummyFights')
      .select('Test_fight_1')
      .eq('id', 1); // Hämtar bara data med ID 1

    if (error) throw error;

    res.json(data); // Skickar data tillbaka till frontend
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/TestPredictionDB', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('TestPredictionDB')
      .select('*')
      .eq('Event', 'UFC 309 Jones vs Miocic');

    if (error) throw error;

    res.json(data); // Skickar data tillbaka till frontend
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/UFC_309', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('TestPredictionDB')
      .select('*')
      .eq('Event', 'UFC 309 Jones vs Miocic');

    if (error) throw error;

    res.json(data); // Skickar data tillbaka till frontend
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/UFC_Fight_Night_Yan_vs_Figueiredo', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('TestPredictionDB')
      .select('*')
      .eq('Event', 'UFC Fight Night Yan vs Figueiredo');

    if (error) throw error;

    res.json(data); // Skickar data tillbaka till frontend
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});