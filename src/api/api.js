// api.js

// Funktion för att hämta data från backend-servern
export const fetchHelloWorld = async () => {
  try {
    const response = await fetch('http://localhost:5000/api/hello-world');
    if (!response.ok) throw new Error('Network response was not ok');
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching hello world:', error);
    throw error;
  }
};

