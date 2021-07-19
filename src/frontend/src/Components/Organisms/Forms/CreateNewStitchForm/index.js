import React from "react";
import createNewStitch from "./../../../../APIFunctions/createNewStitch";
import TextInputMolecule from "./../../../Molecules/FormElements/TextInputMolecule/index";
import Form from "./../../../Atoms/FormElements/Form/index";
import FormButtonPrimary from "./../../../Atoms/FormElements/Buttons/FormButtonPrimary/index";

const CreateNewStitchForm = () => {
  const submitHandler = async (e) => {
    e.preventDefault();

    const formValues = {
      content: e.target[0].value,
    };

    if (formValues.content.length === 0) {
      console.log("You need to add some content");
      return;
    }

    const newStitch = await createNewStitch(formValues);

    if (newStitch.errors) {
      newStitch.errors.forEach((error) => {
        console.log(error.message);
      });
      return;
    }

    e.target.reset();
  };

  return (
    <Form onSubmit={submitHandler}>
      <TextInputMolecule
        id="newStitch"
        label="Make a stitch:"
        placeholder="It's knit going to stitch itself!"
      />
      <FormButtonPrimary content="Stitch" />
    </Form>
  );
};

export default CreateNewStitchForm;
