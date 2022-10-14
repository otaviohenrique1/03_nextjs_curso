export async function HttpClient(fetchUrl, fetchOptions) {
  const options = {
    ...fetchOptions,
    headers: {
      'Content-Type': 'application/json',
      ...fetchOptions.headers,
    },
    body: fetchOptions.body ? JSON.stringify(fetchOptions.body) : null
  };

  return fetch(fetchUrl, options)
    .then(async (resposta) => {
      return {
        ok: resposta.ok,
        body: await resposta.json(),
      };
    });
};
