const signUp = async ({ fName, lName, email, password }) => {
  const signUpRequestBody = {
    query: `
          mutation(
            $fName: String!
            $lName: String!
            $email: String!
            $password: String!
          ) {
        createNewUser(
          fName: $fName,
          lName: $lName,
          email: $email,
          password: $password
        ) {
          _id
          email
        }
      }
      `,
    variables: { fName, lName, email, password },
  };

  const fetchOptions = {
    method: "POST",
    body: JSON.stringify(signUpRequestBody),
    headers: {
      "Content-Type": "application/json",
    },
  };

  const newUser = await fetch("http://localhost:4200/graphql", fetchOptions);
  return await newUser.json();
};

export default signUp;
