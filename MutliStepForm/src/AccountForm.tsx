import { JSX } from "react";
import { FormWrapper } from "./FormWrapper";

type AccountDate = {
  email: string;
  password: string;
  confirmPassword: string;
};
type AccountFormProps = AccountDate & {
  updateFields: (fields: Partial<AccountDate>) => void;
};
export function AccountForm({
  email,
  password,
  confirmPassword,
  updateFields,
}: AccountFormProps): JSX.Element {
  return (
    <FormWrapper title="User Account">
      <label>Email</label>
      <input
        autoFocus
        required
        type="email"
        value={email}
        onChange={(e) => updateFields({ email: e.target.value })}
      />
      <label>Password</label>
      <input
        autoFocus
        required
        type="password"
        value={password}
        onChange={(e) => updateFields({ password: e.target.value })}
      />
      <label>Confirm Password</label>
      <input
        autoFocus
        required
        type="password"
        value={confirmPassword}
        onChange={(e) => updateFields({ confirmPassword: e.target.value })}
      />
    </FormWrapper>
  );
}
