import { FormEvent, useState } from "react";
import { AccountForm } from "./AccountForm";
import { AddressForm } from "./AddressForm";
import { useMultistepForm } from "./useMultistepForm";
import { UserForm } from "./userForm";

type FormData = {
  firstName: string;
  secondName: string;
  lastName: string;
  age: string;
  address: string;
  street: string;
  city: string;
  state: string;
  PostalCode: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const INITIAL_DATA: FormData = {
  firstName: "",
  secondName: "",
  lastName: "",
  age: "",
  address: "",
  street: "",
  city: "",
  state: "",
  PostalCode: "",
  email: "",
  password: "",
  confirmPassword: "",
};

function App() {
  const [data, setData] = useState(INITIAL_DATA);

  function updateFields(fields: Partial<FormData>) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }

  const { step, steps, currentStepIndex, isFirstStep, isLastStep, next, back } =
    useMultistepForm([
      <UserForm {...data} updateFields={updateFields} />,
      <AddressForm {...data} updateFields={updateFields} />,
      <AccountForm {...data} updateFields={updateFields} />,
    ]);

  function onsubmit(e: FormEvent) {
    e.preventDefault();
    next();
  }

  return (
    <div
      style={{
        position: "relative",
        backgroundColor: "withe",
        border: "1px solid black",
        padding: "2rem",
        margin: "1rem",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
        borderRadius: ".5rem",
        overflow: "hidden",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <form onSubmit={onsubmit}>
        <div style={{ position: "absolute", top: ".5rem", right: ".5rem" }}>
          {currentStepIndex + 1} / {steps.length}
        </div>
        {step}
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "1rem",
            gap: ".5rem",
          }}
        >
          {!isFirstStep && (
            <button type="button" onClick={back}>
              Back
            </button>
          )}
          <button type="submit">{isLastStep ? "Finish" : "Next"}</button>
        </div>
      </form>
    </div>
  );
}

export default App;
