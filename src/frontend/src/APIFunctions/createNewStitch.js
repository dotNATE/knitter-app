const createNewStitch = async ({ content }) => {
  const requestBody = {
    query: `
      mutation($content: String!) {
        createNewStitch(content: $content) {
          content
        }
      }
      `,
    variables: { content },
  };

  const fetchOptions = {
    method: "POST",
    body: JSON.stringify(requestBody),
    headers: {
      "Content-Type": "application/json",
      authorization: localStorage.getItem("token"),
    },
  };

  const stitch = await fetch("http://localhost:4200/graphql", fetchOptions);
  return await stitch.json();
};

export default createNewStitch;
