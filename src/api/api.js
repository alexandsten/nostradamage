// Detta är en mock-funktion som genererar ett "Hello World"-meddelande
export const fetchHelloWorld = async () => {
    try {
      // Generera ett meddelande istället för att hämta från databasen
      const data = { message: 'Hello World!' };
  
      return data; // Returnera det genererade meddelandet
    } catch (error) {
      console.error('Error fetching hello world:', error);
      throw error; // Kasta ett fel om något går fel
    }
  };
  