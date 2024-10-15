// server.js
import express from 'express';
import cors from 'cors';

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// Dummy-rutt för att returnera "Hello World"
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello World' });
});

// Starta servern
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
