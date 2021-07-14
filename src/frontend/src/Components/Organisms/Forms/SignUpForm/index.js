import React, { useState } from "react";
import Form from "../../../Atoms/FormElements/Form";
import EmailInputMolecule from "../../../Molecules/FormElements/EmailInputMolecule";
import PasswordInputMolecule from "./../../../Molecules/FormElements/PasswordInputMolecule";
import "./SignUpForm.scss";
import FormButtonCancel from "../../../Atoms/FormElements/Buttons/FormButtonCancel";
import FormButtonPrimary from "./../../../Atoms/FormElements/Buttons/FormButtonPrimary/index";
import Header2 from "../../../Atoms/Headers/Header2";
import TextInputMolecule from "./../../../Molecules/FormElements/TextInputMolecule";

const SignUpForm = ({ cancelHandler }) => {
  const [errorMessage, setErrorMessage] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const fName = e.target[0].value;
    const lName = e.target[1].value;
    const email = e.target[2].value;
    const password = e.target[3].value;
    const passwordConf = e.target[4].value;

    if (password !== passwordConf) {
      setErrorMessage("password mismatch");
      console.log(errorMessage);
      return;
    }

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

    fetch("http://localhost:4200/graphql", {
      method: "POST",
      body: JSON.stringify(signUpRequestBody),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.status !== 200 && res.status !== 201) {
          throw new Error("Failed");
        }
        return res.json();
      })
      .then((resData) => {
        if (resData.errors) {
          console.log("Already a user with that email");
        }
        fetch("http://localhost:4200/graphql", {
          method: "POST",
          body: JSON.stringify(logInRequestBody),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((logInData) => {
            return logInData.json();
          })
          .then((logInData) => {
            console.log(logInData);
          });
      });
  };

  return (
    <Form className="signUpForm" submitHandler={submitHandler}>
      <Header2 content="Sign Up" />
      <TextInputMolecule
        id="fName"
        label="First Name: "
        placeholder="Your first name"
      />
      <TextInputMolecule
        id="lName"
        label="Last Name: "
        placeholder="Your last name"
      />
      <EmailInputMolecule
        id="email"
        label="Email: "
        placeholder="Enter your email address"
      />
      <PasswordInputMolecule
        id="password"
        label="Password: "
        placeholder="Enter your password"
      />
      <PasswordInputMolecule
        id="passwordConf"
        label="Confirm Password: "
        placeholder="Confirm your password"
      />
      <div className="formActionButtons">
        <FormButtonPrimary />
        <FormButtonCancel handleClick={cancelHandler} />
      </div>
    </Form>
  );
};

export default SignUpForm;
