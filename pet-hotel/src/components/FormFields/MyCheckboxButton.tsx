import { Checkbox, FormControlLabel } from '@mui/material';
import { FieldAttributes, useField } from 'formik';
import React from 'react';

type MyCheckboxProps = {
  label?: string | undefined;
  color?: 'default' | 'success' | 'primary' | 'secondary' | undefined;
} & FieldAttributes<{}>;

const MyCheckboxButton: React.FC<MyCheckboxProps> = ({ ...props }) => {
  const [field] = useField<{}>(props);
  const color = !!props.color ? props.color : 'primary';
  return (
    <>
      {!!props.label && (
        <FormControlLabel
          {...field}
          control={<Checkbox color={color} />}
          label={props.label}
        />
      )}

      {!props.label && <Checkbox {...field} color={color} />}
    </>
  );
};

export default MyCheckboxButton;
