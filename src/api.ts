import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = import.meta.env.SUPABASE_URL;
const SERVICE_KEY = import.meta.env.API_KEY;
const supabase = createClient(SUPABASE_URL, SERVICE_KEY);

export async function getSkills() {
    let { data: skills, error } = await supabase
        .from('skills')
        .select('name');
    
  return skills;
}