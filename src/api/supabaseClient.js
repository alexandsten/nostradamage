import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config();

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY;

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  console.error('Supabase URL or anon key is missing!');
} else {
  console.log('Supabase URL and anon key loaded successfully');
}
 
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
