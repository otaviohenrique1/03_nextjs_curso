import { useState } from "react";
import { authService } from "../src/services/auth/authService";

export default function HomeScreen() {
  const [values, setValues] = useState({
    usuario: 'omariosouto',
    senha: 'safepassword'
  })

  function handleChange(event) {
    const fieldValue = event.target.value;
    const fieldName = event.target.name;
    setValues((currentValues) => {
      return {
        ...currentValues,
        [fieldName]: fieldValue,
      };
    });
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={(event) => {
        // onSubmit => Controller (Pega os dados do usuario e passa para um serviço)
        // authService => Serviço
        event.preventDefault();
        authService.login({
          username: values.usuario,
          password: values.senha,
        })
        .then(() => {
          router.push('/auth-page-ssr');
        })
        .catch(() => {
          alert('Usuário ou a senha estão inválidos')
        });
      }}>
        <input
          placeholder="Usuário" name="usuario"
          // defaultValue="omariosouto"
          value={values.usuario}
          onChange={handleChange}
        />
        <input
          placeholder="Senha" name="senha" type="password"
          // defaultValue="safepassword"
          value={values.senha}
          onChange={handleChange}
        />
        <div>
          <button type="submit">
            Entrar
          </button>
        </div>
      </form>
    </div>
  );
}
