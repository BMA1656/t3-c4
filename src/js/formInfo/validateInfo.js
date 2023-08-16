import cretateObject from "../utils/createObject.js";

export default function getFormInfo(event) {
  event.preventDefault(); // Prevent the form from submitting

  // Get the form data
  const formData = new FormData(event.target);

  // Create an object to store the form values
  const formValues = {};

  // Convert the FormData into a JSON object
  formData.forEach((value, key) => {
    if (!formValues[key]) {
      formValues[key] = value;
    } else {
      if (!Array.isArray(formValues[key])) {
        formValues[key] = [formValues[key]];
      }
      formValues[key].push(value);
    }
  });
  cretateObject(formValues)

}

