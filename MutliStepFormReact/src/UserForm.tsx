import { FormWrapper } from "./FormWrapper";

type UserDate = {
  firstName: string;
  secondName: string;
  lastName: string;
  age: string;
};
type UserFormProps = UserDate & {
  updateFields: (fields: Partial<UserDate>) => void;
};

export function UserForm({
  firstName,
  secondName,
  lastName,
  age,
  updateFields,
}: UserFormProps) {
  return (
    <FormWrapper title="User Details">
      <label>First Name</label>
      <input
        autoFocus
        required
        type="text"
        value={firstName}
        onChange={(e) => updateFields({ firstName: e.target.value })}
      />
      <label>Second Name</label>
      <input
        autoFocus
        required
        type="text"
        value={secondName}
        onChange={(e) => updateFields({ secondName: e.target.value })}
      />
      <label>Last Name</label>
      <input
        autoFocus
        required
        type="text"
        value={lastName}
        onChange={(e) => updateFields({ lastName: e.target.value })}
      />
      <label>Age</label>
      <input
        required
        min="1"
        type="number"
        value={age}
        onChange={(e) => updateFields({ age:(e.target.value.toString()) })}
      />
    </FormWrapper>
  );
}
