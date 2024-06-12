import axios from "axios";

const URL = "https://6668e8ae2e964a6dfed33d70.mockapi.io/Usuarios";

export async function getUsuarios() {
  try {
    const { data: Usuarios } = await axios.get(URL);
    return Usuarios;
  } catch (error) {
    console.error("Error productos GET:", error);
    return [];
  }
}