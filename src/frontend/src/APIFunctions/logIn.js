const logIn = async ({ email, password }) => {
  const logInRequestBody = {
    query: `
    mutation($email: String!, $password: String!) {
      login(email: $email, password: $password) {
        userId
        token
      }
    }      
    `,
    variables: { email, password },
  };

  const fetchOptions = {
    method: "POST",
    body: JSON.stringify(logInRequestBody),
    headers: {
      "Content-Type": "application/json",
    },
  };

  const auth = await fetch("http://localhost:4200/graphql", fetchOptions);
  return await auth.json();
};

export default logIn;
