// server.js
import express from 'express';
import cors from 'cors';
import { supabase } from './src/api/supabaseClient.js';

const app = express();
const PORT = 5000;

app.use(cors());
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

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
