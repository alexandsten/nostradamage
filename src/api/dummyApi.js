// Importera din Supabase-klient
import { supabase } from './supabaseClient';

export const fetchHelloWorld = async () => {
  try {
    // Hämta endast kolumnen "Test_fight_1" där "id" är 1
    const { data, error } = await supabase
      .from('DummyFights')
      .select('Test_fight_1')
    //   .eq('id', 1); // Filtrerar på id = 1

    // Kontrollera om det fanns några fel vid hämtningen
    if (error) throw error;

    // Returnera den hämtade datan
    return data;
  } catch (error) {
    console.error('Error fetching data from DummyFights:', error);
    throw error;
  }
};
