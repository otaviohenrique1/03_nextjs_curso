import { HttpClient } from "../../infra/HttpClient/HttpClient";

export const authService = {
  async login({ username, password }) {
    // usuario: values.usuario,
    // senha: values.senha,
    return HttpClient(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/login`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password
      })
    })
    .then(async (resposta) => {
      if (!resposta.ok) {
        throw new Error("Usuário ou a senha estão inválidos!")
      }
      const body = await resposta.json();
      console.log(body);
    });
  },
};
