import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://vjtqklqxzcqfrfenoziw.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZqdHFrbHF4emNxZnJmZW5veml3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjkwMDMzMDMsImV4cCI6MjA0NDU3OTMwM30.aKOJes4BTZ0b_LUjHVqPe-53cZ3xjsWhVrZNeWOa8OE';  

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
