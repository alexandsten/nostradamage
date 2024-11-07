import { supabase } from './supabaseClient';

export const fetchHelloWorld = async () => {
  try {
    // En enkel fråga som returnerar allt från DummyFights
    const { data, error } = await supabase
      .from('DummyFights')
      .select('*');

    if (error) {
      console.error('Supabase connection test error:', error);
      return false;
    }

    console.log('Supabase connection test data:', data);
    return data;
  } catch (error) {
    console.error('Unexpected error testing Supabase connection:', error);
    return false;
  }
};