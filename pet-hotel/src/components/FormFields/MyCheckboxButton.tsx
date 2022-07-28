import { Checkbox, FormControlLabel } from '@mui/material';
import { FieldAttributes, useField } from 'formik';
import React from 'react';

type MyCheckboxProps = { label?: string | undefined } & FieldAttributes<{}>;

const MyCheckboxButton: React.FC<MyCheckboxProps> = ({ ...props }) => {
  const [field] = useField<{}>(props);
  return (
    <>
      {!!props.label && (
        <FormControlLabel
          {...field}
          control={<Checkbox />}
          label={props.label}
        />
      )}
      {!props.label && <Checkbox {...field} />}
    </>
  );
};

export default MyCheckboxButton;
