const API_URL = 'http://localhost:5000/api'; // Ändra till din server-URL

// Funktion för att hämta "Hello World"
export const fetchHelloWorld = async () => {
  try {
    const response = await fetch(`${API_URL}/hello`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching hello world:', error);
    throw error; // Låt felmeddelandet bubbla upp
  }
};
