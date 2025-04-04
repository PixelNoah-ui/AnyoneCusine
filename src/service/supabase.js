import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://vpmqxomhuwuevevwhncn.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZwbXF4b21odXd1ZXZldndobmNuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMyMjgxOTQsImV4cCI6MjA1ODgwNDE5NH0.pPoixCd1mV7SEnS9dBMYr0urYfNrI9bjNPpk2KH23JU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
