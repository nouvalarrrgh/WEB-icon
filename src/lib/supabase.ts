import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://jqltoeuuwkevxoeuskvs.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpxbHRvZXV1d2tldnhvZXVza3ZzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM4NTY4MDgsImV4cCI6MjA4OTQzMjgwOH0.QOo3mdi8Ub5kU_IOugMQs3yMO4XfoYXpWqo88gi42NA';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
