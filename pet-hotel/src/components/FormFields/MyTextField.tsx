import { TextField } from '@mui/material';
import { FieldAttributes, useField } from 'formik';
import React from 'react';

interface MUITextField {
  label?: string | undefined;
  variant?: 'standard' | 'outlined' | 'filled' | undefined;
}

type MyTextFieldProps = MUITextField & FieldAttributes<{}>;

const MyTextField: React.FC<MyTextFieldProps> = ({ ...props }) => {
  const [field, meta] = useField<{}>(props);
  const errorText = meta.error && meta.touched ? meta.error : '';
  const variant = !!props.variant ? props.variant : 'outlined';

  return (
    <TextField
      placeholder={props.placeholder}
      label={props.label}
      variant={variant}
      {...field}
      helperText={errorText}
      error={!!errorText}
    />
  );
};

export default MyTextField;
