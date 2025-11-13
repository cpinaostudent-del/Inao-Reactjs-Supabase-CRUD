import { createClient } from '@supabase/supabase-js'


const supabaseUrl = 'https://jwpranbygymyaopwflqe.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp3cHJhbmJ5Z3lteWFvcHdmbHFlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjExNTY4MDAsImV4cCI6MjA3NjczMjgwMH0.8i1QnJyKDPqR_FBDF82888OSAxX-MnPcfL0TapRR5Qw'


export const supabase = createClient(supabaseUrl, supabaseKey)















