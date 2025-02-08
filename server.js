// server.js
import express from 'express';
import cors from 'cors';
import { supabase } from './src/api/supabaseClient.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: ['https://nostradamage.netlify.app', 'http://localhost:5173', 'http://localhost:5000'],
  methods: ['GET', 'POST'], 
}));
app.use(express.json());

app.get('/api/hello-world', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('DummyFights')
      .select('Test_fight_1')
      .eq('id', 1);

    if (error) throw error;

    res.json(data);
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

    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/UFC_312_Du_Plessis_vs_Strickland_2_', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('TestPredictionDB')
      .select('*')
      .eq('Event', 'UFC 312 Du Plessis vs Strickland 2 ');

    if (error) throw error;

    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/UFC_Fight_Night_Covington_vs_Buckley', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('TestPredictionDB')
      .select('*')
      .eq('Event', 'UFC Fight Night Covington vs Buckley');

    if (error) throw error;

    res.json(data);
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

    res.json(data);
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

    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/UFC_311_Makhachev_vs_Moicano', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('TestPredictionDB')
      .select('*')
      .eq('Event', 'UFC 311 Makhachev vs Moicano');

    if (error) throw error;

    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

