import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://irndfzxfhqdxkbrliucy.supabase.co";
const supabaseKey =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyNjc5NTgzNywiZXhwIjoxOTQyMzcxODM3fQ.RLhPGPPwtsjyV1qmO4Cfb_aXe4Y1m55v_0_5yhg28Ss";
export const supabase = createClient(supabaseUrl, supabaseKey);
