import { HttpClient } from "../../infra/HttpClient/HttpClient";
import { tokenService } from "./tokenService";

export const authService = {
  async login({ username, password }) {
    // usuario: values.usuario,
    // senha: values.senha,
    return HttpClient(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/login`, {
      method: "POST",
      body: { username, password }
    })
    .then(async (resposta) => {
      if (!resposta.ok) {
        throw new Error("Usuário ou a senha estão inválidos!")
      }
      const body = resposta.body;
      tokenService.save(body.data.access_token)
    });
  },
};
