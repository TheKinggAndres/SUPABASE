// src/supabase.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://enkppgqhsemrsmfgrqql.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVua3BwZ3Foc2VtcnNtZmdycXFsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDczMzgxMjYsImV4cCI6MjA2MjkxNDEyNn0.oLWxy2EQDz5XS3aM1R2lT8mKHKDKBnbx3uI9eHsy8PA';
export const supabase = createClient(supabaseUrl, supabaseKey);