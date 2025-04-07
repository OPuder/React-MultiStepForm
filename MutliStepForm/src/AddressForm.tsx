import { FormWrapper } from "./FormWrapper";

type AddressDate = {
  address: string;
  city: string;
  state: string;
  PostalCode: string;
};
type AddressFormProps = AddressDate & {
  updateFields: (fields: Partial<AddressDate>) => void;
};
export function AddressForm({
  address,
  city,
  state,
  PostalCode,
  updateFields,
}: AddressFormProps) {
  return (
    <FormWrapper title="User Address">
      <label>Address</label>
      <input
        autoFocus
        required
        type="text"
        value={address}
        onChange={(e) => updateFields({ address: e.target.value })}
      />
      <label>City</label>
      <input
        autoFocus
        required
        type="text"
        value={city}
        onChange={(e) => updateFields({ city: e.target.value })}
      />
      <label>State</label>
      <input
        autoFocus
        required
        type="text"
        value={state}
        onChange={(e) => updateFields({ state: e.target.value })}
      />
      <label>Postal Code</label>
      <input
        autoFocus
        required
        type="text"
        value={PostalCode}
        onChange={(e) => updateFields({ PostalCode: e.target.value })}
      />
    </FormWrapper>
  );
}
