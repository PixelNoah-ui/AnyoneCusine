import supabase from "./supabase";

export async function getDishes() {
  const { data, error } = await supabase.from("dishes").select("*");
  if (error) {
    console.error(error.message);
  }
  return data;
}

export default getDishes;

export async function getDishById(id) {
  const { data, error } = await supabase
    .from("dishes")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error("Error fetching dish:", error.message);
    return null;
  }

  return data;
}

export async function singIn({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    console.error(error.message);
    throw new Error("Invalid email or password. please try again");
  }

  return data;
}

export async function signOut() {
  const { error } = await supabase.auth.signOut();
  if (error) {
    console.error(error.message);
    throw new Error("Something wrong");
  }
}

export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();
  if (error) {
    console.error(error.message);
    throw new Error("Something wrong");
  }

  return data;
}
