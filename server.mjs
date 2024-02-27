// server.mjs
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Firebase configuration
const firebaseConfig = {
  apiKey: 'YOUR_API_KEY',
  authDomain: 'YOUR_AUTH_DOMAIN',
  projectId: 'YOUR_PROJECT_ID',
  storageBucket: 'YOUR_STORAGE_BUCKET',
  messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
  appId: 'YOUR_APP_ID',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Now you can use specific Firebase services
const auth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);

// Express app
import express from 'express';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, Firebase!');
});

// Example using Firebase Auth
app.get('/login', async (req, res) => {
  try {
    // Dummy code, replace with actual authentication logic
    const email = 'test@example.com';
    const password = 'password';
    const userCredential = await auth.signInWithEmailAndPassword(email, password);
    const user = userCredential.user;
    res.send(`Logged in as ${user.email}`);
  } catch (error) {
    console.error('Authentication error:', error);
    res.status(500).send('Authentication error');
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
